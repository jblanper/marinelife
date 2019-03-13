import { options, setModifiers } from './conf.js';
import createCanvas from '../../lib/helper.js';
import createSketch from '../../lib/sketch.js';

const ctx = createCanvas();
const sketch = createSketch({
    ctx: ctx, options: options, setModifiers: setModifiers
});

// draw background
sketch.clear();
// start animation
sketch.animation.start();
