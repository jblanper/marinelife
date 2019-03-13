import Vector from '../../lib/vector.js';

const options =  {
    // general options
    number: 6,
    backgroundColor: "#000", 
    sphere: {
        radius: new Vector(180, 180),
        radiusOffset: 5,
        layersNum: 150,
        angleVel: 0.08
    },
    waves: [
        {type: "cos", A: 15, B: 2, C: 0, D: 0},
        {type: "sin", A: 5, B: 1, C: 0, D: 0},
        {type: "sin", A: 12, B: 10, C: 0, D: 0},
        {type: "sin", A: 10, B: 1.2, C: 0, D: 0},
        {type: "sin", A: 2, B: 2, C: 0, D: 0},
        {type: "sin", A: 5, B: 6, C: 0, D: 0},
        {type: "sin", A: 3, B: 1, C: 5, D: 3}
    ]
};

function setModifiers (waves) {
    let n = 0

    // modifiers options
    function update () {
        n += 0.01 % 50;
    }

    function modifySmallRadius (i) {
        return 1;  
    }

    function modifyLayerRadius (r, a, i) {
        return waves[0].getPoint(a) + r;
    }

    function modifyOutlinePoint (p, r, a, i, y) {
        waves[2].A = waves[2].orig.A * Math.cos(n + (y * 0.2));
        waves[2].C = waves[3].getPoint(Math.cos(n) * Math.sin(n + (a * 0.3)));
        waves[2].D = waves[2].orig.D + waves[4].getPoint(Math.cos(n) * 3);

        waves[5].B = waves[5].orig.B * Math.cos(n);
        waves[6].C = waves[6].orig.C * Math.sin(n);
        waves[6].D = waves[6].orig.D * Math.cos(n);
        waves[5].C = waves[5].orig.C + waves[6].getPoint(
            Math.cos(n + a) + (y * 0.08)
        );

        return new Vector(
            waves[2].getPoint(Math.sin(n) + (a * 5)) + p.x,
            p.y - waves[4].getPoint(Math.sin(n) * 4) 
        );
    }

        function modifyEllipseRadius (r, a, i, y) {
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

