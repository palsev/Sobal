import{L as i,u as M}from"./useDarkMode-2a25fc5b.js";import{a4 as D,a5 as C,a6 as R,R as g,N as S,a7 as E,l as P,Q as y,u as I}from"./connector-d867b6ec.js";import{p as $}from"./useTransactions-19512b92.js";import{r,am as G}from"./runtime-core.esm-bundler-24a2b16f.js";import{S as T}from"./index-1de0572e.js";import{t as U}from"./promise-5e82c3ab.js";import{aq as L}from"./BalBtn-a3a093af.js";import{h as W}from"./index-c7e2fe85.js";import{m as q}from"./meta.service-bad03ebe.js";const v=r(!1);function le(e){return e=J(e),e=K(e),e=B(e),e=H(e),e}function N(e){v.value=!0,document.body.style.display="none",window.location.href=e,location.reload()}function J(e){return e.beforeEach((a,l,o)=>{var n;const t=D(window.location.host,((n=a.redirectedFrom)==null?void 0:n.fullPath)??a.fullPath,a.params);t?window.location.href=t:o()}),e}function K(e){return e.beforeEach((a,l,o)=>{var t,n,u,d,p,m;if(v.value)o();else{const h=((t=a.params.networkSlug)==null?void 0:t.toString())??"";if(C(h))R(h,()=>o(),()=>{N(`/#${a.fullPath}`)});else{const w=["/","/terms-of-use","/privacy-policy","/cookies-policy","/risks"],k=["not-found","trade-redirect"];if((n=a.redirectedFrom)!=null&&n.fullPath&&((u=a.redirectedFrom)!=null&&u.fullPath.includes("/pool"))){const s=((d=a.redirectedFrom)==null?void 0:d.fullPath)??a.fullPath;e.push({path:`/${g[S.MAINNET].slug}${s}`})}else if(!a.redirectedFrom||k.includes((p=a.redirectedFrom)==null?void 0:p.name)||w.includes(a.fullPath))o();else{const s=((m=a.redirectedFrom)==null?void 0:m.fullPath)??a.fullPath,F=s.includes("/pool")?g[S.MAINNET].slug:E;e.push({path:`/${F}${s}`})}}}}),e}function B(e){return e.beforeEach((a,l,o)=>{var t;a.name==="add-liquidity"&&W((t=a.params)==null?void 0:t.id)?o({name:"pool",params:a.params}):o()}),e}function H(e){return e.beforeEach((a,l,o)=>{if(a.name==="pool"){o();return}q.setMeta(a),o()}),e}const f=r(!1),b=r(P(i.App.Locale,"en-US")),O=100,A=r(P(i.App.SwapDeadline,O));function Q(){f.value=!f.value}function Y(e){b.value=e,y(i.App.Locale,e),$.global.locale.value=e}function _(e){A.value=e,y(i.App.SwapDeadline,e)}function re(){return{modalOpen:f,locale:b,transactionDeadline:A,toggleModal:Q,setLocale:Y,setTransactionDeadline:_}}const c=r(!1);async function j(){if(window.self===window.top)return!1;try{return await U(new T().safe.getInfo(),1e3),!0}catch{return!1}}function se(){const{connectWallet:e,chainId:a}=L(),{darkMode:l,toggleDarkMode:o}=M(),{networkId:t,getNetworkSlug:n}=I();return G(async()=>{c.value=await j(),c.value&&(await e("safe"),a.value!==t.value&&N(`/#/${n(a.value)}`),l&&o())}),{isGnosisSafeApp:c}}export{le as a,re as b,N as h,se as u};
//# sourceMappingURL=useGnosisSafeApp-4db73fba.js.map