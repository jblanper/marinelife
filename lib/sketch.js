import Vector from './vector.js';
import Sphere from './sphere.js';
import Wave from './wave.js';
import setAnimation from './animation.js';

export default function createSketch ({ctx, options, setModifiers}) {
    // change number of sketch in html
    const label = document.querySelector('#panel p');
    label.innerHTML = '#' + options.number;

    // constants
    const height = ctx.canvas.clientHeight;
    const width = ctx.canvas.clientWidth;
    const center = new Vector(width / 2, height / 2);

    const waves = options.waves.map(obj =>
        new Wave({...obj, maxR: options.sphere.radius.x})
    );

    const backgroundColor = options.backgroundColor;
    const modifiers = setModifiers(waves);

    // modify width and height of sphere in case of small screen
    const sphereRatio = (options.sphere.radius.y / options.sphere.radius.x);
    const radius = {
        x: ((options.sphere.radius.x * 2) + 20 > width)
            ? (width / 2) - 20
            : options.sphere.radius.x,
        y: ((options.sphere.radius.x * 2) + 20 > width)
            ? ((width / 2) - 20) * sphereRatio
            : options.sphere.radius.y
    };

    // variables
    let sphere = new Sphere({
        center: center,
        radius: radius,
        radiusOffset: options.sphere.radiusOffset,
        layersNum: options.sphere.layersNum,
        angleVel: options.sphere.angleVel,
        modifiers: modifiers 
    });

    // methods
    const clear = (
        options = [0, 0, width, height]
    ) => {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(...options);
    }

    const update = _ => {
        modifiers.update();
        // it also draws each ellipse
        sphere.update({plotting: true, ctx: ctx});
    }

    const animation = setAnimation(_ => {
        clear(sphere.boundaries);
        update();
    });

    // bindings
    document.addEventListener('keyup', e => {
        if (e.key == ' ') animation.toggle();
    });

    // return obj
    return {clear, update, animation};
};
