Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
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
    return (jsxRuntime.jsx(AnimatedTextText, { animatedText: animatedText }, void 0));
};
const AnimatedTextText = ({ animatedText }) => {
    const [currentTextIndex, setCurrentTextIndex] = react.useState(0);
    const textState = animatedText.keyFrames[currentTextIndex];
    animatedText.keyFrames;
    react.useState(false);
    /*useEffect(() => {
      startTimer();
    }, []);*/
    return (jsxRuntime.jsx("pre", { children: textState.text }, void 0));
};

const shTest = () => (jsxRuntime.jsx("h1", { children: "yo" }, void 0));

exports.AnimatedText = AnimatedText;
exports.getKeyFrameLength = getKeyFrameLength;
exports.processText = processText;
exports.shTest = shTest;
//# sourceMappingURL=index.js.map
