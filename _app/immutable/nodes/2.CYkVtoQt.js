import{a as S,t as P,d as be}from"../chunks/CCOf-wgS.js";import"../chunks/DI1snOsG.js";import{q as he,G as ge,h as z,f as K,a as xe,g as _e,U as ye,o as le,a5 as we,a6 as ee,e as W,j as H,k as ke,aC as F,a2 as oe,t as ce,a3 as Ce,v as te,aD as ze,aE as Ie,n as Se,aF as Te,I as Ee,S as Le,ai as Me,Y as ae,aG as Pe,aH as Ae,aI as Ne,b as De,ao as Re,F as je,at as G,s as h,c as x,r as g,u as de,am as fe,w as ve,M as V,y as qe}from"../chunks/Bo00ZVvQ.js";import{s as B,a as Be}from"../chunks/BR2p0LBI.js";import{i as ue,h as Ge}from"../chunks/Y1dG5hg7.js";import{b as O}from"../chunks/aXKQfXxd.js";import{s as X}from"../chunks/D8_1yaoI.js";import{l as se,p as L,i as He}from"../chunks/B4vf8nWE.js";import{s as ne}from"../chunks/pUrA9JF4.js";function Oe(a,e){return e}function Ue(a,e,t,s){for(var c=[],d=e.length,o=0;o<d;o++)Ie(e[o].e,c,!0);var v=d>0&&c.length===0&&t!==null;if(v){var m=t.parentNode;Se(m),m.append(t),s.clear(),I(a,e[0].prev,e[d-1].next)}Te(c,()=>{for(var b=0;b<d;b++){var n=e[b];v||(s.delete(n.k),I(a,n.prev,n.next)),Ee(n.e,!v)}})}function Je(a,e,t,s,c,d=null){var o=a,v={flags:e,items:new Map,first:null};{var m=a;o=z?K(_e(m)):m.appendChild(he())}z&&xe();var b=null,n=!1;ge(()=>{var p=t(),f=ye(p)?p:p==null?[]:le(p),i=f.length;if(n&&i===0)return;n=i===0;let _=!1;if(z){var w=o.data===we;w!==(i===0)&&(o=ee(),K(o),W(!1),_=!0)}if(z){for(var k=null,u,r=0;r<i;r++){if(H.nodeType===8&&H.data===ke){o=H,_=!0,W(!1);break}var l=f[r],y=s(l,r);u=pe(H,v,k,null,l,y,r,c,e),v.items.set(y,u),k=u}i>0&&K(ee())}if(!z){var C=Le;Qe(f,v,o,c,e,(C.f&F)!==0,s)}d!==null&&(i===0?b?oe(b):b=ce(()=>d(o)):b!==null&&Ce(b,()=>{b=null})),_&&W(!0),t()}),z&&(o=H)}function Qe(a,e,t,s,c,d,o){var v=a.length,m=e.items,b=e.first,n=b,p,f=null,i=[],_=[],w,k,u,r;for(r=0;r<v;r+=1){if(w=a[r],k=o(w,r),u=m.get(k),u===void 0){var l=n?n.e.nodes_start:t;f=pe(l,e,f,f===null?e.first:f.next,w,k,r,s,c),m.set(k,f),i=[],_=[],n=f.next;continue}if(Ve(u,w,r),u.e.f&F&&oe(u.e),u!==n){if(p!==void 0&&p.has(u)){if(i.length<_.length){var y=_[0],C;f=y.prev;var T=i[0],A=i[i.length-1];for(C=0;C<i.length;C+=1)ie(i[C],y,t);for(C=0;C<_.length;C+=1)p.delete(_[C]);I(e,T.prev,A.next),I(e,f,T),I(e,A,y),n=y,f=A,r-=1,i=[],_=[]}else p.delete(u),ie(u,n,t),I(e,u.prev,u.next),I(e,u,f===null?e.first:f.next),I(e,f,u),f=u;continue}for(i=[],_=[];n!==null&&n.k!==k;)(d||!(n.e.f&F))&&(p??(p=new Set)).add(n),_.push(n),n=n.next;if(n===null)continue;u=n}i.push(u),f=u,n=u.next}if(n!==null||p!==void 0){for(var N=p===void 0?[]:le(p);n!==null;)(d||!(n.e.f&F))&&N.push(n),n=n.next;var E=N.length;if(E>0){var D=v===0?t:null;Ue(e,N,D,m)}}te.first=e.first&&e.first.e,te.last=f&&f.e}function Ve(a,e,t,s){ze(a.v,e),a.i=t}function pe(a,e,t,s,c,d,o,v,m){var b=(m&Ae)!==0,n=(m&Ne)===0,p=b?n?Me(c):ae(c):c,f=m&Pe?ae(o):o,i={i:f,v:p,k:d,a:null,e:null,prev:t,next:s};try{return i.e=ce(()=>v(a,p,f),z),i.e.prev=t&&t.e,i.e.next=s&&s.e,t===null?e.first=i:(t.next=i,t.e.next=i.e),s!==null&&(s.prev=i,s.e.prev=i.e),i}finally{}}function ie(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,c=e?e.e.nodes_start:t,d=a.e.nodes_start;d!==s;){var o=De(d);c.before(d),d=o}}function I(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ye(a,e,t){Re(()=>{var s=je(()=>e(a,t==null?void 0:t())||{});if(s!=null&&s.destroy)return()=>s.destroy()})}function re(a,e){var t=a.__className,s=Fe(e);z&&a.className===s?a.__className=s:(t!==s||z&&a.className!==s)&&(e==null?a.removeAttribute("class"):a.className=s,a.__className=s)}function Fe(a){return a??""}function M(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}var Xe=P('<a class="flex flex-col justify-center items-center rounded-2xl p-4 relative z-10 overflow-hidden shadow-sm w-4/12 h-4/12 border-2 border-slate-400 hover:border-white transition-all svelte-1ubr0hi"><span id="color-layer" class="absolute opacity-0 bg-red-400 w-full h-full z-30 svelte-1ubr0hi"></span> <img class="absolute object-fit brightness-50 svelte-1ubr0hi"> <div id="text" class="z-20"><h1 class="text-2xl text-center"> </h1> <h2 class="text-lg max-w-xl text-center"> </h2></div></a>');function Y(a,e){var t=Xe(),s=h(x(t),2),c=h(s,2),d=x(c),o=x(d,!0);g(d);var v=h(d,2),m=x(v,!0);g(v),g(c),g(t),G(()=>{B(t,"href",e.link),B(s,"src",e.img),B(s,"alt",e.title),X(o,e.title),X(m,e.description)}),S(a,t)}var Ze=P('<span class="svelte-8wt3xa"><!></span>'),Ke=P('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function We(a,e){const t=se(e,["children","$$slots","$$events","$$legacy"]),s=se(t,["tip","top","right","bottom","left","active","color"]);de(e,!1);let c=L(e,"tip",8,""),d=L(e,"top",8,!1),o=L(e,"right",8,!1),v=L(e,"bottom",8,!1),m=L(e,"left",8,!1),b=L(e,"active",8,!1),n=L(e,"color",8,"#0f172a"),p=0;const f=r=>{const l=r.querySelector(".tooltip"),y=r.querySelector(".tip");l.style.setProperty("--tooltip-color",n());const C=()=>{A(),l.style.opacity=1,l.style.zIndex="10"},T=()=>{l.style.opacity=0,l.style.zIndex="-1"},A=()=>{const{height:E,width:D}=r.getBoundingClientRect(),{height:U,width:J}=l.getBoundingClientRect();let Z,me,Q,R;d()?(R=-(J/2-D/2),Q=E+12):o()?(R=D+12,Q=Math.abs(E/2-U/2),p=U/2):v()?(R=-(J/2-D/2),Z=E+12):m()?(R=-(J+12),Q=Math.abs(E/2-U/2),p=U/2):(R=-Math.floor(J/2-D/2),Z=Math.floor(E+8),l.style.bottom="unset",l.style.right="unset"),l.style.top=`${Z}px`,l.style.bottom=`${Q}px`,l.style.right=`${me}px`,l.style.left=`${R}px`,y.style.setProperty("--top-gap",`${p-4}px`)},N=new ResizeObserver(A);return N.observe(r),r.addEventListener("mouseover",C),r.addEventListener("mouseout",T),{destroy(){r.removeEventListener("mouseover",C),r.removeEventListener("mouseout",T),N.unobserve(r)}}};ue();var i=Ke(),_=x(i);ne(_,e,"default",{});var w=h(_,2);let k;var u=x(w);He(u,c,r=>{var l=Ze();M(l,"tip",!0);var y=x(l);Ge(y,c),g(l),G(()=>{M(l,"top",d()),M(l,"right",o()),M(l,"bottom",v()),M(l,"left",m())}),S(r,l)},r=>{var l=be(),y=fe(l);ne(y,e,"custom-tip",{}),S(r,l)}),g(w),g(i),Ye(i,r=>f(r)),G(()=>{k=Be(w,k,{...s},"svelte-8wt3xa"),M(w,"tooltip",!0),M(w,"active",b())}),S(a,i),ve()}var $e=P('<a target="_blank"><i></i></a>'),et=P('<div><div class="flex justify-around flex-wrap w-1/8 max-w-64 gap-4"></div> <h2> </h2></div>');function j(a,e){var t=et(),s=x(t);Je(s,21,()=>e.icons,Oe,(o,v)=>{We(o,{get tip(){return V(v).name},top:!0,children:(m,b)=>{var n=$e(),p=x(n);g(n),G(()=>{B(n,"href",V(v).link),B(n,"aria-label",`Lien vers ${V(v).name??""}`),re(p,`${V(v).class??""} tech-icon text-4xl bg-slate-700 p-2 rounded-xl shadow-black hover:bg-slate-500 duration-150 svelte-1bvuwzq`)}),S(m,n)},$$slots:{default:!0}})}),g(s);var c=h(s,2),d=x(c,!0);g(c),g(t),G(()=>{re(t,`${e.bgColor??""} rounded-xl border ${e.borderColor??""} p-4 flex justify-center flex-col items-center gap-2 max-w-96 bg-opacity-50 backdrop-blur-sm svelte-1bvuwzq`),X(d,e.description)}),S(a,t)}var tt=P('<section class="flex my-8 justify-center items-center bg-slate-800 bg-opacity-50 p-2 svelte-1b8oilk"><h1 class="w-1/1 drop-shadow-lg text-5xl p-2 svelte-1b8oilk"> </h1></section>');function $(a,e){var t=tt(),s=x(t),c=x(s,!0);g(s),g(t),G(()=>X(c,e.text)),S(a,t)}const q={webIcons:[{name:"HTML",class:"nf nf-dev-html5"},{name:"CSS",class:"nf nf-dev-css3"},{name:"JavaScript",class:"nf nf-dev-javascript"},{name:"React",class:"nf nf-dev-react",link:"https://fr.react.dev/"},{name:"Svelte",class:"nf nf-seti-svelte",link:"https://svelte.dev/"},{name:"Tailwind",class:"nf nf-md-tailwind",link:"https://tailwindcss.com/"},{name:"PHP",class:"nf nf-dev-php"},{name:"Symfony",class:"nf nf-dev-symfony",link:"https://symfony.com/"}],javaIcons:[{name:"Java",class:"nf nf-dev-java"},{name:"Android Studio",class:"nf nf-dev-android"},{name:"Maven",class:"nf nf-seti-maven"}],dbIcons:[{name:"Bases de données relationnelles (Oracle, Microsoft SQL Server)",class:"nf nf-fa-database"},{name:"Oracle SQL",class:"nf nf-dev-oracle"},{name:"MongoDB",class:"nf nf-dev-mongodb"},{name:"Neo4J",class:"nf nf-dev-neo4j"}],pythonIcons:[{name:"Python",class:"nf nf-dev-python"},{name:"Matplotlib",class:"nf nf-dev-matplotlib"},{name:"Pandas",class:"nf nf-dev-pandas"}],sysIcons:[{name:"C",class:"nf nf-custom-c"},{name:"Linux",class:"nf nf-dev-linux"},{name:"Bash et ZSH",class:"nf nf-cod-terminal_bash"}],deploymentIcons:[{name:"Docker",class:"nf nf-fa-docker"},{name:"Podman",class:"nf nf-dev-podman"},{name:"GitLab CI/CD",class:"nf nf-fa-gitlab"},{name:"Sonarqube",class:"nf nf-dev-sonarqube"}]};var at=P(`<div class="flex justify-center"><div id="presentation" class="flex justify-around items-center backdrop-blur-sm border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 w-11/12"><article class="w-2/4"><h1 class="text-6xl my-5">Matis Olives</h1> <h2 class="text-3xl my-5">Spécialisé dans le développement web et d'applications en POO</h2> <p class="text-xl">Je suis un étudiant d'informatique à l'IUT de Bordeaux-Gradignan. Dans
        cette formation, je réalise des missions me formant à des situations
        réelles du domaine de l'informatique.</p></article> <img alt="Portrait" class="rounded-full w-64 relative drop-shadow-lg"></div></div> <!> <div id="skills"><div class="flex flex-wrap gap-4 justify-center"><!> <!> <!> <!> <!> <!></div></div> <!> <div id="retexes" class="flex flex-col p-2"><div class="flex justify-center flex-wrap gap-2"><!> <!> <!> <!></div></div> <!> <div id="contact" class="flex m-5 justify-center items-center gap-10"><a href="https://www.linkedin.com/in/matis-olives-4b845629a/" aria-label="Lien vers mon LinkedIn" class="w-10"><i class="nf nf-dev-linkedin text-4xl inline-block"></i></a> <a href="mailto:matisolives@gmail.com" aria-label="M'envoyer un mail" class="w-10"><i class="nf nf-cod-mail text-4xl inline-block"></i></a></div>`,1);function vt(a,e){de(e,!1),ue();var t=at(),s=fe(t),c=x(s),d=h(x(c),2);B(d,"src",`${O}/img/me.webp`),g(c),g(s);var o=h(s,2);$(o,{text:"Compétences"});var v=h(o,2),m=x(v),b=x(m);j(b,{description:"Création de sites web pour développement fullstack",get icons(){return q.webIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var n=h(b,2);j(n,{description:"Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données",get icons(){return q.dbIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var p=h(n,2);j(p,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return q.javaIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var f=h(p,2);j(f,{description:" Utilisation de Python pour analyse de données statistiques",get icons(){return q.pythonIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var i=h(f,2);j(i,{description:"Développement d'outils système et de scripts Bash",get icons(){return q.sysIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var _=h(i,2);j(_,{description:"Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus",get icons(){return q.deploymentIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"}),g(m),g(v);var w=h(v,2);$(w,{text:"Retours d'expérience"});var k=h(w,2),u=x(k),r=x(u);Y(r,{title:"Application d'administration",description:"Développement d'une application d'administration de réseaux virtuels",link:`${O??""}/retex/cape`,img:"/img/retexes/cape/screen1.webp"});var l=h(r,2);Y(l,{title:"Application web",description:"Répertoire de séries TV",link:`${O??""}/retexes/serizz`,img:"/img/retexes/serizz/serizz.webp"});var y=h(l,2);Y(y,{title:"Application Python",description:"Portage d'un jeu de plateau en Python",link:`${O??""}/retexes/serizz`,img:"/img/retexes/serizz/serizz.webp"});var C=h(y,2);Y(C,{title:"Application C#",description:"Portage d'un jeu de plateau en C#",link:`${O??""}/retexes/serizz`,img:"/img/retexes/serizz/serizz.webp"}),g(u),g(k);var T=h(k,2);$(T,{text:"Contact et liens"}),qe(2),S(a,t),ve()}export{vt as component};
