import{i as m,g as H,H as L,f as O,j as p,k as c,l as E,m as I,e as l,o as Y,p as j,q as k,t as C,u as M,v as S,w as V,a as $,x as q,h as w,y as z,z as P,A as W}from"./BWKL-nc7.js";import{a as B,r as A,h,i as F}from"./DEkgK5rZ.js";import{b as G}from"./DKIKTBuC.js";let N=!0;function X(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function J(t,e){return b(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const r=e.target,u=w,_=l;try{for(var a=H(r);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw p;c(!0),E(a),I();const i=b(t,{...e,anchor:a});if(l===null||l.nodeType!==8||l.data!==Y)throw j(),p;return c(!1),i}catch(i){if(i===p)return e.recover===!1&&k(),m(),C(r),c(!1),J(t,e);throw i}finally{c(u),E(_)}}const d=new Map;function b(t,{target:e,anchor:r,props:u={},events:_,context:a,intro:i=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=F(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};y(M(B)),A.add(y);var g=void 0,D=S(()=>{var o=r??e.appendChild(V());return $(()=>{if(a){q({});var s=W;s.c=a}_&&(u.$$events=_),w&&G(o,null),N=i,g=t(o,u)||{},N=!0,w&&(z.nodes_end=l),a&&P()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}A.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(g,D),g}let R=new WeakMap;function x(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{N as a,Z as h,J as m,X as s,x as u};
