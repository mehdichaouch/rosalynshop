try {
    !function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define &&
        define.amd ? define("ZaloSocialSDK", [], e) : "object" == typeof exports ? exports.ZaloSocialSDK = e() : t.ZaloSocialSDK = e();
        console.log(object);
    }(window, function () {
        console.log('12121121');
        return i = {}, r.m = n = [function (t, e, n) {
            var i = n(31)("wks"), r = n(32), o = n(2).Symbol, a = "function" == typeof o;
            (t.exports = function (t) {
                return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
            }).store = i
        }, function (t, e, n) {
            t.exports = {default: n(80), __esModule: !0}
        }, function (t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }, function (t, e) {
            var n = t.exports = {version: "2.4.0"};
            "number" == typeof __e && (__e = n)
        }, function (t, e, n) {
            var i = n(5), r = n(21);
            t.exports = n(7) ? function (t, e, n) {
                return i.f(t, e, r(1, n))
            } : function (t, e, n) {
                return t[e] = n, t
            }
        }, function (t, e, n) {
            var i = n(6), r = n(49), o = n(50), a = Object.defineProperty;
            e.f = n(7) ? Object.defineProperty : function (t, e, n) {
                if (i(t), e = o(e, !0), i(n), r) try {
                    return a(t, e, n)
                } catch (t) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t
            }
        }, function (t, e, n) {
            var i = n(12);
            t.exports = function (t) {
                if (!i(t)) throw TypeError(t + " is not an object!");
                return t
            }
        }, function (t, e, n) {
            t.exports = !n(19)(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (t, e, n) {
            var m = n(2), g = n(3), y = n(9), v = n(4), w = "prototype", b = function (t, e, n) {
                var i, r, o, a = t & b.F, s = t & b.G, l = t & b.S, h = t & b.P, u = t & b.B, c = t & b.W,
                    f = s ? g : g[e] || (g[e] = {}), d = f[w], p = s ? m : l ? m[e] : (m[e] || {})[w];
                for (i in s && (n = e), n) (r = !a && p && void 0 !== p[i]) && i in f || (o = r ? p[i] : n[i], f[i] = s && "function" != typeof p[i] ? n[i] : u && r ? y(o, m) : c && p[i] == o ? function (i) {
                    function t(t, e, n) {
                        if (this instanceof i) {
                            switch (arguments.length) {
                                case 0:
                                    return new i;
                                case 1:
                                    return new i(t);
                                case 2:
                                    return new i(t, e)
                            }
                            return new i(t, e, n)
                        }
                        return i.apply(this, arguments)
                    }

                    return t[w] = i[w], t
                }(o) : h && "function" == typeof o ? y(Function.call, o) : o, h && ((f.virtual || (f.virtual = {}))[i] = o, t & b.R && d && !d[i] && v(d, i, o)))
            };
            b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, t.exports = b
        }, function (t, e, n) {
            var o = n(18);
            t.exports = function (i, r, t) {
                if (o(i), void 0 === r) return i;
                switch (t) {
                    case 1:
                        return function (t) {
                            return i.call(r, t)
                        };
                    case 2:
                        return function (t, e) {
                            return i.call(r, t, e)
                        };
                    case 3:
                        return function (t, e, n) {
                            return i.call(r, t, e, n)
                        }
                }
                return function () {
                    return i.apply(r, arguments)
                }
            }
        }, function (t, e) {
            t.exports = {}
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = a(n(1)), i = a(n(84));

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            function a(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var s = (function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            }(l, null, [{
                key: "jsonToQueryString", value: function (e) {
                    return "?" + (0, i.default)(e).map(function (t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                    }).join("&")
                }
            }]), l);

            function l() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l)
            }

            e.default = s
        }, function (t, e) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }, function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e)
            }
        }, function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1)
            }
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var i, r = n(1), o = (i = r) && i.__esModule ? i : {default: i};

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(t, i.key, i)
                }
            }

            var s = (function (t, e, n) {
                return e && a(t.prototype, e), n && a(t, n), t
            }(l, null, [{
                key: "isAndroid", value: function () {
                    var t = navigator.userAgent || navigator.vendor || window.opera;
                    return !!/android/i.test(t)
                }
            }, {
                key: "isIOS", value: function () {
                    var t = navigator.userAgent || navigator.vendor || window.opera;
                    return !(!/iPad|iPhone|iPod/.test(t) || window.MSStream)
                }
            }, {
                key: "isMobile", value: function () {
                    var t, e = !1;
                    return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
                }
            }]), l);

            function l() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l)
            }

            e.default = s
        }, function (t, e) {
            var n = Math.ceil, i = Math.floor;
            t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (0 < t ? i : n)(t)
            }
        }, function (t, e) {
            t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        }, function (t, e) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        }, function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }, function (t, e, n) {
            var i = n(12), r = n(2).document, o = i(r) && i(r.createElement);
            t.exports = function (t) {
                return o ? r.createElement(t) : {}
            }
        }, function (t, e) {
            t.exports = function (t, e) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
            }
        }, function (t, e, n) {
            var i = n(56), r = n(17);
            t.exports = function (t) {
                return i(r(t))
            }
        }, function (t, e, n) {
            var i = n(16), r = Math.min;
            t.exports = function (t) {
                return 0 < t ? r(i(t), 9007199254740991) : 0
            }
        }, function (t, e, n) {
            var i = n(31)("keys"), r = n(32);
            t.exports = function (t) {
                return i[t] || (i[t] = r(t))
            }
        }, function (t, e, n) {
            var i = n(5).f, r = n(13), o = n(0)("toStringTag");
            t.exports = function (t, e, n) {
                t && !r(t = n ? t : t.prototype, o) && i(t, o, {configurable: !0, value: e})
            }
        }, function (t, e, n) {
            var i = n(17);
            t.exports = function (t) {
                return Object(i(t))
            }
        }, function (t, e, n) {
            "use strict";
            var i = n(48)(!0);
            n(28)(String, "String", function (t) {
                this._t = String(t), this._i = 0
            }, function () {
                var t, e = this._t, n = this._i;
                return n >= e.length ? {value: void 0, done: !0} : (t = i(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        }, function (t, e, n) {
            "use strict";

            function w() {
                return this
            }

            var b = n(29), x = n(8), _ = n(51), B = n(4), T = n(13), k = n(10), E = n(52), R = n(25), A = n(59),
                S = n(0)("iterator"), C = !([].keys && "next" in [].keys()), I = "values";
            t.exports = function (t, e, n, i, r, o, a) {
                E(n, e, i);

                function s(t) {
                    if (!C && t in p) return p[t];
                    switch (t) {
                        case"keys":
                        case I:
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                }

                var l, h, u, c = e + " Iterator", f = r == I, d = !1, p = t.prototype,
                    m = p[S] || p["@@iterator"] || r && p[r], g = m || s(r), y = r ? f ? s("entries") : g : void 0,
                    v = "Array" == e && p.entries || m;
                if (v && (u = A(v.call(new t))) !== Object.prototype && (R(u, c, !0), b || T(u, S) || B(u, S, w)), f && m && m.name !== I && (d = !0, g = function () {
                    return m.call(this)
                }), b && !a || !C && !d && p[S] || B(p, S, g), k[e] = g, k[c] = w, r) if (l = {
                    values: f ? g : s(I),
                    keys: o ? g : s("keys"),
                    entries: y
                }, a) for (h in l) h in p || _(p, h, l[h]); else x(x.P + x.F * (C || d), e, l);
                return l
            }
        }, function (t, e) {
            t.exports = !0
        }, function (t, e, n) {
            var i = n(55), r = n(33);
            t.exports = Object.keys || function (t) {
                return i(t, r)
            }
        }, function (t, e, n) {
            var i = n(2), r = "__core-js_shared__", o = i[r] || (i[r] = {});
            t.exports = function (t) {
                return o[t] || (o[t] = {})
            }
        }, function (t, e) {
            var n = 0, i = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
            }
        }, function (t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }, function (t, e, n) {
            t.exports = n(2).document && document.documentElement
        }, function (t, e, n) {
            var r = n(14), o = n(0)("toStringTag"), a = "Arguments" == r(function () {
                return arguments
            }());
            t.exports = function (t) {
                var e, n, i;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                    try {
                        return t[e]
                    } catch (t) {
                    }
                }(e = Object(t), o)) ? n : a ? r(e) : "Object" == (i = r(e)) && "function" == typeof e.callee ? "Arguments" : i
            }
        }, function (t, e, n) {
            var o = n(6);
            t.exports = function (e, t, n, i) {
                try {
                    return i ? t(o(n)[0], n[1]) : t(n)
                } catch (t) {
                    var r = e.return;
                    throw void 0 !== r && o(r.call(e)), t
                }
            }
        }, function (t, e, n) {
            var i = n(10), r = n(0)("iterator"), o = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (i.Array === t || o[r] === t)
            }
        }, function (t, e, n) {
            var i = n(35), r = n(0)("iterator"), o = n(10);
            t.exports = n(3).getIteratorMethod = function (t) {
                if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
            }
        }, function (t, e, n) {
            function i() {
                var t = +this;
                if (v.hasOwnProperty(t)) {
                    var e = v[t];
                    delete v[t], e()
                }
            }

            function r(t) {
                i.call(t.data)
            }

            var o, a, s, l = n(9), h = n(68), u = n(34), c = n(20), f = n(2), d = f.process, p = f.setImmediate,
                m = f.clearImmediate, g = f.MessageChannel, y = 0, v = {}, w = "onreadystatechange";
            p && m || (p = function (t) {
                for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
                return v[++y] = function () {
                    h("function" == typeof t ? t : Function(t), e)
                }, o(y), y
            }, m = function (t) {
                delete v[t]
            }, "process" == n(14)(d) ? o = function (t) {
                d.nextTick(l(i, t, 1))
            } : g ? (s = (a = new g).port2, a.port1.onmessage = r, o = l(s.postMessage, s, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (o = function (t) {
                f.postMessage(t + "", "*")
            }, f.addEventListener("message", r, !1)) : o = w in c("script") ? function (t) {
                u.appendChild(c("script"))[w] = function () {
                    u.removeChild(this), i.call(t)
                }
            } : function (t) {
                setTimeout(l(i, t, 1), 0)
            }), t.exports = {set: p, clear: m}
        }, function (t, e, n) {
            var o = n(0)("iterator"), a = !1;
            try {
                var i = [7][o]();
                i.return = function () {
                    a = !0
                }, Array.from(i, function () {
                    throw 2
                })
            } catch (t) {
            }
            t.exports = function (t, e) {
                if (!e && !a) return !1;
                var n = !1;
                try {
                    var i = [7], r = i[o]();
                    r.next = function () {
                        return {done: n = !0}
                    }, i[o] = function () {
                        return r
                    }, t(i)
                } catch (t) {
                }
                return n
            }
        }, function (t, e, n) {
            t.exports = {default: n(82), __esModule: !0}
        }, function (t, e) {
            var n;
            n = function () {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }, function (t, e, n) {
            t.exports = n(44)
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var l = a(n(45)), i = a(n(72));
            e.init = function () {
                s.init()
            }, e.reload = function () {
                u && clearInterval(u);
                s.reload()
            }, e.openChatWidget = function () {
                s.openChatWidget()
            }, e.closeChatWidget = function () {
                s.closeChatWidget()
            };
            var r = a(n(75)), o = a(n(100));

            function a(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var s = new r.default;
            s.init();
            var h, u = void 0;
            h = i.default.mark(function t() {
                return i.default.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            u = setInterval(function () {
                                s.retry()
                            }, 1e3), setTimeout(function () {
                                u && clearInterval(u)
                            }, 5e3);
                        case 2:
                        case"end":
                            return t.stop()
                    }
                }, t, this)
            }), function () {
                var s = h.apply(this, arguments);
                new l.default(function (o, a) {
                    return function e(t, n) {
                        try {
                            var i = s[t](n), r = i.value
                        } catch (t) {
                            return void a(t)
                        }
                        if (!i.done) return l.default.resolve(r).then(function (t) {
                            e("next", t)
                        }, function (t) {
                            e("throw", t)
                        });
                        o(r)
                    }("next")
                })
            }(), "news.zing.vn" != window.location.hostname && function () {
                try {
                    if (window.self == window.top) {
                        var t = document.createElement("div");
                        if (t.id = "app", t.className = "zs", document.body.appendChild(t), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ; else {
                            var e = window.location.hostname;
                            "news.zing.vn" !== e && "mp3.zing.vn" !== e || setTimeout(function () {
                                o.default.loadFile("https://stc.sp.zdn.vn/chatbutton/main-1.2.2.js", "js"), o.default.loadFile("https://stc.sp.zdn.vn/chatbutton/main.142b31d74cee2e25afe3651f0591f9f4.css", "css")
                            }, 100)
                        }
                    }
                } catch (t) {
                    console.log("")
                }
            }()
        }, function (t, e, n) {
            t.exports = {default: n(46), __esModule: !0}
        }, function (t, e, n) {
            n(47), n(27), n(60), n(64), t.exports = n(3).Promise
        }, function (t, e) {
        }, function (t, e, n) {
            var l = n(16), h = n(17);
            t.exports = function (s) {
                return function (t, e) {
                    var n, i, r = String(h(t)), o = l(e), a = r.length;
                    return o < 0 || a <= o ? s ? "" : void 0 : (n = r.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (i = r.charCodeAt(o + 1)) < 56320 || 57343 < i ? s ? r.charAt(o) : n : s ? r.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
                }
            }
        }, function (t, e, n) {
            t.exports = !n(7) && !n(19)(function () {
                return 7 != Object.defineProperty(n(20)("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (t, e, n) {
            var r = n(12);
            t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, i;
                if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
                if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
                if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        }, function (t, e, n) {
            t.exports = n(4)
        }, function (t, e, n) {
            "use strict";
            var i = n(53), r = n(21), o = n(25), a = {};
            n(4)(a, n(0)("iterator"), function () {
                return this
            }), t.exports = function (t, e, n) {
                t.prototype = i(a, {next: r(1, n)}), o(t, e + " Iterator")
            }
        }, function (t, e, i) {
            function r() {
            }

            var o = i(6), a = i(54), s = i(33), l = i(24)("IE_PROTO"), h = "prototype", u = function () {
                var t, e = i(20)("iframe"), n = s.length;
                for (e.style.display = "none", i(34).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u[h][s[n]];
                return u()
            };
            t.exports = Object.create || function (t, e) {
                var n;
                return null !== t ? (r[h] = o(t), n = new r, r[h] = null, n[l] = t) : n = u(), void 0 === e ? n : a(n, e)
            }
        }, function (t, e, n) {
            var a = n(5), s = n(6), l = n(30);
            t.exports = n(7) ? Object.defineProperties : function (t, e) {
                s(t);
                for (var n, i = l(e), r = i.length, o = 0; o < r;) a.f(t, n = i[o++], e[n]);
                return t
            }
        }, function (t, e, n) {
            var a = n(13), s = n(22), l = n(57)(!1), h = n(24)("IE_PROTO");
            t.exports = function (t, e) {
                var n, i = s(t), r = 0, o = [];
                for (n in i) n != h && a(i, n) && o.push(n);
                for (; e.length > r;) a(i, n = e[r++]) && (~l(o, n) || o.push(n));
                return o
            }
        }, function (t, e, n) {
            var i = n(14);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
                return "String" == i(t) ? t.split("") : Object(t)
            }
        }, function (t, e, n) {
            var l = n(22), h = n(23), u = n(58);
            t.exports = function (s) {
                return function (t, e, n) {
                    var i, r = l(t), o = h(r.length), a = u(n, o);
                    if (s && e != e) {
                        for (; a < o;) if ((i = r[a++]) != i) return !0
                    } else for (; a < o; a++) if ((s || a in r) && r[a] === e) return s || a || 0;
                    return !s && -1
                }
            }
        }, function (t, e, n) {
            var i = n(16), r = Math.max, o = Math.min;
            t.exports = function (t, e) {
                return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
            }
        }, function (t, e, n) {
            var i = n(13), r = n(26), o = n(24)("IE_PROTO"), a = Object.prototype;
            t.exports = Object.getPrototypeOf || function (t) {
                return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
        }, function (t, e, n) {
            n(61);
            for (var i = n(2), r = n(4), o = n(10), a = n(0)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
                var h = s[l], u = i[h], c = u && u.prototype;
                c && !c[a] && r(c, a, h), o[h] = o.Array
            }
        }, function (t, e, n) {
            "use strict";
            var i = n(62), r = n(63), o = n(10), a = n(22);
            t.exports = n(28)(Array, "Array", function (t, e) {
                this._t = a(t), this._i = 0, this._k = e
            }, function () {
                var t = this._t, e = this._k, n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
            }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
        }, function (t, e) {
            t.exports = function () {
            }
        }, function (t, e) {
            t.exports = function (t, e) {
                return {value: e, done: !!t}
            }
        }, function (t, e, n) {
            "use strict";

            function i() {
            }

            function r(t, e) {
                return t === e || t === A && e === f
            }

            function u(t) {
                var e;
                return !(!v(t) || "function" != typeof (e = t.then)) && e
            }

            function o(t) {
                return r(A, t) ? new I(t) : new c(t)
            }

            function h(t) {
                try {
                    t()
                } catch (t) {
                    return {error: t}
                }
            }

            function a(h, n) {
                if (!h._n) {
                    h._n = !0;
                    var i = h._c;
                    T(function () {
                        for (var s = h._v, l = 1 == h._s, t = 0, e = function (t) {
                            var e, n, i = l ? t.ok : t.fail, r = t.resolve, o = t.reject, a = t.domain;
                            try {
                                i ? (l || (2 == h._h && z(h), h._h = 1), !0 === i ? e = s : (a && a.enter(), e = i(s), a && a.exit()), e === t.promise ? o(E("Promise-chain cycle")) : (n = u(e)) ? n.call(e, r, o) : r(e)) : o(s)
                            } catch (t) {
                                o(t)
                            }
                        }; i.length > t;) e(i[t++]);
                        h._c = [], h._n = !1, n && !h._h && P(h)
                    })
                }
            }

            function s(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), a(e, !0))
            }

            var l, c, f, d = n(29), p = n(2), m = n(9), g = n(35), y = n(8), v = n(12), w = n(18), b = n(65), x = n(66),
                _ = n(67), B = n(39).set, T = n(69)(), k = "Promise", E = p.TypeError, R = p.process, A = p[k],
                S = "process" == g(R = p.process), C = !!function () {
                    try {
                        var t = A.resolve(1), e = (t.constructor = {})[n(0)("species")] = function (t) {
                            t(i, i)
                        };
                        return (S || "function" == typeof PromiseRejectionEvent) && t.then(i) instanceof e
                    } catch (t) {
                    }
                }(), I = c = function (t) {
                    var n, i;
                    this.promise = new t(function (t, e) {
                        if (void 0 !== n || void 0 !== i) throw E("Bad Promise constructor");
                        n = t, i = e
                    }), this.resolve = w(n), this.reject = w(i)
                }, P = function (r) {
                    B.call(p, function () {
                        var t, e, n, i = r._v;
                        if (L(r) && (t = h(function () {
                            S ? R.emit("unhandledRejection", i, r) : (e = p.onunhandledrejection) ? e({
                                promise: r,
                                reason: i
                            }) : (n = p.console) && n.error && n.error("Unhandled promise rejection", i)
                        }), r._h = S || L(r) ? 2 : 1), r._a = void 0, t) throw t.error
                    })
                }, L = function (t) {
                    if (1 == t._h) return !1;
                    for (var e, n = t._a || t._c, i = 0; n.length > i;) if ((e = n[i++]).fail || !L(e.promise)) return !1;
                    return !0
                }, z = function (e) {
                    B.call(p, function () {
                        var t;
                        S ? R.emit("rejectionHandled", e) : (t = p.onrejectionhandled) && t({promise: e, reason: e._v})
                    })
                }, O = function (t) {
                    var n, i = this;
                    if (!i._d) {
                        i._d = !0, i = i._w || i;
                        try {
                            if (i === t) throw E("Promise can't be resolved itself");
                            (n = u(t)) ? T(function () {
                                var e = {_w: i, _d: !1};
                                try {
                                    n.call(t, m(O, e, 1), m(s, e, 1))
                                } catch (t) {
                                    s.call(e, t)
                                }
                            }) : (i._v = t, i._s = 1, a(i, !1))
                        } catch (t) {
                            s.call({_w: i, _d: !1}, t)
                        }
                    }
                };
            C || (A = function (t) {
                b(this, A, k, "_h"), w(t), l.call(this);
                try {
                    t(m(O, this, 1), m(s, this, 1))
                } catch (t) {
                    s.call(this, t)
                }
            }, (l = function (t) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }).prototype = n(70)(A.prototype, {
                then: function (t, e) {
                    var n = o(_(this, A));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = S ? R.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && a(this, !1), n.promise
                }, catch: function (t) {
                    return this.then(void 0, t)
                }
            }), I = function () {
                var t = new l;
                this.promise = t, this.resolve = m(O, t, 1), this.reject = m(s, t, 1)
            }), y(y.G + y.W + y.F * !C, {Promise: A}), n(25)(A, k), n(71)(k), f = n(3)[k], y(y.S + y.F * !C, k, {
                reject: function (t) {
                    var e = o(this);
                    return (0, e.reject)(t), e.promise
                }
            }), y(y.S + y.F * (d || !C), k, {
                resolve: function (t) {
                    if (t instanceof A && r(t.constructor, this)) return t;
                    var e = o(this);
                    return (0, e.resolve)(t), e.promise
                }
            }), y(y.S + y.F * !(C && n(40)(function (t) {
                A.all(t).catch(i)
            })), k, {
                all: function (t) {
                    var a = this, e = o(a), s = e.resolve, l = e.reject, n = h(function () {
                        var i = [], r = 0, o = 1;
                        x(t, !1, function (t) {
                            var e = r++, n = !1;
                            i.push(void 0), o++, a.resolve(t).then(function (t) {
                                n || (n = !0, i[e] = t, --o || s(i))
                            }, l)
                        }), --o || s(i)
                    });
                    return n && l(n.error), e.promise
                }, race: function (t) {
                    var e = this, n = o(e), i = n.reject, r = h(function () {
                        x(t, !1, function (t) {
                            e.resolve(t).then(n.resolve, i)
                        })
                    });
                    return r && i(r.error), n.promise
                }
            })
        }, function (t, e) {
            t.exports = function (t, e, n, i) {
                if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
                return t
            }
        }, function (t, e, n) {
            var f = n(9), d = n(36), p = n(37), m = n(6), g = n(23), y = n(38), v = {}, w = {};
            (e = t.exports = function (t, e, n, i, r) {
                var o, a, s, l, h = r ? function () {
                    return t
                } : y(t), u = f(n, i, e ? 2 : 1), c = 0;
                if ("function" != typeof h) throw TypeError(t + " is not iterable!");
                if (p(h)) {
                    for (o = g(t.length); c < o; c++) if ((l = e ? u(m(a = t[c])[0], a[1]) : u(t[c])) === v || l === w) return l
                } else for (s = h.call(t); !(a = s.next()).done;) if ((l = d(s, u, a.value, e)) === v || l === w) return l
            }).BREAK = v, e.RETURN = w
        }, function (t, e, n) {
            var r = n(6), o = n(18), a = n(0)("species");
            t.exports = function (t, e) {
                var n, i = r(t).constructor;
                return void 0 === i || null == (n = r(i)[a]) ? e : o(n)
            }
        }, function (t, e) {
            t.exports = function (t, e, n) {
                var i = void 0 === n;
                switch (e.length) {
                    case 0:
                        return i ? t() : t.call(n);
                    case 1:
                        return i ? t(e[0]) : t.call(n, e[0]);
                    case 2:
                        return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                    case 3:
                        return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                    case 4:
                        return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
                }
                return t.apply(n, e)
            }
        }, function (t, e, n) {
            var s = n(2), l = n(39).set, h = s.MutationObserver || s.WebKitMutationObserver, u = s.process,
                c = s.Promise, f = "process" == n(14)(u);
            t.exports = function () {
                function t() {
                    var t, e;
                    for (f && (t = u.domain) && t.exit(); n;) {
                        e = n.fn, n = n.next;
                        try {
                            e()
                        } catch (t) {
                            throw n ? r() : i = void 0, t
                        }
                    }
                    i = void 0, t && t.enter()
                }

                var n, i, r;
                if (f) r = function () {
                    u.nextTick(t)
                }; else if (h) {
                    var e = !0, o = document.createTextNode("");
                    new h(t).observe(o, {characterData: !0}), r = function () {
                        o.data = e = !e
                    }
                } else if (c && c.resolve) {
                    var a = c.resolve();
                    r = function () {
                        a.then(t)
                    }
                } else r = function () {
                    l.call(s, t)
                };
                return function (t) {
                    var e = {fn: t, next: void 0};
                    i && (i.next = e), n || (n = e, r()), i = e
                }
            }
        }, function (t, e, n) {
            var r = n(4);
            t.exports = function (t, e, n) {
                for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
                return t
            }
        }, function (t, e, n) {
            "use strict";
            var i = n(2), r = n(3), o = n(5), a = n(7), s = n(0)("species");
            t.exports = function (t) {
                var e = "function" == typeof r[t] ? r[t] : i[t];
                a && e && !e[s] && o.f(e, s, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        }, function (t, e, n) {
            t.exports = n(73)
        }, function (t, e, n) {
            var i = function () {
                    return this
                }() || Function("return this")(),
                r = i.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime"),
                o = r && i.regeneratorRuntime;
            if (i.regeneratorRuntime = void 0, t.exports = n(74), r) i.regeneratorRuntime = o; else try {
                delete i.regeneratorRuntime
            } catch (t) {
                i.regeneratorRuntime = void 0
            }
        }, function (P, t) {
            !function (t) {
                "use strict";
                var l, e = Object.prototype, h = e.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator", i = n.asyncIterator || "@@asyncIterator",
                    o = n.toStringTag || "@@toStringTag", a = "object" == typeof P, s = t.regeneratorRuntime;
                if (s) a && (P.exports = s); else {
                    (s = t.regeneratorRuntime = a ? P.exports : {}).wrap = w;
                    var u = "suspendedStart", c = "suspendedYield", f = "executing", d = "completed", p = {}, m = {};
                    m[r] = function () {
                        return this
                    };
                    var g = Object.getPrototypeOf, y = g && g(g(C([])));
                    y && y !== e && h.call(y, r) && (m = y);
                    var v = B.prototype = x.prototype = Object.create(m);
                    _.prototype = v.constructor = B, B.constructor = _, B[o] = _.displayName = "GeneratorFunction", s.isGeneratorFunction = function (t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
                    }, s.mark = function (t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, B) : (t.__proto__ = B, o in t || (t[o] = "GeneratorFunction")), t.prototype = Object.create(v), t
                    }, s.awrap = function (t) {
                        return {__await: t}
                    }, T(k.prototype), k.prototype[i] = function () {
                        return this
                    }, s.AsyncIterator = k, s.async = function (t, e, n, i) {
                        var r = new k(w(t, e, n, i));
                        return s.isGeneratorFunction(e) ? r : r.next().then(function (t) {
                            return t.done ? t.value : r.next()
                        })
                    }, T(v), v[o] = "Generator", v[r] = function () {
                        return this
                    }, v.toString = function () {
                        return "[object Generator]"
                    }, s.keys = function (n) {
                        var i = [];
                        for (var t in n) i.push(t);
                        return i.reverse(), function t() {
                            for (; i.length;) {
                                var e = i.pop();
                                if (e in n) return t.value = e, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                    }, s.values = C, S.prototype = {
                        constructor: S, reset: function (t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = !1, this.delegate = null, this.method = "next", this.arg = l, this.tryEntries.forEach(A), !t) for (var e in this) "t" === e.charAt(0) && h.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = l)
                        }, stop: function () {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        }, dispatchException: function (n) {
                            if (this.done) throw n;
                            var i = this;

                            function t(t, e) {
                                return o.type = "throw", o.arg = n, i.next = t, e && (i.method = "next", i.arg = l), !!e
                            }

                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                var r = this.tryEntries[e], o = r.completion;
                                if ("root" === r.tryLoc) return t("end");
                                if (r.tryLoc <= this.prev) {
                                    var a = h.call(r, "catchLoc"), s = h.call(r, "finallyLoc");
                                    if (a && s) {
                                        if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                        if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                                    } else {
                                        if (!s) throw new Error("try statement without catch or finally");
                                        if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                                    }
                                }
                            }
                        }, abrupt: function (t, e) {
                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && h.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var r = i;
                                    break
                                }
                            }
                            r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                            var o = r ? r.completion : {};
                            return o.type = t, o.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, p) : this.complete(o)
                        }, complete: function (t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                        }, finish: function (t) {
                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), A(n), p
                            }
                        }, catch: function (t) {
                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var i = n.completion;
                                    if ("throw" === i.type) {
                                        var r = i.arg;
                                        A(n)
                                    }
                                    return r
                                }
                            }
                            throw new Error("illegal catch attempt")
                        }, delegateYield: function (t, e, n) {
                            return this.delegate = {
                                iterator: C(t),
                                resultName: e,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = l), p
                        }
                    }
                }

                function w(t, e, n, i) {
                    var r = e && e.prototype instanceof x ? e : x, o = Object.create(r.prototype), a = new S(i || []);
                    return o._invoke = function (o, a, s) {
                        var l = u;
                        return function (t, e) {
                            if (l === f) throw new Error("Generator is already running");
                            if (l === d) {
                                if ("throw" === t) throw e;
                                return I()
                            }
                            for (s.method = t, s.arg = e; ;) {
                                var n = s.delegate;
                                if (n) {
                                    var i = E(n, s);
                                    if (i) {
                                        if (i === p) continue;
                                        return i
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg; else if ("throw" === s.method) {
                                    if (l === u) throw l = d, s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                l = f;
                                var r = b(o, a, s);
                                if ("normal" === r.type) {
                                    if (l = s.done ? d : c, r.arg === p) continue;
                                    return {value: r.arg, done: s.done}
                                }
                                "throw" === r.type && (l = d, s.method = "throw", s.arg = r.arg)
                            }
                        }
                    }(t, n, a), o
                }

                function b(t, e, n) {
                    try {
                        return {type: "normal", arg: t.call(e, n)}
                    } catch (t) {
                        return {type: "throw", arg: t}
                    }
                }

                function x() {
                }

                function _() {
                }

                function B() {
                }

                function T(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t)
                        }
                    })
                }

                function k(l) {
                    var e;
                    this._invoke = function (n, i) {
                        function t() {
                            return new Promise(function (t, e) {
                                !function e(t, n, i, r) {
                                    var o = b(l[t], l, n);
                                    if ("throw" !== o.type) {
                                        var a = o.arg, s = a.value;
                                        return s && "object" == typeof s && h.call(s, "__await") ? Promise.resolve(s.__await).then(function (t) {
                                            e("next", t, i, r)
                                        }, function (t) {
                                            e("throw", t, i, r)
                                        }) : Promise.resolve(s).then(function (t) {
                                            a.value = t, i(a)
                                        }, r)
                                    }
                                    r(o.arg)
                                }(n, i, t, e)
                            })
                        }

                        return e = e ? e.then(t, t) : t()
                    }
                }

                function E(t, e) {
                    var n = t.iterator[e.method];
                    if (n === l) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = l, E(t, e), "throw" === e.method)) return p;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var i = b(n, t.iterator, e.arg);
                    if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, p;
                    var r = i.arg;
                    return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = l), e.delegate = null, p) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
                }

                function R(t) {
                    var e = {tryLoc: t[0]};
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function A(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{tryLoc: "root"}], t.forEach(R, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, i = function t() {
                                for (; ++n < e.length;) if (h.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = l, t.done = !0, t
                            };
                            return i.next = i
                        }
                    }
                    return {next: I}
                }

                function I() {
                    return {value: l, done: !0}
                }
            }(function () {
                return this
            }() || Function("return this")())
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var i = p(n(76)), r = p(n(1)), o = p(n(41)), a = function (t, e, n) {
                return e && s(t.prototype, e), n && s(t, n), t
            };

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var l = p(n(83)), h = p(n(88)), u = p(n(96)), c = p(n(97)), f = p(n(98)), d = p(n(99));

            function p(t) {
                return t && t.__esModule ? t : {default: t}
            }

            function m(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
                return (0, i.default)(t)
            }

            var g = (a(y, [{
                key: "reloadSocial", value: function () {
                    this.shareButtons.map(function (t) {
                        t.closeInline(), t.reload()
                    })
                }
            }, {
                key: "init", value: function () {
                    var i = this;
                    if (console.log("Zalo Social Plugin is loaded successfully"),
                        this.socialPlugins = this.findAllSocialPluginDiv(),
                    this.socialPlugins.share && this.socialPlugins.share.map(function (t) {
                        var e = d.default.create(), n = new h.default(t, e, i);
                        n.render(), i.mapShareButton[e] = n, i.shareButtons.push(n)
                    }), this.socialPlugins.follow && this.socialPlugins.follow.map(function (t) {
                        var e = d.default.create(), n = new u.default(t, e);
                        n.render(), i.followButton.push(n)
                    }), this.socialPlugins.followonly && this.socialPlugins.followonly.map(function (t) {
                        var e = d.default.create(), n = new c.default(t, e);
                        n.render(), i.followButtonOnly.push(n)
                    }), this.socialPlugins.comment) {
                        var t = new f.default(this.socialPlugins.comment);
                        t.render(), this.commentIFrame = t
                    }
                    if (this.socialPlugins.chatwidget) {
                        var e = d.default.create(), n = new l.default(this.socialPlugins.chatwidget, e);
                        n.render(), this.chatwidget = n
                    }
                }
            }, {
                key: "receiveMessage", value: function (t) {
                    if (t.data) switch (t.data.cmd) {
                        case"zsdk_newtab":
                            this.openInNewTab(t.data.url);
                            break;
                        case"zsdk_popup":
                            this.openInPopup(t.data.url, t.data.title, t.data.width, t.data.height);
                            break;
                        case"zsdk_redirect":
                            this.redirect(t.data.url);
                            break;
                        case"zsdk_button_click":
                            this.mapShareButton[t.data.id].onButtonClick();
                            break;
                        case"zsdk_update_share_data":
                            this.mapShareButton[t.data.id].setData(t.data.data);
                            break;
                        case"zsdk_resize_parent":
                            this.resizeParent(t.data.height);
                            break;
                        case"zsdk_get_top_body_parent":
                            this.getTopParentBody();
                            break;
                        case"zsdk_excute_recaptcha":
                            this.executeRecaptcha(t.data)
                    }
                }
            }, {
                key: "reload", value: function () {
                    this.shareButtons.map(function (t) {
                        t.destroy()
                    }), this.shareButtons = [], this.followButton = [], this.followButtonOnly = [],
                    null != this.chatwidget && this.chatwidget.destroy(),
                    (this.chatwidget = null) != this.commentIFrame && this.commentIFrame.destroy(), this.commentIFrame = null, this.init()
                }
            }, {
                key: "retry", value: function () {
                    var t = {share: [], follow: [], followonly: []};
                    t.share = [].concat(m(document.getElementsByClassName("zalo-share-button"))),
                        t.follow = [].concat(m(document.getElementsByClassName("zalo-follow-button"))),
                        t.followonly = [].concat(m(document.getElementsByClassName("zalo-follow-only-button"))),
                        t.comment = document.getElementsByClassName("zalo-comment-plugin")[0],
                        t.chatwidget = document.getElementsByClassName("zalo-chat-widget")[0], (0, o.default)(t) != (0, o.default)(this.socialPlugins) && this.reload()
                }
            }, {
                key: "findAllSocialPluginDiv", value: function () {
                    console.log('121212');
                    var t = {share: [], follow: [], followonly: []};
                    if (t.share = [].concat(m(document.getElementsByClassName("zalo-share-button"))),
                        t.follow = [].concat(m(document.getElementsByClassName("zalo-follow-button"))),
                        t.followonly = [].concat(m(document.getElementsByClassName("zalo-follow-only-button"))),
                        t.comment = document.getElementsByClassName("zalo-comment-plugin")[0],
                        t.chatwidget = document.getElementsByClassName("zalo-chat-widget")[0], t.share)
                        return t
                }
            }, {
                key: "redirect", value: function (t) {
                    window.location.href = t
                }
            }, {
                key: "openInNewTab", value: function (t) {
                    var e = this, n = window.open(t, "_blank");
                    n.focus(), null != this.zShareTimer && clearInterval(this.zShareTimer), this.zShareTimer = setInterval(function () {
                        n.closed && (clearInterval(e.zShareTimer), e.zShareTimer = null, e.shareButtons.map(function (t) {
                            t.reload()
                        }))
                    }, 1e3)
                }
            }, {
                key: "openInPopup", value: function (t, e, n, i) {
                    var r = this, o = this.popupCenter(t, e, n, i);
                    null != this.zShareTimer && clearInterval(this.zShareTimer), this.zShareTimer = setInterval(function () {
                        o.closed && (clearInterval(r.zShareTimer), r.zShareTimer = null, r.shareButtons.map(function (t) {
                            t.reload()
                        }), r.followButton.map(function (t) {
                            t.reload()
                        }), r.followButtonOnly.map(function (t) {
                            t.reload()
                        }), r.commentIFrame.reload())
                    }, 1e3)
                }
            }, {
                key: "executeRecaptcha", value: function (t) {
                    switch (t.typeIframe) {
                        case"chat_oa_widget":
                            break;
                        case"comment_iframe":
                            GLOBAL_IFRAME = this.commentIFrame.getIframe
                    }
                    grecaptcha.execute(GLOBAL_ID_RECAPTCHA)
                }
            }, {
                key: "popupCenter", value: function (t, e, n, i) {
                    var r = null != window.screenLeft ? window.screenLeft : screen.left,
                        o = null != window.screenTop ? window.screenTop : screen.top,
                        a = (window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width) / 2 - n / 2 + r,
                        s = (window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - i / 2 + o,
                        l = window.open(t, e, "directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=" + n + ", height=" + i + ", top=" + s + ", left=" + a);
                    return window.focus && l.focus(), l
                }
            }, {
                key: "resizeParent", value: function (t) {
                    this.commentIFrame.resizeParent(t)
                }
            }, {
                key: "getTopParentBody", value: function () {
                    this.commentIFrame.getTopParentBody()
                }
            }, {
                key: "openChatWidget", value: function () {
                    this.chatwidget.openChatWidget()
                }
            }, {
                key: "closeChatWidget", value: function () {
                    this.chatwidget.closeChatWidget()
                }
            }]), y);

            function y() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, y), this.shareButtons = [], this.followButton = [], this.followButtonOnly = [], this.chatwidget = null, this.mapShareButton = {}, this.zShareTimer = null, this.commentIFrame = null, this.socialPlugins = {}, this.receiveMessage = this.receiveMessage.bind(this), this.reloadSocial = this.reloadSocial.bind(this), window.addEventListener("message", this.receiveMessage, !0), window.addEventListener("focus", this.reloadSocial, !1)
            }

            e.default = g
        }, function (t, e, n) {
            t.exports = {default: n(77), __esModule: !0}
        }, function (t, e, n) {
            n(27), n(78), t.exports = n(3).Array.from
        }, function (t, e, n) {
            "use strict";
            var f = n(9), i = n(8), d = n(26), p = n(36), m = n(37), g = n(23), y = n(79), v = n(38);
            i(i.S + i.F * !n(40)(function (t) {
                Array.from(t)
            }), "Array", {
                from: function (t) {
                    var e, n, i, r, o = d(t), a = "function" == typeof this ? this : Array, s = arguments.length,
                        l = 1 < s ? arguments[1] : void 0, h = void 0 !== l, u = 0, c = v(o);
                    if (h && (l = f(l, 2 < s ? arguments[2] : void 0, 2)), null == c || a == Array && m(c)) for (n = new a(e = g(o.length)); u < e; u++) y(n, u, h ? l(o[u], u) : o[u]); else for (r = c.call(o), n = new a; !(i = r.next()).done; u++) y(n, u, h ? p(r, l, [i.value, u], !0) : i.value);
                    return n.length = u, n
                }
            })
        }, function (t, e, n) {
            "use strict";
            var i = n(5), r = n(21);
            t.exports = function (t, e, n) {
                e in t ? i.f(t, e, r(0, n)) : t[e] = n
            }
        }, function (t, e, n) {
            n(81);
            var i = n(3).Object;
            t.exports = function (t, e, n) {
                return i.defineProperty(t, e, n)
            }
        }, function (t, e, n) {
            var i = n(8);
            i(i.S + i.F * !n(7), "Object", {defineProperty: n(5).f})
        }, function (t, e, n) {
            var i = n(3), r = i.JSON || (i.JSON = {stringify: JSON.stringify});
            t.exports = function (t) {
                return r.stringify.apply(r, arguments)
            }
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = l(n(1)), i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var a = l(n(11)), s = l(n(15));

            function l(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var h = (i(u, [{
                key: "getDataFromElement", value: function (t) {
                    var e = {};
                    return e.position = t.getAttribute("data-position"), e.oaid = t.getAttribute("data-oaid"), e.welcomemessage = t.getAttribute("data-welcome-message"), e.autopopup = t.getAttribute("data-autopopup"), e.width = t.getAttribute("data-width"), e.height = t.getAttribute("data-height"), e.style = t.getAttribute("data-style"), e.width && "0" !== e.width || (e.width = 400), e.height && "0" !== e.height || (e.height = 500), e.style ? 1 != e.style && 2 != e.style && (e.style = 2, console.warn("[ZaloSocialPlugin] [ChatWidgetPlugin] | Warning: Need to set 'data-style' attribute equals to 1 or 2"), console.warn("[ZaloSocialPlugin] [ChatWidgetPlugin] | Warning: 1 for RECTANGLE style - 2 for CIRCLE style")) : e.style = 2, e.id = this.id, e.domain = document.domain, e
                }
            }, {
                key: "validate", value: function () {
                    return !!this.data.oaid || (console.warn("[Zalo Social Plugin]", "The chat widget button have no data-oaid attribute"), !1)
                }
            }, {
                key: "updateDragHolderElementStyle", value: function () {
                    if (this.isChatBoxOpened) this.dragHolder.style.left = 0, this.dragHolder.style.right = "", this.dragHolder.style.width = "80%"; else {
                        if (this.isRectangleVersion()) return void (this.dragHolder.style.width = "0px");
                        window.getComputedStyle(this.element, null).getPropertyValue("left").replace("px", "") < 10 ? (this.dragHolder.style.left = 0, this.dragHolder.style.right = "") : (this.dragHolder.style.left = "", this.dragHolder.style.right = 0), this.dragHolder.style.width = this.isHandleClosedBoxChatToolTip ? this.initClosedBoxWidth + "px" : "70px"
                    }
                }
            }, {
                key: "render", value: function () {
                    var t = this;
                    this.validate() && (this.iframe = document.createElement("iframe"), this.iframe.frameBorder = 0, this.iframe.allowFullscreen = "true", this.iframe.scrolling = "no", this.iframe.width = 260, this.iframe.height = 46, this.iframe.style.position = "absolute", this.iframe.style.bottom = "0px", this.iframe.style.right = "0px", this.element.style.zIndex = "99999999999", this.element.style.border = "none", this.element.style.visibility = "visible", this.element.style.bottom = "0px", this.element.style.left = this.element.style.left || "", this.element.style.right = "0px", this.element.style.position = "fixed", this.element.style.width = "300px", this.iframe.src = "https://sp.zalo.me/plugins/chat-widget" + a.default.jsonToQueryString(this.data), this.element.appendChild(this.iframe), this.dragHolder = document.createElement("div"), this.dragHolder.id = "drag-holder", this.dragHolder.style.position = "absolute", this.dragHolder.style.top = "0px", this.isRectangleVersion() ? (this.dragHolder.style.left = "0px", this.dragHolder.style.width = "80%", this.dragHolder.style.height = "56px") : (this.dragHolder.style.right = "0px", this.dragHolder.style.width = "70px", this.dragHolder.style.height = "70px"), this.dragHolder.style.cursor = "move", this.dragHolder.draggable = !0, this.dragLeft = document.createElement("div"), this.dragLeft.id = "drag-left", this.dragLeft.style.position = "absolute", this.dragLeft.style.top = "0px", this.dragLeft.style.left = "0px", this.dragLeft.style.width = "10px", this.dragLeft.style.height = "100%", this.dragLeft.style.cursor = "w-resize", this.dragRight = document.createElement("div"), this.dragRight.id = "drag-right", this.dragRight.style.position = "absolute", this.dragRight.style.top = "0px", this.dragRight.style.right = "0px", this.dragRight.style.width = "10px", this.dragRight.style.height = "100%", this.dragRight.style.cursor = "e-resize", this.dragTop = document.createElement("div"), this.dragTop.id = "drag-top", this.dragTop.style.position = "absolute", this.dragTop.style.top = "0px", this.dragTop.style.width = "100%", this.dragTop.style.height = "10px", this.dragTop.style.cursor = "n-resize", this.dragBottom = document.createElement("div"), this.dragBottom.id = "drag-bottom", this.dragBottom.style.position = "absolute", this.dragBottom.style.bottom = "0px", this.dragBottom.style.width = "100%", this.dragBottom.style.height = "10px", this.dragBottom.style.cursor = "s-resize", this.dragTopLeft = document.createElement("div"), this.dragTopLeft.id = "drag-top-left", this.dragTopLeft.style.position = "absolute", this.dragTopLeft.style.top = "0px", this.dragTopLeft.style.left = "0px", this.dragTopLeft.style.width = "15px", this.dragTopLeft.style.height = "15px", this.dragTopLeft.style.cursor = "nw-resize", this.dragTopRight = document.createElement("div"), this.dragTopRight.id = "drag-top-right", this.dragTopRight.style.position = "absolute", this.dragTopRight.style.top = "0px", this.dragTopRight.style.right = "0px", this.dragTopRight.style.width = "15px", this.dragTopRight.style.height = "15px", this.dragTopRight.style.cursor = "ne-resize", this.dragBottomRight = document.createElement("div"), this.dragBottomRight.id = "drag-bottom-right", this.dragBottomRight.style.position = "absolute", this.dragBottomRight.style.bottom = "0px", this.dragBottomRight.style.right = "0px", this.dragBottomRight.style.width = "15px", this.dragBottomRight.style.height = "15px", this.dragBottomRight.style.cursor = "se-resize", this.dragBottomLeft = document.createElement("div"), this.dragBottomLeft.id = "drag-bottom-left", this.dragBottomLeft.style.position = "absolute", this.dragBottomLeft.style.bottom = "0px", this.dragBottomLeft.style.left = "0px", this.dragBottomLeft.style.width = "15px", this.dragBottomLeft.style.height = "15px", this.dragBottomLeft.style.cursor = "sw-resize", this.overlay = document.createElement("div"), this.overlay.id = "overlay", this.overlay.style.position = "absolute", this.overlay.style.top = "0px", this.overlay.style.left = "0px", this.overlay.style.width = "100%", this.overlay.style.height = "100%", this.overlay.style.display = "none", this.element.appendChild(this.dragHolder), this.element.appendChild(this.dragLeft), this.element.appendChild(this.dragRight), this.element.appendChild(this.dragTop), this.element.appendChild(this.dragBottom),this.element.appendChild(this.dragTopLeft),this.element.appendChild(this.dragTopRight),this.element.appendChild(this.dragBottomRight),this.element.appendChild(this.dragBottomLeft),this.element.appendChild(this.overlay),this.dragHolder.onclick = function () {
                        return t.isRectangleVersion() || (t.closeChatBoxClosedToolTip(), t.saveClosedBoxPosition()), t.openChatWidget(), !1
                    },this.dragHolder.ondragstart = function () {
                        return t.isRectangleVersion() || t.closeChatBoxClosedToolTip(), t.isRectangleVersion() && !t.isChatBoxOpened || (t._drag_chat_box_init("move_chat_box"), t.dragHolderDragging = !0), !1
                    },this.dragLeft.onmousedown = function () {
                        return t._drag_chat_box_init("left-resize"), !1
                    },this.dragRight.onmousedown = function () {
                        return t._drag_chat_box_init("right-resize"), !1
                    },this.dragTop.onmousedown = function () {
                        return t._drag_chat_box_init("top-resize"), !1
                    },this.dragBottom.onmousedown = function () {
                        return t._drag_chat_box_init("bottom-resize"), !1
                    },this.dragTopLeft.onmousedown = function () {
                        return t._drag_chat_box_init("top-left-resize"), !1
                    },this.dragTopRight.onmousedown = function () {
                        return t._drag_chat_box_init("top-right-resize"), !1
                    },this.dragBottomLeft.onmousedown = function () {
                        return t._drag_chat_box_init("bottom-left-resize"), !1
                    },this.dragBottomRight.onmousedown = function () {
                        return t._drag_chat_box_init("bottom-right-resize"), !1
                    })
                }
            }, {
                key: "destroy", value: function () {
                    this.iframe.remove(), this.dragHolder.remove(), this.dragLeft.remove(), this.dragTop.remove(), this.dragRight.remove(), this.dragBottom.remove(), this.dragBottomLeft.remove(), this.dragBottomRight.remove(), this.dragTopLeft.remove(), this.dragTopRight.remove(), this.overlay.remove(), this.element.removeEventListener("message", this.receiveMessage)
                }
            }, {
                key: "reload", value: function () {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("zshare_reload", "https://sp.zalo.me")
                }
            }, {
                key: "openChatWidget", value: function () {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("open-chat-widget", "*")
                }
            }, {
                key: "closeChatWidget", value: function () {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("close-chat-widget", "*")
                }
            }, {
                key: "getTheElementStyleLeftPosition", value: function (t) {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("the_element_style_left_" + t, "*")
                }
            }, {
                key: "getWindowLocationHostName", value: function (t) {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("window_location_hostname_" + t, "*")
                }
            }, {
                key: "receiveMessage", value: function (t) {
                    if (t.data) switch (t.data.cmd) {
                        case"zchat_widget_close_chat_box":
                            this.iframe && (this.isRectangleVersion() || (this.initClosedBoxWidth || this.getWindowLocationHostName(window.location.hostname), this.isHandleClosedBoxChatToolTip || this.getTheElementStyleLeftPosition(window.getComputedStyle(this.element, null).getPropertyValue("left")), this.initClosedBoxWidth = t.data.width), this.isChatBoxOpened = !1, this.updateDragHolderElementStyle(), this.iframe.height = t.data.height, this.iframe.width = t.data.width, this.element.style.height = t.data.height + "px", this.element.style.width = t.data.width + "px", this.element.style.top = this.closedBox_top || "", this.element.style.bottom = this.closedBox_bottom || "0px", this.element.style.left = this.closedBox_left || "", this.element.style.right = this.closedBox_right || "0px", this.offResizeAndDrag());
                            break;
                        case"zchat_widget_open_chat_box":
                            this.iframe && (this.isChatBoxOpened = !0, this.updateDragHolderElementStyle(), null == this.chatBoxHeight ? (this.iframe.height = t.data.height, this.element.style.height = t.data.height + "px") : (this.iframe.height = this.chatBoxHeight, this.element.style.height = this.chatBoxHeight + "px"), null == this.chatBoxWidth ? (this.iframe.width = t.data.width, this.element.style.width = t.data.width + "px") : (this.iframe.width = this.chatBoxWidth, this.element.style.width = this.chatBoxWidth + "px"), null == this.chatBoxLeft && null == this.chatBoxTop ? (this.element.style.right = "0px", this.element.style.bottom = "0px") : (this.element.style.left = this.chatBoxLeft + "px", this.element.style.top = this.chatBoxTop + "px"), this.handleResizeWindow(), this.onResizeAndDrag());
                            break;
                        case"zchat_widget_toggle_sticker":
                            this.iframe && (null == this.chatBoxHeight ? (this.iframe.height = t.data.height, this.element.style.height = t.data.height + "px") : (this.iframe.height = this.chatBoxHeight, this.element.style.height = this.chatBoxHeight + "px"), null == this.chatBoxWidth ? (this.iframe.width = t.data.width, this.element.style.width = t.data.width + "px") : (this.iframe.width = this.chatBoxWidth, this.element.style.width = this.chatBoxWidth + "px"));
                            break;
                        case"zchat_widget_show_light_box":
                            this.iframe && (this.element.style.height = "100%", this.element.style.width = "100%", this.element.style.top = "0px", this.element.style.left = "0px", this.iframe.height = "100%", this.iframe.width = "100%", this.offResizeAndDrag());
                            break;
                        case"zchat_widget_close_light_box":
                            this.iframe && (this.element.style.height = null == this.chatBoxHeight ? "470px" : this.chatBoxHeight + "px", this.element.style.width = null == this.chatBoxWidth ? "400px" : this.chatBoxWidth + "px", this.iframe.height = null == this.chatBoxHeight ? 470 : this.chatBoxHeight, this.iframe.width = null == this.chatBoxWidth ? 400 : this.chatBoxWidth, this.element.style.top = null == this.chatBoxTop ? "" : this.chatBoxTop + "px", this.element.style.left = null == this.chatBoxLeft ? "" : this.chatBoxLeft + "px", this.onResizeAndDrag())
                    }
                }
            }, {
                key: "handleHolderDragging", value: function () {
                    if (this.dragHolderDragging) {
                        if (this.isChatBoxOpened) this.chatBoxLeft = this.element.offsetLeft, this.chatBoxTop = this.element.offsetTop, this.chatBoxWidth = this.element.offsetWidth, this.chatBoxHeight = this.element.offsetHeight; else {
                            if (this.isRectangleVersion()) return;
                            this.saveClosedBoxPosition(), this.element.offsetLeft <= window.innerWidth / 2 ? (this.closedBox_right = "", this.closedBox_left = "0px", this.chatBoxLeft = 0) : (this.closedBox_right = "0px", this.closedBox_left = "", this.chatBoxLeft = ""), this.chatBoxTop = this.element.offsetTop, this.element.style.left = this.closedBox_left || "", this.element.style.right = this.closedBox_right || ""
                        }
                        this.dragHolderDragging = !1
                    }
                }
            }, {
                key: "saveClosedBoxPosition", value: function () {
                    this.isRectangleVersion() || this.isChatBoxOpened || (this.closedBox_top = this.element.style.top, this.closedBox_bottom = this.element.style.bottom, this.closedBox_left = this.element.style.left, this.closedBox_right = this.element.style.right)
                }
            }, {
                key: "closeChatBoxClosedToolTip", value: function () {
                    this.isRectangleVersion() || this.iframe && !this.isChatBoxOpened && (this.isHandleClosedBoxChatToolTip = !0, this.iframe.width = 70, this.element.style.width = "70px", this.iframe.contentWindow.postMessage("close-chat-box-closed-tooltip", "*"))
                }
            }]), u);

            function u(t, e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, u), c.call(this), this.id = e, this.data = {}, this.element = t, this.data = this.getDataFromElement(t), this.chatBoxLeft = null, this.chatBoxTop = null, this.chatBoxHeight = null, this.chatBoxWidth = null, this.selected = null, this.x_pos = 0, this.y_pos = 0, this.x_elem = 0, this.y_elem = 0, this.type = 0, this.chatBoxHeightCurrent = 0, this.chatBoxWidthCurrent = 0, this.x_elem_relative = 0, this.y_elem_relative = 0, this.hitToTop = !1, this.hitToLeft = !1, this.hitToRight = !1, this.hitToBottom = !1, this.initWindowWidth = window.innerWidth, this.initWindowHeight = window.innerHeight, this.checkResizeWindow = !1, this.isChatBoxOpened = !1, this.dragHolderDragging = !1, this.isHandleClosedBoxChatToolTip = !1, this.closedBox_top = null, this.closedBox_bottom = null, this.closedBox_left = null, this.closedBox_right = null, this.initClosedBoxWidth = null, this.data.android = s.default.isAndroid() && s.default.isMobile(), this.data.ios = s.default.isIOS() && s.default.isMobile(), this.receiveMessage = this.receiveMessage.bind(this), window.addEventListener("message", this.receiveMessage), window.addEventListener("resize", this.handleResizeWindow, !0), document.onmousemove = this._move_chat_box, document.onmouseup = this._destroy
            }

            var c = function () {
                var n = this;
                this.isRectangleVersion = function () {
                    return 1 == n.data.style
                }, this._drag_chat_box_init = function (t) {
                    n.type = t, n.selected = n.element, n.x_elem = n.x_pos - n.selected.offsetLeft, n.y_elem = n.y_pos - n.selected.offsetTop, n.chatBoxHeightCurrent = n.selected.offsetHeight, n.chatBoxWidthCurrent = n.selected.offsetWidth, n.x_elem_relative = n.x_pos, n.y_elem_relative = n.y_pos, n.checkResizeWindow = !1, document.getElementById("overlay").style.display = "block"
                }, this._move_chat_box = function (t) {
                    if (n.x_pos = document.all ? window.event.clientX : t.pageX, n.y_pos = document.all ? window.event.clientY : t.pageY, null !== n.selected) switch (n.type) {
                        case"move_chat_box":
                            n.handleHitToTop(), n.handleHitToLeft(), n.handleHitToRight(), n.handleHitToBottom();
                            break;
                        case"left-resize":
                            n.handleLeftResize();
                            break;
                        case"right-resize":
                            n.handleRightResize();
                            break;
                        case"top-resize":
                            n.handleTopResize();
                            break;
                        case"bottom-resize":
                            n.handleBottomResize();
                            break;
                        case"top-left-resize":
                            n.handleTopResize(), n.handleLeftResize();
                            break;
                        case"top-right-resize":
                            n.handleTopResize(), n.handleRightResize();
                            break;
                        case"bottom-left-resize":
                            n.handleBottomResize(), n.handleLeftResize();
                            break;
                        case"bottom-right-resize":
                            n.handleBottomResize(), n.handleRightResize()
                    }
                }, this._destroy = function () {
                    n.handleHolderDragging(), n.selected = null, n.type = 0, document.getElementById("overlay").style.display = "none"
                }, this.handleResizeWindow = function () {
                    var t = !1;
                    if ((n.initWindowHeight > window.innerHeight || n.element.offsetTop + n.element.offsetHeight >= window.innerHeight) && (n.element.style.top = "auto"), n.initWindowWidth > window.innerWidth) {
                        var e = n.initWindowWidth - window.innerWidth;
                        t = n.element.style.left.replace("px", "") - e <= 0
                    }
                    return n.element.style.left ? n.element.style.left.replace("px", "") >= window.innerWidth ? (n.initWindowWidth = window.innerWidth, n.element.style.left = "") : t ? (n.initWindowWidth = window.innerWidth, n.element.style.left = "0px") : (window.innerWidth <= n.element.offsetWidth ? (n.element.style.left = "", n.checkResizeWindow = !0) : n.checkResizeWindow ? n.element.style.left = "" : n.element.style.left = n.element.offsetLeft < 0 ? "0px" : n.element.offsetLeft + window.innerWidth - n.initWindowWidth + "px", n.initWindowWidth = window.innerWidth, void (n.chatBoxLeft = n.element.offsetLeft)) : (n.initWindowWidth = window.innerWidth, n.element.style.left = "")
                }, this.handleTopResize = function () {
                    var t = n.selected.offsetTop + n.selected.offsetHeight,
                        e = n.selected.offsetTop + n.selected.offsetHeight - (n.y_pos - n.y_elem);
                    0 < n.y_pos - n.y_elem && (n.selected.style.height = 470 < e ? e + "px" : "470px", n.iframe.height = 470 < e ? e : 470, n.selected.style.top = 470 <= e ? n.y_pos - n.y_elem + "px" : t - 470 + "px"), n.chatBoxHeight = n.iframe.height, n.chatBoxTop = n.selected.offsetTop
                }, this.handleLeftResize = function () {
                    var t = n.selected.offsetLeft + n.selected.offsetWidth,
                        e = n.selected.offsetLeft + n.selected.offsetWidth - (n.x_pos - n.x_elem);
                    0 < n.x_pos - n.x_elem && (n.selected.style.width = 400 < e ? e + "px" : "400px", n.iframe.width = 400 < e ? e : 400, n.selected.style.left = 400 <= e ? n.x_pos - n.x_elem + "px" : t - 400 + "px"), n.chatBoxWidth = n.iframe.width, n.chatBoxLeft = n.selected.offsetLeft
                }, this.handleRightResize = function () {
                    var t = n.x_pos - n.x_elem_relative + n.chatBoxWidthCurrent;
                    n.x_pos < window.innerWidth - 14 ? (n.selected.style.width = 400 < t ? t + "px" : "400px", n.iframe.width = 400 < t ? t : 400) : (n.selected.style.width = window.innerWidth - n.selected.offsetLeft - 14 + "px", n.iframe.width = window.innerWidth - n.selected.offsetLeft - 14), n.chatBoxWidth = n.iframe.width
                }, this.handleBottomResize = function () {
                    var t = n.y_pos - n.y_elem_relative + n.chatBoxHeightCurrent;
                    n.y_pos < window.innerHeight - 1 ? (n.selected.style.height = 470 < t ? t + "px" : "470px", n.iframe.height = 470 < t ? t : 470) : (n.selected.style.height = window.innerHeight - n.selected.offsetTop + "px", n.iframe.height = window.innerHeight - n.selected.offsetTop), n.chatBoxHeight = n.iframe.height
                }, this.handleHitToTop = function () {
                    0 == n.selected.offsetTop && 1 == n.hitToTop && 35 < n.y_pos - n.y_elem && (n.selected.style.top = "35px", n.hitToTop = !1), n.selected.offsetTop < 35 ? (n.hitToTop = !0, n.selected.style.top = "0px", n.isRectangleVersion() && (n.chatBoxTop = n.y_pos - n.y_elem, 0 == n.selected.offsetTop && (n.chatBoxTop = 0))) : (n.selected.style.top = n.y_pos - n.y_elem + "px", n.isRectangleVersion() && (n.chatBoxTop = n.selected.offsetTop))
                }, this.handleHitToLeft = function () {
                    0 == n.selected.offsetLeft && 1 == n.hitToLeft && 35 < n.x_pos - n.x_elem && (n.selected.style.left = "35px", n.hitToLeft = !1), n.selected.offsetLeft < 35 ? (n.hitToLeft = !0, n.selected.style.left = "0px", n.isRectangleVersion() && (n.chatBoxLeft = n.x_pos - n.x_elem, 0 == n.selected.offsetLeft && (n.chatBoxLeft = 0))) : (n.selected.style.left = n.x_pos - n.x_elem + "px", n.isRectangleVersion() && (n.chatBoxLeft = n.x_pos - n.x_elem))
                }, this.handleHitToRight = function () {
                    var t = window.innerWidth - n.selected.offsetLeft - n.selected.offsetWidth;
                    0 == t && 1 == n.hitToRight && 35 < n.x_elem - n.x_pos && (n.selected.style.left = window.innerWidth - 35 + "px", n.hitToRight = !1), t < 35 && (n.hitToLeft = !0, n.selected.style.left = window.innerWidth - n.selected.offsetWidth - 15 + "px"), n.isRectangleVersion() && (n.chatBoxWidth = n.selected.offsetWidth), n.isRectangleVersion() && (n.chatBoxLeft = n.selected.offsetLeft)
                }, this.handleHitToBottom = function () {
                    var t = window.innerHeight - n.selected.offsetTop - n.selected.offsetHeight;
                    0 == n.offsetBottom && 1 == n.hitToBottom && 35 < n.y_elem - n.y_pos && (n.selected.style.top = window.innerHeight - 35 + "px", n.hitToBottom = !1), t < 35 && (n.hitToBottom = !0, n.selected.style.top = window.innerHeight - n.selected.offsetHeight + "px"), n.isRectangleVersion() && (n.chatBoxHeight = n.selected.offsetHeight), n.isRectangleVersion() && (n.chatBoxTop = n.selected.offsetTop)
                }, this.offResizeAndDrag = function () {
                    document.getElementById("drag-holder").style.display = "block", document.getElementById("drag-left").style.display = "none", document.getElementById("drag-right").style.display = "none", document.getElementById("drag-top").style.display = "none", document.getElementById("drag-bottom").style.display = "none", document.getElementById("drag-top-left").style.display = "none", document.getElementById("drag-top-right").style.display = "none", document.getElementById("drag-bottom-left").style.display = "none", document.getElementById("drag-bottom-right").style.display = "none"
                }, this.onResizeAndDrag = function () {
                    document.getElementById("drag-holder").style.display = "block", document.getElementById("drag-left").style.display = "block", document.getElementById("drag-right").style.display = "block", document.getElementById("drag-top").style.display = "block", document.getElementById("drag-bottom").style.display = "block", document.getElementById("drag-top-left").style.display = "block", document.getElementById("drag-top-right").style.display = "block", document.getElementById("drag-bottom-left").style.display = "block", document.getElementById("drag-bottom-right").style.display = "block"
                }
            };
            e.default = h
        }, function (t, e, n) {
            t.exports = {default: n(85), __esModule: !0}
        }, function (t, e, n) {
            n(86), t.exports = n(3).Object.keys
        }, function (t, e, n) {
            var i = n(26), r = n(30);
            n(87)("keys", function () {
                return function (t) {
                    return r(i(t))
                }
            })
        }, function (t, e, n) {
            var r = n(8), o = n(3), a = n(19);
            t.exports = function (t, e) {
                var n = (o.Object || {})[t] || Object[t], i = {};
                i[t] = e(n), r(r.S + r.F * a(function () {
                    n(1)
                }), "Object", i)
            }
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = c(n(1)), l = c(n(41)), i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var a = c(n(11)), s = c(n(15)), h = c(n(89)), u = n(91);

            function c(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var f = (i(d, [{
                key: "getDataFromElement", value: function (t) {
                    var e = {};
                    return e.dev = t.getAttribute("data-dev"), e.color = t.getAttribute("data-color"), e.oaid = t.getAttribute("data-oaid"), e.href = t.getAttribute("data-href"), e.href || (e.href = window.location.href), e.layout = t.getAttribute("data-layout"), e.customize = t.getAttribute("data-customize"), e.callback = t.getAttribute("data-callback"), e.layout || (e.layout = "icon"), e.customize ? "false" === e.customize ? e.customize = !1 : e.customize = !0 : e.customize = !1, e.id = this.id, e.domain = document.domain, e
                }
            }, {
                key: "validate", value: function () {
                    return this.data.oaid ? !!this.data.href || (console.warn("[Zalo Social Plugin]", "The share button have no data-href attribute"), !1) : (console.warn("[Zalo Social Plugin]", "The share button have no data-oaid attribute"), !1)
                }
            }, {
                key: "render", value: function () {
                    if (this.validate()) {
                        if (this.iframe = document.createElement("iframe"), this.iframe.frameBorder = 0, this.iframe.allowFullscreen = "true", this.iframe.scrolling = "no", this.data.customize) this.iframe.width = "0px", this.iframe.height = "0px", this.iframe.style.position = "absolute"; else {
                            this.element.style.overflow = "hidden", this.element.style.display = "inline-block";
                            var t = "", e = "";
                            switch (this.data.layout) {
                                case"1":
                                    t = "70px", e = "20px";
                                    break;
                                case"2":
                                    e = t = "20px";
                                    break;
                                case"3":
                                    e = t = "30px";
                                    break;
                                case"4":
                                    e = t = "40px";
                                    break;
                                case"5":
                                    t = "40px", e = "60px"
                            }
                            this.iframe.width = t, this.element.style.width = t, this.iframe.height = e, this.element.style.height = e
                        }
                        this.listenEventClickButton(), this.iframe.src = "https://sp.zalo.me/plugins/share" + a.default.jsonToQueryString(this.data), this.element.appendChild(this.iframe)
                    }
                }
            }, {
                key: "listenEventClickButton", value: function () {
                    this.element.addEventListener("click", this.onButtonClick.bind(this))
                }
            }, {
                key: "onButtonClick", value: function () {
                    this.shareNow()
                }
            }, {
                key: "destroy", value: function () {
                    this.iframe.remove(), this.element.removeEventListener("click", this.onButtonClick)
                }
            }, {
                key: "reload", value: function () {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("zshare_reload", "https://sp.zalo.me")
                }
            }, {
                key: "setData", value: function (t) {
                    this.frameData = t
                }
            }, {
                key: "shareNow", value: function () {
                    var t = encodeURIComponent(this.frameData.shareUrl);
                    if ("true" == this.frameData.android || 1 == this.frameData.android) return this.sdk.redirect("intent://zaloapp.com/#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.SUBJECT=;S.android.intent.extra.TEXT=" + t + ";B.hidePostFeed=false;B.backToSource=true;end"), !1;
                    if ("true" == this.frameData.ios || 0 == this.frameData.ios) return this.sdk.redirect("zaloshareext://shareext?url=" + t + "&type=8&version=1"), !1;
                    var e = {url: this.frameData.shareUrl},
                        n = this.frameData.baseUrl + "/share?v=2&oa=" + this.frameData.oaid + "&d=" + encodeURIComponent(u.Base64.encode((0, l.default)(e)));
                    h.default.clickShareButton();
                    var i = (0, l.default)({errorCode: 0});
                    return h.default.trackStatClickShare("https://sp.zalo.me/l/stats", "OAid=" + (this.data.oaid ? this.data.oaid.toString() : "0") + "&actionId=6&params=" + i, function () {
                    }), "logged" === this.frameData.isLogged ? this.openShareInline() : this.sdk.openInNewTab("https://id.zalo.me/account?continue=" + encodeURIComponent(n)), !1
                }
            }, {
                key: "closeInline", value: function () {
                    this.isOpenInline && (this.iframe2.remove(), window.removeEventListener("message", this.receiveMessage), document.removeEventListener("click", this.documentClick), this.isOpenInline = !1)
                }
            }, {
                key: "documentClick", value: function () {
                    this.closeInline()
                }
            }, {
                key: "openShareInline", value: function () {
                    var t = this;
                    this.iframe2 && this.closeInline();
                    var e = {url: this.frameData.shareUrl};
                    this.iframe2 = document.createElement("iframe"), this.iframe2.frameBorder = 0, this.iframe2.allowFullscreen = "true", this.iframe2.scrolling = "no", this.iframe2.width = "435", this.iframe2.height = "350", this.iframe2.src = "https://sp.zalo.me/share_inline?d=" + encodeURIComponent(u.Base64.encode((0, l.default)(e)));
                    var n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        i = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                        r = this.element.getBoundingClientRect(), o = this.getCoords(this.element),
                        a = o.top + this.element.offsetHeight + 5, s = o.left + this.element.offsetWidth / 2;
                    n - r.top < 355 && (a -= 380), i - r.left < 477 && (s -= 430), this.iframe2.style.zIndex = 9999999, this.iframe2.style.position = "absolute", this.iframe2.style.top = a + "px", this.iframe2.style.left = s + "px", this.iframe2.style.backgroundColor = "#fff", document.getElementsByTagName("body")[0].appendChild(this.iframe2), window.addEventListener("message", this.receiveMessage), this.isOpenInline = !0, setTimeout(function () {
                        document.addEventListener("click", t.documentClick)
                    }, 1e3)
                }
            }, {
                key: "getCoords", value: function (t) {
                    var e = t.getBoundingClientRect(), n = document.body, i = document.documentElement,
                        r = window.pageYOffset || i.scrollTop || n.scrollTop,
                        o = window.pageXOffset || i.scrollLeft || n.scrollLeft, a = i.clientTop || n.clientTop || 0,
                        s = i.clientLeft || n.clientLeft || 0, l = e.top + r - a, h = e.left + o - s;
                    return {top: Math.round(l), left: Math.round(h)}
                }
            }, {
                key: "receiveMessage", value: function (t) {
                    if (t.data) switch (t.data.cmd) {
                        case"zsdk_share_resize":
                            this.iframe2 && (this.iframe2.height = 400 + t.data.height);
                            break;
                        case"zsdk_share_close":
                            this.iframe2 && (window[this.data.callback] && window[this.data.callback]({data: 1}), this.closeInline())
                    }
                }
            }]), d);

            function d(t, e, n) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, d), this.sdk = n, this.id = e, this.data = {}, this.element = t, this.data = this.getDataFromElement(t), this.data.android = s.default.isAndroid() && s.default.isMobile(), this.data.ios = s.default.isIOS() && s.default.isMobile(), this.receiveMessage = this.receiveMessage.bind(this), this.closeInline = this.closeInline.bind(this), this.documentClick = this.documentClick.bind(this), this.isOpenInline = !1
            }

            e.default = f
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = s(n(1)), i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var a = s(n(90));

            function s(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var l = 2, h = (i(u, null, [{
                key: "trackStatClickShare", value: function (t, e, n) {
                    a.default.postJSOBWithCredentials(t, e, n)
                }
            }, {
                key: "clickShareButton", value: function () {
                    a.default.getTextWithCredentials("https://sp.zalo.me/l/share?action=" + l, function () {
                    })
                }
            }, {
                key: "trackingError", value: function (t, e) {
                    a.default.getTextWithCredentials("https://sp.zalo.me/tracking/log?error=" + encodeURIComponent(t) + "&data=" + e, function () {
                    })
                }
            }]), u);

            function u() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, u)
            }

            e.default = h
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var i, r = n(1), o = (i = r) && i.__esModule ? i : {default: i};

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(t, i.key, i)
                }
            }

            var s = (function (t, e, n) {
                return e && a(t.prototype, e), n && a(t, n), t
            }(l, null, [{
                key: "getJSONWithCredentials", value: function (t, e) {
                    fetch(t, {credentials: "include", method: "get"}).then(function (t) {
                        return t.json()
                    }).then(function (t) {
                        e(t)
                    })
                }
            }, {
                key: "getTextWithCredentials", value: function (t, e) {
                    fetch(t, {credentials: "include", method: "get"}).then(function (t) {
                        return t.text()
                    }).then(function (t) {
                        e(t)
                    })
                }
            }, {
                key: "postJSOBWithCredentials", value: function (t, e, n) {
                    fetch(t, {
                        method: "post",
                        credentials: "include",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: e
                    }).then(function (t) {
                        return t.json()
                    }).then(function (t) {
                        n(t)
                    })
                }
            }]), l);

            function l() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l)
            }

            e.default = s
        }, function (_, B, T) {
            (function (t) {
                var x;
                !function (e) {
                    "use strict";
                    var n, i = e.Base64;
                    if (_.exports) try {
                        n = T(92).Buffer
                    } catch (t) {
                    }

                    function r(t) {
                        if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? d(192 | e >>> 6) + d(128 | 63 & e) : d(224 | e >>> 12 & 15) + d(128 | e >>> 6 & 63) + d(128 | 63 & e);
                        var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                        return d(240 | e >>> 18 & 7) + d(128 | e >>> 12 & 63) + d(128 | e >>> 6 & 63) + d(128 | 63 & e)
                    }

                    function o(t) {
                        return t.replace(p, r)
                    }

                    function a(t) {
                        var e = [0, 2, 1][t.length % 3],
                            n = t.charCodeAt(0) << 16 | (1 < t.length ? t.charCodeAt(1) : 0) << 8 | (2 < t.length ? t.charCodeAt(2) : 0);
                        return [c.charAt(n >>> 18), c.charAt(n >>> 12 & 63), 2 <= e ? "=" : c.charAt(n >>> 6 & 63), 1 <= e ? "=" : c.charAt(63 & n)].join("")
                    }

                    function s(t, e) {
                        return e ? g(String(t)).replace(/[+\/]/g, function (t) {
                            return "+" == t ? "-" : "_"
                        }).replace(/=/g, "") : g(String(t))
                    }

                    function l(t) {
                        switch (t.length) {
                            case 4:
                                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                return d(55296 + (e >>> 10)) + d(56320 + (1023 & e));
                            case 3:
                                return d((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                            default:
                                return d((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                        }
                    }

                    function h(t) {
                        return t.replace(y, l)
                    }

                    function u(t) {
                        var e = t.length, n = e % 4,
                            i = (0 < e ? f[t.charAt(0)] << 18 : 0) | (1 < e ? f[t.charAt(1)] << 12 : 0) | (2 < e ? f[t.charAt(2)] << 6 : 0) | (3 < e ? f[t.charAt(3)] : 0),
                            r = [d(i >>> 16), d(i >>> 8 & 255), d(255 & i)];
                        return r.length -= [0, 0, 2, 1][n], r.join("")
                    }

                    function t(t) {
                        return w(String(t).replace(/[-_]/g, function (t) {
                            return "-" == t ? "+" : "/"
                        }).replace(/[^A-Za-z0-9\+\/]/g, ""))
                    }

                    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = function (t) {
                            for (var e = {}, n = 0, i = t.length; n < i; n++) e[t.charAt(n)] = n;
                            return e
                        }(c), d = String.fromCharCode, p = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        m = e.btoa ? function (t) {
                            return e.btoa(t)
                        } : function (t) {
                            return t.replace(/[\s\S]{1,3}/g, a)
                        }, g = n ? n.from && n.from !== Uint8Array.from ? function (t) {
                            return (t.constructor === n.constructor ? t : n.from(t)).toString("base64")
                        } : function (t) {
                            return (t.constructor === n.constructor ? t : new n(t)).toString("base64")
                        } : function (t) {
                            return m(o(t))
                        }, y = new RegExp(["[?-?][?-?]", "[?-?][?-?]{2}", "[?-?][?-?]{3}"].join("|"), "g"),
                        v = e.atob ? function (t) {
                            return e.atob(t)
                        } : function (t) {
                            return t.replace(/[\s\S]{1,4}/g, u)
                        }, w = n ? n.from && n.from !== Uint8Array.from ? function (t) {
                            return (t.constructor === n.constructor ? t : n.from(t, "base64")).toString()
                        } : function (t) {
                            return (t.constructor === n.constructor ? t : new n(t, "base64")).toString()
                        } : function (t) {
                            return h(v(t))
                        };
                    if (e.Base64 = {
                        VERSION: "2.3.2",
                        atob: v,
                        btoa: m,
                        fromBase64: t,
                        toBase64: s,
                        utob: o,
                        encode: s,
                        encodeURI: function (t) {
                            return s(t, !0)
                        },
                        btou: h,
                        decode: t,
                        noConflict: function () {
                            var t = e.Base64;
                            return e.Base64 = i, t
                        }
                    }, "function" == typeof Object.defineProperty) {
                        var b = function (t) {
                            return {value: t, enumerable: !1, writable: !0, configurable: !0}
                        };
                        e.Base64.extendString = function () {
                            Object.defineProperty(String.prototype, "fromBase64", b(function () {
                                return t(this)
                            })), Object.defineProperty(String.prototype, "toBase64", b(function (t) {
                                return s(this, t)
                            })), Object.defineProperty(String.prototype, "toBase64URI", b(function () {
                                return s(this, !0)
                            }))
                        }
                    }
                    e.Meteor && (Base64 = e.Base64), _.exports ? _.exports.Base64 = e.Base64 : void 0 === (x = function () {
                        return e.Base64
                    }.apply(B, [])) || (_.exports = x)
                }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : this)
            }).call(this, T(42))
        }, function (t, W, U) {
            "use strict";
            (function (t) {
                /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
                var i = U(93), o = U(94), a = U(95);

                function n() {
                    return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function s(t, e) {
                    if (n() < e) throw new RangeError("Invalid typed array length");
                    return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
                }

                function c(t, e, n) {
                    if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
                    if ("number" != typeof t) return r(this, t, e, n);
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, t)
                }

                function r(t, e, n, i) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, i) {
                        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                        e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, n) : new Uint8Array(e, n, i);
                        c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = u(t, e);
                        return t
                    }(t, e, n, i) : "string" == typeof e ? function (t, e, n) {
                        "string" == typeof n && "" !== n || (n = "utf8");
                        if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var i = 0 | d(e, n), r = (t = s(t, i)).write(e, n);
                        r !== i && (t = t.slice(0, r));
                        return t
                    }(t, e, n) : function (t, e) {
                        if (c.isBuffer(e)) {
                            var n = 0 | f(e.length);
                            return 0 === (t = s(t, n)).length || e.copy(t, 0, 0, n), t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function (t) {
                                return t != t
                            }(e.length) ? s(t, 0) : u(t, e);
                            if ("Buffer" === e.type && a(e.data)) return u(t, e.data)
                        }
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function l(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function h(t, e) {
                    if (l(e), t = s(t, e < 0 ? 0 : 0 | f(e)), !c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                    return t
                }

                function u(t, e) {
                    var n = e.length < 0 ? 0 : 0 | f(e.length);
                    t = s(t, n);
                    for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
                    return t
                }

                function f(t) {
                    if (t >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
                    return 0 | t
                }

                function d(t, e) {
                    if (c.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n) return 0;
                    for (var i = !1; ;) switch (e) {
                        case"ascii":
                        case"latin1":
                        case"binary":
                            return n;
                        case"utf8":
                        case"utf-8":
                        case void 0:
                            return z(t).length;
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return 2 * n;
                        case"hex":
                            return n >>> 1;
                        case"base64":
                            return O(t).length;
                        default:
                            if (i) return z(t).length;
                            e = ("" + e).toLowerCase(), i = !0
                    }
                }

                function p(t, e, n) {
                    var i = t[e];
                    t[e] = t[n], t[n] = i
                }

                function m(t, e, n, i, r) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (i = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (r) return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!r) return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = c.from(e, i)), c.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, n, i, r);
                    if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : g(t, [e], n, i, r);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function g(t, e, n, i, r) {
                    var o, a = 1, s = t.length, l = e.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        s /= a = 2, l /= 2, n /= 2
                    }

                    function h(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a)
                    }

                    if (r) {
                        var u = -1;
                        for (o = n; o < s; o++) if (h(t, o) === h(e, -1 === u ? 0 : o - u)) {
                            if (-1 === u && (u = o), o - u + 1 === l) return u * a
                        } else -1 !== u && (o -= o - u), u = -1
                    } else for (s < n + l && (n = s - l), o = n; 0 <= o; o--) {
                        for (var c = !0, f = 0; f < l; f++) if (h(t, o + f) !== h(e, f)) {
                            c = !1;
                            break
                        }
                        if (c) return o
                    }
                    return -1
                }

                function y(t, e, n, i) {
                    n = Number(n) || 0;
                    var r = t.length - n;
                    i ? r < (i = Number(i)) && (i = r) : i = r;
                    var o = e.length;
                    if (o % 2 != 0) throw new TypeError("Invalid hex string");
                    o / 2 < i && (i = o / 2);
                    for (var a = 0; a < i; ++a) {
                        var s = parseInt(e.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        t[n + a] = s
                    }
                    return a
                }

                function v(t, e, n, i) {
                    return M(function (t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, i)
                }

                function w(t, e, n) {
                    return 0 === e && n === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, n))
                }

                function b(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var i = [], r = e; r < n;) {
                        var o, a, s, l, h = t[r], u = null, c = 239 < h ? 4 : 223 < h ? 3 : 191 < h ? 2 : 1;
                        if (r + c <= n) switch (c) {
                            case 1:
                                h < 128 && (u = h);
                                break;
                            case 2:
                                128 == (192 & (o = t[r + 1])) && 127 < (l = (31 & h) << 6 | 63 & o) && (u = l);
                                break;
                            case 3:
                                o = t[r + 1], a = t[r + 2], 128 == (192 & o) && 128 == (192 & a) && 2047 < (l = (15 & h) << 12 | (63 & o) << 6 | 63 & a) && (l < 55296 || 57343 < l) && (u = l);
                                break;
                            case 4:
                                o = t[r + 1], a = t[r + 2], s = t[r + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && 65535 < (l = (15 & h) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) && l < 1114112 && (u = l)
                        }
                        null === u ? (u = 65533, c = 1) : 65535 < u && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), r += c
                    }
                    return function (t) {
                        var e = t.length;
                        if (e <= x) return String.fromCharCode.apply(String, t);
                        var n = "", i = 0;
                        for (; i < e;) n += String.fromCharCode.apply(String, t.slice(i, i += x));
                        return n
                    }(i)
                }

                W.Buffer = c, W.SlowBuffer = function (t) {
                    +t != t && (t = 0);
                    return c.alloc(+t)
                }, W.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype, foo: function () {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), W.kMaxLength = n(), c.poolSize = 8192, c._augment = function (t) {
                    return t.__proto__ = c.prototype, t
                }, c.from = function (t, e, n) {
                    return r(null, t, e, n)
                }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                    value: null,
                    configurable: !0
                })), c.alloc = function (t, e, n) {
                    return function (t, e, n, i) {
                        return l(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof i ? s(t, e).fill(n, i) : s(t, e).fill(n) : s(t, e)
                    }(null, t, e, n)
                }, c.allocUnsafe = function (t) {
                    return h(null, t)
                }, c.allocUnsafeSlow = function (t) {
                    return h(null, t)
                }, c.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, c.compare = function (t, e) {
                    if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var n = t.length, i = e.length, r = 0, o = Math.min(n, i); r < o; ++r) if (t[r] !== e[r]) {
                        n = t[r], i = e[r];
                        break
                    }
                    return n < i ? -1 : i < n ? 1 : 0
                }, c.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case"hex":
                        case"utf8":
                        case"utf-8":
                        case"ascii":
                        case"latin1":
                        case"binary":
                        case"base64":
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, c.concat = function (t, e) {
                    if (!a(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return c.alloc(0);
                    var n;
                    if (void 0 === e) for (n = e = 0; n < t.length; ++n) e += t[n].length;
                    var i = c.allocUnsafe(e), r = 0;
                    for (n = 0; n < t.length; ++n) {
                        var o = t[n];
                        if (!c.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(i, r), r += o.length
                    }
                    return i
                }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) p(this, e, e + 1);
                    return this
                }, c.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) p(this, e, e + 3), p(this, e + 1, e + 2);
                    return this
                }, c.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) p(this, e, e + 7), p(this, e + 1, e + 6), p(this, e + 2, e + 5), p(this, e + 3, e + 4);
                    return this
                }, c.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 == t ? "" : 0 === arguments.length ? b(this, 0, t) : function (t, e, n) {
                        var i = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8"); ;) switch (t) {
                            case"hex":
                                return T(this, e, n);
                            case"utf8":
                            case"utf-8":
                                return b(this, e, n);
                            case"ascii":
                                return _(this, e, n);
                            case"latin1":
                            case"binary":
                                return B(this, e, n);
                            case"base64":
                                return w(this, e, n);
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return k(this, e, n);
                            default:
                                if (i) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), i = !0
                        }
                    }.apply(this, arguments)
                }, c.prototype.equals = function (t) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === c.compare(this, t)
                }, c.prototype.inspect = function () {
                    var t = "", e = W.INSPECT_MAX_BYTES;
                    return 0 < this.length && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
                }, c.prototype.compare = function (t, e, n, i, r) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), e < 0 || n > t.length || i < 0 || r > this.length) throw new RangeError("out of range index");
                    if (r <= i && n <= e) return 0;
                    if (r <= i) return -1;
                    if (n <= e) return 1;
                    if (this === t) return 0;
                    for (var o = (r >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (e >>>= 0), s = Math.min(o, a), l = this.slice(i, r), h = t.slice(e, n), u = 0; u < s; ++u) if (l[u] !== h[u]) {
                        o = l[u], a = h[u];
                        break
                    }
                    return o < a ? -1 : a < o ? 1 : 0
                }, c.prototype.includes = function (t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }, c.prototype.indexOf = function (t, e, n) {
                    return m(this, t, e, n, !0)
                }, c.prototype.lastIndexOf = function (t, e, n) {
                    return m(this, t, e, n, !1)
                }, c.prototype.write = function (t, e, n, i) {
                    if (void 0 === e) i = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) i = e, n = this.length, e = 0; else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                    }
                    var r = this.length - e;
                    if ((void 0 === n || r < n) && (n = r), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var o, a, s, l, h, u, c, f, d, p = !1; ;) switch (i) {
                        case"hex":
                            return y(this, t, e, n);
                        case"utf8":
                        case"utf-8":
                            return f = e, d = n, M(z(t, (c = this).length - f), c, f, d);
                        case"ascii":
                            return v(this, t, e, n);
                        case"latin1":
                        case"binary":
                            return v(this, t, e, n);
                        case"base64":
                            return l = this, h = e, u = n, M(O(t), l, h, u);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return a = e, s = n, M(function (t, e) {
                                for (var n, i, r, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = t.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                                return o
                            }(t, (o = this).length - a), o, a, s);
                        default:
                            if (p) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), p = !0
                    }
                }, c.prototype.toJSON = function () {
                    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                };
                var x = 4096;

                function _(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; r < n; ++r) i += String.fromCharCode(127 & t[r]);
                    return i
                }

                function B(t, e, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var r = e; r < n; ++r) i += String.fromCharCode(t[r]);
                    return i
                }

                function T(t, e, n) {
                    var i = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || i < n) && (n = i);
                    for (var r = "", o = e; o < n; ++o) r += L(t[o]);
                    return r
                }

                function k(t, e, n) {
                    for (var i = t.slice(e, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                    return r
                }

                function E(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (n < t + e) throw new RangeError("Trying to access beyond buffer length")
                }

                function R(t, e, n, i, r, o) {
                    if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (r < e || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > t.length) throw new RangeError("Index out of range")
                }

                function A(t, e, n, i) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var r = 0, o = Math.min(t.length - n, 2); r < o; ++r) t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                }

                function S(t, e, n, i) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var r = 0, o = Math.min(t.length - n, 4); r < o; ++r) t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
                }

                function C(t, e, n, i, r, o) {
                    if (n + i > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function I(t, e, n, i, r) {
                    return r || C(t, 0, n, 4), o.write(t, e, n, i, 23, 4), n + 4
                }

                function P(t, e, n, i, r) {
                    return r || C(t, 0, n, 8), o.write(t, e, n, i, 52, 8), n + 8
                }

                c.prototype.slice = function (t, e) {
                    var n, i = this.length;
                    if ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : i < t && (t = i), (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : i < e && (e = i), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype; else {
                        var r = e - t;
                        n = new c(r, void 0);
                        for (var o = 0; o < r; ++o) n[o] = this[o + t]
                    }
                    return n
                }, c.prototype.readUIntLE = function (t, e, n) {
                    t |= 0, e |= 0, n || E(t, e, this.length);
                    for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256);) i += this[t + o] * r;
                    return i
                }, c.prototype.readUIntBE = function (t, e, n) {
                    t |= 0, e |= 0, n || E(t, e, this.length);
                    for (var i = this[t + --e], r = 1; 0 < e && (r *= 256);) i += this[t + --e] * r;
                    return i
                }, c.prototype.readUInt8 = function (t, e) {
                    return e || E(t, 1, this.length), this[t]
                }, c.prototype.readUInt16LE = function (t, e) {
                    return e || E(t, 2, this.length), this[t] | this[t + 1] << 8
                }, c.prototype.readUInt16BE = function (t, e) {
                    return e || E(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, c.prototype.readUInt32LE = function (t, e) {
                    return e || E(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, c.prototype.readUInt32BE = function (t, e) {
                    return e || E(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, c.prototype.readIntLE = function (t, e, n) {
                    t |= 0, e |= 0, n || E(t, e, this.length);
                    for (var i = this[t], r = 1, o = 0; ++o < e && (r *= 256);) i += this[t + o] * r;
                    return (r *= 128) <= i && (i -= Math.pow(2, 8 * e)), i
                }, c.prototype.readIntBE = function (t, e, n) {
                    t |= 0, e |= 0, n || E(t, e, this.length);
                    for (var i = e, r = 1, o = this[t + --i]; 0 < i && (r *= 256);) o += this[t + --i] * r;
                    return (r *= 128) <= o && (o -= Math.pow(2, 8 * e)), o
                }, c.prototype.readInt8 = function (t, e) {
                    return e || E(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, c.prototype.readInt16LE = function (t, e) {
                    e || E(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt16BE = function (t, e) {
                    e || E(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt32LE = function (t, e) {
                    return e || E(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, c.prototype.readInt32BE = function (t, e) {
                    return e || E(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, c.prototype.readFloatLE = function (t, e) {
                    return e || E(t, 4, this.length), o.read(this, t, !0, 23, 4)
                }, c.prototype.readFloatBE = function (t, e) {
                    return e || E(t, 4, this.length), o.read(this, t, !1, 23, 4)
                }, c.prototype.readDoubleLE = function (t, e) {
                    return e || E(t, 8, this.length), o.read(this, t, !0, 52, 8)
                }, c.prototype.readDoubleBE = function (t, e) {
                    return e || E(t, 8, this.length), o.read(this, t, !1, 52, 8)
                }, c.prototype.writeUIntLE = function (t, e, n, i) {
                    t = +t, e |= 0, n |= 0, i || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = 1, o = 0;
                    for (this[e] = 255 & t; ++o < n && (r *= 256);) this[e + o] = t / r & 255;
                    return e + n
                }, c.prototype.writeUIntBE = function (t, e, n, i) {
                    t = +t, e |= 0, n |= 0, i || R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = n - 1, o = 1;
                    for (this[e + r] = 255 & t; 0 <= --r && (o *= 256);) this[e + r] = t / o & 255;
                    return e + n
                }, c.prototype.writeUInt8 = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, c.prototype.writeUInt16LE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : A(this, t, e, !0), e + 2
                }, c.prototype.writeUInt16BE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : A(this, t, e, !1), e + 2
                }, c.prototype.writeUInt32LE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : S(this, t, e, !0), e + 4
                }, c.prototype.writeUInt32BE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : S(this, t, e, !1), e + 4
                }, c.prototype.writeIntLE = function (t, e, n, i) {
                    if (t = +t, e |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        R(this, t, e, n, r - 1, -r)
                    }
                    var o = 0, a = 1, s = 0;
                    for (this[e] = 255 & t; ++o < n && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
                    return e + n
                }, c.prototype.writeIntBE = function (t, e, n, i) {
                    if (t = +t, e |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        R(this, t, e, n, r - 1, -r)
                    }
                    var o = n - 1, a = 1, s = 0;
                    for (this[e + o] = 255 & t; 0 <= --o && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
                    return e + n
                }, c.prototype.writeInt8 = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, c.prototype.writeInt16LE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : A(this, t, e, !0), e + 2
                }, c.prototype.writeInt16BE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : A(this, t, e, !1), e + 2
                }, c.prototype.writeInt32LE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : S(this, t, e, !0), e + 4
                }, c.prototype.writeInt32BE = function (t, e, n) {
                    return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : S(this, t, e, !1), e + 4
                }, c.prototype.writeFloatLE = function (t, e, n) {
                    return I(this, t, e, !0, n)
                }, c.prototype.writeFloatBE = function (t, e, n) {
                    return I(this, t, e, !1, n)
                }, c.prototype.writeDoubleLE = function (t, e, n) {
                    return P(this, t, e, !0, n)
                }, c.prototype.writeDoubleBE = function (t, e, n) {
                    return P(this, t, e, !1, n)
                }, c.prototype.copy = function (t, e, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), 0 < i && i < n && (i = n), i === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
                    var r, o = i - n;
                    if (this === t && n < e && e < i) for (r = o - 1; 0 <= r; --r) t[r + e] = this[r + n]; else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (r = 0; r < o; ++r) t[r + e] = this[r + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                    return o
                }, c.prototype.fill = function (t, e, n, i) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (i = e, e = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === t.length) {
                            var r = t.charCodeAt(0);
                            r < 256 && (t = r)
                        }
                        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    var o;
                    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
                        var a = c.isBuffer(t) ? t : z(new c(t, i).toString()), s = a.length;
                        for (o = 0; o < n - e; ++o) this[o + e] = a[o % s]
                    }
                    return this
                };
                var e = /[^+\/0-9A-Za-z-_]/g;

                function L(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function z(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var i = t.length, r = null, o = [], a = 0; a < i; ++a) {
                        if (55295 < (n = t.charCodeAt(a)) && n < 57344) {
                            if (!r) {
                                if (56319 < n) {
                                    -1 < (e -= 3) && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === i) {
                                    -1 < (e -= 3) && o.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (n < 56320) {
                                -1 < (e -= 3) && o.push(239, 191, 189), r = n;
                                continue
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320)
                        } else r && -1 < (e -= 3) && o.push(239, 191, 189);
                        if (r = null, n < 128) {
                            if ((e -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function O(t) {
                    return i.toByteArray(function (t) {
                        if ((t = function (t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }(t).replace(e, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function M(t, e, n, i) {
                    for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r) e[r + n] = t[r];
                    return r
                }
            }).call(this, U(42))
        }, function (t, e, n) {
            "use strict";
            e.byteLength = function (t) {
                return 3 * t.length / 4 - c(t)
            }, e.toByteArray = function (t) {
                var e, n, i, r, o, a, s = t.length;
                o = c(t), a = new u(3 * s / 4 - o), i = 0 < o ? s - 4 : s;
                var l = 0;
                for (n = e = 0; e < i; e += 4, n += 3) r = h[t.charCodeAt(e)] << 18 | h[t.charCodeAt(e + 1)] << 12 | h[t.charCodeAt(e + 2)] << 6 | h[t.charCodeAt(e + 3)], a[l++] = r >> 16 & 255, a[l++] = r >> 8 & 255, a[l++] = 255 & r;
                2 === o ? (r = h[t.charCodeAt(e)] << 2 | h[t.charCodeAt(e + 1)] >> 4, a[l++] = 255 & r) : 1 === o && (r = h[t.charCodeAt(e)] << 10 | h[t.charCodeAt(e + 1)] << 4 | h[t.charCodeAt(e + 2)] >> 2, a[l++] = r >> 8 & 255, a[l++] = 255 & r);
                return a
            }, e.fromByteArray = function (t) {
                for (var e, n = t.length, i = n % 3, r = "", o = [], a = 0, s = n - i; a < s; a += 16383) o.push(f(t, a, s < a + 16383 ? s : a + 16383));
                1 == i ? (e = t[n - 1], r += l[e >> 2], r += l[e << 4 & 63], r += "==") : 2 == i && (e = (t[n - 2] << 8) + t[n - 1], r += l[e >> 10], r += l[e >> 4 & 63], r += l[e << 2 & 63], r += "=");
                return o.push(r), o.join("")
            };
            for (var l = [], h = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, o = i.length; r < o; ++r) l[r] = i[r], h[i.charCodeAt(r)] = r;

            function c(t) {
                var e = t.length;
                if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
            }

            function f(t, e, n) {
                for (var i, r, o = [], a = e; a < n; a += 3) i = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], o.push(l[(r = i) >> 18 & 63] + l[r >> 12 & 63] + l[r >> 6 & 63] + l[63 & r]);
                return o.join("")
            }

            h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63
        }, function (t, e) {
            e.read = function (t, e, n, i, r) {
                var o, a, s = 8 * r - i - 1, l = (1 << s) - 1, h = l >> 1, u = -7, c = n ? r - 1 : 0, f = n ? -1 : 1,
                    d = t[e + c];
                for (c += f, o = d & (1 << -u) - 1, d >>= -u, u += s; 0 < u; o = 256 * o + t[e + c], c += f, u -= 8) ;
                for (a = o & (1 << -u) - 1, o >>= -u, u += i; 0 < u; a = 256 * a + t[e + c], c += f, u -= 8) ;
                if (0 === o) o = 1 - h; else {
                    if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                    a += Math.pow(2, i), o -= h
                }
                return (d ? -1 : 1) * a * Math.pow(2, o - i)
            }, e.write = function (t, e, n, i, r, o) {
                var a, s, l, h = 8 * o - r - 1, u = (1 << h) - 1, c = u >> 1,
                    f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : o - 1, p = i ? 1 : -1,
                    m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = u) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), 2 <= (e += 1 <= a + c ? f / l : f * Math.pow(2, 1 - c)) * l && (a++, l /= 2), u <= a + c ? (s = 0, a = u) : 1 <= a + c ? (s = (e * l - 1) * Math.pow(2, r), a += c) : (s = e * Math.pow(2, c - 1) * Math.pow(2, r), a = 0)); 8 <= r; t[n + d] = 255 & s, d += p, s /= 256, r -= 8) ;
                for (a = a << r | s, h += r; 0 < h; t[n + d] = 255 & a, d += p, a /= 256, h -= 8) ;
                t[n + d - p] |= 128 * m
            }
        }, function (t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == n.call(t)
            }
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = l(n(1)), i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var a = l(n(11)), s = l(n(15));

            function l(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var h = (i(u, [{
                key: "getDataFromElement", value: function (t) {
                    var e = {};
                    return e.oaid = t.getAttribute("data-oaid"), e.cover = t.getAttribute("data-cover"), e.width = t.getAttribute("data-width"), e.height = t.getAttribute("data-height"), e.article = t.getAttribute("data-article"), e.color || (e.color = "yes"), (!e.article || e.article < 0 || 5 < e.article) && (e.article = 3), e.width || e.height || (e.width = "500px", e.height = "628px"), (e.width <= 200 || e.height <= 365) && (e.width = "195px", e.height = "365px"), (500 <= e.width || 622 <= e.height) && (e.width = "500px", e.height = "628px"), e.domain = document.domain, e
                }
            }, {
                key: "validate", value: function () {
                    return !!this.data.oaid || (console.warn("[Zalo Social Plugin]", "The follow button have no data-oaid attribute"), !1)
                }
            }, {
                key: "render", value: function () {
                    this.validate() && (this.iframe = document.createElement("iframe"), this.iframe.frameBorder = 0, this.iframe.allowFullscreen = "true", this.iframe.scrolling = "yes", this.element.style.overflow = "hidden", this.element.style.display = "inline-block", this.iframe.width = this.data.width, this.iframe.height = this.data.height, this.element.innerHTML = "", this.iframe.src = "https://sp.zalo.me/plugins/follow" + a.default.jsonToQueryString(this.data), this.element.appendChild(this.iframe))
                }
            }, {
                key: "reload", value: function () {
                    this.iframe.contentWindow.postMessage("zfollow_reload", "https://sp.zalo.me")
                }
            }]), u);

            function u(t) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, u), this.element = t, this.data = this.getDataFromElement(t), this.data.android = s.default.isAndroid() && s.default.isMobile(), this.data.ios = s.default.isIOS() && s.default.isMobile()
            }

            e.default = h
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = s(n(1)), i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var a = s(n(11));

            function s(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var l = (i(h, [{
                key: "checkInAppZalo", value: function () {
                    for (var t = location.hostname + "_znid", e = document.cookie.split(";"), n = "", i = 0; i < e.length; i++) {
                        var r = e[i].split("=");
                        r[0] === t && (n = r[1])
                    }
                    "" !== n && this.iframe.contentWindow.postMessage({
                        cmd: "inapp_cookie",
                        data: {key: t, data: n}
                    }, "https://sp.zalo.me")
                }
            }, {
                key: "getDataFromElement", value: function (t) {
                    var e = {};
                    return e.oaid = t.getAttribute("data-oaid"), e.style = t.getAttribute("data-style"), e.customize = t.getAttribute("data-customize"), e.callback = t.getAttribute("data-callback"), e.customize ? "false" === e.customize ? e.customize = !1 : e.customize = !0 : e.customize = !1, e.domain = document.domain, e
                }
            }, {
                key: "validate", value: function () {
                    return this.data.oaid ? (this.data.style || (this.data.style = "blue"), !0) : (console.warn("[Zalo Social Plugin]", "The follow button have no data-oaid attribute"), !1)
                }
            }, {
                key: "render", value: function () {
                    var t = this;
                    this.validate() && (this.iframe = document.createElement("iframe"), this.iframe.frameBorder = 0, this.iframe.allowFullscreen = "true", this.iframe.scrolling = "no", this.element.style.overflow = "hidden", this.element.style.display = "inline-block", this.iframe.width = "102px", this.iframe.height = "35px", this.data.customize ? (this.element.style.position = "relative", this.iframe.width = this.element.scrollWidth, this.iframe.height = this.element.scrollHeight, this.iframe.style.position = "absolute", this.iframe.style.opacity = "0.000000000000001", this.iframe.style.left = "0px", this.iframe.style.top = "0px") : this.element.innerHTML = "", this.iframe.onload = function () {
                        t.checkInAppZalo()
                    }, this.iframe.src = "https://sp.zalo.me/plugins/follow_only" + a.default.jsonToQueryString(this.data), this.element.appendChild(this.iframe), window.addEventListener("message", this.receiveMessage))
                }
            }, {
                key: "reload", value: function () {
                    this.iframe.contentWindow.postMessage("zfollowonly_reload", "https://sp.zalo.me")
                }
            }, {
                key: "receiveMessage", value: function (t) {
                    t.data && "follow_success" === t.data.cmd && t.data.id === this.data.id.hex && window[this.data.callback] && window[this.data.callback]({
                        data: 1,
                        userId: t.data.uid
                    })
                }
            }]), h);

            function h(t, e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, h), this.element = t, this.data = this.getDataFromElement(t), this.data.id = e, this.receiveMessage = this.receiveMessage.bind(this)
            }

            e.default = l
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var r = l(n(1)), i = function (t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            };

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(t, i.key, i)
                }
            }

            var a = l(n(15)), s = l(n(11));

            function l(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var h = (i(u, [{
                key: "getDataFromElement", value: function (t) {
                    var e = {};
                    return e.link = t.getAttribute("data-href"), e.link || (e.link = window.location.href), e.size = t.getAttribute("data-size"), e.appId = t.getAttribute("data-appid"), e
                }
            }, {
                key: "validate", value: function (t) {
                    return t.link ? (t.size || console.warn("[Zalo Social Plugin]", "The comment frame have not data-zie attribute"), !0) : (console.error("[Zalo Social Plugin]", "The comment frame have no data-href attribute"), !1)
                }
            }, {
                key: "reload", value: function () {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage("zcomment_reload", "https://sp.zalo.me")
                }
            }, {
                key: "resizeParent", value: function (t) {
                    document.getElementsByClassName("zalo-comment-plugin")[0].style.height = t + "px"
                }
            }, {
                key: "getTopParentBody", value: function () {
                    this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage({
                        cmd: "open_modal_confirm_comment",
                        top: this.element.getBoundingClientRect().top
                    }, "*")
                }
            }, {
                key: "render", value: function () {
                    this.validate(this.data) && (this.iframe = document.createElement("iframe"), this.iframe.frameBorder = 0,
                        this.iframe.allowFullscreen = "true", this.iframe.scrolling = "false", this.iframe.height = "100%", this.iframe.width = "100%",
                        this.element.style.display = "block", this.element.innerHTML = "",
                        this.iframe.src = "https://sp.zalo.me/plugins/comment" + s.default.jsonToQueryString(this.data),
                        this.element.appendChild(this.iframe))
                }
            }, {
                key: "destroy", value: function () {
                    null != this.iframe && this.iframe.remove(), null != this.element && this.element.removeEventListener("zcomment_reload", this.onButtonClick)
                }
            }, {
                key: "getIframe", get: function () {
                    return this.iframe
                }
            }]), u);

            function u(t) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, u), this.element = t, this.data = this.getDataFromElement(t), this.data.android = a.default.isAndroid() && a.default.isMobile(),
                    this.data.ios = a.default.isIOS() && a.default.isMobile()
            }

            e.default = h
        }, function (t, e) {
            function u() {
            }

            function n(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }

            u.maxFromBits = function (t) {
                return Math.pow(2, t)
            }, u.limitUI04 = u.maxFromBits(4), u.limitUI06 = u.maxFromBits(6), u.limitUI08 = u.maxFromBits(8), u.limitUI12 = u.maxFromBits(12),
                u.limitUI14 = u.maxFromBits(14), u.limitUI16 = u.maxFromBits(16), u.limitUI32 = u.maxFromBits(32),
                u.limitUI40 = u.maxFromBits(40), u.limitUI48 = u.maxFromBits(48), u.randomUI04 = function () {
                return n(0, u.limitUI04 - 1)
            }, u.randomUI06 = function () {
                return n(0, u.limitUI06 - 1)
            }, u.randomUI08 = function () {
                return n(0, u.limitUI08 - 1)
            }, u.randomUI12 = function () {
                return n(0, u.limitUI12 - 1)
            }, u.randomUI14 = function () {
                return n(0, u.limitUI14 - 1)
            }, u.randomUI16 = function () {
                return n(0, u.limitUI16 - 1)
            }, u.randomUI32 = function () {
                return n(0, u.limitUI32 - 1)
            }, u.randomUI40 = function () {
                return (0 | Math.random() * (1 << 30)) + (0 | 1024 * Math.random()) * (1 << 30)
            }, u.randomUI48 = function () {
                return (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << 18)) * (1 << 30)
            }, u.paddedString = function (t, e, n) {
                n = n || "0";
                for (var i = e - (t = String(t)).length; 0 < i; i >>>= 1, n += n) 1 & i && (t = n + t);
                return t
            }, u.prototype.fromParts = function (t, e, n, i, r, o) {
                return this.version = n >> 12 & 15, this.hex = u.paddedString(t.toString(16), 8) + "-" + u.paddedString(e.toString(16), 4) + "-" + u.paddedString(n.toString(16), 4) + "-" + u.paddedString(i.toString(16), 2) + u.paddedString(r.toString(16), 2) + "-" + u.paddedString(o.toString(16), 12), this
            }, u.prototype.toString = function () {
                return this.hex
            }, u.prototype.toURN = function () {
                return "urn:uuid:" + this.hex
            }, u.prototype.toBytes = function () {
                for (var t = this.hex.split("-"), e = [], n = 0, i = 0; i < t.length; i++) for (var r = 0; r < t[i].length; r += 2) e[n++] = parseInt(t[i].substr(r, 2), 16);
                return e
            }, u.prototype.equals = function (t) {
                return t instanceof UUID && this.hex === t.hex
            }, u.getTimeFieldValues = function (t) {
                var e = t - Date.UTC(1582, 9, 15), n = e / 4294967296 * 1e4 & 268435455;
                return {low: 1e4 * (268435455 & e) % 4294967296, mid: 65535 & n, hi: n >>> 16, timestamp: e}
            }, u._create4 = function () {
                return (new u).fromParts(u.randomUI32(), u.randomUI16(), 16384 | u.randomUI12(), 128 | u.randomUI06(), u.randomUI08(), u.randomUI48())
            }, u._create1 = function () {
                var t = (new Date).getTime(), e = u.randomUI14(),
                    n = 1099511627776 * (1 | u.randomUI08()) + u.randomUI40(), i = u.randomUI04(), r = 0;
                t != r ? (t < r && e++, r = t, i = u.randomUI04()) : Math.random() < .25 && i < 9984 ? i += 1 + u.randomUI04() : e++;
                var o = u.getTimeFieldValues(r), a = o.low + i, s = 4095 & o.hi | 4096, l = (e &= 16383) >>> 8 | 128,
                    h = 255 & e;
                return (new u).fromParts(a, o.mid, s, l, h, n)
            }, u.create = function (t) {
                return this["_create" + (t = t || 4)]()
            }, u.fromTime = function (t, e) {
                e = e || !1;
                var n = u.getTimeFieldValues(t), i = n.low, r = 4095 & n.hi | 4096;
                return !1 === e ? (new u).fromParts(i, n.mid, r, 0, 0, 0) : (new u).fromParts(i, n.mid, r, 128 | u.limitUI06, u.limitUI08 - 1,
                    u.limitUI48 - 1)
            }, u.firstFromTime = function (t) {
                return u.fromTime(t, !1)
            }, u.lastFromTime = function (t) {
                return u.fromTime(t, !0)
            }, u.fromURN = function (t) {
                var e;
                return (e = /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(t)) ?
                    (new u).fromParts(parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), parseInt(e[4], 16), parseInt(e[5],
                        16), parseInt(e[6], 16)) : null
            }, u.fromBytes = function (t) {
                if (t.length < 5) return null;
                for (var e = "", n = 0, i = [4, 2, 2, 2, 6], r = 0; r < i.length; r++) {
                    for (var o = 0; o < i[r]; o++) {
                        var a = t[n++].toString(16);
                        1 == a.length && (a = "0" + a), e += a
                    }
                    6 !== i[r] && (e += "-")
                }
                return u.fromURN(e)
            }, u.fromBinary = function (t) {
                for (var e = [], n = 0; n < t.length; n++) if (e[n] = t.charCodeAt(n), 255 < e[n] || e[n] < 0) throw new Error("Unexpected byte in binary data.");
                return u.fromBytes(e)
            }, u.new = function () {
                return this.create(4)
            }, u.newTS = function () {
                return this.create(1)
            }, t.exports = u
        }, function (t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var i, r = n(1), o = (i = r) && i.__esModule ? i : {default: i};

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(t, i.key, i)
                }
            }

            var s = (function (t, e, n) {
                return e && a(t.prototype, e), n && a(t, n), t
            }(l, null, [{
                key: "loadFile", value: function (t, e) {
                    var n = null;
                    "js" == e ? ((n = document.createElement("script")).setAttribute("type", "text/javascript"),
                        n.setAttribute("src", t)) : "css" == e &&
                        ((n = document.createElement("link")).setAttribute("rel", "stylesheet"),
                            n.setAttribute("type", "text/css"), n.setAttribute("href", t)),
                    void 0 !== n && document.body.appendChild(n)
                }
            }]), l);

            function l() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l)
            }

            e.default = s
        }], r.c = i, r.d = function (t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
                {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
            return n
        }, r.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "./", r(r.s = 43);

        function r(t) {
            if (i[t]) return i[t].exports;
            var e = i[t] = {i: t, l: !1, exports: {}};
            return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
        }

        var n, i
    });

} catch (e) {
    get("https://sp.zalo.me/tracking/log?error=" + encodeURIComponent(e) + "&data=InitSDK");
    throw new Error(e);
}

function get(url) {
    if (window.XMLHttpRequest) {
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        } catch (err) {
            console.warn("XMLHttpRequest is not support");
        }
    }

}

if (typeof ZA === 'undefined') {
    window["_zap"] = window["_zap"] || [];
    window["_zap"].push(["_setAccount", "ZA-43317204427353"]);
    (function (e, t, n, r, a, o, c) {
        o = t.createElement(n), c = t.getElementsByTagName(n)[0],
            o.async = 1, o.src = r + "?" + Math.floor((new Date).getTime() / 86400000),
            c.parentNode.insertBefore(o, c);
    })(window, document, "script", "//stc.za.zaloapp.com/v3/za.js", "ZA");
}
