"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var i = {};

  function e(s) {
    if (i[s]) return i[s].exports;
    var r = i[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return t[s].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
  }

  e.m = t, e.c = i, e.d = function (t, i, s) {
    e.o(t, i) || Object.defineProperty(t, i, {
      enumerable: !0,
      get: s
    });
  }, e.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, e.t = function (t, i) {
    if (1 & i && (t = e(t)), 8 & i) return t;
    if (4 & i && "object" == _typeof(t) && t && t.__esModule) return t;
    var s = Object.create(null);
    if (e.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: t
    }), 2 & i && "string" != typeof t) for (var r in t) {
      e.d(s, r, function (i) {
        return t[i];
      }.bind(null, r));
    }
    return s;
  }, e.n = function (t) {
    var i = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return e.d(i, "a", i), i;
  }, e.o = function (t, i) {
    return Object.prototype.hasOwnProperty.call(t, i);
  }, e.p = "", e(e.s = 0);
}([function (t, i, e) {
  "use strict";

  e.r(i);

  var s =
  /*#__PURE__*/
  function () {
    function s(t, i) {
      _classCallCheck(this, s);

      this.x = t, this.y = i;
    }

    _createClass(s, [{
      key: "add",
      value: function add(t) {
        return this.x += t.x, this.y += t.y, this;
      }
    }, {
      key: "addX",
      value: function addX(t) {
        return this.x += t, this;
      }
    }, {
      key: "addY",
      value: function addY(t) {
        return this.y += t, this;
      }
    }, {
      key: "sub",
      value: function sub(t) {
        return this.x -= t.x, this.y -= t.y, this;
      }
    }, {
      key: "subX",
      value: function subX(t) {
        return this.x -= t, this;
      }
    }, {
      key: "subY",
      value: function subY(t) {
        return this.y -= t, this;
      }
    }, {
      key: "mul",
      value: function mul(t) {
        return this.x = this.x * t, this.y = this.y * t, this;
      }
    }, {
      key: "div",
      value: function div(t) {
        if (0 !== t) return this.x = this.x / t, this.y = this.y / t, this;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        var t = this.getMagnitude();
        return this.div(t), this;
      }
    }, {
      key: "getDistance",
      value: function getDistance(t) {
        var i = t.x - this.x,
            e = t.y - this.y;
        return Math.hypot(i, e);
      }
    }, {
      key: "getAngle",
      value: function getAngle(t) {
        return Math.atan2(t.y - this.y, t.x - this.x);
      }
    }, {
      key: "eq",
      value: function eq(t) {
        return this.x === t.x && this.y === t.y;
      }
    }, {
      key: "quasiEq",
      value: function quasiEq(t) {
        return Math.abs(this.x - t.x) <= 1 && this.y === t.y || this.x === t.x && Math.abs(this.y - t.y) <= 1;
      }
    }, {
      key: "copy",
      value: function copy() {
        return new s(this.x, this.y);
      }
    }, {
      key: "magnitude",
      get: function get() {
        return Math.hypot(this.x, this.y);
      }
    }], [{
      key: "fromPolar",
      value: function fromPolar(t, i) {
        var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i;
        var s = i * Math.cos(t),
            r = e * Math.sin(t);
        return new this(Math.floor(s), Math.floor(r));
      }
    }, {
      key: "add",
      value: function add(t, i) {
        return new this(t.x + i.x, t.y + i.y);
      }
    }, {
      key: "sub",
      value: function sub(t, i) {
        return new this(t.x - i.x, t.y - i.y);
      }
    }, {
      key: "eq",
      value: function eq(t, i) {
        return t.x === i.x && t.y === i.y;
      }
    }]);

    return s;
  }();

  var r =
  /*#__PURE__*/
  function () {
    function r(_ref) {
      var t = _ref.angleVel,
          i = _ref.center,
          e = _ref.radiusX,
          s = _ref.radiusY,
          _r = _ref.layerNum,
          n = _ref.modifiers;

      _classCallCheck(this, r);

      this._angleVel = t, this._center = i, this._radiusX = e, this._radiusY = s, this._layerNum = _r, this._modifiers = n, this._outlinePointsNum = Math.floor(2 * Math.PI / t), this._outline, this._setOutline();
    }

    _createClass(r, [{
      key: "_setOutline",
      value: function _setOutline() {
        var _this = this;

        this._outline = Array.from({
          length: this._outlinePointsNum
        }, function (t, i) {
          var e = _this._angleVel * i,
              r = _this._modifiers.modifyEllipseRadius(_this._radiusX, e, i, _this._layerNum),
              n = _this._modifiers.modifyEllipseRadius(_this._radiusY, e, i, _this._layerNum),
              a = s.fromPolar(e, r, n).add(_this._center);

          return _this._modifiers.modifyOutlinePoint(a, _this._radiusX, e, i, _this._layerNum);
        });
      }
    }, {
      key: "update",
      value: function update(_ref2) {
        var t = _ref2.radiusX,
            i = _ref2.radiusY;
        this._radiusX = t, this._radiusY = i, this._setOutline();
      }
    }, {
      key: "plot",
      value: function plot(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        t.strokeStyle = this._modifiers.setColor(i), t.lineWidth = this._modifiers.setLineWidth(i), t.beginPath(), t.moveTo(this._outline[0].x, this._outline[0].y), this._outline.forEach(function (i) {
          t.lineTo(i.x, i.y);
        }), t.lineTo(this._outline[0].x, this._outline[0].y), t.stroke();
      }
    }]);

    return r;
  }();

  var n =
  /*#__PURE__*/
  function () {
    function n(_ref3) {
      var _this2 = this;

      var t = _ref3.center,
          i = _ref3.radius,
          _ref3$radiusOffset = _ref3.radiusOffset,
          e = _ref3$radiusOffset === void 0 ? 0 : _ref3$radiusOffset,
          _n = _ref3.layersNum,
          a = _ref3.angleVel,
          u = _ref3.modifiers;

      _classCallCheck(this, n);

      this._radiusX = i.x, this._radiusY = i.y, this._radiusOffset = e, this._center = t, this._layersNum = _n, this._angleVel = a, this._modifiers = u, this._sep = 2 * this._radiusY / this._layersNum, this._layers = Array.from({
        length: _n
      }, function (t, i) {
        var e = _this2._getLayerRadius(i);

        return new r({
          angleVel: _this2._angleVel,
          center: new s(_this2._center.x, _this2._center.y + _this2._radiusY - i * _this2._sep),
          radiusX: e,
          radiusY: e * _this2._modifiers.modifySmallRadius(i),
          layerNum: i,
          modifiers: _this2._modifiers
        });
      });
    }

    _createClass(n, [{
      key: "_getLayerRadius",
      value: function _getLayerRadius(t) {
        var i = Math.PI / this._layersNum * t,
            e = s.fromPolar(i, this._radiusY, this._radiusX).sub(new s(this._radiusY - t * this._sep, 0)).magnitude + this._radiusOffset;

        return this._modifiers.modifyLayerRadius(e, i, t);
      }
    }, {
      key: "update",
      value: function update() {
        var _this3 = this;

        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref4$plotting = _ref4.plotting,
            t = _ref4$plotting === void 0 ? !1 : _ref4$plotting,
            i = _ref4.ctx,
            e = _ref4.setColor,
            s = _ref4.setLineWidth;

        this._layers.forEach(function (e, s) {
          var r = _this3._getLayerRadius(s);

          e.update({
            radiusX: r,
            radiusY: r * _this3._modifiers.modifySmallRadius(s)
          }), t && e.plot(i, s);
        });
      }
    }, {
      key: "boundaries",
      get: function get() {
        return [this._center.x - this._radiusX - 250, this._center.y - this._radiusY - 250, 2 * this._radiusX + 500, 2 * this._radiusY + 500];
      }
    }]);

    return n;
  }();

  var a =
  /*#__PURE__*/
  function () {
    function a(_ref5) {
      var _ref5$type = _ref5.type,
          t = _ref5$type === void 0 ? "sin" : _ref5$type,
          i = _ref5.A,
          e = _ref5.B,
          _ref5$C = _ref5.C,
          s = _ref5$C === void 0 ? 0 : _ref5$C,
          _ref5$D = _ref5.D,
          r = _ref5$D === void 0 ? 0 : _ref5$D,
          _ref5$maxR = _ref5.maxR,
          n = _ref5$maxR === void 0 ? 0 : _ref5$maxR;

      _classCallCheck(this, a);

      this.type = t, this.A = i, this.B = e, this.C = s, this.D = r, this.maxR = n, this.orig = {
        A: i,
        B: e,
        C: s,
        D: r
      };
    }

    _createClass(a, [{
      key: "getPoint",
      value: function getPoint(t) {
        return this.A * Math[this.type](this.B * t + this.C) + this.D;
      }
    }, {
      key: "scaleA",
      value: function scaleA(t) {
        this.A = this.orig.A * t / this.maxR;
      }
    }, {
      key: "rotate",
      value: function rotate() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .05;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var e = t;
        this.C = i ? this.C + e : e;
      }
    }, {
      key: "breath",
      value: function breath(_ref6) {
        var t = _ref6.x,
            _ref6$amp = _ref6.amp,
            i = _ref6$amp === void 0 ? .2 : _ref6$amp,
            _ref6$freq = _ref6.freq,
            e = _ref6$freq === void 0 ? 2 : _ref6$freq,
            _ref6$acc = _ref6.acc,
            s = _ref6$acc === void 0 ? !0 : _ref6$acc;
        var r = i * Math.sin(t * e);
        this.D = s ? this.D + r : r;
      }
    }, {
      key: "shake",
      value: function shake(_ref7) {
        var t = _ref7.x,
            _ref7$freq = _ref7.freq,
            i = _ref7$freq === void 0 ? 1 : _ref7$freq,
            e = _ref7.centerY,
            _ref7$amp = _ref7.amp,
            s = _ref7$amp === void 0 ? 1 : _ref7$amp;
        this.C = s * Math.sin(t * i * e);
      }
    }, {
      key: "mul",
      value: function mul(_ref8) {
        var _ref8$a = _ref8.a,
            t = _ref8$a === void 0 ? 1 : _ref8$a,
            _ref8$b = _ref8.b,
            i = _ref8$b === void 0 ? 1 : _ref8$b,
            _ref8$c = _ref8.c,
            e = _ref8$c === void 0 ? 1 : _ref8$c,
            _ref8$d = _ref8.d,
            s = _ref8$d === void 0 ? 1 : _ref8$d,
            _ref8$acc = _ref8.acc,
            r = _ref8$acc === void 0 ? !1 : _ref8$acc;
        var n = r ? this : this.orig;
        this.A = n.A * t, this.B = n.B * i, this.C = n.C * s, this.D = n.D * e;
      }
    }]);

    return a;
  }();

  var u = function (_ref9) {
    var t = _ref9.ctx,
        i = _ref9.options,
        e = _ref9.setModifiers;
    document.querySelector("#panel p").innerHTML = "#" + i.number;
    var r = t.canvas.clientHeight,
        u = t.canvas.clientWidth,
        o = new s(u / 2, r / 2),
        h = i.waves.map(function (t) {
      return new a({ ...t,
        maxR: i.sphere.radius.x
      });
    }),
        d = i.backgroundColor,
        l = e(h),
        c = i.sphere.radius.y / i.sphere.radius.x,
        y = {
      x: 2 * i.sphere.radius.x + 20 > u ? u / 2 - 20 : i.sphere.radius.x,
      y: 2 * i.sphere.radius.x + 20 > u ? (u / 2 - 20) * c : i.sphere.radius.y
    };
    var f = new n({
      center: o,
      radius: y,
      radiusOffset: i.sphere.radiusOffset,
      layersNum: i.sphere.layersNum,
      angleVel: i.sphere.angleVel,
      modifiers: l
    });

    var m = function m() {
      var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, u, r];
      t.fillStyle = d, t.fillRect.apply(t, _toConsumableArray(i));
    },
        _ = function _(i) {
      l.update(), f.update({
        plotting: !0,
        ctx: t
      });
    },
        p = function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (t) {
        return void 0;
      };
      var s,
          r = !1;

      var n = function (t) {
        var i = 0,
            e = 0;
        var s = t;
        return function (t) {
          var r = t - i;
          if (i = t, (e += r) > s) return e = 0, !0;
        };
      }(i),
          a = function a(t) {
        r || (r = !0), s = window.requestAnimationFrame(o);
      },
          u = function u(t) {
        s && (window.cancelAnimationFrame(s), s = void 0, r = !1);
      },
          o = function o() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        e() ? u() : (n(i) && t(), a());
      };

      return {
        start: a,
        stop: u,
        toggle: function toggle(t) {
          (r = !r) ? a() : u();
        },

        get animating() {
          return r;
        }

      };
    }(function (t) {
      m(f.boundaries), _();
    }, 0);

    return document.addEventListener("keyup", function (t) {
      " " == t.key && p.toggle();
    }), {
      clear: m,
      update: _,
      animation: p
    };
  }({
    ctx: function () {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "canvas";
      var i = window.devicePixelRatio,
          e = window.innerHeight,
          s = window.innerWidth,
          r = document.querySelector(t);
      r.width = s * i, r.height = e * i;
      var n = r.getContext("2d");
      return n.scale(i, i), n;
    }(),
    options: {
      number: 1,
      backgroundColor: "#000",
      sphere: {
        radius: {
          x: 220,
          y: 300
        },
        radiusOffset: 35,
        layersNum: 200,
        angleVel: .08
      },
      waves: [{
        type: "sin",
        A: 25,
        B: 4,
        C: 0,
        D: 0
      }, {
        type: "sin",
        A: 10,
        B: 8,
        C: 0,
        D: 0
      }, {
        type: "cos",
        A: 10,
        B: 15,
        C: 0,
        D: 0
      }]
    },
    setModifiers: function setModifiers(t) {
      var i = 0;
      return {
        update: function update() {
          i += .02, t[0].C = i, t[1].D = 45 * Math.sin(.3 * i), t[1].C = 5 * Math.sin(.2 * i);
        },
        modifySmallRadius: function modifySmallRadius() {
          return .7;
        },
        modifyLayerRadius: function modifyLayerRadius(i, e, s) {
          return t[0].getPoint(e) + .7 * i;
        },
        modifyOutlinePoint: function modifyOutlinePoint(i, e, r, n) {
          return t[1].scaleA(e, 220), new s(t[1].getPoint(r) + i.x, i.y);
        },
        modifyEllipseRadius: function modifyEllipseRadius(e, s, r) {
          return t[2].scaleA(e, 220), t[2].D = t[2].orig.D + 1 + Math.cos(4 * i), e + t[2].getPoint(s);
        },
        setColor: function setColor(t) {
          return "hsl(".concat(80 + 2 * t, ", 30%, 50%)");
        },
        setLineWidth: function setLineWidth(t) {
          return .005 * (t + 1);
        }
      };
    }
  });

  u.clear(), u.animation.start();
}]);
