function Ot(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const ne = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Gt = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], he = () => {
}, Li = () => !1, xl = /^on[^a-z]/, Vn = (e) => xl.test(e), Xn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, ur = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dl = Object.prototype.hasOwnProperty, K = (e, t) => Dl.call(e, t), k = Array.isArray, It = (e) => co(e) === "[object Map]", Hi = (e) => co(e) === "[object Set]", L = (e) => typeof e == "function", se = (e) => typeof e == "string", fr = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", dr = (e) => ee(e) && L(e.then) && L(e.catch), Fi = Object.prototype.toString, co = (e) => Fi.call(e), pr = (e) => co(e).slice(8, -1), Ui = (e) => co(e) === "[object Object]", hr = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fn = /* @__PURE__ */ Ot(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $l = /* @__PURE__ */ Ot(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ao = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Cl = /-(\w)/g, Xt = ao((e) => e.replace(Cl, (t, n) => n ? n.toUpperCase() : "")), Vl = /\B([A-Z])/g, vt = ao(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), uo = ao(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), Ct = ao(
  (e) => e ? `on${uo(e)}` : ""
), yn = (e, t) => !Object.is(e, t), on = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Zn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Sl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Hr;
const eo = () => Hr || (Hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function mr(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = se(o) ? Rl(o) : mr(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else {
    if (se(e))
      return e;
    if (ee(e))
      return e;
  }
}
const Il = /;(?![^(]*\))/g, Pl = /:([^]+)/, Tl = /\/\*[^]*?\*\//g;
function Rl(e) {
  const t = {};
  return e.replace(Tl, "").split(Il).forEach((n) => {
    if (n) {
      const o = n.split(Pl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function gr(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const o = gr(e[n]);
      o && (t += o + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Al = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ml = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", kl = /* @__PURE__ */ Ot(Al), jl = /* @__PURE__ */ Ot(Ml), zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ll = /* @__PURE__ */ Ot(zl);
function Bi(e) {
  return !!e || e === "";
}
const Hl = (e) => se(e) ? e : e == null ? "" : k(e) || ee(e) && (e.toString === Fi || !L(e.toString)) ? JSON.stringify(e, Ki, 2) : String(e), Ki = (e, t) => t && t.__v_isRef ? Ki(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Hi(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ee(t) && !k(t) && !Ui(t) ? String(t) : t;
function Mo(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ze;
class Wi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ze, !t && ze && (this.index = (ze.scopes || (ze.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    } else
      ({}).NODE_ENV !== "production" && Mo("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ze = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ze = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Fl(e) {
  return new Wi(e);
}
function Ul(e, t = ze) {
  t && t.active && t.effects.push(e);
}
function Bl() {
  return ze;
}
const bn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, qi = (e) => (e.w & yt) > 0, Yi = (e) => (e.n & yt) > 0, Kl = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= yt;
}, Wl = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      qi(r) && !Yi(r) ? r.delete(e) : t[n++] = r, r.w &= ~yt, r.n &= ~yt;
    }
    t.length = n;
  }
}, ko = /* @__PURE__ */ new WeakMap();
let un = 0, yt = 1;
const jo = 30;
let be;
const Pt = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), zo = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class _r {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ul(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = be, n = Et;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = be, be = this, Et = !0, yt = 1 << ++un, un <= jo ? Kl(this) : Fr(this), this.fn();
    } finally {
      un <= jo && Wl(this), yt = 1 << --un, be = this.parent, Et = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    be === this ? this.deferStop = !0 : this.active && (Fr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Fr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Et = !0;
const Gi = [];
function Lt() {
  Gi.push(Et), Et = !1;
}
function Ht() {
  const e = Gi.pop();
  Et = e === void 0 ? !0 : e;
}
function ge(e, t, n) {
  if (Et && be) {
    let o = ko.get(e);
    o || ko.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = bn());
    const i = {}.NODE_ENV !== "production" ? { effect: be, target: e, type: t, key: n } : void 0;
    Lo(r, i);
  }
}
function Lo(e, t) {
  let n = !1;
  un <= jo ? Yi(e) || (e.n |= yt, n = !qi(e)) : n = !e.has(be), n && (e.add(be), be.deps.push(e), {}.NODE_ENV !== "production" && be.onTrack && be.onTrack(
    ie(
      {
        effect: be
      },
      t
    )
  ));
}
function Xe(e, t, n, o, r, i) {
  const s = ko.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (n === "length" && k(e)) {
    const f = Number(o);
    s.forEach((u, d) => {
      (d === "length" || d >= f) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        k(e) ? hr(n) && l.push(s.get("length")) : (l.push(s.get(Pt)), It(e) && l.push(s.get(zo)));
        break;
      case "delete":
        k(e) || (l.push(s.get(Pt)), It(e) && l.push(s.get(zo)));
        break;
      case "set":
        It(e) && l.push(s.get(Pt));
        break;
    }
  const c = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: i } : void 0;
  if (l.length === 1)
    l[0] && ({}.NODE_ENV !== "production" ? Wt(l[0], c) : Wt(l[0]));
  else {
    const f = [];
    for (const u of l)
      u && f.push(...u);
    ({}).NODE_ENV !== "production" ? Wt(bn(f), c) : Wt(bn(f));
  }
}
function Wt(e, t) {
  const n = k(e) ? e : [...e];
  for (const o of n)
    o.computed && Ur(o, t);
  for (const o of n)
    o.computed || Ur(o, t);
}
function Ur(e, t) {
  (e !== be || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ie({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ql = /* @__PURE__ */ Ot("__proto__,__v_isRef,__isVue"), Ji = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fr)
), Yl = /* @__PURE__ */ fo(), Gl = /* @__PURE__ */ fo(!1, !0), Jl = /* @__PURE__ */ fo(!0), Ql = /* @__PURE__ */ fo(!0, !0), Br = /* @__PURE__ */ Xl();
function Xl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let i = 0, s = this.length; i < s; i++)
        ge(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Lt();
      const o = F(this)[t].apply(this, n);
      return Ht(), o;
    };
  }), e;
}
function Zl(e) {
  const t = F(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
function fo(e = !1, t = !1) {
  return function(o, r, i) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && i === (e ? t ? rs : os : t ? ns : ts).get(o))
      return o;
    const s = k(o);
    if (!e) {
      if (s && K(Br, r))
        return Reflect.get(Br, r, i);
      if (r === "hasOwnProperty")
        return Zl;
    }
    const l = Reflect.get(o, r, i);
    return (fr(r) ? Ji.has(r) : ql(r)) || (e || ge(o, "get", r), t) ? l : ce(l) ? s && hr(r) ? l : l.value : ee(l) ? e ? ss(l) : mo(l) : l;
  };
}
const ec = /* @__PURE__ */ Qi(), tc = /* @__PURE__ */ Qi(!0);
function Qi(e = !1) {
  return function(n, o, r, i) {
    let s = n[o];
    if (bt(s) && ce(s) && !ce(r))
      return !1;
    if (!e && (!to(r) && !bt(r) && (s = F(s), r = F(r)), !k(n) && ce(s) && !ce(r)))
      return s.value = r, !0;
    const l = k(n) && hr(o) ? Number(o) < n.length : K(n, o), c = Reflect.set(n, o, r, i);
    return n === F(i) && (l ? yn(r, s) && Xe(n, "set", o, r, s) : Xe(n, "add", o, r)), c;
  };
}
function nc(e, t) {
  const n = K(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Xe(e, "delete", t, void 0, o), r;
}
function oc(e, t) {
  const n = Reflect.has(e, t);
  return (!fr(t) || !Ji.has(t)) && ge(e, "has", t), n;
}
function rc(e) {
  return ge(e, "iterate", k(e) ? "length" : Pt), Reflect.ownKeys(e);
}
const Xi = {
  get: Yl,
  set: ec,
  deleteProperty: nc,
  has: oc,
  ownKeys: rc
}, Zi = {
  get: Jl,
  set(e, t) {
    return {}.NODE_ENV !== "production" && Mo(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && Mo(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, ic = /* @__PURE__ */ ie(
  {},
  Xi,
  {
    get: Gl,
    set: tc
  }
), sc = /* @__PURE__ */ ie(
  {},
  Zi,
  {
    get: Ql
  }
), Er = (e) => e, po = (e) => Reflect.getPrototypeOf(e);
function An(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = F(e), i = F(t);
  n || (t !== i && ge(r, "get", t), ge(r, "get", i));
  const { has: s } = po(r), l = o ? Er : n ? vr : Nn;
  if (s.call(r, t))
    return l(e.get(t));
  if (s.call(r, i))
    return l(e.get(i));
  e !== r && e.get(t);
}
function Mn(e, t = !1) {
  const n = this.__v_raw, o = F(n), r = F(e);
  return t || (e !== r && ge(o, "has", e), ge(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function kn(e, t = !1) {
  return e = e.__v_raw, !t && ge(F(e), "iterate", Pt), Reflect.get(e, "size", e);
}
function Kr(e) {
  e = F(e);
  const t = F(this);
  return po(t).has.call(t, e) || (t.add(e), Xe(t, "add", e, e)), this;
}
function Wr(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: r } = po(n);
  let i = o.call(n, e);
  i ? {}.NODE_ENV !== "production" && es(n, o, e) : (e = F(e), i = o.call(n, e));
  const s = r.call(n, e);
  return n.set(e, t), i ? yn(t, s) && Xe(n, "set", e, t, s) : Xe(n, "add", e, t), this;
}
function qr(e) {
  const t = F(this), { has: n, get: o } = po(t);
  let r = n.call(t, e);
  r ? {}.NODE_ENV !== "production" && es(t, n, e) : (e = F(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, s = t.delete(e);
  return r && Xe(t, "delete", e, void 0, i), s;
}
function Yr() {
  const e = F(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? It(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Xe(e, "clear", void 0, void 0, n), o;
}
function jn(e, t) {
  return function(o, r) {
    const i = this, s = i.__v_raw, l = F(s), c = t ? Er : e ? vr : Nn;
    return !e && ge(l, "iterate", Pt), s.forEach((f, u) => o.call(r, c(f), c(u), i));
  };
}
function zn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = F(r), s = It(i), l = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, f = r[e](...o), u = n ? Er : t ? vr : Nn;
    return !t && ge(
      i,
      "iterate",
      c ? zo : Pt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: h } = f.next();
        return h ? { value: d, done: h } : {
          value: l ? [u(d[0]), u(d[1])] : u(d),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ft(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${uo(e)} operation ${n}failed: target is readonly.`,
        F(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function lc() {
  const e = {
    get(i) {
      return An(this, i);
    },
    get size() {
      return kn(this);
    },
    has: Mn,
    add: Kr,
    set: Wr,
    delete: qr,
    clear: Yr,
    forEach: jn(!1, !1)
  }, t = {
    get(i) {
      return An(this, i, !1, !0);
    },
    get size() {
      return kn(this);
    },
    has: Mn,
    add: Kr,
    set: Wr,
    delete: qr,
    clear: Yr,
    forEach: jn(!1, !0)
  }, n = {
    get(i) {
      return An(this, i, !0);
    },
    get size() {
      return kn(this, !0);
    },
    has(i) {
      return Mn.call(this, i, !0);
    },
    add: ft("add"),
    set: ft("set"),
    delete: ft("delete"),
    clear: ft("clear"),
    forEach: jn(!0, !1)
  }, o = {
    get(i) {
      return An(this, i, !0, !0);
    },
    get size() {
      return kn(this, !0);
    },
    has(i) {
      return Mn.call(this, i, !0);
    },
    add: ft("add"),
    set: ft("set"),
    delete: ft("delete"),
    clear: ft("clear"),
    forEach: jn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = zn(
      i,
      !1,
      !1
    ), n[i] = zn(
      i,
      !0,
      !1
    ), t[i] = zn(
      i,
      !1,
      !0
    ), o[i] = zn(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  cc,
  ac,
  uc,
  fc
] = /* @__PURE__ */ lc();
function ho(e, t) {
  const n = t ? e ? fc : uc : e ? ac : cc;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    K(n, r) && r in o ? n : o,
    r,
    i
  );
}
const dc = {
  get: /* @__PURE__ */ ho(!1, !1)
}, pc = {
  get: /* @__PURE__ */ ho(!1, !0)
}, hc = {
  get: /* @__PURE__ */ ho(!0, !1)
}, mc = {
  get: /* @__PURE__ */ ho(!0, !0)
};
function es(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const r = pr(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ts = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap();
function gc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _c(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gc(pr(e));
}
function mo(e) {
  return bt(e) ? e : go(
    e,
    !1,
    Xi,
    dc,
    ts
  );
}
function is(e) {
  return go(
    e,
    !1,
    ic,
    pc,
    ns
  );
}
function ss(e) {
  return go(
    e,
    !0,
    Zi,
    hc,
    os
  );
}
function fn(e) {
  return go(
    e,
    !0,
    sc,
    mc,
    rs
  );
}
function go(e, t, n, o, r) {
  if (!ee(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = _c(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Tt(e) {
  return bt(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function bt(e) {
  return !!(e && e.__v_isReadonly);
}
function to(e) {
  return !!(e && e.__v_isShallow);
}
function Ho(e) {
  return Tt(e) || bt(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function _o(e) {
  return Zn(e, "__v_skip", !0), e;
}
const Nn = (e) => ee(e) ? mo(e) : e, vr = (e) => ee(e) ? ss(e) : e;
function ls(e) {
  Et && be && (e = F(e), {}.NODE_ENV !== "production" ? Lo(e.dep || (e.dep = bn()), {
    target: e,
    type: "get",
    key: "value"
  }) : Lo(e.dep || (e.dep = bn())));
}
function cs(e, t) {
  e = F(e);
  const n = e.dep;
  n && ({}.NODE_ENV !== "production" ? Wt(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : Wt(n));
}
function ce(e) {
  return !!(e && e.__v_isRef === !0);
}
function yr(e) {
  return as(e, !1);
}
function Ec(e) {
  return as(e, !0);
}
function as(e, t) {
  return ce(e) ? e : new vc(e, t);
}
class vc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : Nn(t);
  }
  get value() {
    return ls(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || to(t) || bt(t);
    t = n ? t : F(t), yn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Nn(t), cs(this, t));
  }
}
function Te(e) {
  return ce(e) ? e.value : e;
}
const yc = {
  get: (e, t, n) => Te(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ce(r) && !ce(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function us(e) {
  return Tt(e) ? e : new Proxy(e, yc);
}
class bc {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new _r(t, () => {
      this._dirty || (this._dirty = !0, cs(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return ls(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function Nc(e, t, n = !1) {
  let o, r;
  const i = L(e);
  i ? (o = e, r = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : he) : (o = e.get, r = e.set);
  const s = new bc(o, r, i || !r, n);
  return {}.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
const Rt = [];
function Un(e) {
  Rt.push(e);
}
function Bn() {
  Rt.pop();
}
function w(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  Lt();
  const n = Rt.length ? Rt[Rt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = wc();
  if (o)
    rt(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Oo(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Oc(r)), console.warn(...i);
  }
  Ht();
}
function wc() {
  let e = Rt[Rt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Oc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xc(n));
  }), t;
}
function xc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Oo(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Dc(e.props), i] : [r + i];
}
function Dc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...fs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fs(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ce(t) ? (t = fs(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const br = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function rt(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (i) {
    Eo(i, t, n);
  }
  return r;
}
function Ue(e, t, n, o) {
  if (L(e)) {
    const i = rt(e, t, n, o);
    return i && dr(i) && i.catch((s) => {
      Eo(s, t, n);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(Ue(e[i], t, n, o));
  return r;
}
function Eo(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, l = {}.NODE_ENV !== "production" ? br[n] : n;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, s, l) === !1)
            return;
      }
      i = i.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      rt(
        c,
        null,
        10,
        [e, s, l]
      );
      return;
    }
  }
  $c(e, n, r, o);
}
function $c(e, t, n, o = !0) {
  if ({}.NODE_ENV !== "production") {
    const r = br[t];
    if (n && Un(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Bn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let wn = !1, Fo = !1;
const Ee = [];
let Je = 0;
const Jt = [];
let Ge = null, pt = 0;
const ds = /* @__PURE__ */ Promise.resolve();
let Nr = null;
const Cc = 100;
function ps(e) {
  const t = Nr || ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vc(e) {
  let t = Je + 1, n = Ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    On(Ee[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function vo(e) {
  (!Ee.length || !Ee.includes(
    e,
    wn && e.allowRecurse ? Je + 1 : Je
  )) && (e.id == null ? Ee.push(e) : Ee.splice(Vc(e.id), 0, e), hs());
}
function hs() {
  !wn && !Fo && (Fo = !0, Nr = ds.then(_s));
}
function Sc(e) {
  const t = Ee.indexOf(e);
  t > Je && Ee.splice(t, 1);
}
function ms(e) {
  k(e) ? Jt.push(...e) : (!Ge || !Ge.includes(
    e,
    e.allowRecurse ? pt + 1 : pt
  )) && Jt.push(e), hs();
}
function Gr(e, t = wn ? Je + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Ee.length; t++) {
    const n = Ee[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && wr(e, n))
        continue;
      Ee.splice(t, 1), t--, n();
    }
  }
}
function gs(e) {
  if (Jt.length) {
    const t = [...new Set(Jt)];
    if (Jt.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ge.sort((n, o) => On(n) - On(o)), pt = 0; pt < Ge.length; pt++)
      ({}).NODE_ENV !== "production" && wr(e, Ge[pt]) || Ge[pt]();
    Ge = null, pt = 0;
  }
}
const On = (e) => e.id == null ? 1 / 0 : e.id, Ic = (e, t) => {
  const n = On(e) - On(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function _s(e) {
  Fo = !1, wn = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ee.sort(Ic);
  const t = {}.NODE_ENV !== "production" ? (n) => wr(e, n) : he;
  try {
    for (Je = 0; Je < Ee.length; Je++) {
      const n = Ee[Je];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        rt(n, null, 14);
      }
    }
  } finally {
    Je = 0, Ee.length = 0, gs(e), wn = !1, Nr = null, (Ee.length || Jt.length) && _s(e);
  }
}
function wr(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Cc) {
      const o = t.ownerInstance, r = o && Gs(o.type);
      return w(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let At = !1;
const Kt = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (eo().__VUE_HMR_RUNTIME__ = {
  createRecord: Do(Es),
  rerender: Do(Rc),
  reload: Do(Ac)
});
const zt = /* @__PURE__ */ new Map();
function Pc(e) {
  const t = e.type.__hmrId;
  let n = zt.get(t);
  n || (Es(t, e.type), n = zt.get(t)), n.instances.add(e);
}
function Tc(e) {
  zt.get(e.type.__hmrId).instances.delete(e);
}
function Es(e, t) {
  return zt.has(e) ? !1 : (zt.set(e, {
    initialDef: hn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function hn(e) {
  return Js(e) ? e.__vccOpts : e;
}
function Rc(e, t) {
  const n = zt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, hn(o.type).render = t), o.renderCache = [], At = !0, o.update(), At = !1;
  }));
}
function Ac(e, t) {
  const n = zt.get(e);
  if (!n)
    return;
  t = hn(t), Jr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = hn(r.type);
    Kt.has(i) || (i !== n.initialDef && Jr(i, t), Kt.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Kt.add(i), r.ceReload(t.styles), Kt.delete(i)) : r.parent ? vo(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ms(() => {
    for (const r of o)
      Kt.delete(
        hn(r.type)
      );
  });
}
function Jr(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Do(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Qe, dn = [], Uo = !1;
function Sn(e, ...t) {
  Qe ? Qe.emit(e, ...t) : Uo || dn.push({ event: e, args: t });
}
function vs(e, t) {
  var n, o;
  Qe = e, Qe ? (Qe.enabled = !0, dn.forEach(({ event: r, args: i }) => Qe.emit(r, ...i)), dn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    vs(i, t);
  }), setTimeout(() => {
    Qe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Uo = !0, dn = []);
  }, 3e3)) : (Uo = !0, dn = []);
}
function Mc(e, t) {
  Sn("app:init", e, t, {
    Fragment: De,
    Text: Pn,
    Comment: Ae,
    Static: qn
  });
}
function kc(e) {
  Sn("app:unmount", e);
}
const jc = /* @__PURE__ */ Or(
  "component:added"
  /* COMPONENT_ADDED */
), ys = /* @__PURE__ */ Or(
  "component:updated"
  /* COMPONENT_UPDATED */
), zc = /* @__PURE__ */ Or(
  "component:removed"
  /* COMPONENT_REMOVED */
), Lc = (e) => {
  Qe && typeof Qe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Qe.cleanupBuffer(e) && zc(e);
};
function Or(e) {
  return (t) => {
    Sn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Hc = /* @__PURE__ */ bs(
  "perf:start"
  /* PERFORMANCE_START */
), Fc = /* @__PURE__ */ bs(
  "perf:end"
  /* PERFORMANCE_END */
);
function bs(e) {
  return (t, n, o) => {
    Sn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Uc(e, t, n) {
  Sn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Bc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || ne;
  if ({}.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(Ct(t) in d)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ct(t)}" prop.`
        );
      else {
        const h = u[t];
        L(h) && (h(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && t.slice(7);
  if (s && s in o) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: h } = o[u] || ne;
    h && (r = n.map((_) => se(_) ? _.trim() : _)), d && (r = n.map(Sl));
  }
  if ({}.NODE_ENV !== "production" && Uc(e, t, r), {}.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Ct(u)] && w(
      `Event "${u}" is emitted in component ${Oo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${vt(t)}" instead of "${t}".`
    );
  }
  let l, c = o[l = Ct(t)] || // also try camelCase event handler (#2249)
  o[l = Ct(Xt(t))];
  !c && i && (c = o[l = Ct(vt(t))]), c && Ue(
    c,
    e,
    6,
    r
  );
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ue(
      f,
      e,
      6,
      r
    );
  }
}
function Ns(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, l = !1;
  if (!L(e)) {
    const c = (f) => {
      const u = Ns(f, t, !0);
      u && (l = !0, ie(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (ee(e) && o.set(e, null), null) : (k(i) ? i.forEach((c) => s[c] = null) : ie(s, i), ee(e) && o.set(e, s), s);
}
function yo(e, t) {
  return !e || !Vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, vt(t)) || K(e, t));
}
let me = null, bo = null;
function no(e) {
  const t = me;
  return me = e, bo = e && e.type.__scopeId || null, t;
}
function ws(e) {
  bo = e;
}
function Os() {
  bo = null;
}
function ae(e, t = me, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ci(-1);
    const i = no(t);
    let s;
    try {
      s = e(...r);
    } finally {
      no(i), o._d && ci(1);
    }
    return {}.NODE_ENV !== "production" && ys(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Bo = !1;
function oo() {
  Bo = !0;
}
function $o(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: c,
    emit: f,
    render: u,
    renderCache: d,
    data: h,
    setupState: _,
    ctx: x,
    inheritAttrs: T
  } = e;
  let j, I;
  const z = no(e);
  ({}).NODE_ENV !== "production" && (Bo = !1);
  try {
    if (n.shapeFlag & 4) {
      const M = r || o;
      j = He(
        u.call(
          M,
          M,
          d,
          i,
          _,
          h,
          x
        )
      ), I = c;
    } else {
      const M = t;
      ({}).NODE_ENV !== "production" && c === i && oo(), j = He(
        M.length > 1 ? M(
          i,
          {}.NODE_ENV !== "production" ? {
            get attrs() {
              return oo(), c;
            },
            slots: l,
            emit: f
          } : { attrs: c, slots: l, emit: f }
        ) : M(
          i,
          null
          /* we know it doesn't need it */
        )
      ), I = t.props ? c : Wc(c);
    }
  } catch (M) {
    gn.length = 0, Eo(M, e, 1), j = X(Ae);
  }
  let A = j, oe;
  if ({}.NODE_ENV !== "production" && j.patchFlag > 0 && j.patchFlag & 2048 && ([A, oe] = Kc(j)), I && T !== !1) {
    const M = Object.keys(I), { shapeFlag: de } = A;
    if (M.length) {
      if (de & 7)
        s && M.some(Xn) && (I = qc(
          I,
          s
        )), A = Nt(A, I);
      else if ({}.NODE_ENV !== "production" && !Bo && A.type !== Ae) {
        const Ne = Object.keys(c), Be = [], we = [];
        for (let Ve = 0, ke = Ne.length; Ve < ke; Ve++) {
          const Oe = Ne[Ve];
          Vn(Oe) ? Xn(Oe) || Be.push(Oe[2].toLowerCase() + Oe.slice(3)) : we.push(Oe);
        }
        we.length && w(
          `Extraneous non-props attributes (${we.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Be.length && w(
          `Extraneous non-emits event listeners (${Be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !Qr(A) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), A = Nt(A), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !Qr(A) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), A.transition = n.transition), {}.NODE_ENV !== "production" && oe ? oe(A) : j = A, no(z), j;
}
const Kc = (e) => {
  const t = e.children, n = e.dynamicChildren, o = xs(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [He(o), s];
};
function xs(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Zt(o)) {
      if (o.type !== Ae || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Wc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, qc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Xn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Qr = (e) => e.shapeFlag & 7 || e.type === Ae;
function Yc(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: l, patchFlag: c } = t, f = i.emitsOptions;
  if ({}.NODE_ENV !== "production" && (r || l) && At || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? Xr(o, s, f) : !!s;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (s[h] !== o[h] && !yo(f, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Xr(o, s, f) : !0 : !!s;
  return !1;
}
function Xr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !yo(n, i))
      return !0;
  }
  return !1;
}
function Gc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Jc = (e) => e.__isSuspense;
function Qc(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : ms(e);
}
function Xc(e, t) {
  return xr(e, null, t);
}
const Ln = {};
function Qt(e, t, n) {
  return {}.NODE_ENV !== "production" && !L(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xr(e, t, n);
}
function xr(e, t, { immediate: n, deep: o, flush: r, onTrack: i, onTrigger: s } = ne) {
  var l;
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (M) => {
    w(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = Bl() === ((l = fe) == null ? void 0 : l.scope) ? fe : null;
  let u, d = !1, h = !1;
  if (ce(e) ? (u = () => e.value, d = to(e)) : Tt(e) ? (u = () => e, o = !0) : k(e) ? (h = !0, d = e.some((M) => Tt(M) || to(M)), u = () => e.map((M) => {
    if (ce(M))
      return M.value;
    if (Tt(M))
      return qt(M);
    if (L(M))
      return rt(M, f, 2);
    ({}).NODE_ENV !== "production" && c(M);
  })) : L(e) ? t ? u = () => rt(e, f, 2) : u = () => {
    if (!(f && f.isUnmounted))
      return _ && _(), Ue(
        e,
        f,
        3,
        [x]
      );
  } : (u = he, {}.NODE_ENV !== "production" && c(e)), t && o) {
    const M = u;
    u = () => qt(M());
  }
  let _, x = (M) => {
    _ = A.onStop = () => {
      rt(M, f, 4);
    };
  }, T;
  if (Dn)
    if (x = he, t ? n && Ue(t, f, 3, [
      u(),
      h ? [] : void 0,
      x
    ]) : u(), r === "sync") {
      const M = tu();
      T = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return he;
  let j = h ? new Array(e.length).fill(Ln) : Ln;
  const I = () => {
    if (A.active)
      if (t) {
        const M = A.run();
        (o || d || (h ? M.some(
          (de, Ne) => yn(de, j[Ne])
        ) : yn(M, j))) && (_ && _(), Ue(t, f, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          j === Ln ? void 0 : h && j[0] === Ln ? [] : j,
          x
        ]), j = M);
      } else
        A.run();
  };
  I.allowRecurse = !!t;
  let z;
  r === "sync" ? z = I : r === "post" ? z = () => xe(I, f && f.suspense) : (I.pre = !0, f && (I.id = f.uid), z = () => vo(I));
  const A = new _r(u, z);
  ({}).NODE_ENV !== "production" && (A.onTrack = i, A.onTrigger = s), t ? n ? I() : j = A.run() : r === "post" ? xe(
    A.run.bind(A),
    f && f.suspense
  ) : A.run();
  const oe = () => {
    A.stop(), f && f.scope && ur(f.scope.effects, A);
  };
  return T && T.push(oe), oe;
}
function Zc(e, t, n) {
  const o = this.proxy, r = se(e) ? e.includes(".") ? Ds(o, e) : () => o[e] : e.bind(o, o);
  let i;
  L(t) ? i = t : (i = t.handler, n = t);
  const s = fe;
  en(this);
  const l = xr(r, i.bind(o), n);
  return s ? en(s) : kt(), l;
}
function Ds(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function qt(e, t) {
  if (!ee(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ce(e))
    qt(e.value, t);
  else if (k(e))
    for (let n = 0; n < e.length; n++)
      qt(e[n], t);
  else if (Hi(e) || It(e))
    e.forEach((n) => {
      qt(n, t);
    });
  else if (Ui(e))
    for (const n in e)
      qt(e[n], t);
  return e;
}
function $s(e) {
  $l(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function Dt(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let c = l.dir[o];
    c && (Lt(), Ue(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ht());
  }
}
function In(e, t) {
  return L(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ie({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const mn = (e) => !!e.type.__asyncLoader, Dr = (e) => e.type.__isKeepAlive;
function ea(e, t) {
  Cs(e, "a", t);
}
function ta(e, t) {
  Cs(e, "da", t);
}
function Cs(e, t, n = fe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (No(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Dr(r.parent.vnode) && na(o, t, n, r), r = r.parent;
  }
}
function na(e, t, n, o) {
  const r = No(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ss(() => {
    ur(o[t], r);
  }, n);
}
function No(e, t, n = fe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Lt(), en(n);
      const l = Ue(t, n, e, s);
      return kt(), Ht(), l;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if ({}.NODE_ENV !== "production") {
    const r = Ct(br[e].replace(/ hook$/, ""));
    w(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const st = (e) => (t, n = fe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Dn || e === "sp") && No(e, (...o) => t(...o), n)
), oa = st("bm"), ra = st("m"), ia = st("bu"), sa = st("u"), Vs = st("bum"), Ss = st("um"), la = st("sp"), ca = st(
  "rtg"
), aa = st(
  "rtc"
);
function ua(e, t = fe) {
  No("ec", e, t);
}
const fa = Symbol.for("v-ndc");
function Co(e, t, n = {}, o, r) {
  if (me.isCE || me.parent && mn(me.parent) && me.parent.isCE)
    return t !== "default" && (n.name = t), X("slot", n, o && o());
  let i = e[t];
  ({}).NODE_ENV !== "production" && i && i.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), $e();
  const s = i && Is(i(n)), l = La(
    De,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || (o ? o() : []),
    s && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l;
}
function Is(e) {
  return e.some((t) => Zt(t) ? !(t.type === Ae || t.type === De && !Is(t.children)) : !0) ? e : null;
}
const Ko = (e) => e ? Ws(e) ? Pr(e) || e.proxy : Ko(e.parent) : null, Mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => ({}).NODE_ENV !== "production" ? fn(e.props) : e.props,
    $attrs: (e) => ({}).NODE_ENV !== "production" ? fn(e.attrs) : e.attrs,
    $slots: (e) => ({}).NODE_ENV !== "production" ? fn(e.slots) : e.slots,
    $refs: (e) => ({}).NODE_ENV !== "production" ? fn(e.refs) : e.refs,
    $parent: (e) => Ko(e.parent),
    $root: (e) => Ko(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => vo(e.update)),
    $nextTick: (e) => e.n || (e.n = ps.bind(e.proxy)),
    $watch: (e) => Zc.bind(e)
  })
), $r = (e) => e === "_" || e === "$", Vo = (e, t) => e !== ne && !e.__isScriptSetup && K(e, t), Ps = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: l, appContext: c } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const _ = s[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Vo(o, t))
          return s[t] = 1, o[t];
        if (r !== ne && K(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && K(f, t)
        )
          return s[t] = 3, i[t];
        if (n !== ne && K(n, t))
          return s[t] = 4, n[t];
        Wo && (s[t] = 0);
      }
    }
    const u = Mt[t];
    let d, h;
    if (u)
      return t === "$attrs" ? (ge(e, "get", t), {}.NODE_ENV !== "production" && oo()) : {}.NODE_ENV !== "production" && t === "$slots" && ge(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ne && K(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, K(h, t)
    )
      return h[t];
    ({}).NODE_ENV !== "production" && me && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ne && $r(t[0]) && K(r, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return Vo(r, t) ? (r[t] = n, !0) : {}.NODE_ENV !== "production" && r.__isScriptSetup && K(r, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ne && K(o, t) ? (o[t] = n, !0) : K(e.props, t) ? ({}.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let l;
    return !!n[s] || e !== ne && K(e, s) || Vo(t, s) || (l = i[0]) && K(l, s) || K(o, s) || K(Mt, s) || K(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (Ps.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function da(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: he
    });
  }), t;
}
function pa(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: he
    });
  });
}
function ha(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if ($r(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: he
      });
    }
  });
}
function Zr(e) {
  return k(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ma() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Wo = !0;
function ga(e) {
  const t = Cr(e), n = e.proxy, o = e.ctx;
  Wo = !1, t.beforeCreate && ei(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: c,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: _,
    updated: x,
    activated: T,
    deactivated: j,
    beforeDestroy: I,
    beforeUnmount: z,
    destroyed: A,
    unmounted: oe,
    render: M,
    renderTracked: de,
    renderTriggered: Ne,
    errorCaptured: Be,
    serverPrefetch: we,
    // public API
    expose: Ve,
    inheritAttrs: ke,
    // assets
    components: Oe,
    directives: Ke,
    filters: Tn
  } = t, Se = {}.NODE_ENV !== "production" ? ma() : null;
  if ({}.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const B in U)
        Se("Props", B);
  }
  if (f && _a(f, o, Se), s)
    for (const U in s) {
      const B = s[U];
      L(B) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: B.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = B.bind(n), {}.NODE_ENV !== "production" && Se("Methods", U)) : {}.NODE_ENV !== "production" && w(
        `Method "${U}" has type "${typeof B}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    ({}).NODE_ENV !== "production" && !L(r) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = r.call(n, n);
    if ({}.NODE_ENV !== "production" && dr(U) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(U))
      ({}).NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = mo(U), {}.NODE_ENV !== "production")
      for (const B in U)
        Se("Data", B), $r(B[0]) || Object.defineProperty(o, B, {
          configurable: !0,
          enumerable: !0,
          get: () => U[B],
          set: he
        });
  }
  if (Wo = !0, i)
    for (const U in i) {
      const B = i[U], Ie = L(B) ? B.bind(n, n) : L(B.get) ? B.get.bind(n, n) : he;
      ({}).NODE_ENV !== "production" && Ie === he && w(`Computed property "${U}" has no getter.`);
      const xt = !L(B) && L(B.set) ? B.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : he, ct = Re({
        get: Ie,
        set: xt
      });
      Object.defineProperty(o, U, {
        enumerable: !0,
        configurable: !0,
        get: () => ct.value,
        set: (We) => ct.value = We
      }), {}.NODE_ENV !== "production" && Se("Computed", U);
    }
  if (l)
    for (const U in l)
      Ts(l[U], o, n, U);
  if (c) {
    const U = L(c) ? c.call(n) : c;
    Reflect.ownKeys(U).forEach((B) => {
      Kn(B, U[B]);
    });
  }
  u && ei(u, e, "c");
  function pe(U, B) {
    k(B) ? B.forEach((Ie) => U(Ie.bind(n))) : B && U(B.bind(n));
  }
  if (pe(oa, d), pe(ra, h), pe(ia, _), pe(sa, x), pe(ea, T), pe(ta, j), pe(ua, Be), pe(aa, de), pe(ca, Ne), pe(Vs, z), pe(Ss, oe), pe(la, we), k(Ve))
    if (Ve.length) {
      const U = e.exposed || (e.exposed = {});
      Ve.forEach((B) => {
        Object.defineProperty(U, B, {
          get: () => n[B],
          set: (Ie) => n[B] = Ie
        });
      });
    } else
      e.exposed || (e.exposed = {});
  M && e.render === he && (e.render = M), ke != null && (e.inheritAttrs = ke), Oe && (e.components = Oe), Ke && (e.directives = Ke);
}
function _a(e, t, n = he) {
  k(e) && (e = qo(e));
  for (const o in e) {
    const r = e[o];
    let i;
    ee(r) ? "default" in r ? i = it(
      r.from || o,
      r.default,
      !0
      /* treat default function as factory */
    ) : i = it(r.from || o) : i = it(r), ce(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ei(e, t, n) {
  Ue(
    k(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ts(e, t, n, o) {
  const r = o.includes(".") ? Ds(n, o) : () => n[o];
  if (se(e)) {
    const i = t[e];
    L(i) ? Qt(r, i) : {}.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, i);
  } else if (L(e))
    Qt(r, e.bind(n));
  else if (ee(e))
    if (k(e))
      e.forEach((i) => Ts(i, t, n, o));
    else {
      const i = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(i) ? Qt(r, i, e) : {}.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    ({}).NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function Cr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !o ? c = t : (c = {}, r.length && r.forEach(
    (f) => ro(c, f, s, !0)
  ), ro(c, t, s)), ee(t) && i.set(t, c), c;
}
function ro(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && ro(e, i, n, !0), r && r.forEach(
    (s) => ro(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      ({}).NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ea[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Ea = {
  data: ti,
  props: ni,
  emits: ni,
  // objects
  methods: pn,
  computed: pn,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: pn,
  directives: pn,
  // watch
  watch: ya,
  // provide / inject
  provide: ti,
  inject: va
};
function ti(e, t) {
  return t ? e ? function() {
    return ie(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function va(e, t) {
  return pn(qo(e), qo(t));
}
function qo(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pn(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ni(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Zr(e),
    Zr(t ?? {})
  ) : t;
}
function ya(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ye(e[o], t[o]);
  return n;
}
function Rs() {
  return {
    app: null,
    config: {
      isNativeTag: Li,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ba = 0;
function Na(e, t) {
  return function(o, r = null) {
    L(o) || (o = ie({}, o)), r != null && !ee(r) && ({}.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), r = null);
    const i = Rs();
    ({}).NODE_ENV !== "production" && Object.defineProperty(i.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        w(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const s = /* @__PURE__ */ new Set();
    let l = !1;
    const c = i.app = {
      _uid: ba++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: di,
      get config() {
        return i.config;
      },
      set config(f) {
        ({}).NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return s.has(f) ? {}.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : f && L(f.install) ? (s.add(f), f.install(c, ...u)) : L(f) ? (s.add(f), f(c, ...u)) : {}.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(f) {
        return i.mixins.includes(f) ? {}.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), c;
      },
      component(f, u) {
        return {}.NODE_ENV !== "production" && Qo(f, i.config), u ? ({}.NODE_ENV !== "production" && i.components[f] && w(`Component "${f}" has already been registered in target app.`), i.components[f] = u, c) : i.components[f];
      },
      directive(f, u) {
        return {}.NODE_ENV !== "production" && $s(f), u ? ({}.NODE_ENV !== "production" && i.directives[f] && w(`Directive "${f}" has already been registered in target app.`), i.directives[f] = u, c) : i.directives[f];
      },
      mount(f, u, d) {
        if (l)
          ({}).NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          ({}).NODE_ENV !== "production" && f.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = X(
            o,
            r
          );
          return h.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
            e(Nt(h), f, d);
          }), u && t ? t(h, f) : e(h, f, d), l = !0, c._container = f, f.__vue_app__ = c, {}.NODE_ENV !== "production" && (c._instance = h.component, Mc(c, di)), Pr(h.component) || h.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), {}.NODE_ENV !== "production" && (c._instance = null, kc(c)), delete c._container.__vue_app__) : {}.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return {}.NODE_ENV !== "production" && f in i.provides && w(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ), i.provides[f] = u, c;
      },
      runWithContext(f) {
        io = c;
        try {
          return f();
        } finally {
          io = null;
        }
      }
    };
    return c;
  };
}
let io = null;
function Kn(e, t) {
  if (!fe)
    ({}).NODE_ENV !== "production" && w("provide() can only be used inside setup().");
  else {
    let n = fe.provides;
    const o = fe.parent && fe.parent.provides;
    o === n && (n = fe.provides = Object.create(o)), n[e] = t;
  }
}
function it(e, t, n = !1) {
  const o = fe || me;
  if (o || io) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : io._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(o && o.proxy) : t;
    ({}).NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
function wa(e, t, n, o = !1) {
  const r = {}, i = {};
  Zn(i, wo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), As(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  ({}).NODE_ENV !== "production" && ks(t || {}, r, e), n ? e.props = o ? r : is(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Oa(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function xa(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = F(r), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !({}.NODE_ENV !== "production" && Oa(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let h = u[d];
        if (yo(e.emitsOptions, h))
          continue;
        const _ = t[h];
        if (c)
          if (K(i, h))
            _ !== i[h] && (i[h] = _, f = !0);
          else {
            const x = Xt(h);
            r[x] = Yo(
              c,
              l,
              x,
              _,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          _ !== i[h] && (i[h] = _, f = !0);
      }
    }
  } else {
    As(e, t, r, i) && (f = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !K(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = vt(d)) === d || !K(t, u))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Yo(
        c,
        l,
        d,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !K(t, d)) && (delete i[d], f = !0);
  }
  f && Xe(e, "set", "$attrs"), {}.NODE_ENV !== "production" && ks(t || {}, r, e);
}
function As(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let c in t) {
      if (Fn(c))
        continue;
      const f = t[c];
      let u;
      r && K(r, u = Xt(c)) ? !i || !i.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : yo(e.emitsOptions, c) || (!(c in o) || f !== o[c]) && (o[c] = f, s = !0);
    }
  if (i) {
    const c = F(n), f = l || ne;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Yo(
        r,
        c,
        d,
        f[d],
        e,
        !K(f, d)
      );
    }
  }
  return s;
}
function Yo(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = K(s, "default");
    if (l && o === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && L(c)) {
        const { propsDefaults: f } = r;
        n in f ? o = f[n] : (en(r), o = f[n] = c.call(
          null,
          t
        ), kt());
      } else
        o = c;
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === vt(n)) && (o = !0));
  }
  return o;
}
function Ms(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, l = [];
  let c = !1;
  if (!L(e)) {
    const u = (d) => {
      c = !0;
      const [h, _] = Ms(d, t, !0);
      ie(s, h), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return ee(e) && o.set(e, Gt), Gt;
  if (k(i))
    for (let u = 0; u < i.length; u++) {
      ({}).NODE_ENV !== "production" && !se(i[u]) && w("props must be strings when using array syntax.", i[u]);
      const d = Xt(i[u]);
      oi(d) && (s[d] = ne);
    }
  else if (i) {
    ({}).NODE_ENV !== "production" && !ee(i) && w("invalid props options", i);
    for (const u in i) {
      const d = Xt(u);
      if (oi(d)) {
        const h = i[u], _ = s[d] = k(h) || L(h) ? { type: h } : ie({}, h);
        if (_) {
          const x = ii(Boolean, _.type), T = ii(String, _.type);
          _[
            0
            /* shouldCast */
          ] = x > -1, _[
            1
            /* shouldCastTrue */
          ] = T < 0 || x < T, (x > -1 || K(_, "default")) && l.push(d);
        }
      }
    }
  }
  const f = [s, l];
  return ee(e) && o.set(e, f), f;
}
function oi(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Go(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ri(e, t) {
  return Go(e) === Go(t);
}
function ii(e, t) {
  return k(t) ? t.findIndex((n) => ri(n, e)) : L(t) && ri(t, e) ? 0 : -1;
}
function ks(e, t, n) {
  const o = F(t), r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && Da(
      i,
      o[i],
      s,
      !K(e, i) && !K(e, vt(i))
    );
  }
}
function Da(e, t, n, o) {
  const { type: r, required: i, validator: s, skipCheck: l } = n;
  if (i && o) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !l) {
      let c = !1;
      const f = k(r) ? r : [r], u = [];
      for (let d = 0; d < f.length && !c; d++) {
        const { valid: h, expectedType: _ } = Ca(t, f[d]);
        u.push(_ || ""), c = h;
      }
      if (!c) {
        w(Va(e, t, u));
        return;
      }
    }
    s && !s(t) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $a = /* @__PURE__ */ Ot(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ca(e, t) {
  let n;
  const o = Go(t);
  if ($a(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = ee(e) : o === "Array" ? n = k(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Va(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(uo).join(" | ")}`;
  const r = n[0], i = pr(t), s = si(t, r), l = si(t, i);
  return n.length === 1 && li(r) && !Sa(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, li(i) && (o += `with value ${l}.`), o;
}
function si(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function li(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Sa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const js = (e) => e[0] === "_" || e === "$stable", Vr = (e) => k(e) ? e.map(He) : [He(e)], Ia = (e, t, n) => {
  if (t._n)
    return t;
  const o = ae((...r) => ({}.NODE_ENV !== "production" && fe && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Vr(t(...r))), n);
  return o._c = !1, o;
}, zs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (js(r))
      continue;
    const i = e[r];
    if (L(i))
      t[r] = Ia(r, i, o);
    else if (i != null) {
      ({}).NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = Vr(i);
      t[r] = () => s;
    }
  }
}, Ls = (e, t) => {
  ({}).NODE_ENV !== "production" && !Dr(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Vr(t);
  e.slots.default = () => n;
}, Pa = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), Zn(t, "_", n)) : zs(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ls(e, t);
  Zn(e.slots, wo, 1);
}, Ta = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = ne;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? {}.NODE_ENV !== "production" && At ? (ie(r, t), Xe(e, "set", "$slots")) : n && l === 1 ? i = !1 : (ie(r, t), !n && l === 1 && delete r._) : (i = !t.$stable, zs(t, r)), s = t;
  } else
    t && (Ls(e, t), s = { default: 1 });
  if (i)
    for (const l in r)
      !js(l) && !(l in s) && delete r[l];
};
function Jo(e, t, n, o, r = !1) {
  if (k(e)) {
    e.forEach(
      (h, _) => Jo(
        h,
        t && (k(t) ? t[_] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (mn(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? Pr(o.component) || o.component.proxy : o.el, s = r ? null : i, { i: l, r: c } = e;
  if ({}.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = l.refs === ne ? l.refs = {} : l.refs, d = l.setupState;
  if (f != null && f !== c && (se(f) ? (u[f] = null, K(d, f) && (d[f] = null)) : ce(f) && (f.value = null)), L(c))
    rt(c, l, 12, [s, u]);
  else {
    const h = se(c), _ = ce(c);
    if (h || _) {
      const x = () => {
        if (e.f) {
          const T = h ? K(d, c) ? d[c] : u[c] : c.value;
          r ? k(T) && ur(T, i) : k(T) ? T.includes(i) || T.push(i) : h ? (u[c] = [i], K(d, c) && (d[c] = u[c])) : (c.value = [i], e.k && (u[e.k] = c.value));
        } else
          h ? (u[c] = s, K(d, c) && (d[c] = s)) : _ ? (c.value = s, e.k && (u[e.k] = s)) : {}.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
      };
      s ? (x.id = -1, xe(x, n)) : x();
    } else
      ({}).NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let rn, gt;
function tt(e, t) {
  e.appContext.config.performance && so() && gt.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Hc(e, t, so() ? gt.now() : Date.now());
}
function nt(e, t) {
  if (e.appContext.config.performance && so()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    gt.mark(o), gt.measure(
      `<${Oo(e, e.type)}> ${t}`,
      n,
      o
    ), gt.clearMarks(n), gt.clearMarks(o);
  }
  ({}).NODE_ENV !== "production" && Fc(e, t, so() ? gt.now() : Date.now());
}
function so() {
  return rn !== void 0 || (typeof window < "u" && window.performance ? (rn = !0, gt = window.performance) : rn = !1), rn;
}
function Ra() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const xe = Qc;
function Aa(e) {
  return Ma(e);
}
function Ma(e, t) {
  Ra();
  const n = eo();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && vs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: c,
    setText: f,
    setElementText: u,
    parentNode: d,
    nextSibling: h,
    setScopeId: _ = he,
    insertStaticContent: x
  } = e, T = (a, p, m, v = null, E = null, N = null, D = !1, b = null, O = {}.NODE_ENV !== "production" && At ? !1 : !!p.dynamicChildren) => {
    if (a === p)
      return;
    a && !sn(a, p) && (v = $(a), Pe(a, E, N, !0), a = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: S } = p;
    switch (y) {
      case Pn:
        j(a, p, m, v);
        break;
      case Ae:
        I(a, p, m, v);
        break;
      case qn:
        a == null ? z(p, m, v, D) : {}.NODE_ENV !== "production" && A(a, p, m, D);
        break;
      case De:
        Ke(
          a,
          p,
          m,
          v,
          E,
          N,
          D,
          b,
          O
        );
        break;
      default:
        S & 1 ? de(
          a,
          p,
          m,
          v,
          E,
          N,
          D,
          b,
          O
        ) : S & 6 ? Tn(
          a,
          p,
          m,
          v,
          E,
          N,
          D,
          b,
          O
        ) : S & 64 || S & 128 ? y.process(
          a,
          p,
          m,
          v,
          E,
          N,
          D,
          b,
          O,
          V
        ) : {}.NODE_ENV !== "production" && w("Invalid VNode type:", y, `(${typeof y})`);
    }
    P != null && E && Jo(P, a && a.ref, N, p || a, !p);
  }, j = (a, p, m, v) => {
    if (a == null)
      o(
        p.el = l(p.children),
        m,
        v
      );
    else {
      const E = p.el = a.el;
      p.children !== a.children && f(E, p.children);
    }
  }, I = (a, p, m, v) => {
    a == null ? o(
      p.el = c(p.children || ""),
      m,
      v
    ) : p.el = a.el;
  }, z = (a, p, m, v) => {
    [a.el, a.anchor] = x(
      a.children,
      p,
      m,
      v,
      a.el,
      a.anchor
    );
  }, A = (a, p, m, v) => {
    if (p.children !== a.children) {
      const E = h(a.anchor);
      M(a), [p.el, p.anchor] = x(
        p.children,
        m,
        E,
        v
      );
    } else
      p.el = a.el, p.anchor = a.anchor;
  }, oe = ({ el: a, anchor: p }, m, v) => {
    let E;
    for (; a && a !== p; )
      E = h(a), o(a, m, v), a = E;
    o(p, m, v);
  }, M = ({ el: a, anchor: p }) => {
    let m;
    for (; a && a !== p; )
      m = h(a), r(a), a = m;
    r(p);
  }, de = (a, p, m, v, E, N, D, b, O) => {
    D = D || p.type === "svg", a == null ? Ne(
      p,
      m,
      v,
      E,
      N,
      D,
      b,
      O
    ) : Ve(
      a,
      p,
      E,
      N,
      D,
      b,
      O
    );
  }, Ne = (a, p, m, v, E, N, D, b) => {
    let O, y;
    const { type: P, props: S, shapeFlag: R, transition: H, dirs: W } = a;
    if (O = a.el = s(
      a.type,
      N,
      S && S.is,
      S
    ), R & 8 ? u(O, a.children) : R & 16 && we(
      a.children,
      O,
      null,
      v,
      E,
      N && P !== "foreignObject",
      D,
      b
    ), W && Dt(a, null, v, "created"), Be(O, a, a.scopeId, D, v), S) {
      for (const Z in S)
        Z !== "value" && !Fn(Z) && i(
          O,
          Z,
          null,
          S[Z],
          N,
          a.children,
          v,
          E,
          g
        );
      "value" in S && i(O, "value", null, S.value), (y = S.onVnodeBeforeMount) && Ye(y, v, a);
    }
    ({}).NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: a,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: v,
      enumerable: !1
    })), W && Dt(a, null, v, "beforeMount");
    const te = (!E || E && !E.pendingBranch) && H && !H.persisted;
    te && H.beforeEnter(O), o(O, p, m), ((y = S && S.onVnodeMounted) || te || W) && xe(() => {
      y && Ye(y, v, a), te && H.enter(O), W && Dt(a, null, v, "mounted");
    }, E);
  }, Be = (a, p, m, v, E) => {
    if (m && _(a, m), v)
      for (let N = 0; N < v.length; N++)
        _(a, v[N]);
    if (E) {
      let N = E.subTree;
      if ({}.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = xs(N.children) || N), p === N) {
        const D = E.vnode;
        Be(
          a,
          D,
          D.scopeId,
          D.slotScopeIds,
          E.parent
        );
      }
    }
  }, we = (a, p, m, v, E, N, D, b, O = 0) => {
    for (let y = O; y < a.length; y++) {
      const P = a[y] = b ? ht(a[y]) : He(a[y]);
      T(
        null,
        P,
        p,
        m,
        v,
        E,
        N,
        D,
        b
      );
    }
  }, Ve = (a, p, m, v, E, N, D) => {
    const b = p.el = a.el;
    let { patchFlag: O, dynamicChildren: y, dirs: P } = p;
    O |= a.patchFlag & 16;
    const S = a.props || ne, R = p.props || ne;
    let H;
    m && $t(m, !1), (H = R.onVnodeBeforeUpdate) && Ye(H, m, p, a), P && Dt(p, a, m, "beforeUpdate"), m && $t(m, !0), {}.NODE_ENV !== "production" && At && (O = 0, D = !1, y = null);
    const W = E && p.type !== "foreignObject";
    if (y ? (ke(
      a.dynamicChildren,
      y,
      b,
      m,
      v,
      W,
      N
    ), {}.NODE_ENV !== "production" && Wn(a, p)) : D || Ie(
      a,
      p,
      b,
      null,
      m,
      v,
      W,
      N,
      !1
    ), O > 0) {
      if (O & 16)
        Oe(
          b,
          p,
          S,
          R,
          m,
          v,
          E
        );
      else if (O & 2 && S.class !== R.class && i(b, "class", null, R.class, E), O & 4 && i(b, "style", S.style, R.style, E), O & 8) {
        const te = p.dynamicProps;
        for (let Z = 0; Z < te.length; Z++) {
          const le = te[Z], je = S[le], Ft = R[le];
          (Ft !== je || le === "value") && i(
            b,
            le,
            je,
            Ft,
            E,
            a.children,
            m,
            v,
            g
          );
        }
      }
      O & 1 && a.children !== p.children && u(b, p.children);
    } else
      !D && y == null && Oe(
        b,
        p,
        S,
        R,
        m,
        v,
        E
      );
    ((H = R.onVnodeUpdated) || P) && xe(() => {
      H && Ye(H, m, p, a), P && Dt(p, a, m, "updated");
    }, v);
  }, ke = (a, p, m, v, E, N, D) => {
    for (let b = 0; b < p.length; b++) {
      const O = a[b], y = p[b], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !sn(O, y) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? d(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      T(
        O,
        y,
        P,
        null,
        v,
        E,
        N,
        D,
        !0
      );
    }
  }, Oe = (a, p, m, v, E, N, D) => {
    if (m !== v) {
      if (m !== ne)
        for (const b in m)
          !Fn(b) && !(b in v) && i(
            a,
            b,
            m[b],
            null,
            D,
            p.children,
            E,
            N,
            g
          );
      for (const b in v) {
        if (Fn(b))
          continue;
        const O = v[b], y = m[b];
        O !== y && b !== "value" && i(
          a,
          b,
          y,
          O,
          D,
          p.children,
          E,
          N,
          g
        );
      }
      "value" in v && i(a, "value", m.value, v.value);
    }
  }, Ke = (a, p, m, v, E, N, D, b, O) => {
    const y = p.el = a ? a.el : l(""), P = p.anchor = a ? a.anchor : l("");
    let { patchFlag: S, dynamicChildren: R, slotScopeIds: H } = p;
    ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (At || S & 2048) && (S = 0, O = !1, R = null), H && (b = b ? b.concat(H) : H), a == null ? (o(y, m, v), o(P, m, v), we(
      p.children,
      m,
      P,
      E,
      N,
      D,
      b,
      O
    )) : S > 0 && S & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (ke(
      a.dynamicChildren,
      R,
      m,
      E,
      N,
      D,
      b
    ), {}.NODE_ENV !== "production" ? Wn(a, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || E && p === E.subTree) && Wn(
        a,
        p,
        !0
        /* shallow */
      )
    )) : Ie(
      a,
      p,
      m,
      P,
      E,
      N,
      D,
      b,
      O
    );
  }, Tn = (a, p, m, v, E, N, D, b, O) => {
    p.slotScopeIds = b, a == null ? p.shapeFlag & 512 ? E.ctx.activate(
      p,
      m,
      v,
      D,
      O
    ) : Se(
      p,
      m,
      v,
      E,
      N,
      D,
      O
    ) : pe(a, p, O);
  }, Se = (a, p, m, v, E, N, D) => {
    const b = a.component = Wa(
      a,
      v,
      E
    );
    if ({}.NODE_ENV !== "production" && b.type.__hmrId && Pc(b), {}.NODE_ENV !== "production" && (Un(a), tt(b, "mount")), Dr(a) && (b.ctx.renderer = V), {}.NODE_ENV !== "production" && tt(b, "init"), Ya(b), {}.NODE_ENV !== "production" && nt(b, "init"), b.asyncDep) {
      if (E && E.registerDep(b, U), !a.el) {
        const O = b.subTree = X(Ae);
        I(null, O, p, m);
      }
      return;
    }
    U(
      b,
      a,
      p,
      m,
      E,
      N,
      D
    ), {}.NODE_ENV !== "production" && (Bn(), nt(b, "mount"));
  }, pe = (a, p, m) => {
    const v = p.component = a.component;
    if (Yc(a, p, m))
      if (v.asyncDep && !v.asyncResolved) {
        ({}).NODE_ENV !== "production" && Un(p), B(v, p, m), {}.NODE_ENV !== "production" && Bn();
        return;
      } else
        v.next = p, Sc(v.update), v.update();
    else
      p.el = a.el, v.vnode = p;
  }, U = (a, p, m, v, E, N, D) => {
    const b = () => {
      if (a.isMounted) {
        let { next: P, bu: S, u: R, parent: H, vnode: W } = a, te = P, Z;
        ({}).NODE_ENV !== "production" && Un(P || a.vnode), $t(a, !1), P ? (P.el = W.el, B(a, P, D)) : P = W, S && on(S), (Z = P.props && P.props.onVnodeBeforeUpdate) && Ye(Z, H, P, W), $t(a, !0), {}.NODE_ENV !== "production" && tt(a, "render");
        const le = $o(a);
        ({}).NODE_ENV !== "production" && nt(a, "render");
        const je = a.subTree;
        a.subTree = le, {}.NODE_ENV !== "production" && tt(a, "patch"), T(
          je,
          le,
          // parent may have changed if it's in a teleport
          d(je.el),
          // anchor may have changed if it's in a fragment
          $(je),
          a,
          E,
          N
        ), {}.NODE_ENV !== "production" && nt(a, "patch"), P.el = le.el, te === null && Gc(a, le.el), R && xe(R, E), (Z = P.props && P.props.onVnodeUpdated) && xe(
          () => Ye(Z, H, P, W),
          E
        ), {}.NODE_ENV !== "production" && ys(a), {}.NODE_ENV !== "production" && Bn();
      } else {
        let P;
        const { el: S, props: R } = p, { bm: H, m: W, parent: te } = a, Z = mn(p);
        if ($t(a, !1), H && on(H), !Z && (P = R && R.onVnodeBeforeMount) && Ye(P, te, p), $t(a, !0), S && re) {
          const le = () => {
            ({}).NODE_ENV !== "production" && tt(a, "render"), a.subTree = $o(a), {}.NODE_ENV !== "production" && nt(a, "render"), {}.NODE_ENV !== "production" && tt(a, "hydrate"), re(
              S,
              a.subTree,
              a,
              E,
              null
            ), {}.NODE_ENV !== "production" && nt(a, "hydrate");
          };
          Z ? p.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !a.isUnmounted && le()
          ) : le();
        } else {
          ({}).NODE_ENV !== "production" && tt(a, "render");
          const le = a.subTree = $o(a);
          ({}).NODE_ENV !== "production" && nt(a, "render"), {}.NODE_ENV !== "production" && tt(a, "patch"), T(
            null,
            le,
            m,
            v,
            a,
            E,
            N
          ), {}.NODE_ENV !== "production" && nt(a, "patch"), p.el = le.el;
        }
        if (W && xe(W, E), !Z && (P = R && R.onVnodeMounted)) {
          const le = p;
          xe(
            () => Ye(P, te, le),
            E
          );
        }
        (p.shapeFlag & 256 || te && mn(te.vnode) && te.vnode.shapeFlag & 256) && a.a && xe(a.a, E), a.isMounted = !0, {}.NODE_ENV !== "production" && jc(a), p = m = v = null;
      }
    }, O = a.effect = new _r(
      b,
      () => vo(y),
      a.scope
      // track it in component's effect scope
    ), y = a.update = () => O.run();
    y.id = a.uid, $t(a, !0), {}.NODE_ENV !== "production" && (O.onTrack = a.rtc ? (P) => on(a.rtc, P) : void 0, O.onTrigger = a.rtg ? (P) => on(a.rtg, P) : void 0, y.ownerInstance = a), y();
  }, B = (a, p, m) => {
    p.component = a;
    const v = a.vnode.props;
    a.vnode = p, a.next = null, xa(a, p.props, v, m), Ta(a, p.children, m), Lt(), Gr(), Ht();
  }, Ie = (a, p, m, v, E, N, D, b, O = !1) => {
    const y = a && a.children, P = a ? a.shapeFlag : 0, S = p.children, { patchFlag: R, shapeFlag: H } = p;
    if (R > 0) {
      if (R & 128) {
        ct(
          y,
          S,
          m,
          v,
          E,
          N,
          D,
          b,
          O
        );
        return;
      } else if (R & 256) {
        xt(
          y,
          S,
          m,
          v,
          E,
          N,
          D,
          b,
          O
        );
        return;
      }
    }
    H & 8 ? (P & 16 && g(y, E, N), S !== y && u(m, S)) : P & 16 ? H & 16 ? ct(
      y,
      S,
      m,
      v,
      E,
      N,
      D,
      b,
      O
    ) : g(y, E, N, !0) : (P & 8 && u(m, ""), H & 16 && we(
      S,
      m,
      v,
      E,
      N,
      D,
      b,
      O
    ));
  }, xt = (a, p, m, v, E, N, D, b, O) => {
    a = a || Gt, p = p || Gt;
    const y = a.length, P = p.length, S = Math.min(y, P);
    let R;
    for (R = 0; R < S; R++) {
      const H = p[R] = O ? ht(p[R]) : He(p[R]);
      T(
        a[R],
        H,
        m,
        null,
        E,
        N,
        D,
        b,
        O
      );
    }
    y > P ? g(
      a,
      E,
      N,
      !0,
      !1,
      S
    ) : we(
      p,
      m,
      v,
      E,
      N,
      D,
      b,
      O,
      S
    );
  }, ct = (a, p, m, v, E, N, D, b, O) => {
    let y = 0;
    const P = p.length;
    let S = a.length - 1, R = P - 1;
    for (; y <= S && y <= R; ) {
      const H = a[y], W = p[y] = O ? ht(p[y]) : He(p[y]);
      if (sn(H, W))
        T(
          H,
          W,
          m,
          null,
          E,
          N,
          D,
          b,
          O
        );
      else
        break;
      y++;
    }
    for (; y <= S && y <= R; ) {
      const H = a[S], W = p[R] = O ? ht(p[R]) : He(p[R]);
      if (sn(H, W))
        T(
          H,
          W,
          m,
          null,
          E,
          N,
          D,
          b,
          O
        );
      else
        break;
      S--, R--;
    }
    if (y > S) {
      if (y <= R) {
        const H = R + 1, W = H < P ? p[H].el : v;
        for (; y <= R; )
          T(
            null,
            p[y] = O ? ht(p[y]) : He(p[y]),
            m,
            W,
            E,
            N,
            D,
            b,
            O
          ), y++;
      }
    } else if (y > R)
      for (; y <= S; )
        Pe(a[y], E, N, !0), y++;
    else {
      const H = y, W = y, te = /* @__PURE__ */ new Map();
      for (y = W; y <= R; y++) {
        const ve = p[y] = O ? ht(p[y]) : He(p[y]);
        ve.key != null && ({}.NODE_ENV !== "production" && te.has(ve.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), te.set(ve.key, y));
      }
      let Z, le = 0;
      const je = R - W + 1;
      let Ft = !1, jr = 0;
      const nn = new Array(je);
      for (y = 0; y < je; y++)
        nn[y] = 0;
      for (y = H; y <= S; y++) {
        const ve = a[y];
        if (le >= je) {
          Pe(ve, E, N, !0);
          continue;
        }
        let qe;
        if (ve.key != null)
          qe = te.get(ve.key);
        else
          for (Z = W; Z <= R; Z++)
            if (nn[Z - W] === 0 && sn(ve, p[Z])) {
              qe = Z;
              break;
            }
        qe === void 0 ? Pe(ve, E, N, !0) : (nn[qe - W] = y + 1, qe >= jr ? jr = qe : Ft = !0, T(
          ve,
          p[qe],
          m,
          null,
          E,
          N,
          D,
          b,
          O
        ), le++);
      }
      const zr = Ft ? ka(nn) : Gt;
      for (Z = zr.length - 1, y = je - 1; y >= 0; y--) {
        const ve = W + y, qe = p[ve], Lr = ve + 1 < P ? p[ve + 1].el : v;
        nn[y] === 0 ? T(
          null,
          qe,
          m,
          Lr,
          E,
          N,
          D,
          b,
          O
        ) : Ft && (Z < 0 || y !== zr[Z] ? We(qe, m, Lr, 2) : Z--);
      }
    }
  }, We = (a, p, m, v, E = null) => {
    const { el: N, type: D, transition: b, children: O, shapeFlag: y } = a;
    if (y & 6) {
      We(a.component.subTree, p, m, v);
      return;
    }
    if (y & 128) {
      a.suspense.move(p, m, v);
      return;
    }
    if (y & 64) {
      D.move(a, p, m, V);
      return;
    }
    if (D === De) {
      o(N, p, m);
      for (let S = 0; S < O.length; S++)
        We(O[S], p, m, v);
      o(a.anchor, p, m);
      return;
    }
    if (D === qn) {
      oe(a, p, m);
      return;
    }
    if (v !== 2 && y & 1 && b)
      if (v === 0)
        b.beforeEnter(N), o(N, p, m), xe(() => b.enter(N), E);
      else {
        const { leave: S, delayLeave: R, afterLeave: H } = b, W = () => o(N, p, m), te = () => {
          S(N, () => {
            W(), H && H();
          });
        };
        R ? R(N, W, te) : te();
      }
    else
      o(N, p, m);
  }, Pe = (a, p, m, v = !1, E = !1) => {
    const {
      type: N,
      props: D,
      ref: b,
      children: O,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: S,
      dirs: R
    } = a;
    if (b != null && Jo(b, null, m, a, !0), P & 256) {
      p.ctx.deactivate(a);
      return;
    }
    const H = P & 1 && R, W = !mn(a);
    let te;
    if (W && (te = D && D.onVnodeBeforeUnmount) && Ye(te, p, a), P & 6)
      ut(a.component, m, v);
    else {
      if (P & 128) {
        a.suspense.unmount(m, v);
        return;
      }
      H && Dt(a, null, p, "beforeUnmount"), P & 64 ? a.type.remove(
        a,
        p,
        m,
        E,
        V,
        v
      ) : y && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== De || S > 0 && S & 64) ? g(
        y,
        p,
        m,
        !1,
        !0
      ) : (N === De && S & 384 || !E && P & 16) && g(O, p, m), v && at(a);
    }
    (W && (te = D && D.onVnodeUnmounted) || H) && xe(() => {
      te && Ye(te, p, a), H && Dt(a, null, p, "unmounted");
    }, m);
  }, at = (a) => {
    const { type: p, el: m, anchor: v, transition: E } = a;
    if (p === De) {
      ({}).NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && E && !E.persisted ? a.children.forEach((D) => {
        D.type === Ae ? r(D.el) : at(D);
      }) : Rn(m, v);
      return;
    }
    if (p === qn) {
      M(a);
      return;
    }
    const N = () => {
      r(m), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (a.shapeFlag & 1 && E && !E.persisted) {
      const { leave: D, delayLeave: b } = E, O = () => D(m, N);
      b ? b(a.el, N, O) : O();
    } else
      N();
  }, Rn = (a, p) => {
    let m;
    for (; a !== p; )
      m = h(a), r(a), a = m;
    r(p);
  }, ut = (a, p, m) => {
    ({}).NODE_ENV !== "production" && a.type.__hmrId && Tc(a);
    const { bum: v, scope: E, update: N, subTree: D, um: b } = a;
    v && on(v), E.stop(), N && (N.active = !1, Pe(D, a, p, m)), b && xe(b, p), xe(() => {
      a.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), {}.NODE_ENV !== "production" && Lc(a);
  }, g = (a, p, m, v = !1, E = !1, N = 0) => {
    for (let D = N; D < a.length; D++)
      Pe(a[D], p, m, v, E);
  }, $ = (a) => a.shapeFlag & 6 ? $(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : h(a.anchor || a.el), C = (a, p, m) => {
    a == null ? p._vnode && Pe(p._vnode, null, null, !0) : T(p._vnode || null, a, p, null, null, null, m), Gr(), gs(), p._vnode = a;
  }, V = {
    p: T,
    um: Pe,
    m: We,
    r: at,
    mt: Se,
    mc: we,
    pc: Ie,
    pbc: ke,
    n: $,
    o: e
  };
  let Y, re;
  return t && ([Y, re] = t(
    V
  )), {
    render: C,
    hydrate: Y,
    createApp: Na(C, Y)
  };
}
function $t({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Wn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (k(o) && k(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = ht(r[i]), l.el = s.el), n || Wn(s, l)), l.type === Pn && (l.el = s.el), {}.NODE_ENV !== "production" && l.type === Ae && !l.el && (l.el = s.el);
    }
}
function ka(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        l = i + s >> 1, e[n[l]] < f ? i = l + 1 : s = l;
      f < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
const ja = (e) => e.__isTeleport, De = Symbol.for("v-fgt"), Pn = Symbol.for("v-txt"), Ae = Symbol.for("v-cmt"), qn = Symbol.for("v-stc"), gn = [];
let Fe = null;
function $e(e = !1) {
  gn.push(Fe = e ? null : []);
}
function za() {
  gn.pop(), Fe = gn[gn.length - 1] || null;
}
let xn = 1;
function ci(e) {
  xn += e;
}
function Hs(e) {
  return e.dynamicChildren = xn > 0 ? Fe || Gt : null, za(), xn > 0 && Fe && Fe.push(e), e;
}
function Me(e, t, n, o, r, i) {
  return Hs(
    q(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
      /* isBlock */
    )
  );
}
function La(e, t, n, o, r) {
  return Hs(
    X(
      e,
      t,
      n,
      o,
      r,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Zt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function sn(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && Kt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Ha = (...e) => Us(
  ...e
), wo = "__vInternal", Fs = ({ key: e }) => e ?? null, Yn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ce(e) || L(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function q(e, t = null, n = null, o = 0, r = null, i = e === De ? 0 : 1, s = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fs(t),
    ref: t && Yn(t),
    scopeId: bo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return l ? (Sr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= se(n) ? 8 : 16), {}.NODE_ENV !== "production" && c.key !== c.key && w("VNode created with invalid key (NaN). VNode type:", c.type), xn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Fe.push(c), c;
}
const X = {}.NODE_ENV !== "production" ? Ha : Us;
function Us(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === fa) && ({}.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Ae), Zt(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Sr(l, n), xn > 0 && !i && Fe && (l.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = l : Fe.push(l)), l.patchFlag |= -2, l;
  }
  if (Js(e) && (e = e.__vccOpts), t) {
    t = Fa(t);
    let { class: l, style: c } = t;
    l && !se(l) && (t.class = gr(l)), ee(c) && (Ho(c) && !k(c) && (c = ie({}, c)), t.style = mr(c));
  }
  const s = se(e) ? 1 : Jc(e) ? 128 : ja(e) ? 64 : ee(e) ? 4 : L(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && s & 4 && Ho(e) && (e = F(e), w(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), q(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function Fa(e) {
  return e ? Ho(e) || wo in e ? ie({}, e) : e : null;
}
function Nt(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e, l = t ? Ua(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Fs(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? k(r) ? r.concat(Yn(t)) : [r, Yn(t)] : Yn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && i === -1 && k(s) ? s.map(Bs) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Bs(e) {
  const t = Nt(e);
  return k(e.children) && (t.children = e.children.map(Bs)), t;
}
function G(e = " ", t = 0) {
  return X(Pn, null, e, t);
}
function He(e) {
  return e == null || typeof e == "boolean" ? X(Ae) : k(e) ? X(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ht(e) : X(Pn, null, String(e));
}
function ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function Sr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Sr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(wo in t) ? t._ctx = me : r === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    L(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [G(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ua(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = gr([t.class, o.class]));
      else if (r === "style")
        t.style = mr([t.style, o.style]);
      else if (Vn(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(k(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ye(e, t, n, o = null) {
  Ue(e, t, 7, [
    n,
    o
  ]);
}
const Ba = Rs();
let Ka = 0;
function Wa(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ba, i = {
    uid: Ka++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Wi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ms(o, r),
    emitsOptions: Ns(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ne,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ne,
    data: ne,
    props: ne,
    attrs: ne,
    slots: ne,
    refs: ne,
    setupState: ne,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? i.ctx = da(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Bc.bind(null, i), e.ce && e.ce(i), i;
}
let fe = null;
const Ks = () => fe || me;
let Ir, Ut, ai = "__VUE_INSTANCE_SETTERS__";
(Ut = eo()[ai]) || (Ut = eo()[ai] = []), Ut.push((e) => fe = e), Ir = (e) => {
  Ut.length > 1 ? Ut.forEach((t) => t(e)) : Ut[0](e);
};
const en = (e) => {
  Ir(e), e.scope.on();
}, kt = () => {
  fe && fe.scope.off(), Ir(null);
}, qa = /* @__PURE__ */ Ot("slot,component");
function Qo(e, t) {
  const n = t.isNativeTag || Li;
  (qa(e) || n(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ws(e) {
  return e.vnode.shapeFlag & 4;
}
let Dn = !1;
function Ya(e, t = !1) {
  Dn = t;
  const { props: n, children: o } = e.vnode, r = Ws(e);
  wa(e, n, r, t), Pa(e, o);
  const i = r ? Ga(e, t) : void 0;
  return Dn = !1, i;
}
function Ga(e, t) {
  var n;
  const o = e.type;
  if ({}.NODE_ENV !== "production") {
    if (o.name && Qo(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Qo(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        $s(i[s]);
    }
    o.compilerOptions && qs() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = _o(new Proxy(e.ctx, Ps)), {}.NODE_ENV !== "production" && pa(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? Qa(e) : null;
    en(e), Lt();
    const s = rt(
      r,
      e,
      0,
      [{}.NODE_ENV !== "production" ? fn(e.props) : e.props, i]
    );
    if (Ht(), kt(), dr(s)) {
      if (s.then(kt, kt), t)
        return s.then((l) => {
          ui(e, l, t);
        }).catch((l) => {
          Eo(l, e, 0);
        });
      if (e.asyncDep = s, {}.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = o.name) != null ? n : "Anonymous";
        w(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ui(e, s, t);
  } else
    Ys(e, t);
}
function ui(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? ({}.NODE_ENV !== "production" && Zt(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = us(t), {}.NODE_ENV !== "production" && ha(e)) : {}.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ys(e, n);
}
let Xo;
const qs = () => !Xo;
function Ys(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Xo && !o.render) {
      const r = o.template || Cr(e).template;
      if (r) {
        ({}).NODE_ENV !== "production" && tt(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: c } = o, f = ie(
          ie(
            {
              isCustomElement: i,
              delimiters: l
            },
            s
          ),
          c
        );
        o.render = Xo(r, f), {}.NODE_ENV !== "production" && nt(e, "compile");
      }
    }
    e.render = o.render || he;
  }
  en(e), Lt(), ga(e), Ht(), kt(), {}.NODE_ENV !== "production" && !o.render && e.render === he && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : w("Component is missing template or render function."));
}
function fi(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return oo(), ge(e, "get", "$attrs"), t[n];
      },
      set() {
        return w("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return w("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return ge(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Ja(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ge(e, "get", "$slots"), t[n];
    }
  }));
}
function Qa(e) {
  const t = (n) => {
    if ({}.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (k(n) ? o = "array" : ce(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return fi(e);
    },
    get slots() {
      return Ja(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return fi(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Pr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(us(_o(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Mt)
          return Mt[n](e);
      },
      has(t, n) {
        return n in t || n in Mt;
      }
    }));
}
const Xa = /(?:^|[-_])(\w)/g, Za = (e) => e.replace(Xa, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gs(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Oo(e, t, n = !1) {
  let o = Gs(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Za(o) : n ? "App" : "Anonymous";
}
function Js(e) {
  return L(e) && "__vccOpts" in e;
}
const Re = (e, t) => Nc(e, t, Dn);
function Qs(e, t, n) {
  const o = arguments.length;
  return o === 2 ? ee(t) && !k(t) ? Zt(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Zt(n) && (n = [n]), X(e, t, n));
}
const eu = Symbol.for("v-scx"), tu = () => {
  {
    const e = it(eu);
    return e || {}.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function So(e) {
  return !!(e && e.__v_isShallow);
}
function nu() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return ee(d) ? d.__isVue ? ["div", e, "VueInstance"] : ce(d) ? [
        "div",
        {},
        ["span", e, u(d)],
        "<",
        l(d.value),
        ">"
      ] : Tt(d) ? [
        "div",
        {},
        ["span", e, So(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${bt(d) ? " (readonly)" : ""}`
      ] : bt(d) ? [
        "div",
        {},
        ["span", e, So(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const h = [];
    d.type.props && d.props && h.push(s("props", F(d.props))), d.setupState !== ne && h.push(s("setup", d.setupState)), d.data !== ne && h.push(s("data", F(d.data)));
    const _ = c(d, "computed");
    _ && h.push(s("computed", _));
    const x = c(d, "inject");
    return x && h.push(s("injected", x)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), h;
  }
  function s(d, h) {
    return h = ie({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          l(h[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, h = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : ee(d) ? ["object", { object: h ? F(d) : d }] : ["span", n, String(d)];
  }
  function c(d, h) {
    const _ = d.type;
    if (L(_))
      return;
    const x = {};
    for (const T in d.ctx)
      f(_, T, h) && (x[T] = d.ctx[T]);
    return x;
  }
  function f(d, h, _) {
    const x = d[_];
    if (k(x) && x.includes(h) || ee(x) && h in x || d.extends && f(d.extends, h, _) || d.mixins && d.mixins.some((T) => f(T, h, _)))
      return !0;
  }
  function u(d) {
    return So(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const di = "3.3.4", ou = "http://www.w3.org/2000/svg", St = typeof document < "u" ? document : null, pi = St && /* @__PURE__ */ St.createElement("template"), ru = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? St.createElementNS(ou, e) : St.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => St.createTextNode(e),
  createComment: (e) => St.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => St.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      pi.innerHTML = o ? `<svg>${e}</svg>` : e;
      const l = pi.content;
      if (o) {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function iu(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function su(e, t, n) {
  const o = e.style, r = se(n);
  if (n && !r) {
    if (t && !se(t))
      for (const i in t)
        n[i] == null && Zo(o, i, "");
    for (const i in n)
      Zo(o, i, n[i]);
  } else {
    const i = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = i);
  }
}
const lu = /[^\\];\s*$/, hi = /\s*!important$/;
function Zo(e, t, n) {
  if (k(n))
    n.forEach((o) => Zo(e, t, o));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && lu.test(n) && w(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = cu(e, t);
    hi.test(n) ? e.setProperty(
      vt(o),
      n.replace(hi, ""),
      "important"
    ) : e[o] = n;
  }
}
const mi = ["Webkit", "Moz", "ms"], Io = {};
function cu(e, t) {
  const n = Io[t];
  if (n)
    return n;
  let o = Xt(t);
  if (o !== "filter" && o in e)
    return Io[t] = o;
  o = uo(o);
  for (let r = 0; r < mi.length; r++) {
    const i = mi[r] + o;
    if (i in e)
      return Io[t] = i;
  }
  return t;
}
const gi = "http://www.w3.org/1999/xlink";
function au(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(gi, t.slice(6, t.length)) : e.setAttributeNS(gi, t, n);
  else {
    const i = Ll(t);
    n == null || i && !Bi(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function uu(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = n;
    const f = l === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    f !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Bi(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    ({}).NODE_ENV !== "production" && !c && w(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      f
    );
  }
  c && e.removeAttribute(t);
}
function fu(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function du(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function pu(e, t, n, o, r = null) {
  const i = e._vei || (e._vei = {}), s = i[t];
  if (o && s)
    s.value = o;
  else {
    const [l, c] = hu(t);
    if (o) {
      const f = i[t] = _u(o, r);
      fu(e, l, f, c);
    } else
      s && (du(e, l, s, c), i[t] = void 0);
  }
}
const _i = /(?:Once|Passive|Capture)$/;
function hu(e) {
  let t;
  if (_i.test(e)) {
    t = {};
    let o;
    for (; o = e.match(_i); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : vt(e.slice(2)), t];
}
let Po = 0;
const mu = /* @__PURE__ */ Promise.resolve(), gu = () => Po || (mu.then(() => Po = 0), Po = Date.now());
function _u(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ue(
      Eu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = gu(), n;
}
function Eu(e, t) {
  if (k(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Ei = /^on[a-z]/, vu = (e, t, n, o, r = !1, i, s, l, c) => {
  t === "class" ? iu(e, o, r) : t === "style" ? su(e, n, o) : Vn(t) ? Xn(t) || pu(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yu(e, t, o, r)) ? uu(
    e,
    t,
    o,
    i,
    s,
    l,
    c
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), au(e, t, o, r));
};
function yu(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Ei.test(t) && L(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ei.test(t) && se(n) ? !1 : t in e;
}
const bu = /* @__PURE__ */ ie({ patchProp: vu }, ru);
let vi;
function Nu() {
  return vi || (vi = Aa(bu));
}
const wu = (...e) => {
  const t = Nu().createApp(...e);
  ({}).NODE_ENV !== "production" && (Ou(t), xu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Du(o);
    if (!r)
      return;
    const i = t._component;
    !L(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const s = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function Ou(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => kl(t) || jl(t),
    writable: !1
  });
}
function xu(e) {
  if (qs()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        w(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return w(o), n;
      },
      set() {
        w(o);
      }
    });
  }
}
function Du(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && w(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && w(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function $u() {
  nu();
}
({}).NODE_ENV !== "production" && $u();
var Cu = !1;
function Vu() {
  return Xs().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Xs() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Su = typeof Proxy == "function", Iu = "devtools-plugin:setup", Pu = "plugin:settings:set";
let Bt, er;
function Tu() {
  var e;
  return Bt !== void 0 || (typeof window < "u" && window.performance ? (Bt = !0, er = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Bt = !0, er = global.perf_hooks.performance) : Bt = !1), Bt;
}
function Ru() {
  return Tu() ? er.now() : Date.now();
}
class Au {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const s in t.settings) {
        const l = t.settings[s];
        o[s] = l.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, o);
    try {
      const s = localStorage.getItem(r), l = JSON.parse(s);
      Object.assign(i, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(s) {
        try {
          localStorage.setItem(r, JSON.stringify(s));
        } catch {
        }
        i = s;
      },
      now() {
        return Ru();
      }
    }, n && n.on(Pu, (s, l) => {
      s === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
        method: l,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[l](...c)) : (...c) => new Promise((f) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: f
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Tr(e, t) {
  const n = e, o = Xs(), r = Vu(), i = Su && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    r.emit(Iu, e, t);
  else {
    const s = i ? new Au(n, r) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Mu = {}.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var jt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(jt || (jt = {}));
const Zs = typeof window < "u", yi = ({}.NODE_ENV !== "production" || !1) && {}.NODE_ENV !== "test" && Zs, bi = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function ku(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function Rr(e, t, n) {
  const o = new XMLHttpRequest();
  o.open("GET", e), o.responseType = "blob", o.onload = function() {
    nl(o.response, t, n);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function el(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Gn(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Jn = typeof navigator == "object" ? navigator : { userAgent: "" }, tl = /* @__PURE__ */ (() => /Macintosh/.test(Jn.userAgent) && /AppleWebKit/.test(Jn.userAgent) && !/Safari/.test(Jn.userAgent))(), nl = Zs ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !tl ? ju : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Jn ? zu : (
      // Fallback to using FileReader and a popup
      Lu
    )
  )
) : () => {
};
function ju(e, t = "download", n) {
  const o = document.createElement("a");
  o.download = t, o.rel = "noopener", typeof e == "string" ? (o.href = e, o.origin !== location.origin ? el(o.href) ? Rr(e, t, n) : (o.target = "_blank", Gn(o)) : Gn(o)) : (o.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    Gn(o);
  }, 0));
}
function zu(e, t = "download", n) {
  if (typeof e == "string")
    if (el(e))
      Rr(e, t, n);
    else {
      const o = document.createElement("a");
      o.href = e, o.target = "_blank", setTimeout(function() {
        Gn(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(ku(e, n), t);
}
function Lu(e, t, n, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string")
    return Rr(e, t, n);
  const r = e.type === "application/octet-stream", i = /constructor/i.test(String(bi.HTMLElement)) || "safari" in bi, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || r && i || tl) && typeof FileReader < "u") {
    const l = new FileReader();
    l.onloadend = function() {
      let c = l.result;
      if (typeof c != "string")
        throw o = null, new Error("Wrong reader.result type");
      c = s ? c : c.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = c : location.assign(c), o = null;
    }, l.readAsDataURL(e);
  } else {
    const l = URL.createObjectURL(e);
    o ? o.location.assign(l) : location.href = l, o = null, setTimeout(function() {
      URL.revokeObjectURL(l);
    }, 4e4);
  }
}
function ue(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Ar(e) {
  return "_a" in e && "install" in e;
}
function ol() {
  if (!("clipboard" in navigator))
    return ue("Your browser doesn't support the Clipboard API", "error"), !0;
}
function rl(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (ue('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Hu(e) {
  if (!ol())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), ue("Global state copied to clipboard.");
    } catch (t) {
      if (rl(t))
        return;
      ue("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Fu(e) {
  if (!ol())
    try {
      e.state.value = JSON.parse(await navigator.clipboard.readText()), ue("Global state pasted from clipboard.");
    } catch (t) {
      if (rl(t))
        return;
      ue("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Uu(e) {
  try {
    nl(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    ue("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Ze;
function Bu() {
  Ze || (Ze = document.createElement("input"), Ze.type = "file", Ze.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Ze.onchange = async () => {
        const o = Ze.files;
        if (!o)
          return t(null);
        const r = o.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, Ze.oncancel = () => t(null), Ze.onerror = n, Ze.click();
    });
  }
  return e;
}
async function Ku(e) {
  try {
    const n = await (await Bu())();
    if (!n)
      return;
    const { text: o, file: r } = n;
    e.state.value = JSON.parse(o), ue(`Global state imported from "${r.name}".`);
  } catch (t) {
    ue("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Le(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const il = "🍍 Pinia (root)", tr = "_root";
function Wu(e) {
  return Ar(e) ? {
    id: tr,
    label: il
  } : {
    id: e.$id,
    label: e.$id
  };
}
function qu(e) {
  if (Ar(e)) {
    const n = Array.from(e._s.keys()), o = e._s;
    return {
      state: n.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: n.filter((i) => o.get(i)._getters).map((i) => {
        const s = o.get(i);
        return {
          editable: !1,
          key: i,
          value: s._getters.reduce((l, c) => (l[c] = s[c], l), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Yu(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Le(e.type),
    key: Le(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Gu(e) {
  switch (e) {
    case jt.direct:
      return "mutation";
    case jt.patchFunction:
      return "$patch";
    case jt.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Yt = !0;
const Qn = [], Vt = "pinia:mutations", _e = "pinia", { assign: Ju } = Object, lo = (e) => "🍍 " + e;
function Qu(e, t) {
  Tr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Qn,
    app: e
  }, (n) => {
    typeof n.now != "function" && ue("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Vt,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: _e,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Hu(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Fu(t), n.sendInspectorTree(_e), n.sendInspectorState(_e);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Uu(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Ku(t), n.sendInspectorTree(_e), n.sendInspectorState(_e);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const r = t._s.get(o);
            r ? typeof r.$reset != "function" ? ue(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (r.$reset(), ue(`Store "${o}" reset.`)) : ue(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((o, r) => {
      const i = o.componentInstance && o.componentInstance.proxy;
      if (i && i._pStores) {
        const s = o.componentInstance.proxy._pStores;
        Object.values(s).forEach((l) => {
          o.instanceData.state.push({
            type: lo(l.$id),
            key: "state",
            editable: !0,
            value: l._isOptionsAPI ? {
              _custom: {
                value: F(l.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => l.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(l.$state).reduce((c, f) => (c[f] = l.$state[f], c), {})
            )
          }), l._getters && l._getters.length && o.instanceData.state.push({
            type: lo(l.$id),
            key: "getters",
            editable: !1,
            value: l._getters.reduce((c, f) => {
              try {
                c[f] = l[f];
              } catch (u) {
                c[f] = u;
              }
              return c;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((o) => {
      if (o.app === e && o.inspectorId === _e) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), o.rootNodes = (o.filter ? r.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(o.filter.toLowerCase()) : il.toLowerCase().includes(o.filter.toLowerCase())) : r).map(Wu);
      }
    }), n.on.getInspectorState((o) => {
      if (o.app === e && o.inspectorId === _e) {
        const r = o.nodeId === tr ? t : t._s.get(o.nodeId);
        if (!r)
          return;
        r && (o.state = qu(r));
      }
    }), n.on.editInspectorState((o, r) => {
      if (o.app === e && o.inspectorId === _e) {
        const i = o.nodeId === tr ? t : t._s.get(o.nodeId);
        if (!i)
          return ue(`store "${o.nodeId}" not found`, "error");
        const { path: s } = o;
        Ar(i) ? s.unshift("state") : (s.length !== 1 || !i._customProperties.has(s[0]) || s[0] in i.$state) && s.unshift("$state"), Yt = !1, o.set(i, s, o.state.value), Yt = !0;
      }
    }), n.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const r = o.type.replace(/^🍍\s*/, ""), i = t._s.get(r);
        if (!i)
          return ue(`store "${r}" not found`, "error");
        const { path: s } = o;
        if (s[0] !== "state")
          return ue(`Invalid path for store "${r}":
${s}
Only state can be modified.`);
        s[0] = "$state", Yt = !1, o.set(i, s, o.state.value), Yt = !0;
      }
    });
  });
}
function Xu(e, t) {
  Qn.includes(lo(t.$id)) || Qn.push(lo(t.$id)), Tr({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Qn,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const o = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: l, name: c, args: f }) => {
      const u = sl++;
      n.addTimelineEvent({
        layerId: Vt,
        event: {
          time: o(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: Le(t.$id),
            action: Le(c),
            args: f
          },
          groupId: u
        }
      }), s((d) => {
        _t = void 0, n.addTimelineEvent({
          layerId: Vt,
          event: {
            time: o(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: Le(t.$id),
              action: Le(c),
              args: f,
              result: d
            },
            groupId: u
          }
        });
      }), l((d) => {
        _t = void 0, n.addTimelineEvent({
          layerId: Vt,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: Le(t.$id),
              action: Le(c),
              args: f,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      Qt(() => Te(t[s]), (l, c) => {
        n.notifyComponentUpdate(), n.sendInspectorState(_e), Yt && n.addTimelineEvent({
          layerId: Vt,
          event: {
            time: o(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: l,
              oldValue: c
            },
            groupId: _t
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: l }, c) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(_e), !Yt)
        return;
      const f = {
        time: o(),
        title: Gu(l),
        data: Ju({ store: Le(t.$id) }, Yu(s)),
        groupId: _t
      };
      l === jt.patchFunction ? f.subtitle = "⤵️" : l === jt.patchObject ? f.subtitle = "🧩" : s && !Array.isArray(s) && (f.subtitle = s.type), s && (f.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: Vt,
        event: f
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = _o((s) => {
      r(s), n.addTimelineEvent({
        layerId: Vt,
        event: {
          time: o(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Le(t.$id),
            info: Le("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(_e), n.sendInspectorState(_e);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), n.notifyComponentUpdate(), n.sendInspectorTree(_e), n.sendInspectorState(_e), n.getSettings().logStoreChanges && ue(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(_e), n.sendInspectorState(_e), n.getSettings().logStoreChanges && ue(`"${t.$id}" store installed 🆕`);
  });
}
let sl = 0, _t;
function Ni(e, t, n) {
  const o = t.reduce((r, i) => (r[i] = F(e)[i], r), {});
  for (const r in o)
    e[r] = function() {
      const i = sl, s = n ? new Proxy(e, {
        get(...c) {
          return _t = i, Reflect.get(...c);
        },
        set(...c) {
          return _t = i, Reflect.set(...c);
        }
      }) : e;
      _t = i;
      const l = o[r].apply(s, arguments);
      return _t = void 0, l;
    };
}
function Zu({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, Ni(t, Object.keys(n.actions), t._isOptionsAPI);
  const o = t._hotUpdate;
  F(t)._hotUpdate = function(r) {
    o.apply(this, arguments), Ni(t, Object.keys(r._hmrPayload.actions), !!t._isOptionsAPI);
  }, Xu(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function ef() {
  const e = Fl(!0), t = e.run(() => yr({}));
  let n = [], o = [];
  const r = _o({
    install(i) {
      r._a = i, i.provide(Mu, r), i.config.globalProperties.$pinia = r, yi && Qu(i, r), o.forEach((s) => n.push(s)), o = [];
    },
    use(i) {
      return !this._a && !Cu ? o.push(i) : n.push(i), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return yi && typeof Proxy < "u" && r.use(Zu), r;
}
const tf = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuNzYgMjI2LjY5Ij48cGF0aCBkPSJNMTYxLjA5Ni4wMDFsLTMwLjIyNSA1Mi4zNTFMMTAwLjY0Ny4wMDFILS4wMDVsMTMwLjg3NyAyMjYuNjg4TDI2MS43NDkuMDAxeiIgZmlsbD0iIzQxYjg4MyIvPjxwYXRoIGQ9Ik0xNjEuMDk2LjAwMWwtMzAuMjI1IDUyLjM1MUwxMDAuNjQ3LjAwMUg1Mi4zNDZsNzguNTI2IDEzNi4wMUwyMDkuMzk4LjAwMXoiIGZpbGw9IiMzNDQ5NWUiLz48L3N2Zz4K";
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const ot = typeof window < "u";
function nf(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function To(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Ce(r) ? r.map(e) : e(r);
  }
  return n;
}
const _n = () => {
}, Ce = Array.isArray;
function J(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const of = /\/$/, rf = (e) => e.replace(of, "");
function Ro(e, t, n = "/") {
  let o, r = {}, i = "", s = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), i = t.slice(c + 1, l > -1 ? l : t.length), r = e(i)), l > -1 && (o = o || t.slice(0, l), s = t.slice(l, t.length)), o = cf(o ?? t, n), {
    fullPath: o + (i && "?") + i + s,
    path: o,
    query: r,
    hash: s
  };
}
function sf(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function wi(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Oi(e, t, n) {
  const o = t.matched.length - 1, r = n.matched.length - 1;
  return o > -1 && o === r && wt(t.matched[o], n.matched[r]) && ll(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function wt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ll(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!lf(e[n], t[n]))
      return !1;
  return !0;
}
function lf(e, t) {
  return Ce(e) ? xi(e, t) : Ce(t) ? xi(t, e) : e === t;
}
function xi(e, t) {
  return Ce(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function cf(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return J(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let i = n.length - 1, s, l;
  for (s = 0; s < o.length; s++)
    if (l = o[s], l !== ".")
      if (l === "..")
        i > 1 && i--;
      else
        break;
  return n.slice(0, i).join("/") + "/" + o.slice(s - (s === o.length ? 1 : 0)).join("/");
}
var $n;
(function(e) {
  e.pop = "pop", e.push = "push";
})($n || ($n = {}));
var En;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(En || (En = {}));
function af(e) {
  if (!e)
    if (ot) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), rf(e);
}
const uf = /^[^#]+#/;
function ff(e, t) {
  return e.replace(uf, "#") + t;
}
function df(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const xo = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function pf(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const i = document.querySelector(e.el);
        if (o && i) {
          J(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        J(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r) {
      ({}).NODE_ENV !== "production" && J(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = df(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Di(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const nr = /* @__PURE__ */ new Map();
function hf(e, t) {
  nr.set(e, t);
}
function mf(e) {
  const t = nr.get(e);
  return nr.delete(e), t;
}
let gf = () => location.protocol + "//" + location.host;
function cl(e, t) {
  const { pathname: n, search: o, hash: r } = t, i = e.indexOf("#");
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1, c = r.slice(l);
    return c[0] !== "/" && (c = "/" + c), wi(c, "");
  }
  return wi(n, e) + o + r;
}
function _f(e, t, n, o) {
  let r = [], i = [], s = null;
  const l = ({ state: h }) => {
    const _ = cl(e, location), x = n.value, T = t.value;
    let j = 0;
    if (h) {
      if (n.value = _, t.value = h, s && s === x) {
        s = null;
        return;
      }
      j = T ? h.position - T.position : 0;
    } else
      o(_);
    r.forEach((I) => {
      I(n.value, x, {
        delta: j,
        type: $n.pop,
        direction: j ? j > 0 ? En.forward : En.back : En.unknown
      });
    });
  };
  function c() {
    s = n.value;
  }
  function f(h) {
    r.push(h);
    const _ = () => {
      const x = r.indexOf(h);
      x > -1 && r.splice(x, 1);
    };
    return i.push(_), _;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(Q({}, h.state, { scroll: xo() }), "");
  }
  function d() {
    for (const h of i)
      h();
    i = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: f,
    destroy: d
  };
}
function $i(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? xo() : null
  };
}
function Ef(e) {
  const { history: t, location: n } = window, o = {
    value: cl(e, n)
  }, r = { value: t.state };
  r.value || i(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function i(c, f, u) {
    const d = e.indexOf("#"), h = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : gf() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](f, "", h), r.value = f;
    } catch (_) {
      ({}).NODE_ENV !== "production" ? J("Error with push/replace State", _) : console.error(_), n[u ? "replace" : "assign"](h);
    }
  }
  function s(c, f) {
    const u = Q({}, t.state, $i(
      r.value.back,
      // keep back and forward entries but override current position
      c,
      r.value.forward,
      !0
    ), f, { position: r.value.position });
    i(c, u, !0), o.value = c;
  }
  function l(c, f) {
    const u = Q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: c,
        scroll: xo()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && J(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), i(u.current, u, !0);
    const d = Q({}, $i(o.value, c, null), { position: u.position + 1 }, f);
    i(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: r,
    push: l,
    replace: s
  };
}
function vf(e) {
  e = af(e);
  const t = Ef(e), n = _f(e, t.state, t.location, t.replace);
  function o(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const r = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: ff.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function yf(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function al(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const dt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, or = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ci;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ci || (Ci = {}));
const bf = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${wf(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function tn(e, t) {
  return {}.NODE_ENV !== "production" ? Q(new Error(bf[e](t)), {
    type: e,
    [or]: !0
  }, t) : Q(new Error(), {
    type: e,
    [or]: !0
  }, t);
}
function et(e, t) {
  return e instanceof Error && or in e && (t == null || !!(e.type & t));
}
const Nf = ["params", "query", "hash"];
function wf(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Nf)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Vi = "[^/]+?", Of = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, xf = /[.+*?^${}()[\]/\\]/g;
function Df(e, t) {
  const n = Q({}, Of, t), o = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const f of e) {
    const u = f.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !f.length && (r += "/");
    for (let d = 0; d < f.length; d++) {
      const h = f[d];
      let _ = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        d || (r += "/"), r += h.value.replace(xf, "\\$&"), _ += 40;
      else if (h.type === 1) {
        const { value: x, repeatable: T, optional: j, regexp: I } = h;
        i.push({
          name: x,
          repeatable: T,
          optional: j
        });
        const z = I || Vi;
        if (z !== Vi) {
          _ += 10;
          try {
            new RegExp(`(${z})`);
          } catch (oe) {
            throw new Error(`Invalid custom RegExp for param "${x}" (${z}): ` + oe.message);
          }
        }
        let A = T ? `((?:${z})(?:/(?:${z}))*)` : `(${z})`;
        d || (A = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        j && f.length < 2 ? `(?:/${A})` : "/" + A), j && (A += "?"), r += A, _ += 20, j && (_ += -8), T && (_ += -20), z === ".*" && (_ += -50);
      }
      u.push(_);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const f = o.length - 1;
    o[f][o[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const s = new RegExp(r, n.sensitive ? "" : "i");
  function l(f) {
    const u = f.match(s), d = {};
    if (!u)
      return null;
    for (let h = 1; h < u.length; h++) {
      const _ = u[h] || "", x = i[h - 1];
      d[x.name] = _ && x.repeatable ? _.split("/") : _;
    }
    return d;
  }
  function c(f) {
    let u = "", d = !1;
    for (const h of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const _ of h)
        if (_.type === 0)
          u += _.value;
        else if (_.type === 1) {
          const { value: x, repeatable: T, optional: j } = _, I = x in f ? f[x] : "";
          if (Ce(I) && !T)
            throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);
          const z = Ce(I) ? I.join("/") : I;
          if (!z)
            if (j)
              h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${x}"`);
          u += z;
        }
    }
    return u || "/";
  }
  return {
    re: s,
    score: o,
    keys: i,
    parse: l,
    stringify: c
  };
}
function $f(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Cf(e, t) {
  let n = 0;
  const o = e.score, r = t.score;
  for (; n < o.length && n < r.length; ) {
    const i = $f(o[n], r[n]);
    if (i)
      return i;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (Si(o))
      return 1;
    if (Si(r))
      return -1;
  }
  return r.length - o.length;
}
function Si(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Vf = {
  type: 0,
  value: ""
}, Sf = /[a-zA-Z0-9_]/;
function If(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Vf]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(_) {
    throw new Error(`ERR (${n})/"${f}": ${_}`);
  }
  let n = 0, o = n;
  const r = [];
  let i;
  function s() {
    i && r.push(i), i = [];
  }
  let l = 0, c, f = "", u = "";
  function d() {
    f && (n === 0 ? i.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: f,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function h() {
    f += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (f && d(), s()) : c === ":" ? (d(), n = 1) : h();
        break;
      case 4:
        h(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : Sf.test(c) ? h() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
        break;
      case 3:
        d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), s(), r;
}
function Pf(e, t, n) {
  const o = Df(If(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const i = /* @__PURE__ */ new Set();
    for (const s of o.keys)
      i.has(s.name) && J(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), i.add(s.name);
  }
  const r = Q(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Tf(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Ti({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return o.get(u);
  }
  function i(u, d, h) {
    const _ = !h, x = Rf(u);
    ({}).NODE_ENV !== "production" && jf(x, d), x.aliasOf = h && h.record;
    const T = Ti(t, u), j = [
      x
    ];
    if ("alias" in u) {
      const A = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const oe of A)
        j.push(Q({}, x, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: h ? h.record.components : x.components,
          path: oe,
          // we might be the child of an alias
          aliasOf: h ? h.record : x
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let I, z;
    for (const A of j) {
      const { path: oe } = A;
      if (d && oe[0] !== "/") {
        const M = d.record.path, de = M[M.length - 1] === "/" ? "" : "/";
        A.path = d.record.path + (oe && de + oe);
      }
      if ({}.NODE_ENV !== "production" && A.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (I = Pf(A, d, T), {}.NODE_ENV !== "production" && d && oe[0] === "/" && zf(I, d), h ? (h.alias.push(I), {}.NODE_ENV !== "production" && kf(h, I)) : (z = z || I, z !== I && z.alias.push(I), _ && u.name && !Pi(I) && s(u.name)), x.children) {
        const M = x.children;
        for (let de = 0; de < M.length; de++)
          i(M[de], I, h && h.children[de]);
      }
      h = h || I, (I.record.components && Object.keys(I.record.components).length || I.record.name || I.record.redirect) && c(I);
    }
    return z ? () => {
      s(z);
    } : _n;
  }
  function s(u) {
    if (al(u)) {
      const d = o.get(u);
      d && (o.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(s), d.alias.forEach(s));
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1), u.record.name && o.delete(u.record.name), u.children.forEach(s), u.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function c(u) {
    let d = 0;
    for (; d < n.length && Cf(u, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (u.record.path !== n[d].record.path || !ul(u, n[d])); )
      d++;
    n.splice(d, 0, u), u.record.name && !Pi(u) && o.set(u.record.name, u);
  }
  function f(u, d) {
    let h, _ = {}, x, T;
    if ("name" in u && u.name) {
      if (h = o.get(u.name), !h)
        throw tn(1, {
          location: u
        });
      if ({}.NODE_ENV !== "production") {
        const z = Object.keys(u.params || {}).filter((A) => !h.keys.find((oe) => oe.name === A));
        z.length && J(`Discarded invalid param(s) "${z.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      T = h.record.name, _ = Q(
        // paramsFromLocation is a new object
        Ii(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          h.keys.filter((z) => !z.optional).map((z) => z.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        u.params && Ii(u.params, h.keys.map((z) => z.name))
      ), x = h.stringify(_);
    } else if ("path" in u)
      x = u.path, {}.NODE_ENV !== "production" && !x.startsWith("/") && J(`The Matcher cannot resolve relative paths but received "${x}". Unless you directly called \`matcher.resolve("${x}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = n.find((z) => z.re.test(x)), h && (_ = h.parse(x), T = h.record.name);
    else {
      if (h = d.name ? o.get(d.name) : n.find((z) => z.re.test(d.path)), !h)
        throw tn(1, {
          location: u,
          currentLocation: d
        });
      T = h.record.name, _ = Q({}, d.params, u.params), x = h.stringify(_);
    }
    const j = [];
    let I = h;
    for (; I; )
      j.unshift(I.record), I = I.parent;
    return {
      name: T,
      path: x,
      params: _,
      matched: j,
      meta: Mf(j)
    };
  }
  return e.forEach((u) => i(u)), { addRoute: i, resolve: f, removeRoute: s, getRoutes: l, getRecordMatcher: r };
}
function Ii(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Rf(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Af(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Af(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Pi(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Mf(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
}
function Ti(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function rr(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function kf(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(rr.bind(null, n)))
      return J(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(rr.bind(null, n)))
      return J(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function jf(e, t) {
  t && t.record.name && !e.name && !e.path && J(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function zf(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(rr.bind(null, n)))
      return J(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function ul(e, t) {
  return t.children.some((n) => n === e || ul(e, n));
}
const fl = /#/g, Lf = /&/g, Hf = /\//g, Ff = /=/g, Uf = /\?/g, dl = /\+/g, Bf = /%5B/g, Kf = /%5D/g, pl = /%5E/g, Wf = /%60/g, hl = /%7B/g, qf = /%7C/g, ml = /%7D/g, Yf = /%20/g;
function Mr(e) {
  return encodeURI("" + e).replace(qf, "|").replace(Bf, "[").replace(Kf, "]");
}
function Gf(e) {
  return Mr(e).replace(hl, "{").replace(ml, "}").replace(pl, "^");
}
function ir(e) {
  return Mr(e).replace(dl, "%2B").replace(Yf, "+").replace(fl, "%23").replace(Lf, "%26").replace(Wf, "`").replace(hl, "{").replace(ml, "}").replace(pl, "^");
}
function Jf(e) {
  return ir(e).replace(Ff, "%3D");
}
function Qf(e) {
  return Mr(e).replace(fl, "%23").replace(Uf, "%3F");
}
function Xf(e) {
  return e == null ? "" : Qf(e).replace(Hf, "%2F");
}
function Cn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    ({}).NODE_ENV !== "production" && J(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Zf(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(dl, " "), s = i.indexOf("="), l = Cn(s < 0 ? i : i.slice(0, s)), c = s < 0 ? null : Cn(i.slice(s + 1));
    if (l in t) {
      let f = t[l];
      Ce(f) || (f = t[l] = [f]), f.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Ri(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Jf(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ce(o) ? o.map((i) => i && ir(i)) : [o && ir(o)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function ed(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ce(o) ? o.map((r) => r == null ? null : "" + r) : o == null ? o : "" + o);
  }
  return t;
}
const td = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ai = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), kr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), gl = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), sr = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ln() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const r = e.indexOf(o);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function mt(e, t, n, o, r) {
  const i = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () => new Promise((s, l) => {
    const c = (d) => {
      d === !1 ? l(tn(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : yf(d) ? l(tn(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[r] === i && typeof d == "function" && i.push(d), s());
    }, f = e.call(o && o.instances[r], t, n, {}.NODE_ENV !== "production" ? nd(c, t, n) : c);
    let u = Promise.resolve(f);
    if (e.length < 3 && (u = u.then(c)), {}.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof f == "object" && "then" in f)
        u = u.then((h) => c._called ? h : (J(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (f !== void 0 && !c._called) {
        J(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    u.catch((d) => l(d));
  });
}
function nd(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && J(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Ao(e, t, n, o) {
  const r = [];
  for (const i of e) {
    ({}).NODE_ENV !== "production" && !i.components && !i.children.length && J(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const s in i.components) {
      let l = i.components[s];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw J(`Component "${s}" in record with path "${i.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          J(`Component "${s}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = l;
          l = () => c;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, J(`Component "${s}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[s]))
        if (od(l)) {
          const f = (l.__vccOpts || l)[t];
          f && r.push(mt(f, n, o, i, s));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (J(`Component "${s}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), r.push(() => c.then((f) => {
            if (!f)
              return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));
            const u = nf(f) ? f.default : f;
            i.components[s] = u;
            const h = (u.__vccOpts || u)[t];
            return h && mt(h, n, o, i, s)();
          }));
        }
    }
  }
  return r;
}
function od(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Mi(e) {
  const t = it(kr), n = it(gl), o = Re(() => t.resolve(Te(e.to))), r = Re(() => {
    const { matched: c } = o.value, { length: f } = c, u = c[f - 1], d = n.matched;
    if (!u || !d.length)
      return -1;
    const h = d.findIndex(wt.bind(null, u));
    if (h > -1)
      return h;
    const _ = ki(c[f - 2]);
    return (
      // we are dealing with nested routes
      f > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      ki(u) === _ && // avoid comparing the child with its parent
      d[d.length - 1].path !== _ ? d.findIndex(wt.bind(null, c[f - 2])) : h
    );
  }), i = Re(() => r.value > -1 && sd(n.params, o.value.params)), s = Re(() => r.value > -1 && r.value === n.matched.length - 1 && ll(n.params, o.value.params));
  function l(c = {}) {
    return id(c) ? t[Te(e.replace) ? "replace" : "push"](
      Te(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(_n) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && ot) {
    const c = Ks();
    if (c) {
      const f = {
        route: o.value,
        isActive: i.value,
        isExactActive: s.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(f), Xc(() => {
        f.route = o.value, f.isActive = i.value, f.isExactActive = s.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Re(() => o.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l
  };
}
const rd = /* @__PURE__ */ In({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Mi,
  setup(e, { slots: t }) {
    const n = mo(Mi(e)), { options: o } = it(kr), r = Re(() => ({
      [ji(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [ji(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && t.default(n);
      return e.custom ? i : Qs("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: r.value
      }, i);
    };
  }
}), lr = rd;
function id(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function sd(e, t) {
  for (const n in t) {
    const o = t[n], r = e[n];
    if (typeof o == "string") {
      if (o !== r)
        return !1;
    } else if (!Ce(r) || r.length !== o.length || o.some((i, s) => i !== r[s]))
      return !1;
  }
  return !0;
}
function ki(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const ji = (e, t, n) => e ?? t ?? n, ld = /* @__PURE__ */ In({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    ({}).NODE_ENV !== "production" && cd();
    const o = it(sr), r = Re(() => e.route || o.value), i = it(Ai, 0), s = Re(() => {
      let f = Te(i);
      const { matched: u } = r.value;
      let d;
      for (; (d = u[f]) && !d.components; )
        f++;
      return f;
    }), l = Re(() => r.value.matched[s.value]);
    Kn(Ai, Re(() => s.value + 1)), Kn(td, l), Kn(sr, r);
    const c = yr();
    return Qt(() => [c.value, l.value, e.name], ([f, u, d], [h, _, x]) => {
      u && (u.instances[d] = f, _ && _ !== u && f && f === h && (u.leaveGuards.size || (u.leaveGuards = _.leaveGuards), u.updateGuards.size || (u.updateGuards = _.updateGuards))), f && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!_ || !wt(u, _) || !h) && (u.enterCallbacks[d] || []).forEach((T) => T(f));
    }, { flush: "post" }), () => {
      const f = r.value, u = e.name, d = l.value, h = d && d.components[u];
      if (!h)
        return zi(n.default, { Component: h, route: f });
      const _ = d.props[u], x = _ ? _ === !0 ? f.params : typeof _ == "function" ? _(f) : _ : null, j = Qs(h, Q({}, x, t, {
        onVnodeUnmounted: (I) => {
          I.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && ot && j.ref) {
        const I = {
          depth: s.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (Ce(j.ref) ? j.ref.map((A) => A.i) : [j.ref.i]).forEach((A) => {
          A.__vrv_devtools = I;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        zi(n.default, { Component: j, route: f }) || j
      );
    };
  }
});
function zi(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const _l = ld;
function cd() {
  const e = Ks(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    J(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function cn(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => _d(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Hn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let ad = 0;
function ud(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = ad++;
  Tr({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (r) => {
    typeof r.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r.on.inspectComponent((u, d) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: cn(t.currentRoute.value, "Current Route")
      });
    }), r.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const h = d.__vrv_devtools;
        u.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: El
        });
      }
      Ce(d.__vrl_devtools) && (d.__devtoolsApi = r, d.__vrl_devtools.forEach((h) => {
        let _ = bl, x = "";
        h.isExactActive ? (_ = yl, x = "This is exactly active") : h.isActive && (_ = vl, x = "This link is active"), u.tags.push({
          label: h.route.path,
          textColor: 0,
          tooltip: x,
          backgroundColor: _
        });
      }));
    }), Qt(t.currentRoute, () => {
      c(), r.notifyComponentUpdate(), r.sendInspectorTree(l), r.sendInspectorState(l);
    });
    const i = "router:navigations:" + o;
    r.addTimelineLayer({
      id: i,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((u, d) => {
      r.addTimelineEvent({
        layerId: i,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: r.now(),
          data: { error: u },
          groupId: d.meta.__navigationId
        }
      });
    });
    let s = 0;
    t.beforeEach((u, d) => {
      const h = {
        guard: Hn("beforeEach"),
        from: cn(d, "Current Location during this navigation"),
        to: cn(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: s++
      }), r.addTimelineEvent({
        layerId: i,
        event: {
          time: r.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: h,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, h) => {
      const _ = {
        guard: Hn("afterEach")
      };
      h ? (_.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, _.status = Hn("❌")) : _.status = Hn("✅"), _.from = cn(d, "Current Location during this navigation"), _.to = cn(u, "Target location"), r.addTimelineEvent({
        layerId: i,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: r.now(),
          data: _,
          logType: h ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + o;
    r.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!f)
        return;
      const u = f;
      let d = n.getRoutes().filter((h) => !h.parent);
      d.forEach(Ol), u.filter && (d = d.filter((h) => (
        // save matches state based on the payload
        cr(h, u.filter.toLowerCase())
      ))), d.forEach((h) => wl(h, t.currentRoute.value)), u.rootNodes = d.map(Nl);
    }
    let f;
    r.on.getInspectorTree((u) => {
      f = u, u.app === e && u.inspectorId === l && c();
    }), r.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === l) {
        const h = n.getRoutes().find((_) => _.record.__vd_id === u.nodeId);
        h && (u.state = {
          options: dd(h)
        });
      }
    }), r.sendInspectorTree(l), r.sendInspectorState(l);
  });
}
function fd(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function dd(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${fd(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const El = 15485081, vl = 2450411, yl = 8702998, pd = 2282478, bl = 16486972, hd = 6710886;
function Nl(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: pd
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: bl
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: El
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: yl
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: vl
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: hd
  });
  let o = n.__vd_id;
  return o == null && (o = String(md++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Nl)
  };
}
let md = 0;
const gd = /^\/(.*)\/([a-z]*)$/;
function wl(e, t) {
  const n = t.matched.length && wt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => wt(o, e.record))), e.children.forEach((o) => wl(o, t));
}
function Ol(e) {
  e.__vd_match = !1, e.children.forEach(Ol);
}
function cr(e, t) {
  const n = String(e.re).match(gd);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => cr(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), i = Cn(r);
  return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => cr(s, t));
}
function _d(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Ed(e) {
  const t = Tf(e.routes, e), n = e.parseQuery || Zf, o = e.stringifyQuery || Ri, r = e.history;
  if ({}.NODE_ENV !== "production" && !r)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const i = ln(), s = ln(), l = ln(), c = Ec(dt);
  let f = dt;
  ot && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = To.bind(null, (g) => "" + g), d = To.bind(null, Xf), h = (
    // @ts-expect-error: intentionally avoid the type check
    To.bind(null, Cn)
  );
  function _(g, $) {
    let C, V;
    return al(g) ? (C = t.getRecordMatcher(g), V = $) : V = g, t.addRoute(V, C);
  }
  function x(g) {
    const $ = t.getRecordMatcher(g);
    $ ? t.removeRoute($) : {}.NODE_ENV !== "production" && J(`Cannot remove non-existent route "${String(g)}"`);
  }
  function T() {
    return t.getRoutes().map((g) => g.record);
  }
  function j(g) {
    return !!t.getRecordMatcher(g);
  }
  function I(g, $) {
    if ($ = Q({}, $ || c.value), typeof g == "string") {
      const p = Ro(n, g, $.path), m = t.resolve({ path: p.path }, $), v = r.createHref(p.fullPath);
      return {}.NODE_ENV !== "production" && (v.startsWith("//") ? J(`Location "${g}" resolved to "${v}". A resolved location cannot start with multiple slashes.`) : m.matched.length || J(`No match found for location with path "${g}"`)), Q(p, m, {
        params: h(m.params),
        hash: Cn(p.hash),
        redirectedFrom: void 0,
        href: v
      });
    }
    let C;
    if ("path" in g)
      ({}).NODE_ENV !== "production" && "params" in g && !("name" in g) && // @ts-expect-error: the type is never
      Object.keys(g.params).length && J(`Path "${g.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), C = Q({}, g, {
        path: Ro(n, g.path, $.path).path
      });
    else {
      const p = Q({}, g.params);
      for (const m in p)
        p[m] == null && delete p[m];
      C = Q({}, g, {
        params: d(p)
      }), $.params = d($.params);
    }
    const V = t.resolve(C, $), Y = g.hash || "";
    ({}).NODE_ENV !== "production" && Y && !Y.startsWith("#") && J(`A \`hash\` should always start with the character "#". Replace "${Y}" with "#${Y}".`), V.params = u(h(V.params));
    const re = sf(o, Q({}, g, {
      hash: Gf(Y),
      path: V.path
    })), a = r.createHref(re);
    return {}.NODE_ENV !== "production" && (a.startsWith("//") ? J(`Location "${g}" resolved to "${a}". A resolved location cannot start with multiple slashes.`) : V.matched.length || J(`No match found for location with path "${"path" in g ? g.path : g}"`)), Q({
      fullPath: re,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: Y,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ri ? ed(g.query) : g.query || {}
      )
    }, V, {
      redirectedFrom: void 0,
      href: a
    });
  }
  function z(g) {
    return typeof g == "string" ? Ro(n, g, c.value.path) : Q({}, g);
  }
  function A(g, $) {
    if (f !== g)
      return tn(8, {
        from: $,
        to: g
      });
  }
  function oe(g) {
    return Ne(g);
  }
  function M(g) {
    return oe(Q(z(g), { replace: !0 }));
  }
  function de(g) {
    const $ = g.matched[g.matched.length - 1];
    if ($ && $.redirect) {
      const { redirect: C } = $;
      let V = typeof C == "function" ? C(g) : C;
      if (typeof V == "string" && (V = V.includes("?") || V.includes("#") ? V = z(V) : (
        // force empty params
        { path: V }
      ), V.params = {}), {}.NODE_ENV !== "production" && !("path" in V) && !("name" in V))
        throw J(`Invalid redirect found:
${JSON.stringify(V, null, 2)}
 when navigating to "${g.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Q({
        query: g.query,
        hash: g.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in V ? {} : g.params
      }, V);
    }
  }
  function Ne(g, $) {
    const C = f = I(g), V = c.value, Y = g.state, re = g.force, a = g.replace === !0, p = de(C);
    if (p)
      return Ne(
        Q(z(p), {
          state: typeof p == "object" ? Q({}, Y, p.state) : Y,
          force: re,
          replace: a
        }),
        // keep original redirectedFrom if it exists
        $ || C
      );
    const m = C;
    m.redirectedFrom = $;
    let v;
    return !re && Oi(o, V, C) && (v = tn(16, { to: m, from: V }), ct(
      V,
      V,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (v ? Promise.resolve(v) : Ve(m, V)).catch((E) => et(E) ? (
      // navigation redirects still mark the router as ready
      et(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? E : xt(E)
    ) : (
      // reject any unknown error
      B(E, m, V)
    )).then((E) => {
      if (E) {
        if (et(
          E,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Oi(o, I(E.to), m) && // and we have done it a couple of times
          $ && // @ts-expect-error: added only in dev
          ($._count = $._count ? (
            // @ts-expect-error
            $._count + 1
          ) : 1) > 30 ? (J(`Detected a possibly infinite redirection in a navigation guard when going from "${V.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : Ne(
            // keep options
            Q({
              // preserve an existing replacement but allow the redirect to override it
              replace: a
            }, z(E.to), {
              state: typeof E.to == "object" ? Q({}, Y, E.to.state) : Y,
              force: re
            }),
            // preserve the original redirectedFrom if any
            $ || m
          );
      } else
        E = Oe(m, V, !0, a, Y);
      return ke(m, V, E), E;
    });
  }
  function Be(g, $) {
    const C = A(g, $);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function we(g) {
    const $ = at.values().next().value;
    return $ && typeof $.runWithContext == "function" ? $.runWithContext(g) : g();
  }
  function Ve(g, $) {
    let C;
    const [V, Y, re] = vd(g, $);
    C = Ao(V.reverse(), "beforeRouteLeave", g, $);
    for (const p of V)
      p.leaveGuards.forEach((m) => {
        C.push(mt(m, g, $));
      });
    const a = Be.bind(null, g, $);
    return C.push(a), ut(C).then(() => {
      C = [];
      for (const p of i.list())
        C.push(mt(p, g, $));
      return C.push(a), ut(C);
    }).then(() => {
      C = Ao(Y, "beforeRouteUpdate", g, $);
      for (const p of Y)
        p.updateGuards.forEach((m) => {
          C.push(mt(m, g, $));
        });
      return C.push(a), ut(C);
    }).then(() => {
      C = [];
      for (const p of re)
        if (p.beforeEnter)
          if (Ce(p.beforeEnter))
            for (const m of p.beforeEnter)
              C.push(mt(m, g, $));
          else
            C.push(mt(p.beforeEnter, g, $));
      return C.push(a), ut(C);
    }).then(() => (g.matched.forEach((p) => p.enterCallbacks = {}), C = Ao(re, "beforeRouteEnter", g, $), C.push(a), ut(C))).then(() => {
      C = [];
      for (const p of s.list())
        C.push(mt(p, g, $));
      return C.push(a), ut(C);
    }).catch((p) => et(
      p,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? p : Promise.reject(p));
  }
  function ke(g, $, C) {
    l.list().forEach((V) => we(() => V(g, $, C)));
  }
  function Oe(g, $, C, V, Y) {
    const re = A(g, $);
    if (re)
      return re;
    const a = $ === dt, p = ot ? history.state : {};
    C && (V || a ? r.replace(g.fullPath, Q({
      scroll: a && p && p.scroll
    }, Y)) : r.push(g.fullPath, Y)), c.value = g, ct(g, $, C, a), xt();
  }
  let Ke;
  function Tn() {
    Ke || (Ke = r.listen((g, $, C) => {
      if (!Rn.listening)
        return;
      const V = I(g), Y = de(V);
      if (Y) {
        Ne(Q(Y, { replace: !0 }), V).catch(_n);
        return;
      }
      f = V;
      const re = c.value;
      ot && hf(Di(re.fullPath, C.delta), xo()), Ve(V, re).catch((a) => et(
        a,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? a : et(
        a,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (Ne(
        a.to,
        V
        // avoid an uncaught rejection, let push call triggerError
      ).then((p) => {
        et(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !C.delta && C.type === $n.pop && r.go(-1, !1);
      }).catch(_n), Promise.reject()) : (C.delta && r.go(-C.delta, !1), B(a, V, re))).then((a) => {
        a = a || Oe(
          // after navigation, all matched components are resolved
          V,
          re,
          !1
        ), a && (C.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !et(
          a,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-C.delta, !1) : C.type === $n.pop && et(
          a,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), ke(V, re, a);
      }).catch(_n);
    }));
  }
  let Se = ln(), pe = ln(), U;
  function B(g, $, C) {
    xt(g);
    const V = pe.list();
    return V.length ? V.forEach((Y) => Y(g, $, C)) : ({}.NODE_ENV !== "production" && J("uncaught error during route navigation:"), console.error(g)), Promise.reject(g);
  }
  function Ie() {
    return U && c.value !== dt ? Promise.resolve() : new Promise((g, $) => {
      Se.add([g, $]);
    });
  }
  function xt(g) {
    return U || (U = !g, Tn(), Se.list().forEach(([$, C]) => g ? C(g) : $()), Se.reset()), g;
  }
  function ct(g, $, C, V) {
    const { scrollBehavior: Y } = e;
    if (!ot || !Y)
      return Promise.resolve();
    const re = !C && mf(Di(g.fullPath, 0)) || (V || !C) && history.state && history.state.scroll || null;
    return ps().then(() => Y(g, $, re)).then((a) => a && pf(a)).catch((a) => B(a, g, $));
  }
  const We = (g) => r.go(g);
  let Pe;
  const at = /* @__PURE__ */ new Set(), Rn = {
    currentRoute: c,
    listening: !0,
    addRoute: _,
    removeRoute: x,
    hasRoute: j,
    getRoutes: T,
    resolve: I,
    options: e,
    push: oe,
    replace: M,
    go: We,
    back: () => We(-1),
    forward: () => We(1),
    beforeEach: i.add,
    beforeResolve: s.add,
    afterEach: l.add,
    onError: pe.add,
    isReady: Ie,
    install(g) {
      const $ = this;
      g.component("RouterLink", lr), g.component("RouterView", _l), g.config.globalProperties.$router = $, Object.defineProperty(g.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Te(c)
      }), ot && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Pe && c.value === dt && (Pe = !0, oe(r.location).catch((Y) => {
        ({}).NODE_ENV !== "production" && J("Unexpected error when starting the router:", Y);
      }));
      const C = {};
      for (const Y in dt)
        Object.defineProperty(C, Y, {
          get: () => c.value[Y],
          enumerable: !0
        });
      g.provide(kr, $), g.provide(gl, is(C)), g.provide(sr, c);
      const V = g.unmount;
      at.add(g), g.unmount = function() {
        at.delete(g), at.size < 1 && (f = dt, Ke && Ke(), Ke = null, c.value = dt, Pe = !1, U = !1), V();
      }, {}.NODE_ENV !== "production" && ot && ud(g, $, t);
    }
  };
  function ut(g) {
    return g.reduce(($, C) => $.then(() => we(C)), Promise.resolve());
  }
  return Rn;
}
function vd(e, t) {
  const n = [], o = [], r = [], i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((f) => wt(f, l)) ? o.push(l) : n.push(l));
    const c = e.matched[s];
    c && (t.matched.find((f) => wt(f, c)) || r.push(c));
  }
  return [n, o, r];
}
const ar = "MyQNavEvent", lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, yd = {
  data() {
    return {};
  },
  methods: {
    onNavChange(e) {
      setTimeout(() => {
        const t = this.$route, n = e == null ? void 0 : e.fullPath;
        if (typeof n != "string")
          return;
        n === t.fullPath || this.$router.push(n);
      }, 0);
    },
    onAppDataChange() {
      console.log("App 2 onAppDataChange!");
    }
  },
  mounted() {
    var e, t;
    (e = window.eventBus) == null || e.subscribe(ar, this.onNavChange), (t = window.eventBus) == null || t.subscribe("appDataChange", this.onAppDataChange);
  },
  beforeUnmount() {
    var e, t;
    (e = window.eventBus) == null || e.unsubscribe(ar, this.onNavChange), (t = window.eventBus) == null || t.unsubscribe("appDataChange", this.onAppDataChange);
  }
};
function bd(e, t, n, o, r, i) {
  return $e(), Me("span");
}
const Nd = /* @__PURE__ */ lt(yd, [["render", bd]]), wd = (e) => (ws("data-v-a47c673d"), e = e(), Os(), e), Od = { class: "greetings" }, xd = { class: "green" }, Dd = /* @__PURE__ */ wd(() => /* @__PURE__ */ q("h3", null, [
  /* @__PURE__ */ G(" You’ve successfully created a project with "),
  /* @__PURE__ */ q("a", {
    href: "https://vitejs.dev/",
    target: "_blank",
    rel: "noopener"
  }, "Vite"),
  /* @__PURE__ */ G(" + "),
  /* @__PURE__ */ q("a", {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener"
  }, "Vue 3"),
  /* @__PURE__ */ G(". What's next? ")
], -1)), $d = /* @__PURE__ */ In({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    return (t, n) => ($e(), Me("div", Od, [
      q("h1", xd, Hl(t.msg), 1),
      Dd
    ]));
  }
});
const Cd = /* @__PURE__ */ lt($d, [["__scopeId", "data-v-a47c673d"]]);
const Vd = {}, Sd = { class: "item" }, Id = { class: "details" };
function Pd(e, t) {
  return $e(), Me("div", Sd, [
    q("i", null, [
      Co(e.$slots, "icon", {}, void 0, !0)
    ]),
    q("div", Id, [
      q("h3", null, [
        Co(e.$slots, "heading", {}, void 0, !0)
      ]),
      Co(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const an = /* @__PURE__ */ lt(Vd, [["render", Pd], ["__scopeId", "data-v-fd0742eb"]]), Td = {}, Rd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
}, Ad = /* @__PURE__ */ q("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1), Md = [
  Ad
];
function kd(e, t) {
  return $e(), Me("svg", Rd, Md);
}
const jd = /* @__PURE__ */ lt(Td, [["render", kd]]), zd = {}, Ld = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
}, Hd = /* @__PURE__ */ q("path", {
  d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
  fill: "currentColor"
}, null, -1), Fd = [
  Hd
];
function Ud(e, t) {
  return $e(), Me("svg", Ld, Fd);
}
const Bd = /* @__PURE__ */ lt(zd, [["render", Ud]]), Kd = {}, Wd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
}, qd = /* @__PURE__ */ q("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1), Yd = [
  qd
];
function Gd(e, t) {
  return $e(), Me("svg", Wd, Yd);
}
const Jd = /* @__PURE__ */ lt(Kd, [["render", Gd]]), Qd = {}, Xd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, Zd = /* @__PURE__ */ q("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1), ep = [
  Zd
];
function tp(e, t) {
  return $e(), Me("svg", Xd, ep);
}
const np = /* @__PURE__ */ lt(Qd, [["render", tp]]), op = {}, rp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
}, ip = /* @__PURE__ */ q("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1), sp = [
  ip
];
function lp(e, t) {
  return $e(), Me("svg", rp, sp);
}
const cp = /* @__PURE__ */ lt(op, [["render", lp]]), ap = /* @__PURE__ */ q("a", {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "official documentation", -1), up = /* @__PURE__ */ q("a", {
  href: "https://vitejs.dev/guide/features.html",
  target: "_blank",
  rel: "noopener"
}, "Vite", -1), fp = /* @__PURE__ */ q("a", {
  href: "https://code.visualstudio.com/",
  target: "_blank",
  rel: "noopener"
}, "VSCode", -1), dp = /* @__PURE__ */ q("a", {
  href: "https://github.com/johnsoncodehk/volar",
  target: "_blank",
  rel: "noopener"
}, "Volar", -1), pp = /* @__PURE__ */ q("a", {
  href: "https://www.cypress.io/",
  target: "_blank",
  rel: "noopener"
}, "Cypress", -1), hp = /* @__PURE__ */ q("a", {
  href: "https://on.cypress.io/component",
  target: "_blank"
}, "Cypress Component Testing", -1), mp = /* @__PURE__ */ q("br", null, null, -1), gp = /* @__PURE__ */ q("code", null, "README.md", -1), _p = /* @__PURE__ */ q("a", {
  href: "https://pinia.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Pinia", -1), Ep = /* @__PURE__ */ q("a", {
  href: "https://router.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Router", -1), vp = /* @__PURE__ */ q("a", {
  href: "https://test-utils.vuejs.org/",
  target: "_blank",
  rel: "noopener"
}, "Vue Test Utils", -1), yp = /* @__PURE__ */ q("a", {
  href: "https://github.com/vuejs/devtools",
  target: "_blank",
  rel: "noopener"
}, "Vue Dev Tools", -1), bp = /* @__PURE__ */ q("a", {
  href: "https://github.com/vuejs/awesome-vue",
  target: "_blank",
  rel: "noopener"
}, "Awesome Vue", -1), Np = /* @__PURE__ */ q("a", {
  href: "https://chat.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "Vue Land", -1), wp = /* @__PURE__ */ q("a", {
  href: "https://stackoverflow.com/questions/tagged/vue.js",
  target: "_blank",
  rel: "noopener"
}, "StackOverflow", -1), Op = /* @__PURE__ */ q("a", {
  href: "https://news.vuejs.org",
  target: "_blank",
  rel: "noopener"
}, "our mailing list", -1), xp = /* @__PURE__ */ q("a", {
  href: "https://twitter.com/vuejs",
  target: "_blank",
  rel: "noopener"
}, "@vuejs", -1), Dp = /* @__PURE__ */ q("a", {
  href: "https://vuejs.org/sponsor/",
  target: "_blank",
  rel: "noopener"
}, "becoming a sponsor", -1), $p = /* @__PURE__ */ In({
  __name: "TheWelcome",
  setup(e) {
    return (t, n) => ($e(), Me(De, null, [
      X(an, null, {
        icon: ae(() => [
          X(jd)
        ]),
        heading: ae(() => [
          G("Documentation")
        ]),
        default: ae(() => [
          G(" Vue’s "),
          ap,
          G(" provides you with all information you need to get started. ")
        ]),
        _: 1
      }),
      X(an, null, {
        icon: ae(() => [
          X(Bd)
        ]),
        heading: ae(() => [
          G("Tooling")
        ]),
        default: ae(() => [
          G(" This project is served and bundled with "),
          up,
          G(". The recommended IDE setup is "),
          fp,
          G(" + "),
          dp,
          G(". If you need to test your components and web pages, check out "),
          pp,
          G(" and "),
          hp,
          G(". "),
          mp,
          G(" More instructions are available in "),
          gp,
          G(". ")
        ]),
        _: 1
      }),
      X(an, null, {
        icon: ae(() => [
          X(Jd)
        ]),
        heading: ae(() => [
          G("Ecosystem")
        ]),
        default: ae(() => [
          G(" Get official tools and libraries for your project: "),
          _p,
          G(", "),
          Ep,
          G(", "),
          vp,
          G(", and "),
          yp,
          G(". If you need more resources, we suggest paying "),
          bp,
          G(" a visit. ")
        ]),
        _: 1
      }),
      X(an, null, {
        icon: ae(() => [
          X(np)
        ]),
        heading: ae(() => [
          G("Community")
        ]),
        default: ae(() => [
          G(" Got stuck? Ask your question on "),
          Np,
          G(", our official Discord server, or "),
          wp,
          G(". You should also subscribe to "),
          Op,
          G(" and follow the official "),
          xp,
          G(" twitter account for latest news in the Vue world. ")
        ]),
        _: 1
      }),
      X(an, null, {
        icon: ae(() => [
          X(cp)
        ]),
        heading: ae(() => [
          G("Support Vue")
        ]),
        default: ae(() => [
          G(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),
          Dp,
          G(". ")
        ]),
        _: 1
      })
    ], 64));
  }
}), Cp = /* @__PURE__ */ In({
  __name: "HomeView",
  setup(e) {
    return (t, n) => ($e(), Me("main", null, [
      X($p)
    ]));
  }
}), vn = "/microAppTwo";
function Vp() {
  const e = Ed({
    history: vf("/"),
    routes: [
      {
        path: `${vn}/`,
        name: "home",
        component: Cp
      },
      {
        path: `${vn}/about`,
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("./AboutView-9fa61b31.js")
      },
      {
        path: "/:pathMatch(.*)*",
        name: "wildcard",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("./AboutView-9fa61b31.js")
      }
    ]
  });
  return e.afterEach((t, n) => {
    var o;
    (o = window.eventBus) == null || o.emit(ar, { fullPath: t.fullPath });
  }), e;
}
const Sp = (e) => (ws("data-v-3004ae6f"), e = e(), Os(), e), Ip = {
  key: 0,
  span: ""
}, Pp = /* @__PURE__ */ Sp(() => /* @__PURE__ */ q("img", {
  alt: "Vue logo",
  class: "logo",
  src: tf,
  width: "125",
  height: "125"
}, null, -1)), Tp = { class: "wrapper" }, Rp = { key: 1 }, Ap = {
  __name: "App",
  setup(e) {
    Re(() => vn);
    const t = yr(!0);
    return Vs(() => {
      t.value = !1;
    }), (n, o) => t.value ? ($e(), Me("span", Ip, [
      q("header", null, [
        Pp,
        q("div", Tp, [
          X(Cd, { msg: "You did it!" }),
          q("nav", null, [
            X(Te(lr), {
              to: `${Te(vn)}/`
            }, {
              default: ae(() => [
                G("Home")
              ]),
              _: 1
            }, 8, ["to"]),
            X(Te(lr), {
              to: `${Te(vn)}/about`
            }, {
              default: ae(() => [
                G("About")
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ])
      ]),
      X(Te(_l)),
      X(Nd)
    ])) : ($e(), Me("span", Rp));
  }
}, Mp = /* @__PURE__ */ lt(Ap, [["__scopeId", "data-v-3004ae6f"]]);
function kp(e) {
  const t = wu(Mp);
  return t.use(ef()), t.use(Vp()), t.mount(`#${e}`), t;
}
export {
  lt as _,
  q as a,
  Me as c,
  kp as m,
  $e as o
};
