google.maps.__gjsload__('infowindow', function(_) {
    var iya = function() {
            this.h = new _.ea.Set
        },
        jya = function(a, b) {
            if (1 === a.h.size) {
                var c = _.u(Array, "from").call(Array, _.u(a.h, "values").call(a.h))[0];
                c.sk !== b.sk && (c.set("map", null), a.h.delete(c))
            }
            a.h.add(b)
        },
        hF = function(a) {
            var b = this;
            this.M = a.Uu;
            this.o = null;
            this.N = a.shouldFocus;
            this.h = _.om("div");
            _.Gt(this.h, "default");
            this.h.style.position = "absolute";
            this.h.style.left = this.h.style.top = "0";
            a.Ug.floatPane.appendChild(this.h);
            this.F = _.om("div", this.h);
            this.D = _.om("div", this.F);
            this.j = _.om("div", this.D);
            this.j.setAttribute("role",
                "dialog");
            this.j.tabIndex = -1;
            this.l = _.om("div", this.j);
            _.xra(this.h);
            _.Vl(this.j, "gm-style-iw");
            _.Vl(this.F, "gm-style-iw-a");
            _.Vl(this.D, "gm-style-iw-t");
            _.Vl(this.j, "gm-style-iw-c");
            _.Vl(this.l, "gm-style-iw-d");
            _.ti.h && (a.pc ? this.j.style.paddingLeft = 0 : this.j.style.paddingRight = 0, this.j.style.paddingBottom = 0, this.l.style.overflow = "scroll");
            gF(this, !1);
            _.E.addDomListener(this.h, "mousedown", _.Xe);
            _.E.addDomListener(this.h, "mouseup", _.Xe);
            _.E.addDomListener(this.h, "mousemove", _.Xe);
            _.E.addDomListener(this.h,
                "pointerdown", _.Xe);
            _.E.addDomListener(this.h, "pointerup", _.Xe);
            _.E.addDomListener(this.h, "pointermove", _.Xe);
            _.E.addDomListener(this.h, "dblclick", _.Xe);
            _.E.addDomListener(this.h, "click", _.Xe);
            _.E.addDomListener(this.h, "touchstart", _.Xe);
            _.E.addDomListener(this.h, "touchend", _.Xe);
            _.E.addDomListener(this.h, "touchmove", _.Xe);
            _.E.Tb(this.h, "contextmenu", this, this.Xw);
            _.E.Tb(this.h, "wheel", this, _.Xe);
            _.E.Tb(this.h, "mousewheel", this, _.Ue);
            _.E.Tb(this.h, "MozMousePixelScroll", this, _.Ue);
            this.H = new _.EA({
                ci: new _.H(8,
                    8),
                Mg: new _.$f(14, 14),
                offset: new _.H(-6, -6)
            });
            this.j.appendChild(this.H.element);
            _.E.addDomListener(this.H.element, "click", function(c) {
                _.Xe(c);
                _.E.trigger(b, "closeclick");
                b.set("open", !1)
            });
            this.m = null;
            this.J = !1;
            this.C = new _.ci(function() {
                !b.J && b.get("content") && b.get("visible") && (_.E.trigger(b, "domready"), b.J = !0)
            }, 0);
            this.K = _.E.addDomListener(this.h, "keydown", function(c) {
                "Escape" !== c.key && "Esc" !== c.key || !b.j.contains(document.activeElement) || (c.stopPropagation(), _.E.trigger(b, "closeclick"), b.set("open", !1))
            })
        },
        kya = function(a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c == a.m) gF(a, b && a.get("position"));
            else {
                if (a.m) {
                    var d = a.m.parentNode;
                    d == a.l && d.removeChild(a.m)
                }
                c && (a.J = !1, a.l.appendChild(c));
                gF(a, b && a.get("position"));
                a.m = c;
                iF(a)
            }
        },
        lya = function(a) {
            var b = a.get("pixelOffset") || new _.$f(0, 0),
                c = new _.$f(a.j.offsetWidth, a.j.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        gF = function(a, b) {
            a.h.style.visibility = b ? "" : "hidden";
            b && a.N && (a.focus(), a.N = !1)
        },
        iF = function(a) {
            var b = a.get("layoutPixelBounds"),
                c = a.get("pixelOffset");
            var d = a.get("maxWidth") || 648;
            var e = a.get("minWidth") || 0;
            c ? (b ? (c = b.Fa - b.Aa - (11 + -c.height), b = b.Ma - b.Da - 6, 240 <= b && (b -= 120), 240 <= c && (c -= 120)) : (b = 648, c = 654), b = Math.min(b, d), b = Math.max(e, b), b = Math.max(0, b), c = Math.max(0, c), d = {
                Bf: new _.$f(b, c),
                minWidth: e
            }) : d = null;
            if (e = d) d = e.Bf, e = e.minWidth, a.j.style.maxWidth = _.Bl(d.width), a.j.style.maxHeight = _.Bl(d.height),
                a.j.style.minWidth = _.Bl(e), a.l.style.maxHeight = _.ti.h ? _.Bl(d.height - 18) : _.Bl(d.height - 36), jF(a), a.C.start()
        },
        jF = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = lya(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.nm(a.F, b);
                b = a.get("zIndex");
                _.pm(a.h, _.Zd(b) ? b : e + 60);
                a.set("pixelBounds", _.mh(d, e, f, c))
            }
        },
        mya = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Ug: a,
                pc: _.vr.pc(),
                Uu: c,
                shouldFocus: b
            };
            return new hF(b)
        },
        kF = function(a, b, c) {
            var d = this;
            this.o = !0;
            this.Va = this.m = this.l = null;
            var e = b.__gm,
                f = b instanceof _.jf;
            f && c ? c.then(function(m) {
                d.o && (d.l = m, d.Va = new _.FA(function(p) {
                    d.m = new _.ln(b, m, p, function() {});
                    m.ib(d.m);
                    return d.m
                }), d.Va.bindTo("latLngPosition", a, "position"), k.bindTo("position", d.Va, "pixelPosition"))
            }) : (this.Va = new _.FA, this.Va.bindTo("latLngPosition", a, "position"), this.Va.bindTo("center", e, "projectionCenterQ"), this.Va.bindTo("zoom", e), this.Va.bindTo("offset", e), this.Va.bindTo("projection", b), this.Va.bindTo("focus", b, "position"));
            this.D = f ? a.Pg() ? "Ia" : "Id" : null;
            this.j = [];
            var g = new _.GA(["scale"], "visible", function(m) {
                return null == m || .3 <= m
            });
            this.Va && g.bindTo("scale", this.Va);
            var h = a.get("shouldFocus"),
                k = this.C = mya(b, h);
            k.set("logAsInternal", a.Pg());
            k.bindTo("zIndex", a);
            k.bindTo("layoutPixelBounds", e, "pixelBounds");
            k.bindTo("disableAutoPan", a);
            k.bindTo("maxWidth", a);
            k.bindTo("minWidth", a);
            k.bindTo("content", a);
            k.bindTo("pixelOffset", a);
            k.bindTo("visible", g);
            this.Va && k.bindTo("position", this.Va, "pixelPosition");
            this.h = new _.ci(function() {
                if (b instanceof _.jf)
                    if (d.l) {
                        var m = a.get("position");
                        m && _.yha(b, d.l, new _.Af(m), lya(k))
                    } else c.then(function() {
                        return d.h.start()
                    });
                else(m = k.get("pixelBounds")) ? _.E.trigger(e, "pantobounds", m) : d.h.start()
            }, 150);
            if (f) {
                var l = null;
                this.j.push(_.E.Sb(a, "position_changed", function() {
                    var m = a.get("position");
                    !m || a.get("disableAutoPan") || m.equals(l) || (d.h.start(), l = m)
                }))
            } else a.get("disableAutoPan") || this.h.start();
            k.set("open", !0);
            this.j.push(_.E.addListener(k, "domready", function() {
                a.trigger("domready")
            }));
            this.j.push(_.E.addListener(k,
                "closeclick",
                function() {
                    a.close();
                    a.trigger("closeclick")
                }));
            this.D && _.fg(b, this.D)
        },
        nya = function(a, b, c) {
            return b instanceof _.jf ? new kF(a, b, c) : new kF(a, b)
        },
        oya = function(a) {
            a = a.__gm;
            return a.IW_AUTO_CLOSER = a.IW_AUTO_CLOSER || new iya
        };
    _.A(hF, _.F);
    _.n = hF.prototype;
    _.n.open_changed = function() {
        kya(this)
    };
    _.n.content_changed = function() {
        kya(this)
    };
    _.n.dispose = function() {
        var a = this;
        setTimeout(function() {
            document.activeElement && document.activeElement !== document.body || (a.o && a.o !== document.body ? _.Lt(a.o, !0) || _.Lt(a.M, !0) : _.Lt(a.M, !0))
        });
        this.K && _.E.removeListener(this.K);
        this.h.parentNode.removeChild(this.h);
        this.C.stop();
        this.C.dispose()
    };
    _.n.pixelOffset_changed = function() {
        var a = this.get("pixelOffset") || new _.$f(0, 0);
        this.D.style.right = _.Bl(-a.width);
        this.D.style.bottom = _.Bl(-a.height + 11);
        iF(this)
    };
    _.n.layoutPixelBounds_changed = function() {
        iF(this)
    };
    _.n.position_changed = function() {
        this.get("position") ? (jF(this), gF(this, !!this.get("open"))) : gF(this, !1)
    };
    _.n.zIndex_changed = function() {
        jF(this)
    };
    _.n.visible_changed = function() {
        _.Dt(this.h, this.get("visible"));
        this.C.start()
    };
    _.n.Xw = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Ue(a) : _.We(a)
    };
    _.n.focus = function() {
        this.o = document.activeElement;
        if (this.get("disableAutoPan")) _.Lt(this.j, !0);
        else {
            var a = _.ela(this.l);
            if (a.length) {
                a = a[0];
                var b = this.l.getBoundingClientRect(),
                    c = a.getBoundingClientRect();
                _.Lt(c.bottom <= b.bottom && c.right <= b.right ? a : this.j, !0)
            } else _.Lt(this.H.element, !0)
        }
    };
    kF.prototype.close = function() {
        if (this.o) {
            this.o = !1;
            for (var a = _.x(this.j), b = a.next(); !b.done; b = a.next()) _.E.removeListener(b.value);
            this.j.length = 0;
            this.h.stop();
            this.h.dispose();
            this.l && this.m && this.l.Qf(this.m);
            a = this.C;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.Va && this.Va.unbindAll()
        }
    };
    _.Te("infowindow", {
        Qt: function(a) {
            var b = null;
            _.E.Sb(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.zp.h.delete(a), b.qx.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (b = {
                        qx: nya(a, e, e instanceof _.jf ? f.j.then(function(g) {
                            return g.Xa
                        }) : void 0),
                        zp: oya(e)
                    }, jya(b.zp, a)) : _.E.addListenerOnce(f, "panes_changed", d)
                }
            })
        }
    });
});