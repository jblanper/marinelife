import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 11,
    backgroundColor: "#000", 
    sphere: {
        radius: new Vector(150, 200),
        radiusOffset: 0,
        layersNum: 150,
        angleVel: 0.08
    },
    waves: [
        {type: "sin", A: 10, B: 8, C: 0, D: 0},
        {type: "cos", A: 17, B: 3, C: 0, D: 0}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.02;
        waves[1].C += 0.009;
        waves[1].B = waves[1].orig.B + Math.sin(n * 1.2) * 4.2;
        waves[1].D = Math.sin(n) * 2;
    }

    function modifySmallRadius (i) {
        return 0.8
    }

    function modifyLayerRadius (r, a, i) {
        waves[1].A = waves[1].orig.A * Math.sin(n * 0.7) - Math.cos(a);
        waves[1].scaleA(r, 200);

        return waves[1].getPoint(a) + r;
    }

    function modifyEllipseRadius (r, a, i, y) {
        //waves[0].D = Math.cos(i) * Math.sin(n * 10);
        waves[0].C = Math.sin((n * 0.1) * (y * 0.3));
        waves[0].A = waves[0].orig.A * Math.sin(n * 10);
        waves[0].scaleA(r, 150);

        return waves[0].getPoint(a * i) + r;
    }

    function modifyOutlinePoint (p, r, a, i, y) {
        //p: point, r:radius, a:angle, i:outline index, y:layer index/number
        return p;
    }


    function setColor (i) {
        return '#fff';
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
