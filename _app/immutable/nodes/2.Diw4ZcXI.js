import{a as M,t as R,k as xe}from"../chunks/ClQajLCt.js";import"../chunks/QxV9QCC0.js";import{u as we,C as ke,x as q,e as ee,h as fe,N as Q,ac as Ie,ad as oe,d as ie,j as F,ae as pe,v as ue,af as Te,aG as te,p as me,y as le,aH as Ee,aI as ze,o as Pe,aJ as Se,F as Ce,g as Le,am as Me,k as Ae,ar as De,a5 as re,aK as Re,ab as je,aL as $e,aM as qe,a as Be,W as Ge,J as He,t as W,D as Ne,s as m,c as x,r as g,w as he,z as ye,f as K}from"../chunks/zFkh6Yn2.js";import{s as Y,a as Oe,c as C}from"../chunks/CkX5L9NN.js";import{a as Je,t as H,s as P}from"../chunks/Be13vnOE.js";import{i as be,h as Ue}from"../chunks/C9Moflbn.js";import{b as N}from"../chunks/DX4eGFF-.js";import{s as ne}from"../chunks/ColH5yQ-.js";import{l as ce,p as O,i as Ve}from"../chunks/Bb5IYdbX.js";import{T as se}from"../chunks/vEP866EB.js";function Qe(o,e){return e}function Ye(o,e,i,s){for(var d=[],l=e.length,r=0;r<l;r++)ze(e[r].e,d,!0);var c=l>0&&d.length===0&&i!==null;if(c){var h=i.parentNode;Pe(h),h.append(i),s.clear(),B(o,e[0].prev,e[l-1].next)}Se(d,()=>{for(var y=0;y<l;y++){var t=e[y];c||(s.delete(t.k),B(o,t.prev,t.next)),Ce(t.e,!c)}})}function Fe(o,e,i,s,d,l=null){var r=o,c={flags:e,items:new Map,first:null};{var h=o;r=q?ee(Le(h)):h.appendChild(we())}q&&fe();var y=null,t=!1,b=Me(()=>{var n=i();return je(n)?n:n==null?[]:me(n)});ke(()=>{var n=Q(b),v=n.length;if(t&&v===0)return;t=v===0;let p=!1;if(q){var w=r.data===Ie;w!==(v===0)&&(r=oe(),ee(r),ie(!1),p=!0)}if(q){for(var k=null,u,_=0;_<v;_++){if(F.nodeType===8&&F.data===Ae){r=F,p=!0,ie(!1);break}var A=n[_],f=s(A,_);u=_e(F,c,k,null,A,f,_,d,e,i),c.items.set(f,u),k=u}v>0&&ee(oe())}q||Ke(n,c,r,d,e,s,i),l!==null&&(v===0?y?pe(y):y=ue(()=>l(r)):y!==null&&Te(y,()=>{y=null})),p&&ie(!0),Q(b)}),q&&(r=F)}function Ke(o,e,i,s,d,l,r){var c=o.length,h=e.items,y=e.first,t=y,b,n=null,v=[],p=[],w,k,u,_;for(_=0;_<c;_+=1){if(w=o[_],k=l(w,_),u=h.get(k),u===void 0){var A=t?t.e.nodes_start:i;n=_e(A,e,n,n===null?e.first:n.next,w,k,_,s,d,r),h.set(k,n),v=[],p=[],t=n.next;continue}if(We(u,w,_),u.e.f&te&&pe(u.e),u!==t){if(b!==void 0&&b.has(u)){if(v.length<p.length){var f=p[0],a;n=f.prev;var z=v[0],D=v[v.length-1];for(a=0;a<v.length;a+=1)de(v[a],f,i);for(a=0;a<p.length;a+=1)b.delete(p[a]);B(e,z.prev,D.next),B(e,n,z),B(e,D,f),t=f,n=D,_-=1,v=[],p=[]}else b.delete(u),de(u,t,i),B(e,u.prev,u.next),B(e,u,n===null?e.first:n.next),B(e,n,u),n=u;continue}for(v=[],p=[];t!==null&&t.k!==k;)t.e.f&te||(b??(b=new Set)).add(t),p.push(t),t=t.next;if(t===null)continue;u=t}v.push(u),n=u,t=u.next}if(t!==null||b!==void 0){for(var j=b===void 0?[]:me(b);t!==null;)t.e.f&te||j.push(t),t=t.next;var S=j.length;if(S>0){var G=c===0?i:null;Ye(e,j,G,h)}}le.first=e.first&&e.first.e,le.last=n&&n.e}function We(o,e,i,s){Ee(o.v,e),o.i=i}function _e(o,e,i,s,d,l,r,c,h,y){var t=(h&$e)!==0,b=(h&qe)===0,n=t?b?De(d):re(d):d,v=h&Re?re(r):r,p={i:v,v:n,k:l,a:null,e:null,prev:i,next:s};try{return p.e=ue(()=>c(o,n,v,y),q),p.e.prev=i&&i.e,p.e.next=s&&s.e,i===null?e.first=p:(i.next=p,i.e.next=p.e),s!==null&&(s.prev=p,s.e.prev=p.e),p}finally{}}function de(o,e,i){for(var s=o.next?o.next.e.nodes_start:i,d=e?e.e.nodes_start:i,l=o.e.nodes_start;l!==s;){var r=Be(l);d.before(l),l=r}}function B(o,e,i){e===null?o.first=i:(e.next=i,e.e.next=i&&i.e),i!==null&&(i.prev=e,i.e.prev=e&&e.e)}function ve(o,e,i,s,d){var c;q&&fe();var l=(c=e.$$slots)==null?void 0:c[i],r=!1;l===!0&&(l=e[i==="default"?"children":i],r=!0),l===void 0||l(o,r?()=>s:s)}function Xe(o,e,i){Ge(()=>{var s=He(()=>e(o,i==null?void 0:i())||{});if(s!=null&&s.destroy)return()=>s.destroy()})}var Ze=R('<a class="flex flex-col justify-center items-center rounded-2xl p-4 relative z-10 overflow-hidden drop-shadow-xl md:w-1/4 h-4/12 border-2 border-slate-400 hover:border-white transition-all text-slate-100 svelte-1gzwy4i"><span id="color-layer" class="absolute opacity-0 bg-gradient-to-br from-orange-600 to-purple-600 w-full h-full z-30 svelte-1gzwy4i"></span> <img class="absolute object-cover brightness-50 w-full h-full svelte-1gzwy4i"> <div id="text" class="z-20"><h1 class="text-2xl text-center"> </h1> <h2 class="text-lg max-w-xl text-center"> </h2></div> <div class="flex justify-center items-center gap-1"><!></div></a>');function ae(o,e){var i=Ze(),s=m(x(i),2),d=m(s,2),l=x(d),r=x(l,!0);g(l);var c=m(l,2),h=x(c,!0);g(c),g(d);var y=m(d,2),t=x(y);Je(t,()=>e.children??Ne),g(y),g(i),W(()=>{Y(i,"href",e.link),Y(s,"src",e.img),Y(s,"alt",e.title),ne(r,e.title),ne(h,e.description)}),M(o,i)}var ei=R('<span class="svelte-8wt3xa"><!></span>'),ii=R('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function ti(o,e){const i=ce(e,["children","$$slots","$$events","$$legacy"]),s=ce(i,["tip","top","right","bottom","left","active","color"]);he(e,!1);let d=O(e,"tip",8,""),l=O(e,"top",8,!1),r=O(e,"right",8,!1),c=O(e,"bottom",8,!1),h=O(e,"left",8,!1),y=O(e,"active",8,!1),t=O(e,"color",8,"#0f172a"),b=0;const n=f=>{const a=f.querySelector(".tooltip"),z=f.querySelector(".tip");a.style.setProperty("--tooltip-color",t());const D=()=>{S(),a.style.opacity=1,a.style.zIndex="10"},j=()=>{a.style.opacity=0,a.style.zIndex="-1"},S=()=>{const{height:I,width:T}=f.getBoundingClientRect(),{height:E,width:$}=a.getBoundingClientRect();let Z,ge,X,J;l()?(J=-($/2-T/2),X=I+12):r()?(J=T+12,X=I/2-E/2,b=E/2):c()?(J=-($/2-T/2),Z=I+12):h()?(J=-($+12),X=I/2-E/2,b=E/2):(J=-Math.floor($/2-T/2),Z=Math.floor(I+8),a.style.bottom="unset",a.style.right="unset"),a.style.top=`${Z}px`,a.style.bottom=`${X}px`,a.style.right=`${ge}px`,a.style.left=`${J}px`,z.style.setProperty("--top-gap",`${b-4}px`)},G=new ResizeObserver(S);return G.observe(f),f.addEventListener("mouseover",D),f.addEventListener("mouseout",j),{destroy(){f.removeEventListener("mouseover",D),f.removeEventListener("mouseout",j),G.unobserve(f)}}};be();var v=ii(),p=x(v);ve(p,e,"default",{});var w=m(p,2);let k;var u=x(w);{var _=f=>{var a=ei();H(a,"tip",!0);var z=x(a);Ue(z,d),g(a),W(()=>{H(a,"top",l()),H(a,"right",r()),H(a,"bottom",c()),H(a,"left",h())}),M(f,a)},A=f=>{var a=xe(),z=K(a);ve(z,e,"custom-tip",{}),M(f,a)};Ve(u,f=>{d()?f(_):f(A,!1)})}g(w),g(v),Xe(v,f=>n==null?void 0:n(f)),W(()=>{k=Oe(w,k,{...s},"svelte-8wt3xa"),H(w,"tooltip",!0),H(w,"active",y())}),M(o,v),ye()}var si=R('<a target="_blank" class="block text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 border-2 border-slate-700 hover:border-slate-400 duration-150 text-slate-100"><i></i></a>'),ai=R('<div class="rounded-xl border border-slate-600 bg-slate-800 p-4 flex justify-around flex-col items-center gap-4 max-w-96 bg-opacity-50 backdrop-blur-sm"><div class="grid grid-cols-4 flex-wrap w-1/8 max-w-64 gap-4 p-2"></div> <h2> </h2></div>');function U(o,e){var i=ai(),s=x(i);Fe(s,21,()=>e.icons,Qe,(r,c)=>{ti(r,{get tip(){return Q(c).name},top:!0,children:(h,y)=>{var t=si(),b=x(t);g(t),W(()=>{Y(t,"href",Q(c).link),Y(t,"aria-label",`Lien vers ${Q(c).name??""}`),P(b,`${Q(c).class??""} m-0 p-0 block`)}),M(h,t)},$$slots:{default:!0}})}),g(s);var d=m(s,2),l=x(d,!0);g(d),g(i),W(()=>ne(l,e.description)),M(o,i)}const L="block text-3xl bg-slate-700 p-2 rounded-xl drop-shadow-xl shadow-inner hover:bg-slate-500 border-2 border-slate-500 hover:border-slate-400 duration-150 text-slate-100",V={webIcons:[{name:"HTML",class:"iconify icon-[simple-icons--github]"},{name:"CSS",class:"iconify icon-[simple-icons--html5]"},{name:"JavaScript",class:"iconify icon-[simple-icons--css3]"},{name:"React",class:"iconify icon-[simple-icons--react]",link:"https://fr.react.dev/"},{name:"Svelte",class:"iconify icon-[simple-icons--svelte]",link:"https://svelte.dev/"},{name:"Tailwind",class:"iconify icon-[simple-icons--tailwindcss]",link:"https://tailwindcss.com/"},{name:"PHP",class:"iconify icon-[simple-icons--php]"},{name:"Symfony",class:"nf iconify icon-[simple-icons--symfony]",link:"https://symfony.com/"}],javaIcons:[{name:"Java",class:"iconify icon-[devicon-plain--java]"},{name:"Android Studio",class:"iconify icon-[simple-icons--android]"},{name:"Maven",class:"iconify icon-[simple-icons--apachemaven]"}],dbIcons:[{name:"Oracle SQL",class:"iconify icon-[simple-icons--oracle]"},{name:"MongoDB",class:"iconify icon-[simple-icons--mongodb]"},{name:"Neo4J",class:"iconify icon-[simple-icons--neo4j]"}],pythonIcons:[{name:"Python",class:"iconify icon-[simple-icons--python]"},{name:"Matplotlib",class:"iconify icon-[devicon-plain--matplotlib]"},{name:"Pandas",class:"iconify icon-[simple-icons--pandas]"}],sysIcons:[{name:"C",class:"iconify icon-[simple-icons--c]"},{name:"Linux",class:"iconify icon-[simple-icons--linux]"},{name:"Bash et ZSH",class:"iconify icon-[simple-icons--gnubash]"}],deploymentIcons:[{name:"Docker",class:"iconify icon-[simple-icons--docker]"},{name:"Podman",class:"iconify icon-[simple-icons--podman]"},{name:"GitLab CI/CD",class:"iconify icon-[simple-icons--gitlab]"},{name:"Sonarqube",class:"iconify icon-[simple-icons--sonarqube]"}]};var ni=R('<div><i class="iconify icon-[simple-icons--svelte] block"></i></div> <div><i class="iconify icon-[simple-icons--javascript] block"></i></div>',1),oi=R('<div><i class="iconify icon-[simple-icons--symfony] block"></i></div> <div><i class="iconify icon-[simple-icons--mysql] block"></i></div> <div><i class="iconify icon-[simple-icons--tailwindcss] block"></i></div>',1),li=R('<div><i class="iconify icon-[simple-icons--react] block"></i></div> <div><i class="iconify icon-[simple-icons--typescript] block"></i></div> <div><i class="iconify icon-[devicon-plain--nodejs] block"></i></div>',1),ri=R(`<div class="flex justify-center"><div id="presentation" class="flex justify-between flex-col md:flex-row items-center backdrop-blur-sm border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 md:w-8/12"><article class="md:w-2/4"><h1 class="text-6xl p-2">Matis Olives</h1> <h2 class="text-3xl p-2">Spécialisé dans le développement web et d'applications en POO</h2> <p class="text-xl p-2">Je suis un étudiant d'informatique à l'IUT de Bordeaux-Gradignan. Dans
        cette formation, je réalise des missions me formant à des situations
        réelles du domaine de l'informatique.</p></article> <img alt="Portrait" class="rounded-full relative drop-shadow-2xl border-slate-400 border-2 w-5/12"></div></div> <!> <div id="skills"><div class="flex flex-wrap gap-4 justify-center"><!> <!> <!> <!> <!> <!></div></div> <!> <div id="retexes" class="flex flex-col p-2"><div class="flex justify-center align-center flex-wrap flex-col md:flex-row gap-2"><!> <!> <!></div></div> <!> <div id="contact" class="flex m-5 justify-center items-center gap-10"><a href="https://www.linkedin.com/in/matis-olives-4b845629a/" aria-label="Lien vers mon LinkedIn"><i class="iconify icon-[simple-icons--linkedin] block"></i></a> <a href="mailto:matisolives@gmail.com" aria-label="M'envoyer un mail"><i class="iconify icon-[material-symbols--mail-rounded] block"></i></a></div>`,1);function _i(o,e){he(e,!1),be();var i=ri(),s=K(i),d=x(s),l=m(x(d),2);Y(l,"src",`${N}/img/me.webp`),g(d),g(s);var r=m(s,2);se(r,{text:"Compétences"});var c=m(r,2),h=x(c),y=x(h);U(y,{description:"Création de sites web pour développement fullstack",get icons(){return V.webIcons}});var t=m(y,2);U(t,{description:"Utilisation de différents SGBD relationels et NoSQL pour créer, utiliser et administrer des bases de données",get icons(){return V.dbIcons}});var b=m(t,2);U(b,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return V.javaIcons}});var n=m(b,2);U(n,{description:" Utilisation de Python pour analyse de données statistiques",get icons(){return V.pythonIcons}});var v=m(n,2);U(v,{description:"Développement d'outils système et de scripts Bash",get icons(){return V.sysIcons}});var p=m(v,2);U(p,{description:"Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus",get icons(){return V.deploymentIcons}}),g(h),g(c);var w=m(c,2);se(w,{text:"Retours d'expérience"});var k=m(w,2),u=x(k),_=x(u);ae(_,{title:"Application d'administration",description:"Développement d'une application d'administration de réseaux virtuels",link:`${N}/retex/cape`,img:`${N}/retexes/cape/cape_admin.webp`,children:(S,G)=>{var I=ni(),T=K(I);P(T,C(L));var E=m(T,2);P(E,C(L)),M(S,I)},$$slots:{default:!0}});var A=m(_,2);ae(A,{title:"Application web",description:"Répertoire de séries TV",link:`${N}/retex/serizz`,img:`${N}/retexes/serizz/serizz.webp`,children:(S,G)=>{var I=oi(),T=K(I);P(T,C(L));var E=m(T,2);P(E,C(L));var $=m(E,2);P($,C(L)),M(S,I)},$$slots:{default:!0}});var f=m(A,2);ae(f,{title:"Projet innovant",description:"Portage d'un jeu de plateau en application web",link:`${N}/retex/living_forest`,img:`${N}/retexes/living_forest/living_forest.webp`,children:(S,G)=>{var I=li(),T=K(I);P(T,C(L));var E=m(T,2);P(E,C(L));var $=m(E,2);P($,C(L)),M(S,I)},$$slots:{default:!0}}),g(u),g(k);var a=m(k,2);se(a,{text:"Contact et liens"});var z=m(a,2),D=x(z);P(D,C(L));var j=m(D,2);P(j,C(L)),g(z),M(o,i),ye()}export{_i as component};
