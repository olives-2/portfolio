import{a as E,t as z,d as xe}from"../chunks/DKIKTBuC.js";import"../chunks/CSoCmYuu.js";import{w as _e,b as ye,h as S,l as W,m as de,K as O,a6 as we,a7 as ae,k as ee,e as V,a8 as fe,a as ve,a9 as ke,aG as te,u as pe,y as ne,aH as Ce,aI as Ie,t as Te,aJ as Ee,d as Le,g as Pe,ag as Se,o as ze,al as $e,a1 as re,aK as Ae,R as Me,aL as Ne,aM as Re,f as qe,aq as je,F as De,av as U,n as Be,s as b,c as y,r as x,x as ue,z as me,Y as Q,aF as Ge}from"../chunks/BWKL-nc7.js";import{s as J,a as He}from"../chunks/BZRTxxeh.js";import{i as he,h as Oe}from"../chunks/D5FVpvLy.js";import{b as q}from"../chunks/Bggiue3i.js";import{s as X}from"../chunks/BiQccXP7.js";import{s as Je}from"../chunks/DW0rpwWJ.js";import{l as oe,p as j,i as Ue}from"../chunks/CF_wAC-k.js";function Ve(i,e){return e}function Ye(i,e,t,a){for(var n=[],l=e.length,c=0;c<l;c++)Ie(e[c].e,n,!0);var d=l>0&&n.length===0&&t!==null;if(d){var m=t.parentNode;Te(m),m.append(t),a.clear(),R(i,e[0].prev,e[l-1].next)}Ee(n,()=>{for(var h=0;h<l;h++){var s=e[h];d||(a.delete(s.k),R(i,s.prev,s.next)),Le(s.e,!d)}})}function Fe(i,e,t,a,n,l=null){var c=i,d={flags:e,items:new Map,first:null};{var m=i;c=S?W(Pe(m)):m.appendChild(_e())}S&&de();var h=null,s=!1,g=Se(()=>{var r=t();return Me(r)?r:r==null?[]:pe(r)});ye(()=>{var r=O(g),v=r.length;if(s&&v===0)return;s=v===0;let p=!1;if(S){var w=c.data===we;w!==(v===0)&&(c=ae(),W(c),ee(!1),p=!0)}if(S){for(var k=null,u,_=0;_<v;_++){if(V.nodeType===8&&V.data===ze){c=V,p=!0,ee(!1);break}var $=r[_],f=a($,_);u=be(V,d,k,null,$,f,_,n,e,t),d.items.set(f,u),k=u}v>0&&W(ae())}S||Ke(r,d,c,n,e,a,t),l!==null&&(v===0?h?fe(h):h=ve(()=>l(c)):h!==null&&ke(h,()=>{h=null})),p&&ee(!0),O(g)}),S&&(c=V)}function Ke(i,e,t,a,n,l,c){var d=i.length,m=e.items,h=e.first,s=h,g,r=null,v=[],p=[],w,k,u,_;for(_=0;_<d;_+=1){if(w=i[_],k=l(w,_),u=m.get(k),u===void 0){var $=s?s.e.nodes_start:t;r=be($,e,r,r===null?e.first:r.next,w,k,_,a,n,c),m.set(k,r),v=[],p=[],s=r.next;continue}if(Qe(u,w,_),u.e.f&te&&fe(u.e),u!==s){if(g!==void 0&&g.has(u)){if(v.length<p.length){var f=p[0],o;r=f.prev;var L=v[0],I=v[v.length-1];for(o=0;o<v.length;o+=1)le(v[o],f,t);for(o=0;o<p.length;o+=1)g.delete(p[o]);R(e,L.prev,I.next),R(e,r,L),R(e,I,f),s=f,r=I,_-=1,v=[],p=[]}else g.delete(u),le(u,s,t),R(e,u.prev,u.next),R(e,u,r===null?e.first:r.next),R(e,r,u),r=u;continue}for(v=[],p=[];s!==null&&s.k!==k;)s.e.f&te||(g??(g=new Set)).add(s),p.push(s),s=s.next;if(s===null)continue;u=s}v.push(u),r=u,s=u.next}if(s!==null||g!==void 0){for(var A=g===void 0?[]:pe(g);s!==null;)s.e.f&te||A.push(s),s=s.next;var C=A.length;if(C>0){var P=d===0?t:null;Ye(e,A,P,m)}}ne.first=e.first&&e.first.e,ne.last=r&&r.e}function Qe(i,e,t,a){Ce(i.v,e),i.i=t}function be(i,e,t,a,n,l,c,d,m,h){var s=(m&Ne)!==0,g=(m&Re)===0,r=s?g?$e(n):re(n):n,v=m&Ae?re(c):c,p={i:v,v:r,k:l,a:null,e:null,prev:t,next:a};try{return p.e=ve(()=>d(i,r,v,h),S),p.e.prev=t&&t.e,p.e.next=a&&a.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),a!==null&&(a.prev=p,a.e.prev=p.e),p}finally{}}function le(i,e,t){for(var a=i.next?i.next.e.nodes_start:t,n=e?e.e.nodes_start:t,l=i.e.nodes_start;l!==a;){var c=qe(l);n.before(l),l=c}}function R(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ce(i,e,t,a,n){var d;S&&de();var l=(d=e.$$slots)==null?void 0:d[t],c=!1;l===!0&&(l=e[t==="default"?"children":t],c=!0),l===void 0||l(i,c?()=>a:a)}function Xe(i,e,t){je(()=>{var a=De(()=>e(i,t==null?void 0:t())||{});if(a!=null&&a.destroy)return()=>a.destroy()})}function M(i,e,t){var a=i.__className,n=Ze(e);S&&i.className===n?i.__className=n:(a!==n||S&&i.className!==n)&&(e==null?i.removeAttribute("class"):i.className=n,i.__className=n)}function Ze(i,e){return(i??"")+""}function D(i,e,t){if(t){if(i.classList.contains(e))return;i.classList.add(e)}else{if(!i.classList.contains(e))return;i.classList.remove(e)}}var We=z('<a class="flex flex-col justify-center items-center rounded-2xl p-4 relative z-10 overflow-hidden drop-shadow-xl md:w-1/4 h-4/12 border-2 border-slate-400 hover:border-white transition-all svelte-5e642q"><span id="color-layer" class="absolute opacity-0 bg-red-400 w-full h-full z-30 svelte-5e642q"></span> <img class="absolute object-fit brightness-50 svelte-5e642q"> <div id="text" class="z-20"><h1 class="text-2xl text-center"> </h1> <h2 class="text-lg max-w-xl text-center"> </h2></div> <div class="flex justify-center items-center gap-1"><!></div></a>');function ie(i,e){var t=We(),a=b(y(t),2),n=b(a,2),l=y(n),c=y(l,!0);x(l);var d=b(l,2),m=y(d,!0);x(d),x(n);var h=b(n,2),s=y(h);Je(s,()=>e.children??Be),x(h),x(t),U(()=>{J(t,"href",e.link),J(a,"src",e.img),J(a,"alt",e.title),X(c,e.title),X(m,e.description)}),E(i,t)}var et=z('<span class="svelte-8wt3xa"><!></span>'),tt=z('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function it(i,e){const t=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(t,["tip","top","right","bottom","left","active","color"]);ue(e,!1);let n=j(e,"tip",8,""),l=j(e,"top",8,!1),c=j(e,"right",8,!1),d=j(e,"bottom",8,!1),m=j(e,"left",8,!1),h=j(e,"active",8,!1),s=j(e,"color",8,"#0f172a"),g=0;const r=f=>{const o=f.querySelector(".tooltip"),L=f.querySelector(".tip");o.style.setProperty("--tooltip-color",s());const I=()=>{C(),o.style.opacity=1,o.style.zIndex="10"},A=()=>{o.style.opacity=0,o.style.zIndex="-1"},C=()=>{const{height:T,width:N}=f.getBoundingClientRect(),{height:Y,width:F}=o.getBoundingClientRect();let Z,ge,K,B;l()?(B=-(F/2-N/2),K=T+12):c()?(B=N+12,K=T/2-Y/2,g=Y/2):d()?(B=-(F/2-N/2),Z=T+12):m()?(B=-(F+12),K=T/2-Y/2,g=Y/2):(B=-Math.floor(F/2-N/2),Z=Math.floor(T+8),o.style.bottom="unset",o.style.right="unset"),o.style.top=`${Z}px`,o.style.bottom=`${K}px`,o.style.right=`${ge}px`,o.style.left=`${B}px`,L.style.setProperty("--top-gap",`${g-4}px`)},P=new ResizeObserver(C);return P.observe(f),f.addEventListener("mouseover",I),f.addEventListener("mouseout",A),{destroy(){f.removeEventListener("mouseover",I),f.removeEventListener("mouseout",A),P.unobserve(f)}}};he();var v=tt(),p=y(v);ce(p,e,"default",{});var w=b(p,2);let k;var u=y(w);{var _=f=>{var o=et();D(o,"tip",!0);var L=y(o);Oe(L,n),x(o),U(()=>{D(o,"top",l()),D(o,"right",c()),D(o,"bottom",d()),D(o,"left",m())}),E(f,o)},$=f=>{var o=xe(),L=Q(o);ce(L,e,"custom-tip",{}),E(f,o)};Ue(u,f=>{n()?f(_):f($,!1)})}x(w),x(v),Xe(v,f=>r==null?void 0:r(f)),U(()=>{k=He(w,k,{...a},"svelte-8wt3xa"),D(w,"tooltip",!0),D(w,"active",h())}),E(i,v),me()}var st=z('<a target="_blank" class="text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 overflow-hidden border-2 border-slate-700 hover:border-slate-400 duration-150"><i></i></a>'),at=z('<div><div class="flex justify-around flex-wrap w-1/8 max-w-64 gap-4"></div> <h2> </h2></div>');function G(i,e){var t=at(),a=y(t);Fe(a,21,()=>e.icons,Ve,(c,d)=>{it(c,{get tip(){return O(d).name},top:!0,children:(m,h)=>{var s=st(),g=y(s);x(s),U(()=>{J(s,"href",O(d).link),J(s,"aria-label",`Lien vers ${O(d).name??""}`),M(g,O(d).class)}),E(m,s)},$$slots:{default:!0}})}),x(a);var n=b(a,2),l=y(n,!0);x(n),x(t),U(()=>{M(t,`${e.bgColor??""} rounded-xl border ${e.borderColor??""} p-4 flex justify-center flex-col items-center gap-2 max-w-96 bg-opacity-50 backdrop-blur-sm`),X(l,e.description)}),E(i,t)}var nt=z('<section class="flex my-8 justify-center items-center bg-slate-800 bg-opacity-50 p-2 border-t-2 border-b-2 border-slate-500"><h1 class="w-1/1 drop-shadow-lg text-5xl p-2"> </h1></section>');function se(i,e){var t=nt(),a=y(t),n=y(a,!0);x(a),x(t),U(()=>X(n,e.text)),E(i,t)}const H={webIcons:[{name:"HTML",class:"iconify icon-[simple-icons--github]"},{name:"CSS",class:"iconify icon-[simple-icons--html5]"},{name:"JavaScript",class:"iconify icon-[simple-icons--css3]"},{name:"React",class:"iconify icon-[simple-icons--react]",link:"https://fr.react.dev/"},{name:"Svelte",class:"iconify icon-[simple-icons--svelte]",link:"https://svelte.dev/"},{name:"Tailwind",class:"iconify icon-[simple-icons--tailwindcss]",link:"https://tailwindcss.com/"},{name:"PHP",class:"iconify icon-[simple-icons--php]"},{name:"Symfony",class:"nf iconify icon-[simple-icons--symfony]",link:"https://symfony.com/"}],javaIcons:[{name:"Java",class:"iconify icon-[devicon-plain--java]"},{name:"Android Studio",class:"iconify icon-[simple-icons--android]"},{name:"Maven",class:"iconify icon-[simple-icons--apachemaven]"}],dbIcons:[{name:"Oracle SQL",class:"iconify icon-[simple-icons--oracle]"},{name:"MongoDB",class:"iconify icon-[simple-icons--mongodb]"},{name:"Neo4J",class:"iconify icon-[simple-icons--neo4j]"}],pythonIcons:[{name:"Python",class:"iconify icon-[simple-icons--python]"},{name:"Matplotlib",class:"iconify icon-[devicon-plain--matplotlib]"},{name:"Pandas",class:"iconify icon-[simple-icons--pandas]"}],sysIcons:[{name:"C",class:"iconify icon-[simple-icons--c]"},{name:"Linux",class:"iconify icon-[simple-icons--linux]"},{name:"Bash et ZSH",class:"iconify icon-[simple-icons--gnubash]"}],deploymentIcons:[{name:"Docker",class:"iconify icon-[simple-icons--docker]"},{name:"Podman",class:"iconify icon-[simple-icons--podman]"},{name:"GitLab CI/CD",class:"iconify icon-[simple-icons--gitlab]"},{name:"Sonarqube",class:"iconify icon-[simple-icons--sonarqube]"}]};var rt=z("<i></i>"),ot=z("<i></i> <i></i> <i></i>",1),lt=z("<i></i> <i></i> <i></i>",1),ct=z(`<div class="flex justify-center"><div id="presentation" class="flex justify-around flex-col md:flex-row items-center backdrop-blur-sm border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 w-10/12"><article class="md:w-2/4"><h1 class="text-6xl p-2">Matis Olives</h1> <h2 class="text-3xl p-2">Spécialisé dans le développement web et d'applications en POO</h2> <p class="text-xl p-2">Je suis un étudiant d'informatique à l'IUT de Bordeaux-Gradignan. Dans
        cette formation, je réalise des missions me formant à des situations
        réelles du domaine de l'informatique.</p></article> <img alt="Portrait" class="lazyload rounded-full w-64 relative drop-shadow-2xl"></div></div> <!> <div id="skills"><div class="flex flex-wrap gap-4 justify-center"><!> <!> <!> <!> <!> <!></div></div> <!> <div id="retexes" class="flex flex-col p-2"><div class="flex justify-center align-center flex-wrap flex-col md:flex-row gap-2"><!> <!> <!></div></div> <!> <div id="contact" class="flex m-5 justify-center items-center gap-10"><a href="https://www.linkedin.com/in/matis-olives-4b845629a/" aria-label="Lien vers mon LinkedIn" class="w-10"><i class="nf nf-dev-linkedin text-4xl inline-block"></i></a> <a href="mailto:matisolives@gmail.com" aria-label="M'envoyer un mail" class="w-10"><i class="nf nf-cod-mail text-4xl inline-block"></i></a></div>`,1);function xt(i,e){ue(e,!1);const t="text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 overflow-hidden border-2 border-slate-700 hover:border-slate-400 duration-150";he();var a=ct(),n=Q(a),l=y(n),c=b(y(l),2);J(c,"src",`${q}/img/me.webp`),x(l),x(n);var d=b(n,2);se(d,{text:"Compétences"});var m=b(d,2),h=y(m),s=y(h);G(s,{description:"Création de sites web pour développement fullstack",get icons(){return H.webIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var g=b(s,2);G(g,{description:"Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données",get icons(){return H.dbIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var r=b(g,2);G(r,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return H.javaIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var v=b(r,2);G(v,{description:" Utilisation de Python pour analyse de données statistiques",get icons(){return H.pythonIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var p=b(v,2);G(p,{description:"Développement d'outils système et de scripts Bash",get icons(){return H.sysIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var w=b(p,2);G(w,{description:"Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus",get icons(){return H.deploymentIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"}),x(h),x(m);var k=b(m,2);se(k,{text:"Retours d'expérience"});var u=b(k,2),_=y(u),$=y(_);ie($,{title:"Application d'administration",description:"Développement d'une application d'administration de réseaux virtuels",link:`${q}/retex/cape`,img:`${q}/retexes/cape/cape_admin.webp`,children:(I,A)=>{var C=rt();M(C,`nf nf-dev-svelte ${t}`),E(I,C)},$$slots:{default:!0}});var f=b($,2);ie(f,{title:"Application web",description:"Répertoire de séries TV",link:`${q}/retex/serizz`,img:`${q}/retexes/serizz/serizz.webp`,children:(I,A)=>{var C=ot(),P=Q(C);M(P,`nf nf-md-symfony ${t}`);var T=b(P,2);M(T,`nf nf-dev-mysql ${t}`);var N=b(T,2);M(N,`nf nf-dev-tailwindcss ${t}`),E(I,C)},$$slots:{default:!0}});var o=b(f,2);ie(o,{title:"Projet innovant",description:"Portage d'un jeu de plateau en application web",link:`${q}/retex/cape`,img:`${q}/retexes/living_forest/living_forest.webp`,children:(I,A)=>{var C=lt(),P=Q(C);M(P,`nf nf-dev-react ${t}`);var T=b(P,2);M(T,`nf nf-dev-typescript ${t}`);var N=b(T,2);M(N,`nf nf-md-nodejs ${t}`),E(I,C)},$$slots:{default:!0}}),x(_),x(u);var L=b(u,2);se(L,{text:"Contact et liens"}),Ge(2),E(i,a),me()}export{xt as component};
