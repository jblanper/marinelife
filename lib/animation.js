export default function setAnimation (loopFunc) {
    let animating = false;
    let animationID;

    const start = _ => {
        if (!animating) animating = true;
        animationID = window.requestAnimationFrame(loop);
    };

    const stop = _ => {
        if (animationID) {
            window.cancelAnimationFrame(animationID);
            animationID = undefined;
            animating = false;
        }
    };

    const loop = _ => {
        loopFunc();
        start();
    };

    const toggle = _ => {
        animating = !animating

        if (animating) start();
        else stop();
    };

    return {start, stop, toggle, get animating () { return animating; }};
};
