import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 4,
    backgroundColor: "#000", 
    sphere: {
        //radius: new Vector(200, 130),
        radius: new Vector(130, 200),
        radiusOffset: 5,
        layersNum: 150,
        angleVel: 0.07
    },
    waves: [
        {type: "sin", A: 15, B: 6, C: 0, D: 0},
        {type: "cos", A: 25, B: 5, C: 0, D: 1}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.02;
        waves[0].D += Math.sin(n * 2) * 0.2;
    }

    function modifySmallRadius () {
        return 0.8
    }

    function modifyLayerRadius (r, a, i) {
        return r;
    }

    function modifyOutlinePoint (p, r, a, i) {
        waves[1].scaleA(r, 130);
        waves[1].D = waves[1].orig.D + Math.cos(n + a) * 2;
        waves[1].B = waves[1].orig.B + Math.sin(n + i) * 0.5;

        return new Vector(waves[1].getPoint(a *2) + p.x, waves[0].getPoint(a * 2) + p.y);
    }

    function modifyEllipseRadius (r, a, i) {
        waves[0].scaleA(r, 150);
        waves[0].A *= Math.sin((n + a) * 3);
        //waves[0].C = waves[0].orig.C + Math.sin(n - a) * 2;

        return r + waves[0].getPoint(a);
    }

    function setColor (i) {
        return `hsl(${i * 1.5 + 120}, ${i * 2 + 30}%, 50%)`;
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

