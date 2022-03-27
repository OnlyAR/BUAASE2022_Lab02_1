var Kernal;
(function() {
    ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t, n) {
            var r, i, o = (n = n || K).createElement("script");
            if (o.text = e, t)
                for (r in pe)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function r(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = r(e);
            return !ce(e) && !fe(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }

        function o(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

        function a(e, t, n) { return ce(t) ? he.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? he.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? he.grep(e, function(e) { return -1 < re.call(t, e) !== n }) : he.filter(t, e, n) }

        function s(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function u(e) { return e }

        function l(e) { throw e }

        function c(e, t, n, r) { var i; try { e && ce(i = e.promise) ? i.call(e).done(t).fail(n) : e && ce(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }

        function f() { K.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready() }

        function p(e, t) { return t.toUpperCase() }

        function d(e) { return e.replace(Ae, "ms-").replace(De, p) }

        function h() { this.expando = he.expando + h.uid++ }

        function g(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(Oe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : He.test(i) ? JSON.parse(i) : i) } catch (e) {}
                    qe.set(e, t, n)
                } else n = void 0;
            return n
        }

        function v(e, t, n, r) {
            var i, o, a = 20,
                s = r ? function() { return r.cur() } : function() { return he.css(e, t, "") },
                u = s(),
                l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (he.cssNumber[t] || "px" !== l && +u) && Re.exec(he.css(e, t));
            if (c && c[3] !== l) {
                for (u /= 2, l = l || c[3], c = +u || 1; a--;) he.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, he.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function m(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Le.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && $e(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = _e[s]) || (o = a.body.appendChild(a.createElement(s)), u = he.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), _e[s] = u)))) : "none" !== n && (l[c] = "none", Le.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }

        function y(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? he.merge([e], n) : n }

        function x(e, t) { for (var n = 0, r = e.length; n < r; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval")) }

        function b(e, t, n, i, o) {
            for (var a, s, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; h < g; h++)
                if ((a = e[h]) || 0 === a)
                    if ("object" === r(a)) he.merge(d, a.nodeType ? [a] : a);
                    else if (Qe.test(a)) {
                for (s = s || p.appendChild(t.createElement("div")), u = (Ue.exec(a) || ["", ""])[1].toLowerCase(), l = Ve[u] || Ve._default, s.innerHTML = l[1] + he.htmlPrefilter(a) + l[2], f = l[0]; f--;) s = s.lastChild;
                he.merge(d, s.childNodes), (s = p.firstChild).textContent = ""
            } else d.push(t.createTextNode(a));
            for (p.textContent = "", h = 0; a = d[h++];)
                if (i && -1 < he.inArray(a, i)) o && o.push(a);
                else if (c = We(a), s = y(p.appendChild(a), "script"), c && x(s), n)
                for (f = 0; a = s[f++];) Xe.test(a.type || "") && n.push(a);
            return p
        }

        function w() { return !0 }

        function T() { return !1 }

        function C(e, t) { return e === function() { try { return K.activeElement } catch (e) {} }() == ("focus" === t) }

        function E(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) E(e, s, n, r, t[s], o); return e }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = T;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) { return he().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = he.guid++)), e.each(function() { he.event.add(this, t, i, r, n) })
        }

        function S(e, t, n) {
            n ? (Le.set(e, t, !1), he.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, o = Le.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length)(he.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (o = ee.call(arguments), Le.set(this, t, o), r = n(this, t), this[t](), o !== (i = Le.get(this, t)) || r ? Le.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else o.length && (Le.set(this, t, { value: he.event.trigger(he.extend(o[0], he.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation())
                }
            })) : void 0 === Le.get(e, t) && he.event.add(e, t, w)
        }

        function k(e, t) { return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && he(e).children("tbody")[0] || e }

        function N(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

        function A(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

        function D(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
                if (Le.hasData(e) && (o = Le.access(e), a = Le.set(t, o), l = o.events))
                    for (i in delete a.handle, a.events = {}, l)
                        for (n = 0, r = l[i].length; n < r; n++) he.event.add(t, i, l[i][n]);
                qe.hasData(e) && (s = qe.access(e), u = he.extend({}, s), qe.set(t, u))
            }
        }

        function j(e, t, r, i) {
            t = te.apply([], t);
            var o, a, s, u, l, c, f = 0,
                p = e.length,
                d = p - 1,
                h = t[0],
                g = ce(h);
            if (g || 1 < p && "string" == typeof h && !le.checkClone && nt.test(h)) return e.each(function(n) {
                var o = e.eq(n);
                g && (t[0] = h.call(this, n, o.html())), j(o, t, r, i)
            });
            if (p && (a = (o = b(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
                for (u = (s = he.map(y(o, "script"), N)).length; f < p; f++) l = o, f !== d && (l = he.clone(l, !0, !0), u && he.merge(s, y(l, "script"))), r.call(e[f], l, f);
                if (u)
                    for (c = s[s.length - 1].ownerDocument, he.map(s, A), f = 0; f < u; f++) l = s[f], Xe.test(l.type || "") && !Le.access(l, "globalEval") && he.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? he._evalUrl && !l.noModule && he._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : n(l.textContent.replace(rt, ""), l, c))
            }
            return e
        }

        function L(e, t, n) { for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && We(r) && x(y(r, "script")), r.parentNode.removeChild(r)); return e }

        function q(e, t, n) { var r, i, o, a, s = e.style; return (n = n || ot(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || We(e) || (a = he.style(e, t)), !le.pixelBoxStyles() && it.test(a) && at.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

        function H(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function O(e) {
            var t = he.cssProps[e] || lt[e];
            return t || (e in ut ? e : lt[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--;)
                    if ((e = st[n] + t) in ut) return e
            }(e) || e)
        }

        function P(e, t, n) { var r = Re.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

        function R(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += he.css(e, n + Me[a], !0, i)), r ? ("content" === n && (u -= he.css(e, "padding" + Me[a], !0, i)), "margin" !== n && (u -= he.css(e, "border" + Me[a] + "Width", !0, i))) : (u += he.css(e, "padding" + Me[a], !0, i), "padding" !== n ? u += he.css(e, "border" + Me[a] + "Width", !0, i) : s += he.css(e, "border" + Me[a] + "Width", !0, i));
            return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
        }

        function M(e, t, n) {
            var r = ot(e),
                i = (!le.boxSizingReliable() || n) && "border-box" === he.css(e, "boxSizing", !1, r),
                o = i,
                a = q(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (it.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!le.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === he.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === he.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + R(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function I(e, t, n, r, i) { return new I.prototype.init(e, t, n, r, i) }

        function W() { gt && (!1 === K.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, he.fx.interval), he.fx.tick()) }

        function F() { return e.setTimeout(function() { ht = void 0 }), ht = Date.now() }

        function $(e, t) {
            var n, r = 0,
                i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Me[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function B(e, t, n) {
            for (var r, i = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function _(e, t, n) {
            var r, i, o = 0,
                a = _.prefilters.length,
                s = he.Deferred().always(function() { delete u.elem }),
                u = function() { if (i) return !1; for (var t = ht || F(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
                l = s.promise({
                    elem: e,
                    props: he.extend({}, t),
                    opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ht || F(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) { var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (function(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = d(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = he.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, l.opts.specialEasing); o < a; o++)
                if (r = _.prefilters[o].call(l, e, c, l.opts)) return ce(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return he.map(c, B, l), ce(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), he.fx.timer(he.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l
        }

        function z(e) { return (e.match(Se) || []).join(" ") }

        function U(e) { return e.getAttribute && e.getAttribute("class") || "" }

        function X(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(Se) || [] }

        function V(e, t, n, i) {
            var o;
            if (Array.isArray(t)) he.each(t, function(t, r) { n || jt.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== r(t)) i(e, t);
            else
                for (o in t) V(e + "[" + o + "]", t[o], n, i)
        }

        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(Se) || [];
                if (ce(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Y(e, t, n, r) {
            function i(s) { var u; return o[s] = !0, he.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u }
            var o = {},
                a = e === $t;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function Q(e, t) { var n, r, i = he.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && he.extend(!0, e, r), e }
        var J = [],
            K = e.document,
            Z = Object.getPrototypeOf,
            ee = J.slice,
            te = J.concat,
            ne = J.push,
            re = J.indexOf,
            ie = {},
            oe = ie.toString,
            ae = ie.hasOwnProperty,
            se = ae.toString,
            ue = se.call(Object),
            le = {},
            ce = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
            fe = function(e) { return null != e && e === e.window },
            pe = { type: !0, src: !0, nonce: !0, noModule: !0 },
            de = "3.4.1",
            he = function(e, t) { return new he.fn.init(e, t) },
            ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        he.fn = he.prototype = {
            jquery: de,
            constructor: he,
            length: 0,
            toArray: function() { return ee.call(this) },
            get: function(e) { return null == e ? ee.call(this) : e < 0 ? this[e + this.length] : this[e] },
            pushStack: function(e) { var t = he.merge(this.constructor(), e); return t.prevObject = this, t },
            each: function(e) { return he.each(this, e) },
            map: function(e) { return this.pushStack(he.map(this, function(t, n) { return e.call(t, n, t) })) },
            slice: function() { return this.pushStack(ee.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: ne,
            sort: J.sort,
            splice: J.splice
        }, he.extend = he.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ce(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || he.isPlainObject(n) ? n : {}, i = !1, a[t] = he.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, he.extend({
            expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) { throw new Error(e) },
            noop: function() {},
            isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== oe.call(e) || (t = Z(e)) && ("function" != typeof(n = ae.call(t, "constructor") && t.constructor) || se.call(n) !== ue)) },
            isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
            globalEval: function(e, t) { n(e, { nonce: t && t.nonce }) },
            each: function(e, t) {
                var n, r = 0;
                if (i(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break; return e
            },
            trim: function(e) { return null == e ? "" : (e + "").replace(ge, "") },
            makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n },
            inArray: function(e, t, n) { return null == t ? -1 : re.call(t, e, n) },
            merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
            grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
            map: function(e, t, n) {
                var r, o, a = 0,
                    s = [];
                if (i(e))
                    for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
                return te.apply([], s)
            },
            guid: 1,
            support: le
        }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = J[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { ie["[object " + t + "]"] = t.toLowerCase() });
        var ve = function(e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, l, c, p = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!r && ((t ? t.ownerDocument || t : W) !== L && j(t), t = t || L, H)) {
                    if (11 !== h && (u = me.exec(e)))
                        if (i = u[1]) { if (9 === h) { if (!(a = t.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (p && (a = p.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), n } else { if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n; if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n }
                    if (b.qsa && !U[e + " "] && (!O || !O.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                        if (c = e, p = t, 1 === h && le.test(e)) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = I), o = (l = E(e)).length; o--;) l[o] = "#" + s + " " + d(l[o]);
                            c = l.join(","), p = ye.test(e) && f(t.parentNode) || t
                        }
                        try { return J.apply(n, p.querySelectorAll(c)), n } catch (t) { U(e, !0) } finally { s === I && t.removeAttribute("id") }
                    }
                }
                return k(e.replace(ae, "$1"), t, n, r)
            }

            function n() { var e = []; return function t(n, r) { return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = r } }

            function r(e) { return e[I] = !0, e }

            function i(e) { var t = L.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function o(e, t) { for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

            function u(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function l(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

            function c(e) { return r(function(t) { return t = +t, r(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

            function f(e) { return e && void 0 !== e.getElementsByTagName && e }

            function p() {}

            function d(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

            function h(e, t, n) {
                var r = t.dir,
                    i = t.next,
                    o = i || r,
                    a = n && "parentNode" === o,
                    s = $++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, i);
                    return !1
                } : function(t, n, u) {
                    var l, c, f, p = [F, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (c = (f = t[I] || (t[I] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                else { if ((l = c[o]) && l[0] === F && l[1] === s) return p[2] = l[2]; if ((c[o] = p)[2] = e(t, n, u)) return !0 } return !1
                }
            }

            function g(e) {
                return 1 < e.length ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function v(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

            function m(e, n, i, o, a, s) {
                return o && !o[I] && (o = m(o)), a && !a[I] && (a = m(a, s)), r(function(r, s, u, l) {
                    var c, f, p, d = [],
                        h = [],
                        g = s.length,
                        m = r || function(e, n, r) { for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r); return r }(n || "*", u.nodeType ? [u] : u, []),
                        y = !e || !r && n ? m : v(m, d, e, u, l),
                        x = i ? a || (r ? e : g || o) ? [] : s : y;
                    if (i && i(y, x, u, l), o)
                        for (c = v(x, h), o(c, [], u, l), f = c.length; f--;)(p = c[f]) && (x[h[f]] = !(y[h[f]] = p));
                    if (r) {
                        if (a || e) {
                            if (a) {
                                for (c = [], f = x.length; f--;)(p = x[f]) && c.push(y[f] = p);
                                a(null, x = [], c, l)
                            }
                            for (f = x.length; f--;)(p = x[f]) && -1 < (c = a ? Z(r, p) : d[f]) && (r[c] = !(s[c] = p))
                        }
                    } else x = v(x === s ? x.splice(g, x.length) : x), a ? a(null, s, x, l) : J.apply(s, x)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = h(function(e) { return e === t }, a, !0), l = h(function(e) { return -1 < Z(t, e) }, a, !0), c = [function(e, n, r) { var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i }]; s < i; s++)
                    if (n = w.relative[e[s].type]) c = [h(g(c), n)];
                    else {
                        if ((n = w.filter[e[s].type].apply(null, e[s].matches))[I]) { for (r = ++s; r < i && !w.relative[e[r].type]; r++); return m(1 < s && g(c), 1 < s && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ae, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && d(e)) }
                        c.push(n)
                    }
                return g(c)
            }
            var x, b, w, T, C, E, S, k, N, A, D, j, L, q, H, O, P, R, M, I = "sizzle" + 1 * new Date,
                W = e.document,
                F = 0,
                $ = 0,
                B = n(),
                _ = n(),
                z = n(),
                U = n(),
                X = function(e, t) { return e === t && (D = !0), 0 },
                V = {}.hasOwnProperty,
                G = [],
                Y = G.pop,
                Q = G.push,
                J = G.push,
                K = G.slice,
                Z = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                te = "[\\x20\\t\\r\\n\\f]",
                ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
                ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                oe = new RegExp(te + "+", "g"),
                ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                se = new RegExp("^" + te + "*," + te + "*"),
                ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                le = new RegExp(te + "|>"),
                ce = new RegExp(ie),
                fe = new RegExp("^" + ne + "$"),
                pe = { ID: new RegExp("^#(" + ne + ")"), CLASS: new RegExp("^\\.(" + ne + ")"), TAG: new RegExp("^(" + ne + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"), bool: new RegExp("^(?:" + ee + ")$", "i"), needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i") },
                de = /HTML$/i,
                he = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
                be = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
                we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Te = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                Ce = function() { j() },
                Ee = h(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
            try { J.apply(G = K.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType } catch (x) {
                J = {
                    apply: G.length ? function(e, t) { Q.apply(e, K.call(t)) } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            for (x in b = t.support = {}, C = t.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !de.test(t || n && n.nodeName || "HTML")
                }, j = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : W;
                    return r !== L && 9 === r.nodeType && r.documentElement && (q = (L = r).documentElement, H = !C(L), W !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), b.attributes = i(function(e) { return e.className = "i", !e.getAttribute("className") }), b.getElementsByTagName = i(function(e) { return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length }), b.getElementsByClassName = ve.test(L.getElementsByClassName), b.getById = i(function(e) { return q.appendChild(e).id = I, !L.getElementsByName || !L.getElementsByName(I).length }), b.getById ? (w.filter.ID = function(e) { var t = e.replace(xe, be); return function(e) { return e.getAttribute("id") === t } }, w.find.ID = function(e, t) { if (void 0 !== t.getElementById && H) { var n = t.getElementById(e); return n ? [n] : [] } }) : (w.filter.ID = function(e) { var t = e.replace(xe, be); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, w.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && H) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), w.find.TAG = b.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                        return o
                    }, w.find.CLASS = b.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e) }, P = [], O = [], (b.qsa = ve.test(L.querySelectorAll)) && (i(function(e) { q.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll("[id~=" + I + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || O.push(".#.+[+~]") }), i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = L.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (b.matchesSelector = ve.test(R = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) { b.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), P.push("!=", ie) }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(q.compareDocumentPosition), M = t || ve.test(q.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, X = t ? function(e, t) { if (e === t) return D = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === W && M(W, e) ? -1 : t === L || t.ownerDocument === W && M(W, t) ? 1 : A ? Z(A, e) - Z(A, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                        if (e === t) return D = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            u = [t];
                        if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : A ? Z(A, e) - Z(A, t) : 0;
                        if (i === o) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; s[r] === u[r];) r++;
                        return r ? a(s[r], u[r]) : s[r] === W ? -1 : u[r] === W ? 1 : 0
                    }), L
                }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== L && j(e), b.matchesSelector && H && !U[n + " "] && (!P || !P.test(n)) && (!O || !O.test(n))) try { var r = R.call(e, n); if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { U(n, !0) }
                    return 0 < t(n, L, null, [e]).length
                }, t.contains = function(e, t) { return (e.ownerDocument || e) !== L && j(e), M(e, t) }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== L && j(e);
                    var n = w.attrHandle[t.toLowerCase()],
                        r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                    return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.escape = function(e) { return (e + "").replace(we, Te) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (D = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(X), D) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
                    return A = null, e
                }, T = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += T(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                        for (; t = e[r++];) n += T(t);
                    return n
                }, (w = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(e) { return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                    filter: {
                        TAG: function(e) { var t = e.replace(xe, be).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                        CLASS: function(e) { var t = B[e + " "]; return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && B(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                        ATTR: function(e, n, r) { return function(i) { var o = t.attr(i, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && -1 < o.indexOf(r) : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? -1 < (" " + o.replace(oe, " ") + " ").indexOf(r) : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-")) } },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    x = !1;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (p = t; p = p[g];)
                                                if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (x = (d = (l = (c = (f = (p = v)[I] || (p[I] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === F && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                            if (1 === p.nodeType && ++x && p === t) { c[e] = [F, d, x]; break }
                                    } else if (y && (x = d = (l = (c = (f = (p = t)[I] || (p[I] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === F && l[1]), !1 === x)
                                        for (;
                                            (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[I] || (p[I] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [F, x]), p !== t)););
                                    return (x -= i) === r || x % r == 0 && 0 <= x / r
                                }
                            }
                        },
                        PSEUDO: function(e, n) { var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[I] ? o(n) : 1 < o.length ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) { for (var r, i = o(e, n), a = i.length; a--;) e[r = Z(e, i[a])] = !(t[r] = i[a]) }) : function(e) { return o(e, 0, i) }) : o }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = S(e.replace(ae, "$1"));
                            return i[I] ? r(function(e, t, n, r) { for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) { return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() }
                        }),
                        has: r(function(e) { return function(n) { return 0 < t(e, n).length } }),
                        contains: r(function(e) {
                            return e = e.replace(xe, be),
                                function(t) { return -1 < (t.textContent || T(t)).indexOf(e) }
                        }),
                        lang: r(function(e) {
                            return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
                                function(t) {
                                    var n;
                                    do { if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                        root: function(e) { return e === q },
                        focus: function(e) { return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                        enabled: l(!1),
                        disabled: l(!0),
                        checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                        selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) { return !w.pseudos.empty(e) },
                        header: function(e) { return ge.test(e.nodeName) },
                        input: function(e) { return he.test(e.nodeName) },
                        button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                        text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                        first: c(function() { return [0] }),
                        last: c(function(e, t) { return [t - 1] }),
                        eq: c(function(e, t, n) { return [n < 0 ? n + t : n] }),
                        even: c(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                        odd: c(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                        lt: c(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                        gt: c(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                    }
                }).pseudos.nth = w.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[x] = s(x);
            for (x in { submit: !0, reset: !0 }) w.pseudos[x] = u(x);
            return p.prototype = w.filters = w.pseudos, w.setFilters = new p, E = t.tokenize = function(e, n) { var r, i, o, a, s, u, l, c = _[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = w.preFilter; s;) { for (a in r && !(i = se.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ae, " ") }), s = s.slice(r.length)), w.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length)); if (!r) break } return n ? s.length : s ? t.error(e) : _(e, u).slice(0) }, S = t.compile = function(e, n) {
                var i, o, a, s, u, l, c = [],
                    f = [],
                    p = z[e + " "];
                if (!p) {
                    for (n || (n = E(e)), i = n.length; i--;)(p = y(n[i]))[I] ? c.push(p) : f.push(p);
                    (p = z(e, (o = f, s = 0 < (a = c).length, u = 0 < o.length, l = function(e, n, r, i, l) {
                            var c, f, p, d = 0,
                                h = "0",
                                g = e && [],
                                m = [],
                                y = N,
                                x = e || u && w.find.TAG("*", l),
                                b = F += null == y ? 1 : Math.random() || .1,
                                T = x.length;
                            for (l && (N = n === L || n || l); h !== T && null != (c = x[h]); h++) {
                                if (u && c) {
                                    for (f = 0, n || c.ownerDocument === L || (j(c), r = !H); p = o[f++];)
                                        if (p(c, n || L, r)) { i.push(c); break }
                                    l && (F = b)
                                }
                                s && ((c = !p && c) && d--, e && g.push(c))
                            }
                            if (d += h, s && h !== d) {
                                for (f = 0; p = a[f++];) p(g, m, n, r);
                                if (e) {
                                    if (0 < d)
                                        for (; h--;) g[h] || m[h] || (m[h] = Y.call(i));
                                    m = v(m)
                                }
                                J.apply(i, m), l && !e && 0 < m.length && 1 < d + a.length && t.uniqueSort(i)
                            }
                            return l && (F = b, N = y), g
                        },
                        s ? r(l) : l))).selector = e
                }
                return p
            }, k = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && E(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(a.matches[0].replace(xe, be), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                        if ((u = w.find[s]) && (r = u(a.matches[0].replace(xe, be), ye.test(o[0].type) && f(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && d(o))) return J.apply(n, r), n; break }
                }
                return (l || S(e, c))(r, t, !H, n, !t || ye.test(e) && f(t.parentNode) || t), n
            }, b.sortStable = I.split("").sort(X).join("") === I, b.detectDuplicates = !!D, j(), b.sortDetached = i(function(e) { return 1 & e.compareDocumentPosition(L.createElement("fieldset")) }), i(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), b.attributes && i(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), i(function(e) { return null == e.getAttribute("disabled") }) || o(ee, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
        }(e);
        he.find = ve, he.expr = ve.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = ve.uniqueSort, he.text = ve.getText, he.isXMLDoc = ve.isXML, he.contains = ve.contains, he.escapeSelector = ve.escape;
        var me = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && he(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            ye = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
            xe = he.expr.match.needsContext,
            be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        he.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) { return 1 === e.nodeType })) }, he.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (he.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
                return 1 < r ? he.uniqueSort(n) : n
            },
            filter: function(e) { return this.pushStack(a(this, e || [], !1)) },
            not: function(e) { return this.pushStack(a(this, e || [], !0)) },
            is: function(e) { return !!a(this, "string" == typeof e && xe.test(e) ? he(e) : e || [], !1).length }
        });
        var we, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (he.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || we, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Te.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), be.test(r[1]) && he.isPlainObject(t))
                        for (r in t) ce(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = K.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ce(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
        }).prototype = he.fn, we = he(K);
        var Ce = /^(?:parents|prev(?:Until|All))/,
            Ee = { children: !0, contents: !0, next: !0, prev: !0 };
        he.fn.extend({
            has: function(e) {
                var t = he(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (he.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && he(e);
                if (!xe.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && he.find.matchesSelector(n, e))) { o.push(n); break }
                return this.pushStack(1 < o.length ? he.uniqueSort(o) : o)
            },
            index: function(e) { return e ? "string" == typeof e ? re.call(he(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(e, t) { return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t)))) },
            addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
        }), he.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return me(e, "parentNode") }, parentsUntil: function(e, t, n) { return me(e, "parentNode", n) }, next: function(e) { return s(e, "nextSibling") }, prev: function(e) { return s(e, "previousSibling") }, nextAll: function(e) { return me(e, "nextSibling") }, prevAll: function(e) { return me(e, "previousSibling") }, nextUntil: function(e, t, n) { return me(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return me(e, "previousSibling", n) }, siblings: function(e) { return ye((e.parentNode || {}).firstChild, e) }, children: function(e) { return ye(e.firstChild) }, contents: function(e) { return void 0 !== e.contentDocument ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes)) } }, function(e, t) { he.fn[e] = function(n, r) { var i = he.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), 1 < this.length && (Ee[e] || he.uniqueSort(i), Ce.test(e) && i.reverse()), this.pushStack(i) } });
        var Se = /[^\x20\t\r\n\f]+/g;
        he.Callbacks = function(e) {
            var t, n;
            e = "string" == typeof e ? (t = e, n = {}, he.each(t.match(Se) || [], function(e, t) { n[t] = !0 }), n) : he.extend({}, e);
            var i, o, a, s, u = [],
                l = [],
                c = -1,
                f = function() {
                    for (s = s || e.once, a = i = !0; l.length; c = -1)
                        for (o = l.shift(); ++c < u.length;) !1 === u[c].apply(o[0], o[1]) && e.stopOnFalse && (c = u.length, o = !1);
                    e.memory || (o = !1), i = !1, s && (u = o ? [] : "")
                },
                p = { add: function() { return u && (o && !i && (c = u.length - 1, l.push(o)), function t(n) { he.each(n, function(n, i) { ce(i) ? e.unique && p.has(i) || u.push(i) : i && i.length && "string" !== r(i) && t(i) }) }(arguments), o && !i && f()), this }, remove: function() { return he.each(arguments, function(e, t) { for (var n; - 1 < (n = he.inArray(t, u, n));) u.splice(n, 1), n <= c && c-- }), this }, has: function(e) { return e ? -1 < he.inArray(e, u) : 0 < u.length }, empty: function() { return u && (u = []), this }, disable: function() { return s = l = [], u = o = "", this }, disabled: function() { return !u }, lock: function() { return s = l = [], o || i || (u = o = ""), this }, locked: function() { return !!s }, fireWith: function(e, t) { return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || f()), this }, fire: function() { return p.fireWith(this, arguments), this }, fired: function() { return !!a } };
            return p
        }, he.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                        ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() { return r },
                        always: function() { return o.done(arguments).fail(arguments), this },
                        catch: function(e) { return i.then(null, e) },
                        pipe: function() {
                            var e = arguments;
                            return he.Deferred(function(t) {
                                he.each(n, function(n, r) {
                                    var i = ce(e[r[4]]) && e[r[4]];
                                    o[r[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && ce(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, r, i) {
                            function o(t, n, r, i) {
                                return function() {
                                    var s = this,
                                        c = arguments,
                                        f = function() {
                                            var e, f;
                                            if (!(t < a)) {
                                                if ((e = r.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                f = e && ("object" == typeof e || "function" == typeof e) && e.then, ce(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, c = [e]), (i || n.resolveWith)(s, c))
                                            }
                                        },
                                        p = i ? f : function() { try { f() } catch (e) { he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), a <= t + 1 && (r !== l && (s = void 0, c = [e]), n.rejectWith(s, c)) } };
                                    t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                                }
                            }
                            var a = 0;
                            return he.Deferred(function(e) { n[0][3].add(o(0, e, ce(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, ce(t) ? t : u)), n[2][3].add(o(0, e, ce(r) ? r : l)) }).promise()
                        },
                        promise: function(e) { return null != e ? he.extend(e, i) : i }
                    },
                    o = {};
                return he.each(n, function(e, t) {
                    var a = t[2],
                        s = t[5];
                    i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = ee.call(arguments),
                    o = he.Deferred(),
                    a = function(e) { return function(n) { r[e] = this, i[e] = 1 < arguments.length ? ee.call(arguments) : n, --t || o.resolveWith(r, i) } };
                if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ce(i[n] && i[n].then))) return o.then();
                for (; n--;) c(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        he.Deferred.exceptionHook = function(e, t) {}, he.readyException = function(t) { e.setTimeout(function() { throw t }) };
        var ke = he.Deferred();
        he.fn.ready = function(e) { return ke.then(e).catch(function(e) { he.readyException(e) }), this }, he.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0) !== e && 0 < --he.readyWait || ke.resolveWith(K, [he])
            }
        }), he.ready.then = ke.then, "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? e.setTimeout(he.ready) : (K.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
        var Ne = function(e, t, n, i, o, a, s) {
                var u = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === r(n))
                    for (u in o = !0, n) Ne(e, t, u, n[u], !0, a, s);
                else if (void 0 !== i && (o = !0, ce(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(he(e), n) })), t))
                    for (; u < l; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
            },
            Ae = /^-ms-/,
            De = /-([a-z])/g,
            je = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
        h.uid = 1, h.prototype = {
            cache: function(e) { var t = e[this.expando]; return t || (t = {}, je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[d(t)] = n;
                else
                    for (r in t) i[d(r)] = t[r];
                return i
            },
            get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][d(t)] },
            access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
            remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(d) : (t = d(t)) in r ? [t] : t.match(Se) || []).length; for (; n--;) delete r[t[n]] }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
            hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !he.isEmptyObject(t) }
        };
        var Le = new h,
            qe = new h,
            He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Oe = /[A-Z]/g;
        he.extend({ hasData: function(e) { return qe.hasData(e) || Le.hasData(e) }, data: function(e, t, n) { return qe.access(e, t, n) }, removeData: function(e, t) { qe.remove(e, t) }, _data: function(e, t, n) { return Le.access(e, t, n) }, _removeData: function(e, t) { Le.remove(e, t) } }), he.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = qe.get(o), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = d(r.slice(5)), g(o, r, i[r]));
                        Le.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() { qe.set(this, e) }) : Ne(this, function(t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = qe.get(o, e)) ? n : void 0 !== (n = g(o, e)) ? n : void 0;
                    this.each(function() { qe.set(this, e, t) })
                }, null, t, 1 < arguments.length, null, !0)
            },
            removeData: function(e) { return this.each(function() { qe.remove(this, e) }) }
        }), he.extend({
            queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Le.get(e, t), n && (!r || Array.isArray(n) ? r = Le.access(e, t, he.makeArray(n)) : r.push(n)), r || [] },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = he.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = he._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { he.dequeue(e, t) }, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) { var n = t + "queueHooks"; return Le.get(e, n) || Le.access(e, n, { empty: he.Callbacks("once memory").add(function() { Le.remove(e, [t + "queue", n]) }) }) }
        }), he.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = he.queue(this, e, t);
                    he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                })
            },
            dequeue: function(e) { return this.each(function() { he.dequeue(this, e) }) },
            clearQueue: function(e) { return this.queue(e || "fx", []) },
            promise: function(e, t) {
                var n, r = 1,
                    i = he.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {--r || i.resolveWith(o, [o]) };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Le.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Re = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
            Me = ["Top", "Right", "Bottom", "Left"],
            Ie = K.documentElement,
            We = function(e) { return he.contains(e.ownerDocument, e) },
            Fe = { composed: !0 };
        Ie.getRootNode && (We = function(e) { return he.contains(e.ownerDocument, e) || e.getRootNode(Fe) === e.ownerDocument });
        var $e = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && We(e) && "none" === he.css(e, "display") },
            Be = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i },
            _e = {};
        he.fn.extend({ show: function() { return m(this, !0) }, hide: function() { return m(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { $e(this) ? he(this).show() : he(this).hide() }) } });
        var ze = /^(?:checkbox|radio)$/i,
            Ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Xe = /^$|^module$|\/(?:java|ecma)script/i,
            Ve = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
        var Ge, Ye, Qe = /<|&#?\w+;/;
        Ge = K.createDocumentFragment().appendChild(K.createElement("div")), (Ye = K.createElement("input")).setAttribute("type", "radio"), Ye.setAttribute("checked", "checked"), Ye.setAttribute("name", "t"), Ge.appendChild(Ye), le.checkClone = Ge.cloneNode(!0).cloneNode(!0).lastChild.checked, Ge.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!Ge.cloneNode(!0).lastChild.defaultValue;
        var Je = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ze = /^([^.]*)(?:\.(.+)|)/;
        he.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, v = Le.get(e);
                if (v)
                    for (n.handler && (n = (o = n).handler, i = o.selector), i && he.find.matchesSelector(Ie, i), n.guid || (n.guid = he.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) { return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(Se) || [""]).length; l--;) d = g = (s = Ze.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, c = he.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && he.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), he.event.global[d] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, v = Le.hasData(e) && Le.get(e);
                if (v && (u = v.events)) {
                    for (l = (t = (t || "").match(Se) || [""]).length; l--;)
                        if (d = g = (s = Ze.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                            for (f = he.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || he.removeEvent(e, d, v.handle), delete u[d])
                        } else
                            for (d in u) he.event.remove(e, d + t[l], n, r, !0);
                    he.isEmptyObject(u) && Le.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = he.event.fix(e),
                    u = new Array(arguments.length),
                    l = (Le.get(this, "events") || {})[s.type] || [],
                    c = he.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = he.event.handlers.call(this, s, l), t = 0;
                        (i = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < he(i, this).index(l) : he.find(i, this, null, [l]).length), a[i] && o.push(r);
                            o.length && s.push({ elem: l, handlers: o })
                        }
                return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
            },
            addProp: function(e, t) { Object.defineProperty(he.Event.prototype, e, { enumerable: !0, configurable: !0, get: ce(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
            fix: function(e) { return e[he.expando] ? e : new he.Event(e) },
            special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return ze.test(t.type) && t.click && o(t, "input") && S(t, "click", w), !1 }, trigger: function(e) { var t = this || e; return ze.test(t.type) && t.click && o(t, "input") && S(t, "click"), !0 }, _default: function(e) { var t = e.target; return ze.test(t.type) && t.click && o(t, "input") && Le.get(t, "click") || o(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
        }, he.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, he.Event = function(e, t) {
            if (!(this instanceof he.Event)) return new he.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[he.expando] = !0
        }, he.Event.prototype = {
            constructor: he.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, he.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, he.event.addProp), he.each({ focus: "focusin", blur: "focusout" }, function(e, t) { he.event.special[e] = { setup: function() { return S(this, e, C), !1 }, trigger: function() { return S(this, e), !0 }, delegateType: t } }), he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
            he.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget,
                        i = e.handleObj;
                    return r && (r === this || he.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), he.fn.extend({ on: function(e, t, n, r) { return E(this, e, t, n, r) }, one: function(e, t, n, r) { return E(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function() { he.event.remove(this, e, n, t) }) } });
        var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        he.extend({
            htmlPrefilter: function(e) { return e.replace(et, "<$1></$2>") },
            clone: function(e, t, n) {
                var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                    f = We(e);
                if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                    for (a = y(c), r = 0, i = (o = y(e)).length; r < i; r++) s = o[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && ze.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || y(e), a = a || y(c), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
                    else D(e, c);
                return 0 < (a = y(c, "script")).length && x(a, !f && y(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (je(n)) {
                        if (t = n[Le.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                            n[Le.expando] = void 0
                        }
                        n[qe.expando] && (n[qe.expando] = void 0)
                    }
            }
        }), he.fn.extend({
            detach: function(e) { return L(this, e, !0) },
            remove: function(e) { return L(this, e) },
            text: function(e) { return Ne(this, function(e) { return void 0 === e ? he.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
            append: function() { return j(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e) }) },
            prepend: function() {
                return j(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() { return j(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
            after: function() { return j(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
            empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = ""); return this },
            clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return he.clone(this, e, t) }) },
            html: function(e) {
                return Ne(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !tt.test(e) && !Ve[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = he.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return j(this, arguments, function(t) {
                    var n = this.parentNode;
                    he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { he.fn[e] = function(e) { for (var n, r = [], i = he(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), ne.apply(r, n.get()); return this.pushStack(r) } });
        var it = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
            ot = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
            at = new RegExp(Me.join("|"), "i");
        ! function() {
            function t() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ie.appendChild(u).appendChild(l);
                    var t = e.getComputedStyle(l);
                    r = "1%" !== t.top, s = 12 === n(t.marginLeft), l.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), l.style.position = "absolute", o = 12 === n(l.offsetWidth / 3), Ie.removeChild(u), l = null
                }
            }

            function n(e) { return Math.round(parseFloat(e)) }
            var r, i, o, a, s, u = K.createElement("div"),
                l = K.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, he.extend(le, { boxSizingReliable: function() { return t(), i }, pixelBoxStyles: function() { return t(), a }, pixelPosition: function() { return t(), r }, reliableMarginLeft: function() { return t(), s }, scrollboxSize: function() { return t(), o } }))
        }();
        var st = ["Webkit", "Moz", "ms"],
            ut = K.createElement("div").style,
            lt = {},
            ct = /^(none|table(?!-c[ea]).+)/,
            ft = /^--/,
            pt = { position: "absolute", visibility: "hidden", display: "block" },
            dt = { letterSpacing: "0", fontWeight: "400" };
        he.extend({
            cssHooks: { opacity: { get: function(e, t) { if (t) { var n = q(e, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = d(t),
                        u = ft.test(t),
                        l = e.style;
                    if (u || (t = O(s)), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" == (o = typeof n) && (i = Re.exec(n)) && i[1] && (n = v(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (he.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) { var i, o, a, s = d(t); return ft.test(t) || (t = O(s)), (a = he.cssHooks[t] || he.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = q(e, t, r)), "normal" === i && t in dt && (i = dt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
        }), he.each(["height", "width"], function(e, t) {
            he.cssHooks[t] = {
                get: function(e, n, r) { if (n) return !ct.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : Be(e, pt, function() { return M(e, t, r) }) },
                set: function(e, n, r) {
                    var i, o = ot(e),
                        a = !le.scrollboxSize() && "absolute" === o.position,
                        s = (a || r) && "border-box" === he.css(e, "boxSizing", !1, o),
                        u = r ? R(e, t, r, s, o) : 0;
                    return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - R(e, t, "border", !1, o) - .5)), u && (i = Re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), P(0, n, u)
                }
            }
        }), he.cssHooks.marginLeft = H(le.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), he.each({ margin: "", padding: "", border: "Width" }, function(e, t) { he.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Me[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (he.cssHooks[e + t].set = P) }), he.fn.extend({
            css: function(e, t) {
                return Ne(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) { for (r = ot(e), i = t.length; a < i; a++) o[t[a]] = he.css(e, t[a], !1, r); return o }
                    return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((he.Tween = I).prototype = { constructor: I, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px") }, cur: function() { var e = I.propHooks[this.prop]; return e && e.get ? e.get(this) : I.propHooks._default.get(this) }, run: function(e) { var t, n = I.propHooks[this.prop]; return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this } }).init.prototype = I.prototype, (I.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !he.cssHooks[e.prop] && null == e.elem.style[O(e.prop)] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = I.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, he.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, he.fx = I.prototype.init, he.fx.step = {};
        var ht, gt, vt, mt, yt = /^(?:toggle|show|hide)$/,
            xt = /queueHooks$/;
        he.Animation = he.extend(_, {
            tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return v(n.elem, e, Re.exec(t), n), n }] },
            tweener: function(e, t) { ce(e) ? (t = e, e = ["*"]) : e = e.match(Se); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], _.tweeners[n] = _.tweeners[n] || [], _.tweeners[n].unshift(t) },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && $e(e),
                    v = Le.get(e, "fxshow");
                for (r in n.queue || (null == (a = he._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, he.queue(e, "fx").length || a.empty.fire() }) })), t)
                    if (i = t[r], yt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            g = !0
                        }
                        d[r] = v && v[r] || he.style(e, r)
                    }
                if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Le.get(e, "display")), "none" === (c = he.css(e, "display")) && (l ? c = l : (m([e], !0), l = e.style.display || l, c = he.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === he.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Le.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && m([e], !0), p.done(function() { for (r in g || m([e]), Le.remove(e, "fxshow"), d) he.style(e, r, d[r]) })), u = B(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) { t ? _.prefilters.unshift(e) : _.prefilters.push(e) }
        }), he.speed = function(e, t, n) { var r = e && "object" == typeof e ? he.extend({}, e) : { complete: n || !n && t || ce(e) && e, duration: e, easing: n && t || t && !ce(t) && t }; return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { ce(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue) }, r }, he.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter($e).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = he.isEmptyObject(e),
                    o = he.speed(t, n, r),
                    a = function() {
                        var t = _(this, he.extend({}, e), o);
                        (i || Le.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = he.timers,
                        a = Le.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && xt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Le.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = he.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i) }
        }), he.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { he.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), he.timers = [], he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (ht = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), ht = void 0
        }, he.fx.timer = function(e) { he.timers.push(e), he.fx.start() }, he.fx.interval = 13, he.fx.start = function() { gt || (gt = !0, W()) }, he.fx.stop = function() { gt = null }, he.fx.speeds = { slow: 600, fast: 200, _default: 400 }, he.fn.delay = function(t, n) {
            return t = he.fx && he.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) }
            })
        }, vt = K.createElement("input"), mt = K.createElement("select").appendChild(K.createElement("option")), vt.type = "checkbox", le.checkOn = "" !== vt.value, le.optSelected = mt.selected, (vt = K.createElement("input")).value = "t", vt.type = "radio", le.radioValue = "t" === vt.value;
        var bt, wt = he.expr.attrHandle;
        he.fn.extend({ attr: function(e, t) { return Ne(this, he.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { he.removeAttr(this, e) }) } }), he.extend({
            attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = he.find.attr(e, t)) ? void 0 : r) },
            attrHooks: { type: { set: function(e, t) { if (!le.radioValue && "radio" === t && o(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(Se);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), bt = { set: function(e, t, n) { return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n } }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = wt[t] || he.find.attr;
            wt[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = wt[a], wt[a] = i, i = null != n(e, t, r) ? a : null, wt[a] = o), i }
        });
        var Tt = /^(?:input|select|textarea|button)$/i,
            Ct = /^(?:a|area)$/i;
        he.fn.extend({ prop: function(e, t) { return Ne(this, he.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[he.propFix[e] || e] }) } }), he.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = he.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), le.optSelected || (he.propHooks.selected = {
            get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { he.propFix[this.toLowerCase()] = this }), he.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ce(e)) return this.each(function(t) { he(this).addClass(e.call(this, t, U(this))) });
                if ((t = X(e)).length)
                    for (; n = this[u++];)
                        if (i = U(n), r = 1 === n.nodeType && " " + z(i) + " ") {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = z(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ce(e)) return this.each(function(t) { he(this).removeClass(e.call(this, t, U(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ((t = X(e)).length)
                    for (; n = this[u++];)
                        if (i = U(n), r = 1 === n.nodeType && " " + z(i) + " ") {
                            for (a = 0; o = t[a++];)
                                for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                            i !== (s = z(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : ce(e) ? this.each(function(n) { he(this).toggleClass(e.call(this, n, U(this), t), t) }) : this.each(function() {
                    var t, i, o, a;
                    if (r)
                        for (i = 0, o = he(this), a = X(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = U(this)) && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && -1 < (" " + z(U(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var Et = /\r/g;
        he.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = ce(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, he(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = he.map(i, function(e) { return null == e ? "" : e + "" })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Et, "") : null == n ? "" : n : void 0
            }
        }), he.extend({
            valHooks: {
                option: { get: function(e) { var t = he.find.attr(e, "value"); return null != t ? t : z(he.text(e)) } },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            a = e.selectedIndex,
                            s = "select-one" === e.type,
                            u = s ? null : [],
                            l = s ? a + 1 : i.length;
                        for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                            if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                                if (t = he(n).val(), s) return t;
                                u.push(t)
                            }
                        return u
                    },
                    set: function(e, t) { for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < he.inArray(he.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o }
                }
            }
        }), he.each(["radio", "checkbox"], function() { he.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < he.inArray(he(e).val(), t) } }, le.checkOn || (he.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), le.focusin = "onfocusin" in e;
        var St = /^(?:focusinfocus|focusoutblur)$/,
            kt = function(e) { e.stopPropagation() };
        he.extend(he.event, {
            trigger: function(t, n, r, i) {
                var o, a, s, u, l, c, f, p, d = [r || K],
                    h = ae.call(t, "type") ? t.type : t,
                    g = ae.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = p = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(h + he.event.triggered) && (-1 < h.indexOf(".") && (h = (g = h.split(".")).shift(), g.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                    if (!i && !f.noBubble && !fe(r)) {
                        for (u = f.delegateType || h, St.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                        s === (r.ownerDocument || K) && d.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = d[o++]) && !t.isPropagationStopped();) p = a, t.type = 1 < o ? u : f.bindType || h, (c = (Le.get(a, "events") || {})[t.type] && Le.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && je(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                    return t.type = h, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !je(r) || l && ce(r[h]) && !fe(r) && ((s = r[l]) && (r[l] = null), he.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, kt), r[h](), t.isPropagationStopped() && p.removeEventListener(h, kt), he.event.triggered = void 0, s && (r[l] = s)), t.result
                }
            },
            simulate: function(e, t, n) {
                var r = he.extend(new he.Event, n, { type: e, isSimulated: !0 });
                he.event.trigger(r, null, t)
            }
        }), he.fn.extend({ trigger: function(e, t) { return this.each(function() { he.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return he.event.trigger(e, t, n, !0) } }), le.focusin || he.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) { he.event.simulate(t, e.target, he.event.fix(e)) };
            he.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = Le.access(r, t);
                    i || r.addEventListener(e, n, !0), Le.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = Le.access(r, t) - 1;
                    i ? Le.access(r, t, i) : (r.removeEventListener(e, n, !0), Le.remove(r, t))
                }
            }
        });
        var Nt = e.location,
            At = Date.now(),
            Dt = /\?/;
        he.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (t) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n };
        var jt = /\[\]$/,
            Lt = /\r?\n/g,
            qt = /^(?:submit|button|image|reset|file)$/i,
            Ht = /^(?:input|select|textarea|keygen)/i;
        he.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = ce(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() { i(this.name, this.value) });
            else
                for (n in e) V(n, e[n], t, i);
            return r.join("&")
        }, he.fn.extend({ serialize: function() { return he.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = he.prop(this, "elements"); return e ? he.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !he(this).is(":disabled") && Ht.test(this.nodeName) && !qt.test(e) && (this.checked || !ze.test(e)) }).map(function(e, t) { var n = he(this).val(); return null == n ? null : Array.isArray(n) ? he.map(n, function(e) { return { name: t.name, value: e.replace(Lt, "\r\n") } }) : { name: t.name, value: n.replace(Lt, "\r\n") } }).get() } });
        var Ot = /%20/g,
            Pt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            Wt = /^\/\//,
            Ft = {},
            $t = {},
            Bt = "*/".concat("*"),
            _t = K.createElement("a");
        _t.href = Nt.href, he.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Nt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(e, t) { return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e) },
            ajaxPrefilter: G(Ft),
            ajaxTransport: G($t),
            ajax: function(t, n) {
                function r(t, n, r, s) {
                    var l, p, d, b, w, T = n;
                    c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = 0 < t ? 4 : 0, l = 200 <= t && t < 300 || 304 === t, r && (b = function(e, t, n) {
                        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) { u.unshift(i); break }
                        if (u[0] in n) o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o]
                    }(h, C, r)), b = function(e, t, n, r) {
                        var i, o, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                if ("*" === o) o = u;
                                else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                            if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                        }
                        return { state: "success", data: t }
                    }(h, b, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (he.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, l = !(d = b.error))) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var i, o, a, s, u, l, c, f, p, d, h = he.ajaxSetup({}, n),
                    g = h.context || h,
                    v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
                    m = he.Deferred(),
                    y = he.Callbacks("once memory"),
                    x = h.statusCode || {},
                    b = {},
                    w = {},
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = Mt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() { return c ? a : null },
                        setRequestHeader: function(e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this },
                        overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) C.always(e[C.status]);
                                else
                                    for (t in e) x[t] = [x[t], e[t]];
                            return this
                        },
                        abort: function(e) { var t = e || T; return i && i.abort(t), r(0, t), this }
                    };
                if (m.promise(C), h.url = ((t || h.url || Nt.href) + "").replace(Wt, Nt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Se) || [""], null == h.crossDomain) { l = K.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = _t.protocol + "//" + _t.host != l.protocol + "//" + l.host } catch (t) { h.crossDomain = !0 } }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Y(Ft, h, n, C), c) return C;
                for (p in (f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), o = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Dt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Rt, "$1"), d = (Dt.test(o) ? "&" : "?") + "_=" + At++ + d), h.url = o + d), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
                if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Y($t, h, n, C)) {
                    if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                    h.async && 0 < h.timeout && (u = e.setTimeout(function() { C.abort("timeout") }, h.timeout));
                    try { c = !1, i.send(b, r) } catch (t) {
                        if (c) throw t;
                        r(-1, t)
                    }
                } else r(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) { return he.get(e, t, n, "json") },
            getScript: function(e, t) { return he.get(e, void 0, t, "script") }
        }), he.each(["get", "post"], function(e, t) { he[t] = function(e, n, r, i) { return ce(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({ url: e, type: t, dataType: i, data: n, success: r }, he.isPlainObject(e) && e)) } }), he._evalUrl = function(e, t) { return he.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { he.globalEval(e, t) } }) }, he.fn.extend({
            wrapAll: function(e) { var t; return this[0] && (ce(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
            wrapInner: function(e) {
                return ce(e) ? this.each(function(t) { he(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                    var t = he(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) { var t = ce(e); return this.each(function(n) { he(this).wrapAll(t ? e.call(this, n) : e) }) },
            unwrap: function(e) { return this.parent(e).not("body").each(function() { he(this).replaceWith(this.childNodes) }), this }
        }), he.expr.pseudos.hidden = function(e) { return !he.expr.pseudos.visible(e) }, he.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, he.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
        var zt = { 0: 200, 1223: 204 },
            Ut = he.ajaxSettings.xhr();
        le.cors = !!Ut && "withCredentials" in Ut, le.ajax = Ut = !!Ut, he.ajaxTransport(function(t) {
            var n, r;
            if (le.cors || Ut && !t.crossDomain) return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                    n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort");
                    try { s.send(t.hasContent && t.data || null) } catch (i) { if (n) throw i }
                },
                abort: function() { n && n() }
            }
        }), he.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), he.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return he.globalEval(e), e } } }), he.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), he.ajaxTransport("script", function(e) { var t, n; if (e.crossDomain || e.scriptAttrs) return { send: function(r, i) { t = he("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type) }), K.head.appendChild(t[0]) }, abort: function() { n && n() } } });
        var Xt, Vt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
        he.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Vt.pop() || he.expando + "_" + At++; return this[e] = !0, e } }), he.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ce(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Gt, "$1" + i) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || he.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && ce(o) && o(a[0]), a = o = void 0 }), "script" }), le.createHTMLDocument = ((Xt = K.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), he.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = K.implementation.createHTMLDocument("")).createElement("base")).href = K.location.href, t.head.appendChild(r)) : t = K), o = !n && [], (i = be.exec(e)) ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))); var r, i, o }, he.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = z(e.slice(s)), e = e.slice(0, s)), ce(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && he.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
        }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { he.fn[t] = function(e) { return this.on(t, e) } }), he.expr.pseudos.animated = function(e) { return he.grep(he.timers, function(t) { return e === t.elem }).length }, he.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = he.css(e, "position"),
                    c = he(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), o = he.css(e, "top"), u = he.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ce(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, he.fn.extend({
            offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { he.offset.setOffset(this, e, t) }); var t, n, r = this[0]; return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === he.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === he.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = he(e).offset()).top += he.css(e, "borderTopWidth", !0), i.left += he.css(e, "borderLeftWidth", !0))
                    }
                    return { top: t.top - i.top - he.css(r, "marginTop", !0), left: t.left - i.left - he.css(r, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent; return e || Ie }) }
        }), he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
            var n = "pageYOffset" === t;
            he.fn[e] = function(r) {
                return Ne(this, function(e, r, i) {
                    var o;
                    if (fe(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), he.each(["top", "left"], function(e, t) { he.cssHooks[t] = H(le.pixelPosition, function(e, n) { if (n) return n = q(e, t), it.test(n) ? he(e).position()[t] + "px" : n }) }), he.each({ Height: "height", Width: "width" }, function(e, t) {
            he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
                he.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Ne(this, function(t, n, i) { var o; return fe(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s) }, t, a ? i : void 0, a)
                }
            })
        }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { he.fn[t] = function(e, n) { return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t) } }), he.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), he.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), he.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), ce(e)) return r = ee.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(ee.call(arguments))) }).guid = e.guid = e.guid || he.guid++, i }, he.holdReady = function(e) { e ? he.readyWait++ : he.ready(!0) }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = o, he.isFunction = ce, he.isWindow = fe, he.camelCase = d, he.type = r, he.now = Date.now, he.isNumeric = function(e) { var t = he.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return he });
        var Yt = e.jQuery,
            Qt = e.$;
        return he.noConflict = function(t) { return e.$ === he && (e.$ = Qt), t && e.jQuery === he && (e.jQuery = Yt), he }, t || (e.jQuery = e.$ = he), he
    }), Kernal = { login: function() { localStorage.setItem("status", "login") }, logout: function() { localStorage.removeItem("status") }, isLogin: function() { return "login" === localStorage.getItem("status") }, getUserName: function() { return "\u5df2\u767b\u5f55\u7528\u6237" } }
})();