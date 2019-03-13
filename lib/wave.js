export default class Wave {
    constructor ({type = 'sin', A, B, C = 0, D = 0, maxR = 0}) {
        // A: amplitude, B: freq, C: phase shift, D: vertical shift
        this.type = type;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.maxR = maxR;

        this.orig = {A, B, C, D};
    }

    getPoint (x) {
        return this.A * Math[this.type](this.B * x + this.C) + this.D
    }

    scaleA (currentR) {
        this.A = (this.orig.A * currentR) / this.maxR;
    }

    rotate (val = 0.05, acc = true) {
        const change = val;

        this.C = (acc) ? this.C + change : change;
    }

    breath ({x, amp = 0.2, freq = 2, acc = true}) {
        const change = amp * Math.sin(x * freq); 

        this.D = (acc) ? this.D + change : change;
    }

    shake ({x, freq = 1, centerY, amp = 1}) {
        // better used inside "modifyEllipseRadius" function of modifiers
        this.C = amp * Math.sin((x * freq) * centerY);
    }

    mul ({a = 1, b = 1, c = 1, d = 1, acc = false}) {
        // better used inside "modifySmallRadius" function of modifiers
        const target = (acc) ? this : this.orig;

        this.A = target.A * a;
        this.B = target.B * b;
        this.C = target.C * d;
        this.D = target.D * c;
    }
}

