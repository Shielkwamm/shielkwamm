import { useEffect, useState } from 'react'
import { processText, getKeyFrameLength } from '../lib/processText';

type AnimatedTextProps = {
  text: string
}

export const AnimatedText = ({ text }: AnimatedTextProps) => {
  const animatedText = processText(text);
  return (
    <AnimatedTextText animatedText={animatedText} />
  )
}

type AnimatedTextTextProps = {
  animatedText: AnimatedText;
}

type AnimatedText = {
  keyFrames: Array<KeyFrame>;
}

type KeyFrame = {
  speed:number,
  wait:number
}

const AnimatedTextText = ({ animatedText }: AnimatedTextTextProps) => {
  const frameRate = 12;
  const interval = 60000 / frameRate;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textState = animatedText.keyFrames[currentTextIndex];
  const keyFrames = animatedText.keyFrames;
  const [animationStopped, setAnimationStopped] = useState(false);
 
  const setFrameEnd = ( frameLength:number ) => {
    return new Promise(r => setTimeout(r, frameLength));
  }

  const startTimer = () => {
    setFrameEnd(getKeyFrameLength(interval, textState.wait)).then(()=> {
      if(!animationStopped) {
        setNextState(currentTextIndex);
      }
    })
  }
  
  const setNextState = (currentTextIndex:number) => {
    const newFrame = getNextState(currentTextIndex, keyFrames);
    setCurrentTextIndex(newFrame);
    startTimer();
  }

  const stopAnimation = () => {
    setAnimationStopped(true);
    setCurrentTextIndex(0);
  }

  useEffect(() => {
    startTimer();
  }, []);
  return (
    <pre>{textState.text}</pre>
  )
}


const getNextState = (currentTextIndex:number, keyFrames:Array<number>) => {
  return (currentTextIndex >= keyFrames.length - 1)? 0: currentTextIndex + 1
}