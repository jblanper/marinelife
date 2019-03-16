import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 7,
    backgroundColor: "#000", 
    sphere: {
        radius: new Vector(150, 200),
        radiusOffset: 10,
        layersNum: 150,
        angleVel: 0.08
    },
    waves: [
        {type: "cos", A: 15, B: 1.2, C: 0, D: 0},
        {type: "cos", A: 12, B: 5, C: 0, D: 0},
        {type: "sin", A: 2, B: 1.2, C: 0, D: 0}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.02;
    }

    function modifySmallRadius (i) {
        return 1;  
    }

    function modifyLayerRadius (r, a, i) {
        waves[0].D = Math.sin(n * 6);

        return waves[0].getPoint(a) + r;
        //return r;
    }

    function modifyOutlinePoint (p, r, a, i, y) {
        // p: point, r: radius, a: angle, i: outline index, y: layer index
        return new Vector(
            p.x - waves[2].getPoint(y * 0.2),
            p.y
        );
    }

    function modifyEllipseRadius (r, a, i, y) {
        // r: radius, a: angle, i: outline index, y: layer index
        waves[1].A = waves[1].orig.A * Math.cos(n);
        waves[1].scaleA(r, 150); // try to comment

        waves[1].C = Math.sin(n + a);
        waves[1].D = Math.cos(n * 0.5);

        return waves[1].getPoint(a) + r;
    }

    function setColor (i) {
        return `hsl(${i * 1.3 + 180}, 60%, 60%)`;
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

