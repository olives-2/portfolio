import{d as ae,e as ze,a as S,t as O,c as Te}from"../chunks/disclose-version.B3IqEVsx.js";import"../chunks/legacy.CHEDnOim.js";import{H as Ee,b as ue,h as I,I as X,a as ee,J as pe,K as Se,L as me,M as Ae,N as se,O as W,d as D,P as Le,Q as Z,R as ge,c as te,p as Pe,T as ne,U as Re,V as Me,W as Ne,X as De,Y as he,Z as Oe,m as je,_ as re,$ as Be,a0 as He,a1 as Ge,a2 as be,a3 as qe,a4 as Je,e as Ue,u as _e,w as Qe,o as ie,k as Ve,a5 as le,g as H,a6 as Ye,a7 as Xe,F as Ze,C as q,B as _,z as b,D as h,v as xe,x as ye,y as we}from"../chunks/runtime.CQWAaGL0.js";import{s as G,a as Fe}from"../chunks/attributes.CI7tT4Gi.js";import{b as J}from"../chunks/paths.CoHAvG2e.js";import{s as F,l as oe,p as P,i as Ke}from"../chunks/props.BiqGB2UN.js";import{s as ce}from"../chunks/slot.D5uVlA-u.js";function We(a,e){return e}function $e(a,e,t,s){for(var d=[],r=e.length,l=0;l<r;l++)Me(e[l].e,d,!0);var o=r>0&&d.length===0&&t!==null;if(o){var i=t.parentNode;Ne(i),i.append(t),s.clear(),E(a,e[0].prev,e[r-1].next)}De(d,()=>{for(var p=0;p<r;p++){var n=e[p];o||(s.delete(n.k),E(a,n.prev,n.next)),he(n.e,!o)}})}function et(a,e,t,s,d,r=null){var l=a,o={flags:e,items:new Map,first:null};{var i=a;l=I?X(pe(i)):i.appendChild(Ee())}I&&ee();var p=null,n=!1;ue(()=>{var u=t(),m=Se(u)?u:u==null?[]:me(u),c=m.length;if(n&&c===0)return;n=c===0;let x=!1;if(I){var C=l.data===Ae;C!==(c===0)&&(l=se(),X(l),W(!1),x=!0)}if(I){for(var k=null,g,f=0;f<c;f++){if(D.nodeType===8&&D.data===Le){l=D,x=!0,W(!1);break}var v=m[f],y=s(v,f);g=Ce(D,o,k,null,v,y,f,d,e),o.items.set(y,g),k=g}c>0&&X(se())}if(!I){var w=Oe;tt(m,o,l,d,e,(w.f&Z)!==0,s)}r!==null&&(c===0?p?ge(p):p=te(()=>r(l)):p!==null&&Pe(p,()=>{p=null})),x&&W(!0),t()}),I&&(l=D)}function tt(a,e,t,s,d,r,l){var o=a.length,i=e.items,p=e.first,n=p,u,m=null,c=[],x=[],C,k,g,f;for(f=0;f<o;f+=1){if(C=a[f],k=l(C,f),g=i.get(k),g===void 0){var v=n?n.e.nodes_start:t;m=Ce(v,e,m,m===null?e.first:m.next,C,k,f,s,d),i.set(k,m),c=[],x=[],n=m.next;continue}if(at(g,C,f),g.e.f&Z&&ge(g.e),g!==n){if(u!==void 0&&u.has(g)){if(c.length<x.length){var y=x[0],w;m=y.prev;var A=c[0],z=c[c.length-1];for(w=0;w<c.length;w+=1)de(c[w],y,t);for(w=0;w<x.length;w+=1)u.delete(x[w]);E(e,A.prev,z.next),E(e,m,A),E(e,z,y),n=y,m=z,f-=1,c=[],x=[]}else u.delete(g),de(g,n,t),E(e,g.prev,g.next),E(e,g,m===null?e.first:m.next),E(e,m,g),m=g;continue}for(c=[],x=[];n!==null&&n.k!==k;)(r||!(n.e.f&Z))&&(u??(u=new Set)).add(n),x.push(n),n=n.next;if(n===null)continue;g=n}c.push(g),m=g,n=g.next}if(n!==null||u!==void 0){for(var T=u===void 0?[]:me(u);n!==null;)(r||!(n.e.f&Z))&&T.push(n),n=n.next;var L=T.length;if(L>0){var j=o===0?t:null;$e(e,T,j,i)}}ne.first=e.first&&e.first.e,ne.last=m&&m.e}function at(a,e,t,s){Re(a.v,e),a.i=t}function Ce(a,e,t,s,d,r,l,o,i){var p=(i&He)!==0,n=(i&Ge)===0,u=p?n?je(d):re(d):d,m=i&Be?re(l):l,c={i:m,v:u,k:r,a:null,e:null,prev:t,next:s};try{return c.e=te(()=>o(a,u,m),I),c.e.prev=t&&t.e,c.e.next=s&&s.e,t===null?e.first=c:(t.next=c,t.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function de(a,e,t){for(var s=a.next?a.next.e.nodes_start:t,d=e?e.e.nodes_start:t,r=a.e.nodes_start;r!==s;){var l=be(r);d.before(r),r=l}}function E(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function st(a,e,t,s,d){var r=a,l="",o;ue(()=>{if(l===(l=e()??"")){I&&ee();return}o!==void 0&&(he(o),o=void 0),l!==""&&(o=te(()=>{if(I){D.data;for(var i=ee(),p=i;i!==null&&(i.nodeType!==8||i.data!=="");)p=i,i=be(i);if(i===null)throw qe(),Je;ae(D,p),r=X(i);return}var n=l+"",u=ze(n);ae(pe(u),u.lastChild),r.before(u)}))})}function nt(a,e,t){Ue(()=>{var s=_e(()=>e(a,t==null?void 0:t())||{});if(s!=null&&s.destroy)return()=>s.destroy()})}function fe(a,e){var t=a.__className,s=rt(e);I&&a.className===s?a.__className=s:(t!==s||I&&a.className!==s)&&(e==null?a.removeAttribute("class"):a.className=s,a.__className=s)}function rt(a){return a??""}function R(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function ke(a=!1){const e=Ve,t=e.l.u;if(!t)return;let s=()=>Xe(e.s);if(a){let d=0,r={};const l=Ze(()=>{let o=!1;const i=e.s;for(const p in i)i[p]!==r[p]&&(r[p]=i[p],o=!0);return o&&d++,d});s=()=>H(l)}t.b.length&&Qe(()=>{ve(e,s),le(t.b)}),ie(()=>{const d=_e(()=>t.m.map(Ye));return()=>{for(const r of d)typeof r=="function"&&r()}}),t.a.length&&ie(()=>{ve(e,s),le(t.a)})}function ve(a,e){if(a.l.s)for(const t of a.l.s)H(t);e()}var it=O('<a class="flex flex-col justify-center items-center rounded-lg p-4 relative z-10 overflow-hidden shadow-sm w-4/12 h-4/12 border-2 border-slate-700 svelte-g1kfwx"><img class="absolute object-fit brightness-50 svelte-g1kfwx"> <div id="text" class="z-20"><h1 class="text-2xl text-center "> </h1> <h2 class="text-lg max-w-xl text-center z-20"> </h2></div></a>');function Y(a,e){var t=it(),s=_(t),d=b(s,2),r=_(d),l=_(r,!0);h(r);var o=b(r,2),i=_(o,!0);h(o),h(d),h(t),q(()=>{G(t,"href",e.link),G(s,"src",e.img),G(s,"alt",e.title),F(l,e.title),F(i,e.description)}),S(a,t)}var lt=O('<span class="svelte-8wt3xa"><!></span>'),ot=O('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function ct(a,e){const t=oe(e,["children","$$slots","$$events","$$legacy"]),s=oe(t,["tip","top","right","bottom","left","active","color"]);xe(e,!1);let d=P(e,"tip",8,""),r=P(e,"top",8,!1),l=P(e,"right",8,!1),o=P(e,"bottom",8,!1),i=P(e,"left",8,!1),p=P(e,"active",8,!1),n=P(e,"color",8,"#0f172a"),u=0;const m=f=>{const v=f.querySelector(".tooltip"),y=f.querySelector(".tip");v.style.setProperty("--tooltip-color",n());const w=()=>{z(),v.style.opacity=1,v.style.zIndex="10"},A=()=>{v.style.opacity=0,v.style.zIndex="-1"},z=()=>{const{height:L,width:j}=f.getBoundingClientRect(),{height:U,width:Q}=v.getBoundingClientRect();let K,Ie,V,B;r()?(B=-(Q/2-j/2),V=L+12):l()?(B=j+12,V=Math.abs(L/2-U/2),u=U/2):o()?(B=-(Q/2-j/2),K=L+12):i()?(B=-(Q+12),V=Math.abs(L/2-U/2),u=U/2):(B=-Math.floor(Q/2-j/2),K=Math.floor(L+8),v.style.bottom="unset",v.style.right="unset"),v.style.top=`${K}px`,v.style.bottom=`${V}px`,v.style.right=`${Ie}px`,v.style.left=`${B}px`,y.style.setProperty("--top-gap",`${u-4}px`)},T=new ResizeObserver(z);return T.observe(f),f.addEventListener("mouseover",w),f.addEventListener("mouseout",A),{destroy(){f.removeEventListener("mouseover",w),f.removeEventListener("mouseout",A),T.unobserve(f)}}};ke();var c=ot(),x=_(c);ce(x,e,"default",{});var C=b(x,2);let k;var g=_(C);Ke(g,d,f=>{var v=lt();R(v,"tip",!0);var y=_(v);st(y,d),h(v),q(()=>{R(v,"top",r()),R(v,"right",l()),R(v,"bottom",o()),R(v,"left",i())}),S(f,v)},f=>{var v=Te(),y=ye(v);ce(y,e,"custom-tip",{}),S(f,v)}),h(C),h(c),nt(c,f=>m(f)),q(()=>{k=Fe(C,k,{...s},"svelte-8wt3xa"),R(C,"tooltip",!0),R(C,"active",p())}),S(a,c),we()}var dt=O("<a><i></i></a>"),ft=O('<div><div class="flex justify-around flex-wrap w-1/8 max-w-64 gap-4"></div> <h2> </h2></div>');function M(a,e){var t=ft(),s=_(t);et(s,21,()=>e.icons,We,(l,o)=>{ct(l,{get tip(){return H(o).name},top:!0,children:(i,p)=>{var n=dt(),u=_(n);h(n),q(()=>{G(n,"href",H(o).link),G(n,"aria-label",`Lien vers ${H(o).name??""}`),fe(u,`${H(o).class??""} text-4xl bg-slate-700 p-2 rounded-lg hover:bg-slate-500 duration-150`)}),S(i,n)},$$slots:{default:!0}})}),h(s);var d=b(s,2),r=_(d,!0);h(d),h(t),q(()=>{fe(t,`${e.bgColor??""} rounded-lg border ${e.borderColor??""} p-4 flex justify-center flex-col items-center gap-2 max-w-96 bg-opacity-50 backdrop-blur-sm`),F(r,e.description)}),S(a,t)}var vt=O('<section class="flex my-8 justify-center items-center bg-slate-800 bg-opacity-50 svelte-1b8oilk"><h1 class="w-1/1 drop-shadow-lg text-5xl p-2 svelte-1b8oilk"> </h1></section>');function $(a,e){var t=vt(),s=_(t),d=_(s,!0);h(s),h(t),q(()=>F(d,e.text)),S(a,t)}const N={webIcons:[{name:"HTML",class:"nf nf-dev-html5"},{name:"CSS",class:"nf nf-dev-css3"},{name:"JavaScript",class:"nf nf-dev-javascript"},{name:"React",class:"nf nf-dev-react",link:"https://fr.react.dev/"},{name:"Svelte",class:"nf nf-seti-svelte",link:"https://svelte.dev/"},{name:"Tailwind",class:"nf nf-md-tailwind",link:"https://tailwindcss.com/"},{name:"PHP",class:"nf nf-dev-php"},{name:"Symfony",class:"nf nf-dev-symfony",link:"https://symfony.com/"}],javaIcons:[{name:"Java",class:"nf nf-dev-java"},{name:"Android Studio",class:"nf nf-dev-android"},{name:"Maven",class:"nf nf-seti-maven"}],dbIcons:[{name:"Bases de données relationnelles (Oracle, Microsoft SQL Server)",class:"nf nf-fa-database"},{name:"Oracle SQL",class:"nf nf-dev-oracle"},{name:"MongoDB",class:"nf nf-dev-mongodb"},{name:"Neo4J",class:"nf nf-dev-neo4j"}],pythonIcons:[{name:"Python",class:"nf nf-dev-python"},{name:"Matplotlib",class:"nf nf-dev-matplotlib"},{name:"Pandas",class:"nf nf-dev-pandas"}],sysIcons:[{name:"C",class:"nf nf-custom-c"},{name:"Linux",class:"nf nf-dev-linux"},{name:"Bash et ZSH",class:"nf nf-cod-terminal_bash"}],deploymentIcons:[{name:"Docker",class:"nf nf-fa-docker"},{name:"Podman",class:"nf nf-dev-podman"},{name:"GitLab CI/CD",class:"nf nf-fa-gitlab"},{name:"Sonarqube",class:"nf nf-dev-sonarqube"}]};var ut=O(`<div class="flex justify-center"><div id="presentation" class="flex justify-around items-center backdrop-blur-sm border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 w-11/12"><article class="w-2/4"><h1 class="text-6xl my-5">Matis Olives</h1> <h2 class="text-3xl my-5">Spécialisé dans le développement web et d'applications en POO</h2> <p class="text-xl">Je suis un étudiant d'informatique à l'IUT de Bordeaux-Gradignan. Dans
        cette formation, je réalise des missions me formant à des situations
        réelles du domaine de l'informatique.</p></article> <img alt="Portrait" class="rounded-full w-64 relative drop-shadow-lg"></div></div> <!> <div id="skills"><div class="flex flex-wrap gap-4 justify-center"><!> <!> <!> <!> <!> <!> <!></div></div> <!> <div id="retexes" class="flex flex-col p-2"><div class="flex justify-center flex-wrap gap-2"><!> <!> <!> <!></div></div> <div id="contact"><!></div>`,1);function yt(a,e){xe(e,!1),ke();var t=ut(),s=ye(t),d=_(s),r=b(_(d),2);G(r,"src",`${J}/img/me.webp`),h(d),h(s);var l=b(s,2);$(l,{text:"Compétences"});var o=b(l,2),i=_(o),p=_(i);M(p,{description:"Création de sites web pour développement fullstack",get icons(){return N.webIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var n=b(p,2);M(n,{description:"Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données",get icons(){return N.dbIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var u=b(n,2);M(u,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return N.javaIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var m=b(u,2);M(m,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return N.javaIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var c=b(m,2);M(c,{description:" Utilisation de Python pour analyse de données statistiques",get icons(){return N.pythonIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var x=b(c,2);M(x,{description:"Développement d'outils système et de scripts Bash",get icons(){return N.sysIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var C=b(x,2);M(C,{description:"Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus",get icons(){return N.deploymentIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"}),h(i),h(o);var k=b(o,2);$(k,{text:"Retours d'expérience"});var g=b(k,2),f=_(g),v=_(f);Y(v,{title:"Application d'administration",description:"Développement d'une application d'administration de réseaux virtuels",link:`${J??""}/retexes/cape`,img:"/img/retexes/cape/screen1.webp"});var y=b(v,2);Y(y,{title:"Application web",description:"Répertoire de sérites TV",link:`${J??""}/retexes/serizz`,img:"/img/retexes/serizz/serizz.webp"});var w=b(y,2);Y(w,{title:"Application Python",description:"Portage d'un jeu de plateau en Python",link:`${J??""}/retexes/serizz`,img:"/img/retexes/serizz/serizz.webp"});var A=b(w,2);Y(A,{title:"Application C#",description:"Portage d'un jeu de plateau en C#",link:`${J??""}/retexes/serizz`,img:"/img/retexes/serizz/serizz.webp"}),h(f),h(g);var z=b(g,2),T=_(z);$(T,{text:"Contact et liens"}),h(z),S(a,t),we()}export{yt as component};
