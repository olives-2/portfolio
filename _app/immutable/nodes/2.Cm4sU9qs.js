import{b as $,e as Ce,c as Ie,a as T,t as U,n as ke}from"../chunks/disclose-version.CDupqakr.js";import"../chunks/legacy.xk-FiD-J.js";import{ag as Se,D as ie,B as k,F as Y,C as Z,A as Ee,ae as ce,H as Me,E as ee,G as K,L as B,au as V,I as de,J as W,K as Te,x as te,av as Le,aw as Re,ad as Ae,ax as De,ay as fe,a6 as ve,aa as Ne,ak as Be,a1 as Pe,n as ae,az as Oe,aA as Ge,aB as He,a8 as ue,ab as ze,a9 as Ue,ap as Je,b as je,p as pe,k as I,s as _,i as me,l as y,t as z,j as ge,g as E}from"../chunks/runtime.C4R5TeIz.js";import{a as se,b as qe,s as M}from"../chunks/attributes.KEFaQBsT.js";import{i as he}from"../chunks/lifecycle.Bghvw-4A.js";import{b as ne}from"../chunks/paths.CTHo-Wi_.js";import{a as be}from"../chunks/store.ByBzWlrb.js";import{l as re,p as R,i as Qe}from"../chunks/props.D2KkFpbK.js";function _e(s,e){return e}function Ye(s,e,t,n){for(var g=[],l=e.length,o=0;o<l;o++)Re(e[o].e,g,!0);var v=l>0&&g.length===0&&t!==null;if(v){var i=t.parentNode;Ae(i),i.append(t),n.clear(),S(s,e[0].prev,e[l-1].next)}De(g,()=>{for(var p=0;p<l;p++){var a=e[p];v||(n.delete(a.k),S(s,a.prev,a.next)),fe(a.e,!v)}})}function ye(s,e,t,n,g,l=null){var o=s,v={flags:e,items:new Map,first:null};{var i=s;o=k?Y(ve(i)):i.appendChild(Se())}k&&Z();var p=null,a=!1;ie(()=>{var c=t(),f=Ee(c)?c:c==null?[]:ce(c),r=f.length;if(a&&r===0)return;a=r===0;let b=!1;if(k){var h=o.data===Me;h!==(r===0)&&(o=ee(),Y(o),K(!1),b=!0)}if(k){for(var x=null,m,d=0;d<r;d++){if(B.nodeType===8&&B.data===Ne){o=B,b=!0,K(!1);break}var u=f[d],w=n(u,d);m=xe(B,v,x,null,u,w,d,g,e),v.items.set(w,m),x=m}r>0&&Y(ee())}if(!k){var C=Be;Ve(f,v,o,g,e,(C.f&V)!==0,n)}l!==null&&(r===0?p?de(p):p=W(()=>l(o)):p!==null&&Te(p,()=>{p=null})),b&&K(!0),t()}),k&&(o=B)}function Ve(s,e,t,n,g,l,o){var v=s.length,i=e.items,p=e.first,a=p,c,f=null,r=[],b=[],h,x,m,d;for(d=0;d<v;d+=1){if(h=s[d],x=o(h,d),m=i.get(x),m===void 0){var u=a?a.e.nodes_start:t;f=xe(u,e,f,f===null?e.first:f.next,h,x,d,n,g),i.set(x,f),r=[],b=[],a=f.next;continue}if(Fe(m,h,d),m.e.f&V&&de(m.e),m!==a){if(c!==void 0&&c.has(m)){if(r.length<b.length){var w=b[0],C;f=w.prev;var J=r[0],P=r[r.length-1];for(C=0;C<r.length;C+=1)oe(r[C],w,t);for(C=0;C<b.length;C+=1)c.delete(b[C]);S(e,J.prev,P.next),S(e,f,J),S(e,P,w),a=w,f=P,d-=1,r=[],b=[]}else c.delete(m),oe(m,a,t),S(e,m.prev,m.next),S(e,m,f===null?e.first:f.next),S(e,f,m),f=m;continue}for(r=[],b=[];a!==null&&a.k!==x;)(l||!(a.e.f&V))&&(c??(c=new Set)).add(a),b.push(a),a=a.next;if(a===null)continue;m=a}r.push(m),f=m,a=m.next}if(a!==null||c!==void 0){for(var O=c===void 0?[]:ce(c);a!==null;)(l||!(a.e.f&V))&&O.push(a),a=a.next;var L=O.length;if(L>0){var G=v===0?t:null;Ye(e,O,G,i)}}te.first=e.first&&e.first.e,te.last=f&&f.e}function Fe(s,e,t,n){Le(s.v,e),s.i=t}function xe(s,e,t,n,g,l,o,v,i){var p=(i&Ge)!==0,a=(i&He)===0,c=p?a?Pe(g):ae(g):g,f=i&Oe?ae(o):o,r={i:f,v:c,k:l,a:null,e:null,prev:t,next:n};try{return r.e=W(()=>v(s,c,f),k),r.e.prev=t&&t.e,r.e.next=n&&n.e,t===null?e.first=r:(t.next=r,t.e.next=r.e),n!==null&&(n.prev=r,n.e.prev=r.e),r}finally{}}function oe(s,e,t){for(var n=s.next?s.next.e.nodes_start:t,g=e?e.e.nodes_start:t,l=s.e.nodes_start;l!==n;){var o=ue(l);g.before(l),l=o}}function S(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ke(s,e,t,n,g){var l=s,o="",v;ie(()=>{if(o===(o=e()??"")){k&&Z();return}v!==void 0&&(fe(v),v=void 0),o!==""&&(v=W(()=>{if(k){B.data;for(var i=Z(),p=i;i!==null&&(i.nodeType!==8||i.data!=="");)p=i,i=ue(i);if(i===null)throw ze(),Ue;$(B,p),l=Y(i);return}var a=o+"",c=Ce(a);$(ve(c),c.lastChild),l.before(c)}))})}function Xe(s,e,t){Je(()=>{var n=je(()=>e(s,t==null?void 0:t())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function le(s,e){var t=s.__className,n=Ze(e);k&&s.className===n?s.__className=n:(t!==n||k&&s.className!==n)&&(e==null?s.removeAttribute("class"):s.className=n,s.__className=n)}function Ze(s){return s??""}function A(s,e,t){if(t){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}var We=U('<span class="svelte-8wt3xa"><!></span>'),$e=U('<span class="tooltip-slot svelte-8wt3xa"><!> <span><!></span></span>');function et(s,e){const t=re(e,["children","$$slots","$$events","$$legacy"]),n=re(t,["tip","top","right","bottom","left","active","color"]);pe(e,!1);let g=R(e,"tip",8,""),l=R(e,"top",8,!1),o=R(e,"right",8,!1),v=R(e,"bottom",8,!1),i=R(e,"left",8,!1),p=R(e,"active",8,!1),a=R(e,"color",8,"#0f172a"),c=0;const f=d=>{const u=d.querySelector(".tooltip"),w=d.querySelector(".tip");u.style.setProperty("--tooltip-color",a());const C=()=>{P(),u.style.opacity=1,u.style.zIndex="10"},J=()=>{u.style.opacity=0,u.style.zIndex="-1"},P=()=>{const{height:L,width:G}=d.getBoundingClientRect(),{height:j,width:q}=u.getBoundingClientRect();let F,we,Q,H;l()?(H=-(q/2-G/2),Q=L+12):o()?(H=G+12,Q=Math.abs(L/2-j/2),c=j/2):v()?(H=-(q/2-G/2),F=L+12):i()?(H=-(q+12),Q=Math.abs(L/2-j/2),c=j/2):(H=-Math.floor(q/2-G/2),F=Math.floor(L+8),u.style.bottom="unset",u.style.right="unset"),u.style.top=`${F}px`,u.style.bottom=`${Q}px`,u.style.right=`${we}px`,u.style.left=`${H}px`,w.style.setProperty("--top-gap",`${c-4}px`)},O=new ResizeObserver(P);return O.observe(d),d.addEventListener("mouseover",C),d.addEventListener("mouseout",J),{destroy(){d.removeEventListener("mouseover",C),d.removeEventListener("mouseout",J),O.unobserve(d)}}};he();var r=$e(),b=I(r);se(b,e,"default",{});var h=_(b,2);let x;var m=I(h);Qe(m,g,d=>{var u=We();A(u,"tip",!0);var w=I(u);Ke(w,g),y(u),z(()=>{A(u,"top",l()),A(u,"right",o()),A(u,"bottom",v()),A(u,"left",i())}),T(d,u)},d=>{var u=Ie(),w=me(u);se(w,e,"custom-tip",{}),T(d,u)}),y(h),y(r),Xe(r,d=>f(d)),z(()=>{x=qe(h,x,{...n},"svelte-8wt3xa"),A(h,"tooltip",!0),A(h,"active",p())}),T(s,r),ge()}var tt=U("<a><i></i></a>"),at=U('<div><div class="flex justify-around flex-wrap w-1/8 max-w-64 gap-4"></div> <h2> </h2></div>');function D(s,e){var t=at(),n=I(t);ye(n,21,()=>e.icons,_e,(o,v)=>{et(o,{get tip(){return E(v).name},top:!0,children:(i,p)=>{var a=tt(),c=I(a);y(a),z(()=>{M(a,"href",E(v).link),M(a,"aria-label",`Lien vers ${E(v).name??""}`),le(c,`${E(v).class??""} text-4xl bg-slate-700 p-2 rounded-lg hover:bg-slate-500 duration-150`)}),T(i,a)},$$slots:{default:!0}})}),y(n);var g=_(n,2),l=I(g,!0);y(g),y(t),z(()=>{le(t,`${e.bgColor??""} rounded-lg border ${e.borderColor??""} p-4 flex justify-center flex-col items-center gap-2 max-w-96`),be(l,e.description)}),T(s,t)}var st=ke('<circle class="rotate-circle svelte-1b8oilk"></circle>'),nt=U('<section class="flex my-8 justify-center items-center bg-slate-800 bg-opacity-50 svelte-1b8oilk"><svg class="bokeh -z-50 svelte-1b8oilk" xmlns="http://www.w3.org/2000/svg"></svg> <h1 class="w-1/1 drop-shadow-lg text-5xl p-2 svelte-1b8oilk"> </h1></section>');function X(s,e){let t=[];((p=30)=>{for(let a=0;a<p;(a+=1)-1){const c=Math.random()*100+"%",f=Math.random()*100+"%",r=Math.random()*50+50,b=Math.random()*(.65-.2)+.2;t.push({cx:c,cy:f,r,opacity:b})}})();var l=nt(),o=I(l);ye(o,21,()=>t,_e,(p,a)=>{let c=()=>E(a).cx,f=()=>E(a).cy,r=()=>E(a).r,b=()=>E(a).opacity;var h=st();z(()=>{M(h,"cx",c()),M(h,"cy",f()),M(h,"r",r()),M(h,"opacity",b())}),T(p,h)}),y(o);var v=_(o,2),i=I(v,!0);y(v),y(l),z(()=>be(i,e.text)),T(s,l)}const N={webIcons:[{name:"HTML",class:"nf nf-dev-html5"},{name:"CSS",class:"nf nf-dev-css3"},{name:"JavaScript",class:"nf nf-dev-javascript"},{name:"React",class:"nf nf-dev-react",link:"https://fr.react.dev/"},{name:"Svelte",class:"nf nf-seti-svelte",link:"https://svelte.dev/"},{name:"Tailwind",class:"nf nf-md-tailwind",link:"https://tailwindcss.com/"},{name:"PHP",class:"nf nf-dev-php"},{name:"Symfony",class:"nf nf-dev-symfony",link:"https://symfony.com/"}],javaIcons:[{name:"Java",class:"nf nf-dev-java"},{name:"Android Studio",class:"nf nf-dev-android"},{name:"Maven",class:"nf nf-seti-maven"}],dbIcons:[{name:"Bases de données relationnelles (Oracle, Microsoft SQL Server)",class:"nf nf-fa-database"},{name:"MongoDB",class:"nf nf-dev-mongodb"}],pythonIcons:[{name:"Python",class:"nf nf-dev-python"},{name:"MongoDB",class:"nf nf-dev-mongodb"}],sysIcons:[{name:"C",class:"nf nf-custom-c"},{name:"Linux",class:"nf nf-dev-linux"},{name:"Bash et ZSH",class:"nf nf-cod-terminal_bash"}],deploymentIcons:[{name:"Docker (et Podman)",class:"nf nf-fa-docker"},{name:"GitLab CI/CD",class:"nf nf-fa-gitlab"}]};var rt=U(`<div id="presentation" class="flex justify-around items-center border border-slate-700 m-2 p-4 rounded-lg bg-slate-800 bg-opacity-50 w-3/4"><article class="w-2/4"><h1 class="text-6xl my-5">Matis Olives</h1> <h2 class="text-3xl my-5">Spécialisé dans le développement web et d'applications en POO</h2> <p class="text-xl">Je suis un étudiant d'informatique à l'IUT de Bordeaux-Gradignan. Dans
      cette formation, je réalise des missions me formant à des situations
      réelles du domaine de l'informatique.</p></article> <img alt="Portrait" class="rounded-full w-48 relative drop-shadow-lg"></div> <div id="skills"><!> <div class="flex flex-wrap gap-4 justify-center"><!> <!> <!> <!> <!> <!> <!></div></div> <div id="retexes"><!> <a>Cape</a></div> <div id="contact"><!></div>`,1);function pt(s,e){pe(e,!1),he();var t=rt(),n=me(t),g=_(I(n),2);M(g,"src",`${ne}/img/me.webp`),y(n);var l=_(n,2),o=I(l);X(o,{text:"Compétences"});var v=_(o,2),i=I(v);D(i,{description:"Création de sites web pour développement fullstack",get icons(){return N.webIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var p=_(i,2);D(p,{description:"Utilisation de différents SGBD relationels comme Microsoft SQL Server/Oracle SQL et SGBD NoSQL pour créer, utiliser et administrer des bases de données",get icons(){return N.javaIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var a=_(p,2);D(a,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return N.dbIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var c=_(a,2);D(c,{description:"Développement de logiciels en Java et d'applications Android",get icons(){return N.javaIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var f=_(c,2);D(f,{description:" Utilisation de Python pour analyse de données statistiques",get icons(){return N.pythonIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var r=_(f,2);D(r,{description:"Développement d'outils système et de scripts Bash",get icons(){return N.sysIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"});var b=_(r,2);D(b,{description:"Utilisation d'outils de virtualisation pour l'intégration et le déploiement continus",get icons(){return N.deploymentIcons},bgColor:"bg-slate-800",borderColor:"bg-slate-700"}),y(v),y(l);var h=_(l,2),x=I(h);X(x,{text:"Retours d'expérience"});var m=_(x,2);M(m,"href",`${ne??""}/retexes/cape`),y(h);var d=_(h,2),u=I(d);X(u,{text:"Contact et liens"}),y(d),T(s,t),ge()}export{pt as component};
