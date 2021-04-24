export function processText(text:string) {
  const speed = 5;
  const repeat = true;
  const playTime = 20;///\[.*?\]/g
  let matches = text.matchAll(/\[(.*?)\]/g);
  let keyFrames = [];
  for (const match of matches) {
    keyFrames.push({
      text: match[1],
      wait: 1
    })
  }
  return {
    speed,
    repeat,
    playTime,
    keyFrames,
    originalText: "[ {🍦} ], [{{🍦}}], [  🍦  ]"
  }
}

export function getKeyFrameLength(interval:number, wait:number, speed:number = 1) {
  const keyFrameLength = interval + wait / speed;
  return keyFrameLength;
}