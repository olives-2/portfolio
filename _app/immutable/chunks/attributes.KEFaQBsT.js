import{a2 as L,B as e,C as I,a3 as z,z as k,a4 as C}from"./runtime.C4R5TeIz.js";import{i as M,c as $,d as q,n as D,a as G}from"./utils.B_8I8rzz.js";function K(s,i){if(i){const r=document.body;s.autofocus=!0,L(()=>{document.activeElement===r&&s.focus()})}}function Y(s,i,r,t,_){var a;e&&I();var u=(a=i.$$slots)==null?void 0:a[r],d=!1;u===!0&&(u=i[r==="default"?"children":r],d=!0),u===void 0||u(s,d?()=>t:t)}function P(s,i,r,t){var _=s.__attributes??(s.__attributes={});e&&(_[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||_[i]!==(_[i]=r)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[z]=r),r==null?s.removeAttribute(i):typeof r!="string"&&O(s).includes(i)?s[i]=r:s.setAttribute(i,r))}function j(s,i,r,t,_=!1,u=!1,d=!1){var a=i||{},T=s.tagName==="OPTION";for(var y in i)y in r||(r[y]=null);r.class=r.class?r.class+" "+t:t;var b=O(s),B=s.__attributes??(s.__attributes={}),p=[];for(const f in r){let o=r[f];if(T&&f==="value"&&o==null){s.value=s.__value="",a[f]=o;continue}var g=a[f];if(o!==g){a[f]=o;var h=f[0]+f[1];if(h!=="$$"){if(h==="on"){const l={},v="$$"+f;let c=f.slice(2);var N=G(c);if(M(c)&&(c=c.slice(0,-7),l.capture=!0),!N&&g){if(o!=null)continue;s.removeEventListener(c,a[v],l),a[v]=null}if(o!=null)if(N)s[`__${c}`]=o,q([c]);else{let A=function(E){a[f].call(this,E)};i?a[v]=$(c,s,A,l):p.push([f,o,()=>a[v]=$(c,s,A,l)])}}else if(f==="style"&&o!=null)s.style.cssText=o+"";else if(f==="autofocus")K(s,!!o);else if(f==="__value"||f==="value"&&o!=null)s.value=s[f]=s.__value=o;else{var n=f;_||(n=D(n)),o==null&&!u?(B[f]=null,s.removeAttribute(f)):b.includes(n)&&(u||typeof o!="string")?s[n]=o:typeof o!="function"&&(e&&(n==="src"||n==="href"||n==="srcset")||P(s,n,o))}f==="style"&&"__styles"in s&&(s.__styles={})}}}return i||L(()=>{if(s.isConnected)for(const[f,o,l]of p)a[f]===o&&l()}),a}var w=new Map;function O(s){var i=w.get(s.nodeName);if(i)return i;w.set(s.nodeName,i=[]);for(var r,t=k(s),_=Element.prototype;_!==t;){r=C(t);for(var u in r)r[u].set&&i.push(u);t=k(t)}return i}export{Y as a,j as b,P as s};
