Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function processText(text) {
    const speed = 5;
    const repeat = true;
    const playTime = 20; ///\[.*?\]/g
    let matches = text.matchAll(/\[(.*?)\]/g);
    let keyFrames = [];
    for (const match of matches) {
        keyFrames.push({
            text: match[1],
            wait: 1
        });
    }
    return {
        speed,
        repeat,
        playTime,
        keyFrames,
        originalText: "[ {🍦} ], [{{🍦}}], [  🍦  ]"
    };
}
function getKeyFrameLength(interval, wait, speed = 1) {
    const keyFrameLength = interval + wait / speed;
    return keyFrameLength;
}

const AnimatedText = ({ text }) => {
    const animatedText = processText(text);
    return (React.createElement(AnimatedTextText, { animatedText: animatedText }));
};
const AnimatedTextText = ({ animatedText }) => {
    const frameRate = 12;
    const interval = 60000 / frameRate;
    const [currentTextIndex, setCurrentTextIndex] = react.useState(0);
    const textState = animatedText.keyFrames[currentTextIndex];
    const keyFrames = animatedText.keyFrames;
    const [animationStopped, setAnimationStopped] = react.useState(false);
    const setFrameEnd = (frameLength) => {
        return new Promise(r => setTimeout(r, frameLength));
    };
    const startTimer = () => {
        setFrameEnd(getKeyFrameLength(interval, textState.wait)).then(() => {
            if (!animationStopped) {
                setNextState(currentTextIndex);
            }
        });
    };
    const setNextState = (currentTextIndex) => {
        const newFrame = getNextState(currentTextIndex, keyFrames);
        setCurrentTextIndex(newFrame);
        startTimer();
    };
    react.useEffect(() => {
        startTimer();
    }, []);
    return (React.createElement("pre", null, textState.text));
};
const getNextState = (currentTextIndex, keyFrames) => {
    return (currentTextIndex >= keyFrames.length - 1) ? 0 : currentTextIndex + 1;
};

exports.AnimatedText = AnimatedText;
exports.getKeyFrameLength = getKeyFrameLength;
exports.processText = processText;
//# sourceMappingURL=index.js.map
