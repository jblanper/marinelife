import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 1,
    backgroundColor: "#000", 
    sphere: {
        radius: {x: 220, y: 300},
        radiusOffset: 35,
        layersNum: 200,
        angleVel: 0.08
    },
    waves: [
        {type: "sin", A: 25, B: 4, C: 0, D: 0},
        {type: "sin", A: 10, B: 8, C: 0, D: 0},
        {type: "cos", A: 10, B: 15, C: 0, D: 0}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.02;
        waves[0].C = n;
        waves[1].D = Math.sin(n * 0.3) * 45;
        waves[1].C = Math.sin(n * 0.2) * 5;
    }

    function modifySmallRadius () {
        return 0.7
    }

    function modifyLayerRadius (r, a, i) {
        return waves[0].getPoint(a) + r * 0.7;
    }

    function modifyOutlinePoint (p, r, a, i) {
        waves[1].scaleA(r, 220);

        return new Vector(waves[1].getPoint(a) + p.x, p.y);
    }

    function modifyEllipseRadius (r, a, i) {
        waves[2].scaleA(r, 220);
        waves[2].D = waves[2].orig.D + 1 + (Math.cos(n * 4));

        return r + waves[2].getPoint(a);
    }

    function setColor (i) {
        return `hsl(${80 + i * 2}, ${30}%, ${50}%)`
    }

    function setLineWidth (i) {
        return (i + 1) * 0.005;
    }

    // don't change this
    return  {
        update,
        modifySmallRadius,
        modifyLayerRadius,
        modifyOutlinePoint,
        modifyEllipseRadius,
        setColor,
        setLineWidth
    };
}

export { options, setModifiers };
