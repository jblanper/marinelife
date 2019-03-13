import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 8,
    backgroundColor: "#000", 
    sphere: {
        radius: new Vector(150, 200),
        radiusOffset: 20,
        layersNum: 150,
        angleVel: 0.08
    },
    waves: [
        {type: "cos", A: 35, B: 4, C: 0, D: 5},
        {type: "sin", A: 2, B: 25, C: 0, D: 0},
        {type: "cos", A: 8, B: 5, C: 0, D: 0},
        {type: "sin", A: 2, B: 1, C: 0, D: 0}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.01 % 50;
        waves[0].C = Math.cos(n) * 5;
        waves[0].A = waves[0].orig.A * Math.sin(n * 2);
    }

    function modifySmallRadius (i) {
        return 0.8;  
    }

    function modifyLayerRadius (r, a, i) {
        /*
        waves[0].B = (Math.PI * 2) / waves[0].orig.B;
        waves[0].C = waves[0].orig.C / waves[0].B;
         */

        return waves[0].getPoint(n + (i * 0.012)) + r;
    }

    function modifyEllipseRadius (r, a, i, y) {
        // r: radius, a: angle, i: outline index, y: layer index
        waves[1].A = waves[1].orig.A * Math.sin(n + y * 0.02);
        waves[1].scaleA(r, 150); // try to comment

        return waves[1].getPoint(a) + r;
    }

    function modifyOutlinePoint (p, r, a, i, y) {
        // p: point, r: radius, a: angle, i: outline index, y: layer index
        waves[2].A = waves[2].orig.A * Math.sin(n);
        waves[3].A = waves[3].orig.A * Math.sin(n);
        waves[2].scaleA(r, 150); // try to comment
        waves[3].scaleA(r, 150); // try to comment

        return p.sub(new Vector(
            waves[2].getPoint(a + n),
            waves[3].getPoint((y * 0.2) + n)
        ));
    }

    function setColor (i) {
        return `hsl(${i * 1.5 + 80}, 60%, 60%)`;
    }

    function setLineWidth (i) {
        return (i + 1) * 0.0025;
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

