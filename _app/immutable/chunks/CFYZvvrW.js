import{z as $,L as I,A,h as k,B as b}from"./Br-Xs1lk.js";import{b as z,c as N,d as M,n as q,e as C}from"./BiGhoFAz.js";function D(s,i){if(i){const o=document.body;s.autofocus=!0,$(()=>{document.activeElement===o&&s.focus()})}}function G(s,i,o,u){var _=s.__attributes??(s.__attributes={});k&&(_[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||_[i]!==(_[i]=o)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[I]=o),o==null?s.removeAttribute(i):typeof o!="string"&&w(s).includes(i)?s[i]=o:s.setAttribute(i,o))}function S(s,i,o,u,_=!1,l=!1,K=!1){var a=i||{},O=s.tagName==="OPTION";for(var p in i)p in o||(o[p]=null);o.class=o.class?o.class+" "+u:u;var T=w(s),B=s.__attributes??(s.__attributes={}),d=[];for(const r in o){let f=o[r];if(O&&r==="value"&&f==null){s.value=s.__value="",a[r]=f;continue}var y=a[r];if(f!==y){a[r]=f;var g=r[0]+r[1];if(g!=="$$"){if(g==="on"){const n={},v="$$"+r;let t=r.slice(2);var e=C(t);if(z(t)&&(t=t.slice(0,-7),n.capture=!0),!e&&y){if(f!=null)continue;s.removeEventListener(t,a[v],n),a[v]=null}if(f!=null)if(e)s[`__${t}`]=f,M([t]);else{let h=function(E){a[r].call(this,E)};i?a[v]=N(t,s,h,n):d.push([r,f,()=>a[v]=N(t,s,h,n)])}}else if(r==="style"&&f!=null)s.style.cssText=f+"";else if(r==="autofocus")D(s,!!f);else if(r==="__value"||r==="value"&&f!=null)s.value=s[r]=s.__value=f;else{var c=r;_||(c=q(c)),f==null&&!l?(B[r]=null,s.removeAttribute(r)):T.includes(c)&&(l||typeof f!="string")?s[c]=f:typeof f!="function"&&(k&&(c==="src"||c==="href"||c==="srcset")||G(s,c,f))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return i||$(()=>{if(s.isConnected)for(const[r,f,n]of d)a[r]===f&&n()}),a}var L=new Map;function w(s){var i=L.get(s.nodeName);if(i)return i;L.set(s.nodeName,i=[]);for(var o,u=A(s),_=Element.prototype;_!==u;){o=b(u);for(var l in o)o[l].set&&i.push(l);u=A(u)}return i}export{S as a,G as s};
