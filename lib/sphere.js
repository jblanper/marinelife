import Vector from './vector.js';
import Ellipse from './ellipse.js';

export default class Sphere {
    constructor ({center, radius, radiusOffset = 0, layersNum, angleVel, modifiers}) {
        this._radiusX = radius.x;
        this._radiusY = radius.y;
        this._radiusOffset = radiusOffset;
        this._center = center;
        this._layersNum = layersNum;
        this._angleVel = angleVel;
        this._modifiers = modifiers;

        this._sep = (this._radiusY * 2) / this._layersNum;

        this._layers = Array.from({length: layersNum}, (_, i) => {
            const radius = this._getLayerRadius(i);

            return  new Ellipse({
                angleVel: this._angleVel,
                center: new Vector(
                    this._center.x,
                    this._center.y + this._radiusY - (i * this._sep)
                ),
                radiusX: radius,
                radiusY: radius * this._modifiers.modifySmallRadius(i),
                layerNum: i,
                modifiers: this._modifiers
            });
        });
    }

    get boundaries () {
        // returns rect dimensions used when the canvas is cleared
        return [
            this._center.x - this._radiusX - 250,
            this._center.y - this._radiusY - 250,
            this._radiusX * 2 + 500,
            this._radiusY * 2 + 500
        ];
    }

    _getLayerRadius (i) {
        const angle = (Math.PI / this._layersNum) * i;

        const radius = Vector.fromPolar(angle, this._radiusY, this._radiusX)
            .subX(this._radiusY - (i * this._sep))
            .magnitude + this._radiusOffset;

        return this._modifiers.modifyLayerRadius(radius, angle, i);
    }

    update ({plotting = false, ctx, setColor, setLineWidth} = {}) {
        this._layers.forEach((layer, i) => {
            const radius = this._getLayerRadius(i);

            layer.update({
                radiusX: radius,
                radiusY: radius * this._modifiers.modifySmallRadius(i),
            });

            // for drawing
            if (plotting) layer.plot(ctx, i);
        });
    }
}
