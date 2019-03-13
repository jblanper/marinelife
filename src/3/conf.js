import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 3,
    backgroundColor: "#000", 
    sphere: {
        //radius: new Vector(200, 130),
        radius: new Vector(130, 200),
        radiusOffset: 5,
        layersNum: 150,
        angleVel: 0.38
    },
    waves: [
        {type: "sin", A: 15, B: 6, C: 0, D: 0}
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
        return p;
    }

    function modifyEllipseRadius (r, a, i) {
        waves[0].scaleA(r, 150);
        waves[0].A *= Math.sin((n + a) * 3);
        waves[0].C = waves[0].orig.C + Math.sin(n - a) * 2;

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

