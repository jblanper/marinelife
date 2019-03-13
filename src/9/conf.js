import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 9,
    backgroundColor: "#000", 
    sphere: {
        radius: new Vector(180, 180),
        radiusOffset: 0,
        layersNum: 70,
        angleVel: 0.03
    },
    waves: [
        {type: "sin", A: 2, B: 4, C: 0, D: 0},
        {type: "cos", A: 120, B: 5, C: 0.5, D: 0},//A:150, B:0.8
        {type: "sin", A: 160, B: 1.8, C: 0, D: 0}//A:150, B:1.3
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.02;
    }

    function modifySmallRadius (i) {
        return 0.8;  
    }

    function modifyLayerRadius (r, a, i) {
        return r;
    }

    function modifyEllipseRadius (r, a, i, y) {
        // r: radius, a: angle, i: outline index, y: layer index
        return waves[0].getPoint(a) + r;
    }

    function modifyOutlinePoint (p, r, a, i, y) {
        // p: point, r: radius, a: angle, i: outline index, y: layer index
        waves[1].C = waves[1].orig.C * n;

        return p.sub(new Vector(
            waves[1].getPoint(a),
            waves[2].getPoint(a)
        ));
    }

    function setColor (i) {
        return `hsl(${i * 3 + 100}, ${i * 0.7 + 10}%, 60%)`;
    }

    function setLineWidth (i) {
        return (i + 1) * 0.01;
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

