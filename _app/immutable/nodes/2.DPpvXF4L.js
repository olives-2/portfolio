import{a as T,t as P,s as F,h as xe}from"../chunks/V9ZD_-uI.js";import"../chunks/DAnvoH7B.js";import{aw as we,b as ke,h as z,s as ie,a as fe,v as N,a3 as Ie,a4 as oe,a5 as te,e as J,a6 as pe,d as ue,a7 as Te,aG as se,aE as me,N as le,aH as Ce,aI as Pe,aD as Ee,aJ as Se,k as je,j as ze,ai as Me,aB as De,aj as Le,Y as re,aK as Ae,a2 as Be,aL as Re,aM as $e,g as qe,M as Ge,o as He,c as _,D as m,r as y,t as V,z as Ne,f as U,B as he,C as ye}from"../chunks/DlJWBOQh.js";import{s as A,c as E,a as Oe}from"../chunks/B4zzaY_R.js";import{s as k,a as Je,t as L}from"../chunks/Cci1atTr.js";import{b as M}from"../chunks/Bm_-xuKs.js";import{p as j,l as ce,i as Ue}from"../chunks/UDXoq-u5.js";import{i as be}from"../chunks/Do14f3ha.js";import{h as Ve}from"../chunks/FZ4kWzSI.js";import{T as ae}from"../chunks/aoWPm2D4.js";function Ye(l,e){return e}function Qe(l,e,i,s){for(var v=[],n=e.length,o=0;o<n;o++)Pe(e[o].e,v,!0);var r=n>0&&v.length===0&&i!==null;if(r){var d=i.parentNode;Ee(d),d.append(i),s.clear(),D(l,e[0].prev,e[n-1].next)}Se(v,()=>{for(var c=0;c<n;c++){var t=e[c];r||(s.delete(t.k),D(l,t.prev,t.next)),je(t.e,!r)}})}function Ke(l,e,i,s,v,n=null){var o=l,r={flags:e,items:new Map,first:null};{var d=l;o=z?ie(ze(d)):d.appendChild(we())}z&&fe();var c=null,t=!1,b=Me(()=>{var a=i();return Be(a)?a:a==null?[]:me(a)});ke(()=>{var a=N(b),f=a.length;if(t&&f===0)return;t=f===0;let u=!1;if(z){var w=o.data===Ie;w!==(f===0)&&(o=oe(),ie(o),te(!1),u=!0)}if(z){for(var I=null,g,x=0;x<f;x++){if(J.nodeType===8&&J.data===De){o=J,u=!0,te(!1);break}var B=a[x],h=s(B,x);g=_e(J,r,I,null,B,h,x,v,e,i),r.items.set(h,g),I=g}f>0&&ie(oe())}z||We(a,r,o,v,e,s,i),n!==null&&(f===0?c?pe(c):c=ue(()=>n(o)):c!==null&&Te(c,()=>{c=null})),u&&te(!0),N(b)}),z&&(o=J)}function We(l,e,i,s,v,n,o){var r=l.length,d=e.items,c=e.first,t=c,b,a=null,f=[],u=[],w,I,g,x;for(x=0;x<r;x+=1){if(w=l[x],I=n(w,x),g=d.get(I),g===void 0){var B=t?t.e.nodes_start:i;a=_e(B,e,a,a===null?e.first:a.next,w,I,x,s,v,o),d.set(I,a),f=[],u=[],t=a.next;continue}if(Xe(g,w,x),g.e.f&se&&pe(g.e),g!==t){if(b!==void 0&&b.has(g)){if(f.length<u.length){var h=u[0],p;a=h.prev;var S=f[0],R=f[f.length-1];for(p=0;p<f.length;p+=1)de(f[p],h,i);for(p=0;p<u.length;p+=1)b.delete(u[p]);D(e,S.prev,R.next),D(e,a,S),D(e,R,h),t=h,a=R,x-=1,f=[],u=[]}else b.delete(g),de(g,t,i),D(e,g.prev,g.next),D(e,g,a===null?e.first:a.next),D(e,a,g),a=g;continue}for(f=[],u=[];t!==null&&t.k!==I;)t.e.f&se||(b??(b=new Set)).add(t),u.push(t),t=t.next;if(t===null)continue;g=t}f.push(g),a=g,t=g.next}if(t!==null||b!==void 0){for(var $=b===void 0?[]:me(b);t!==null;)t.e.f&se||$.push(t),t=t.next;var Y=$.length;if(Y>0){var Q=r===0?i:null;Qe(e,$,Q,d)}}le.first=e.first&&e.first.e,le.last=a&&a.e}function Xe(l,e,i,s){Ce(l.v,e),l.i=i}function _e(l,e,i,s,v,n,o,r,d,c){var t=(d&Re)!==0,b=(d&$e)===0,a=t?b?Le(v):re(v):v,f=d&Ae?re(o):o,u={i:f,v:a,k:n,a:null,e:null,prev:i,next:s};try{return u.e=ue(()=>r(l,a,f,c),z),u.e.prev=i&&i.e,u.e.next=s&&s.e,i===null?e.first=u:(i.next=u,i.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function de(l,e,i){for(var s=l.next?l.next.e.nodes_start:i,v=e?e.e.nodes_start:i,n=l.e.nodes_start;n!==s;){var o=qe(n);v.before(n),n=o}}function D(l,e,i){e===null?l.first=i:(e.next=i,e.e.next=i&&i.e),i!==null&&(i.prev=e,i.e.prev=e&&e.e)}function ve(l,e,i,s,v){var r;z&&fe();var n=(r=e.$$slots)==null?void 0:r[i],o=!1;n===!0&&(n=e[i==="default"?"children":i],o=!0),n===void 0||n(l,o?()=>s:s)}function Ze(l,e,i){Ge(()=>{var s=He(()=>e(l,i==null?void 0:i())||{});if(s!=null&&s.destroy)return()=>s.destroy()})}var Fe=P(`<div class="flex justify-center"><div id="presentation" class="flex justify-between flex-col md:flex-row items-center border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 md:w-8/12"><article class="md:w-2/4"><h1 class="text-6xl p-2 text-center drop-shadow-2xl font-bold">Matis Olives</h1> <h2 class="text-2xl p-2 text-center drop-shadow-xl font-semibold">Spécialisé dans le développement web et d'applications en POO</h2> <p class="text-lg p-2">Je suis un étudiant d'informatique à l'IUT de
                Bordeaux-Gradignan. Dans cette formation, je réalise des
                missions me formant à des situations réelles du domaine de
                l'informatique.</p></article> <img alt="Portrait" class="rounded-full m-2 relative drop-shadow-2xl border-slate-400 border-2 w-64 h-64"></div></div>`);function ei(l){var e=Fe(),i=_(e),s=m(_(i),2);A(s,"src",`${M}/img/me.webp`),y(i),y(e),T(l,e)}const C="block text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 border-2 border-slate-500 hover:border-slate-400 duration-150 text-white",G={webIcons:[{name:"HTML",class:"iconify icon-[simple-icons--html5]"},{name:"CSS",class:"iconify icon-[simple-icons--css3]"},{name:"JavaScript",class:"iconify icon-[simple-icons--javascript]"},{name:"React",class:"iconify icon-[simple-icons--react]",link:"https://fr.react.dev/"},{name:"Svelte",class:"iconify icon-[simple-icons--svelte]",link:"https://svelte.dev/"},{name:"Tailwind",class:"iconify icon-[simple-icons--tailwindcss]",link:"https://tailwindcss.com/"},{name:"PHP",class:"iconify icon-[simple-icons--php]"},{name:"Symfony",class:"nf iconify icon-[simple-icons--symfony]",link:"https://symfony.com/"}],javaIcons:[{name:"Java",class:"iconify icon-[devicon-plain--java]"},{name:"Android Studio",class:"iconify icon-[simple-icons--android]"},{name:"Maven",class:"iconify icon-[simple-icons--apachemaven]"}],dbIcons:[{name:"Oracle SQL",class:"iconify icon-[simple-icons--oracle]"},{name:"MongoDB",class:"iconify icon-[simple-icons--mongodb]"},{name:"Neo4J",class:"iconify icon-[simple-icons--neo4j]"}],pythonIcons:[{name:"Python",class:"iconify icon-[simple-icons--python]"},{name:"Matplotlib",class:"iconify icon-[devicon-plain--matplotlib]"},{name:"Pandas",class:"iconify icon-[simple-icons--pandas]"}],sysIcons:[{name:"C",class:"iconify icon-[simple-icons--c]"},{name:"Linux",class:"iconify icon-[simple-icons--linux]"},{name:"Bash et ZSH",class:"iconify icon-[simple-icons--gnubash]"}],deploymentIcons:[{name:"Docker",class:"iconify icon-[simple-icons--docker]"},{name:"Podman",class:"iconify icon-[simple-icons--podman]"},{name:"GitLab CI/CD",class:"iconify icon-[simple-icons--gitlab]"},{name:"Sonarqube",class:"iconify icon-[simple-icons--sonarqube]"}]};var ii=P('<a class="rounded-2xl max-h-64 relative z-10 overflow-hidden drop-shadow-xl border-2 border-slate-400 hover:border-white transition-all text-slate-100 svelte-1qzelxk"><span><i></i></span> <span id="color-layer" class="absolute opacity-0 bg-gradient-to-br from-red-600 to-blue-600 w-full h-full z-10 blur-3xl scale-150 svelte-1qzelxk"></span> <div class="h-2/5"><img class="object-cover h-full w-full drop-shadow-2xl"></div> <div class="flex flex-col justify-around p-2 gap-4 bg-slate-800  h-3/5"><div class="flex justify-between"><div><h1 class="text-xl font-bold"> </h1> <h2 class="text-md"> </h2></div> <div class="flex justify-center items-center gap-1"><!></div></div></div></a>');function ne(l,e){let i=j(e,"typeIcon",3,"iconify icon-[simple-icons--css3]");var s=ii(),v=_(s);k(v,`${C} absolute m-1 z-10`);var n=_(v);y(v);var o=m(v,4),r=_(o);y(o);var d=m(o,2),c=_(d),t=_(c),b=_(t),a=_(b,!0);y(b);var f=m(b,2),u=_(f,!0);y(f),y(t);var w=m(t,2),I=_(w);Je(I,()=>e.children??Ne),y(w),y(c),y(d),y(s),V(()=>{A(s,"href",e.link),k(n,`${i()??""} block`),A(r,"src",e.img),A(r,"alt",e.title),F(a,e.title),F(u,e.description)}),T(l,s)}var ti=P('<div><i class="iconify icon-[simple-icons--svelte] block"></i></div> <div><i class="iconify icon-[simple-icons--javascript] block"></i></div>',1),si=P('<div><i class="iconify icon-[simple-icons--symfony] block"></i></div> <div><i class="iconify icon-[simple-icons--mysql] block"></i></div> <div><i class="iconify icon-[simple-icons--tailwindcss] block"></i></div>',1),ai=P('<div><i class="iconify icon-[simple-icons--react] block"></i></div> <div><i class="iconify icon-[simple-icons--typescript] block"></i></div> <div><i class="iconify icon-[devicon-plain--nodejs] block"></i></div>',1),ni=P('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"><!> <!> <!></div>');function oi(l){var e=ni(),i=_(e);ne(i,{title:"Application d'administration",description:"Développement d'une application d'administration de réseaux virtuels",link:`${M}/retex/cape`,img:`${M}/retexes/cape/cape_admin.webp`,typeIcon:"iconify icon-[tabler--briefcase-filled]",children:(n,o)=>{var r=ti(),d=U(r);k(d,E(C));var c=m(d,2);k(c,E(C)),T(n,r)},$$slots:{default:!0}});var s=m(i,2);ne(s,{title:"Application web",description:"Répertoire de séries TV",link:`${M}/retex/serizz`,img:`${M}/retexes/serizz/serizz.webp`,typeIcon:"iconify icon-[tabler--school]",children:(n,o)=>{var r=si(),d=U(r);k(d,E(C));var c=m(d,2);k(c,E(C));var t=m(c,2);k(t,E(C)),T(n,r)},$$slots:{default:!0}});var v=m(s,2);ne(v,{title:"Projet innovant",description:"Portage d'un jeu de plateau en application web",link:`${M}/retex/living_forest`,img:`${M}/retexes/living_forest/living_forest.webp`,typeIcon:"iconify icon-[tabler--school]",children:(n,o)=>{var r=ai(),d=U(r);k(d,E(C));var c=m(d,2);k(c,E(C));var t=m(c,2);k(t,E(C)),T(n,r)},$$slots:{default:!0}}),y(e),T(l,e)}var li=P('<span class="svelte-8wt3xa"><!></span>'),ri=P('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function ci(l,e){const i=ce(e,["children","$$slots","$$events","$$legacy"]),s=ce(i,["tip","top","right","bottom","left","active","color"]);he(e,!1);let v=j(e,"tip",8,""),n=j(e,"top",8,!1),o=j(e,"right",8,!1),r=j(e,"bottom",8,!1),d=j(e,"left",8,!1),c=j(e,"active",8,!1),t=j(e,"color",8,"#0f172a"),b=0;const a=h=>{const p=h.querySelector(".tooltip"),S=h.querySelector(".tip");p.style.setProperty("--tooltip-color",t());const R=()=>{Y(),p.style.opacity=1,p.style.zIndex="10"},$=()=>{p.style.opacity=0,p.style.zIndex="-1"},Y=()=>{const{height:O,width:K}=h.getBoundingClientRect(),{height:W,width:X}=p.getBoundingClientRect();let ee,ge,Z,q;n()?(q=-(X/2-K/2),Z=O+12):o()?(q=K+12,Z=O/2-W/2,b=W/2):r()?(q=-(X/2-K/2),ee=O+12):d()?(q=-(X+12),Z=O/2-W/2,b=W/2):(q=-Math.floor(X/2-K/2),ee=Math.floor(O+8),p.style.bottom="unset",p.style.right="unset"),p.style.top=`${ee}px`,p.style.bottom=`${Z}px`,p.style.right=`${ge}px`,p.style.left=`${q}px`,S.style.setProperty("--top-gap",`${b-4}px`)},Q=new ResizeObserver(Y);return Q.observe(h),h.addEventListener("mouseover",R),h.addEventListener("mouseout",$),{destroy(){h.removeEventListener("mouseover",R),h.removeEventListener("mouseout",$),Q.unobserve(h)}}};be();var f=ri(),u=_(f);ve(u,e,"default",{});var w=m(u,2);let I;var g=_(w);{var x=h=>{var p=li();L(p,"tip",!0);var S=_(p);Ve(S,v),y(p),V(()=>{L(p,"top",n()),L(p,"right",o()),L(p,"bottom",r()),L(p,"left",d())}),T(h,p)},B=h=>{var p=xe(),S=U(p);ve(S,e,"custom-tip",{}),T(h,p)};Ue(g,h=>{v()?h(x):h(B,!1)})}y(w),y(f),Ze(f,h=>a==null?void 0:a(h)),V(()=>{I=Oe(w,I,{...s},"svelte-8wt3xa"),L(w,"tooltip",!0),L(w,"active",c())}),T(l,f),ye()}var di=P('<a target="_blank"><i></i></a>'),vi=P('<div class="rounded-xl border border-slate-400 bg-slate-800 p-4 flex justify-around flex-col items-center gap-4 max-w-96 bg-opacity-50"><h1 class="text-3xl font-bold"> </h1> <div class="flex justify-center flex-wrap gap-4 place-items-center"></div> <h2> </h2></div>');function H(l,e){var i=vi(),s=_(i),v=_(s,!0);y(s);var n=m(s,2);Ke(n,21,()=>e.icons,Ye,(d,c)=>{ci(d,{get tip(){return N(c).name},top:!0,children:(t,b)=>{var a=di();k(a,E(C));var f=_(a);y(a),V(()=>{A(a,"href",N(c).link),A(a,"aria-label",`Lien vers ${N(c).name??""}`),k(f,`${N(c).class??""} m-0 p-0 block`)}),T(t,a)},$$slots:{default:!0}})}),y(n);var o=m(n,2),r=_(o,!0);y(o),y(i),V(()=>{F(v,e.title),F(r,e.description)}),T(l,i)}var fi=P('<div id="skills"><div class="flex flex-wrap gap-4 justify-center"><!> <!> <!> <!> <!> <!></div></div>');function pi(l,e){he(e,!1),be();var i=fi(),s=_(i),v=_(s);H(v,{title:"Web",description:"Création de sites web pour développement fullstack",get icons(){return G.webIcons}});var n=m(v,2);H(n,{title:"Bases de données",description:"Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données",get icons(){return G.dbIcons}});var o=m(n,2);H(o,{title:"Java et Android",description:"Développement de logiciels en Java et d'applications Android",get icons(){return G.javaIcons}});var r=m(o,2);H(r,{title:"Python",description:" Utilisation de Python pour analyse de données statistiques",get icons(){return G.pythonIcons}});var d=m(r,2);H(d,{title:"Système",description:"Développement d'outils système et de scripts Bash",get icons(){return G.sysIcons}});var c=m(d,2);H(c,{title:"CI/CD",description:"Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus",get icons(){return G.deploymentIcons}}),y(s),y(i),T(l,i),ye()}var ui=P(`<!> <!> <!> <!> <div id="retexes" class="p-2"><!></div> <!> <div class="p-4" id="contact"><div class="flex p-4 justify-center items-center gap-10"><a href="https://www.linkedin.com/in/matis-olives-4b845629a/" aria-label="Lien vers mon LinkedIn" target="_blank"><i class="iconify icon-[simple-icons--linkedin] block"></i></a> <a href="mailto:matisolives@gmail.com" aria-label="M'envoyer un mail" target="_blank"><i class="iconify icon-[material-symbols--mail-rounded] block"></i></a></div> <div class="flex justify-center"><a target="_blank" class="text-white text-xl p-2 bg-slate-800 border-2 border-slate-600 rounded-lg shadow-xl hover:bg-slate-600 hover:border-slate-400 transition-colors flex items-center"><span class="icon-[pepicons-print--cv]"></span> Télécharger mon CV</a></div></div>`,1);function Ti(l){var e=ui(),i=U(e);ei(i);var s=m(i,2);ae(s,{text:"Compétences"});var v=m(s,2);pi(v,{});var n=m(v,2);ae(n,{text:"Projets"});var o=m(n,2),r=_(o);oi(r),y(o);var d=m(o,2);ae(d,{text:"Contacts et liens"});var c=m(d,2),t=_(c),b=_(t);k(b,E(C));var a=m(b,2);k(a,E(C)),y(t);var f=m(t,2),u=_(f);A(u,"href",`${M}/assets/CV_Matis_Olives.pdf`),y(f),y(c),T(l,e)}export{Ti as component};
