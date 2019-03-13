import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 2,
    backgroundColor: "#000", 
    sphere: {
        //radius: new Vector(200, 130),
        radius: new Vector(130, 200),
        radiusOffset: 0,
        layersNum: 200,
        angleVel: 0.06
    },
    waves: [
        {type: "sin", A: 2, B: 5, C: 0, D: 0},
        {type: "sin", A: 2, B: 1.2, C: 0, D: 0},
        {type: "cos", A: 12, B: 5, C: 0, D: 0}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.02;
    }

    function modifySmallRadius () {
        return 0.8
    }

    function modifyLayerRadius (r, a, i) {
        waves[0].D = waves[0].orig.D + 1 + Math.sin(n) * 6;

        return waves[0].getPoint(a * 0.008) + r;
    }

    function modifyOutlinePoint (p, r, a, i) {
        //waves[1].scaleA(r, 130);

        return new Vector(p.x - waves[1].getPoint(i * 0.02), p.y);
    }

    function modifyEllipseRadius (r, a, i) {
        //waves[2].scaleA(r, 130);
        waves[2].A = waves[2].orig.A * Math.cos(n);
        waves[2].C = waves[2].orig.C + 1 + Math.sin(n + a);
        waves[2].D = waves[2].orig.D + 1 + Math.cos(n * 0.5);

        return r + waves[2].getPoint(a);
    }

    function setColor (i) {
        return `hsl(${i * 1.2 + 120}, ${80}%, ${60}%)`
    }

    function setLineWidth (i) {
        return (i + 1) * 0.0035;
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

