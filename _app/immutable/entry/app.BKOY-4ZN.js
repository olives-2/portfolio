const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CCK5OQtU.js","../chunks/disclose-version.CQa56OdH.js","../chunks/runtime.B2jZvQBZ.js","../chunks/legacy.DwjJgXDG.js","../chunks/paths.K2KA4RkI.js","../chunks/attributes.Cz4MMmaI.js","../assets/0.Biofl4L2.css","../nodes/1.DdiavEfz.js","../chunks/store.CXp99znK.js","../chunks/entry.C_CHN2vg.js","../nodes/2.CfMCDj5d.js","../nodes/3.CwtPKht8.js"])))=>i.map(i=>d[i]);
var ee=t=>{throw TypeError(t)};var te=(t,e,i)=>e.has(t)||ee("Cannot "+i);var E=(t,e,i)=>(te(t,e,"read from private field"),i?i.call(t):e.get(t)),K=(t,e,i)=>e.has(t)?ee("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),M=(t,e,i,_)=>(te(t,e,"write to private field"),_?_.call(t,i):e.set(t,i),i);import{Y as F,Z as ge,_ as ye,$ as A,a0 as be,X as w,a1 as P,a2 as U,j as g,y as Q,a3 as Ee,g as Pe,E as we,h as N,z as le,a4 as oe,a5 as Re,a6 as Se,A as Ie,K as re,a7 as ae,S as $,a8 as p,w as ce,a9 as de,aa as Oe,ab as Ae,f as V,ac as Te,ad as xe,ae as Le,af as De,ag as ke,ah as Ne,ai as Ce,D as ne,aj as qe,ak as _e,al as Be,am as je,m as C,an as Fe,ao as Ue,W as ve,ap as Ve,B as Ye,d as Z,b as he,p as Ke,u as Me,n as B,o as Ze,aq as ze,s as He,ar as z,c as We,t as Ge,r as Xe}from"../chunks/runtime.B2jZvQBZ.js";import{c as Je,h as Qe,m as $e,u as pe,a as et}from"../chunks/store.CXp99znK.js";import{a as k,t as me,c as H,d as tt}from"../chunks/disclose-version.CQa56OdH.js";function x(t,e=null,i){if(typeof t!="object"||t===null||F in t)return t;const _=Pe(t);if(_!==ge&&_!==ye)return t;var n=new Map,l=we(t),f=A(0);l&&n.set("length",A(t.length));var s;return new Proxy(t,{defineProperty(u,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&be();var o=n.get(r);return o===void 0?(o=A(a.value),n.set(r,o)):w(o,x(a.value,s)),!0},deleteProperty(u,r){var a=n.get(r);if(a===void 0)r in u&&n.set(r,A(P));else{if(l&&typeof r=="string"){var o=n.get("length"),d=Number(r);Number.isInteger(d)&&d<o.v&&w(o,d)}w(a,P),se(f)}return!0},get(u,r,a){var v;if(r===F)return t;var o=n.get(r),d=r in u;if(o===void 0&&(!d||(v=U(u,r))!=null&&v.writable)&&(o=A(x(d?u[r]:P,s)),n.set(r,o)),o!==void 0){var c=g(o);return c===P?void 0:c}return Reflect.get(u,r,a)},getOwnPropertyDescriptor(u,r){var a=Reflect.getOwnPropertyDescriptor(u,r);if(a&&"value"in a){var o=n.get(r);o&&(a.value=g(o))}else if(a===void 0){var d=n.get(r),c=d==null?void 0:d.v;if(d!==void 0&&c!==P)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return a},has(u,r){var c;if(r===F)return!0;var a=n.get(r),o=a!==void 0&&a.v!==P||Reflect.has(u,r);if(a!==void 0||Q!==null&&(!o||(c=U(u,r))!=null&&c.writable)){a===void 0&&(a=A(o?x(u[r],s):P),n.set(r,a));var d=g(a);if(d===P)return!1}return o},set(u,r,a,o){var L;var d=n.get(r),c=r in u;if(l&&r==="length")for(var v=a;v<d.v;v+=1){var h=n.get(v+"");h!==void 0?w(h,P):v in u&&(h=A(P),n.set(v+"",h))}d===void 0?(!c||(L=U(u,r))!=null&&L.writable)&&(d=A(void 0),w(d,x(a,s)),n.set(r,d)):(c=d.v!==P,w(d,x(a,s)));var b=Reflect.getOwnPropertyDescriptor(u,r);if(b!=null&&b.set&&b.set.call(o,a),!c){if(l&&typeof r=="string"){var O=n.get("length"),m=Number(r);Number.isInteger(m)&&m>=O.v&&w(O,m+1)}se(f)}return!0},ownKeys(u){g(f);var r=Reflect.ownKeys(u).filter(d=>{var c=n.get(d);return c===void 0||c.v!==P});for(var[a,o]of n)o.v!==P&&!(a in u)&&r.push(a);return r},setPrototypeOf(){Ee()}})}function se(t,e=1){w(t,t.v+e)}function rt(t){throw new Error("lifecycle_outside_component")}function W(t,e,i,_=null,n=!1){N&&le();var l=t,f=null,s=null,u=null,r=n?de:0;oe(()=>{if(u===(u=!!e()))return;let a=!1;if(N){const o=l.data===Re;u===o&&(l=Se(),Ie(l),re(!1),a=!0)}u?(f?ae(f):f=$(()=>i(l)),s&&p(s,()=>{s=null})):(s?ae(s):_&&(s=$(()=>_(l))),f&&p(f,()=>{f=null})),a&&re(!0)},r),N&&(l=ce)}function G(t,e,i){N&&le();var _=t,n,l;oe(()=>{n!==(n=e())&&(l&&(p(l),l=null),n&&(l=$(()=>i(_,n))))},de),N&&(_=ce)}function ie(t,e){return t===e||(t==null?void 0:t[F])===e}function X(t={},e,i,_){return Oe(()=>{var n,l;return Ae(()=>{n=l,l=[],V(()=>{t!==i(...l)&&(e(t,...l),n&&ie(i(...n),t)&&e(null,...n))})}),()=>{Te(()=>{l&&ie(i(...l),t)&&e(null,...l)})}}),t}function fe(t){for(var e=Q,i=Q;e!==null&&!(e.f&(Ne|Ce));)e=e.parent;try{return ne(e),t()}finally{ne(i)}}function J(t,e,i,_){var q;var n=(i&qe)!==0,l=!_e||(i&Be)!==0,f=(i&je)!==0,s=(i&Ue)!==0,u=!1,r;f?[r,u]=Je(()=>t[e]):r=t[e];var a=(q=U(t,e))==null?void 0:q.set,o=_,d=!0,c=!1,v=()=>(c=!0,d&&(d=!1,s?o=V(_):o=_),o);r===void 0&&_!==void 0&&(a&&l&&xe(),r=v(),a&&a(r));var h;if(l)h=()=>{var y=t[e];return y===void 0?v():(d=!0,c=!1,y)};else{var b=fe(()=>(n?C:Fe)(()=>t[e]));b.f|=Le,h=()=>{var y=g(b);return y!==void 0&&(o=void 0),y===void 0?o:y}}if(!(i&De))return h;if(a){var O=t.$$legacy;return function(y,S){return arguments.length>0?((!l||!S||O||u)&&a(S?h():y),y):h()}}var m=!1,L=!1,D=ve(r),T=fe(()=>C(()=>{var y=h(),S=g(D);return m?(m=!1,L=!0,S):(L=!1,D.v=y)}));return n||(T.equals=ke),function(y,S){if(arguments.length>0){const Y=S?g(T):l&&f?x(y):y;return T.equals(Y)||(m=!0,w(D,Y),c&&o!==void 0&&(o=Y),V(()=>g(T))),y}return g(T)}}function at(t){return class extends nt{constructor(e){super({component:t,...e})}}}var I,R;class nt{constructor(e){K(this,I);K(this,R);var l;var i=new Map,_=(f,s)=>{var u=ve(s);return i.set(f,u),u};const n=new Proxy({...e.props||{},$$events:{}},{get(f,s){return g(i.get(s)??_(s,Reflect.get(f,s)))},has(f,s){return g(i.get(s)??_(s,Reflect.get(f,s))),Reflect.has(f,s)},set(f,s,u){return w(i.get(s)??_(s,u),u),Reflect.set(f,s,u)}});M(this,R,(e.hydrate?Qe:$e)(e.component,{target:e.target,anchor:e.anchor,props:n,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((l=e==null?void 0:e.props)!=null&&l.$$host)||e.sync===!1)&&Ve(),M(this,I,n.$$events);for(const f of Object.keys(E(this,R)))f==="$set"||f==="$destroy"||f==="$on"||Ye(this,f,{get(){return E(this,R)[f]},set(s){E(this,R)[f]=s},enumerable:!0});E(this,R).$set=f=>{Object.assign(n,f)},E(this,R).$destroy=()=>{pe(E(this,R))}}$set(e){E(this,R).$set(e)}$on(e,i){E(this,I)[e]=E(this,I)[e]||[];const _=(...n)=>i.call(this,...n);return E(this,I)[e].push(_),()=>{E(this,I)[e]=E(this,I)[e].filter(n=>n!==_)}}$destroy(){E(this,R).$destroy()}}I=new WeakMap,R=new WeakMap;function st(t){Z===null&&rt(),_e&&Z.l!==null?it(Z).m.push(t):he(()=>{const e=V(t);if(typeof e=="function")return e})}function it(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const ft="modulepreload",ut=function(t,e){return new URL(t,e).href},ue={},j=function(e,i,_){let n=Promise.resolve();if(i&&i.length>0){const f=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(i.map(r=>{if(r=ut(r,_),r in ue)return;ue[r]=!0;const a=r.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!_)for(let v=f.length-1;v>=0;v--){const h=f[v];if(h.href===r&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":ft,a||(c.as="script"),c.crossOrigin="",c.href=r,u&&c.setAttribute("nonce",u),document.head.appendChild(c),a)return new Promise((v,h)=>{c.addEventListener("load",v),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function l(f){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=f,window.dispatchEvent(s),!s.defaultPrevented)throw f}return n.then(f=>{for(const s of f||[])s.status==="rejected"&&l(s.reason);return e().catch(l)})},mt={};var lt=me('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ot=me("<!> <!>",1);function ct(t,e){Ke(e,!0);let i=J(e,"components",23,()=>[]),_=J(e,"data_0",3,null),n=J(e,"data_1",3,null);Me(()=>e.stores.page.set(e.page)),he(()=>{e.stores,e.page,e.constructors,i(),e.form,_(),n(),e.stores.page.notify()});let l=z(!1),f=z(!1),s=z(null);st(()=>{const d=e.stores.page.subscribe(()=>{g(l)&&(w(f,!0),ze().then(()=>{w(s,x(document.title||"untitled page"))}))});return w(l,!0),d});const u=C(()=>e.constructors[1]);var r=ot(),a=B(r);W(a,()=>e.constructors[1],d=>{var c=H();const v=C(()=>e.constructors[0]);var h=B(c);G(h,()=>g(v),(b,O)=>{X(O(b,{get data(){return _()},get form(){return e.form},children:(m,L)=>{var D=H(),T=B(D);G(T,()=>g(u),(q,y)=>{X(y(q,{get data(){return n()},get form(){return e.form}}),S=>i()[1]=S,()=>{var S;return(S=i())==null?void 0:S[1]})}),k(m,D)},$$slots:{default:!0}}),m=>i()[0]=m,()=>{var m;return(m=i())==null?void 0:m[0]})}),k(d,c)},d=>{var c=H();const v=C(()=>e.constructors[0]);var h=B(c);G(h,()=>g(v),(b,O)=>{X(O(b,{get data(){return _()},get form(){return e.form}}),m=>i()[0]=m,()=>{var m;return(m=i())==null?void 0:m[0]})}),k(d,c)});var o=He(a,2);W(o,()=>g(l),d=>{var c=lt(),v=We(c);W(v,()=>g(f),h=>{var b=tt();Ge(()=>et(b,g(s))),k(h,b)}),Xe(c),k(d,c)}),k(t,r),Ze()}const gt=at(ct),yt=[()=>j(()=>import("../nodes/0.CCK5OQtU.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>j(()=>import("../nodes/1.DdiavEfz.js"),__vite__mapDeps([7,1,2,3,8,9,4]),import.meta.url),()=>j(()=>import("../nodes/2.CfMCDj5d.js"),__vite__mapDeps([10,1,2,3,5]),import.meta.url),()=>j(()=>import("../nodes/3.CwtPKht8.js"),__vite__mapDeps([11,1,2,3]),import.meta.url)],bt=[],Et={"/":[2],"/retex/odomo":[3]},Pt={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{Et as dictionary,Pt as hooks,mt as matchers,yt as nodes,gt as root,bt as server_loads};