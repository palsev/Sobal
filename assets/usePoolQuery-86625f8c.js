var g=Object.defineProperty;var d=(t,o,e)=>o in t?g(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var a=(t,o,e)=>(d(t,typeof o!="symbol"?o+"":o,e),e);import{av as w,aZ as P,aY as k}from"./BalBtn-a3a093af.js";import{g as A,c as b,b as R,i as m,P as n,p as q}from"./api-069228f5.js";import{N as v,t as D}from"./index-c7e2fe85.js";import{c as S,a8 as I}from"./connector-d867b6ec.js";import{q as E,v as T,r as z}from"./runtime-core.esm-bundler-24a2b16f.js";class F{constructor(o){a(this,"repository");a(this,"queryArgs");this.tokens=o;const e=A();this.repository=new e(this.buildRepositories(),{timeout:30*1e3}),this.queryArgs={}}async fetch(o){this.queryArgs=o;const[e]=await this.repository.fetch();return e}initializeDecoratedAPIRepository(){return{fetch:async()=>{const o=await b.pool.get(this.queryArgs);if(!o)throw new Error("Cannot find pool via Balancer API");return[o]},get skip(){return 0}}}initializeDecoratedSubgraphRepository(){return{fetch:async()=>{const o=await R.pools.get(this.queryArgs);return await new n(o).decorate(this.tokens.value,!0)},get skip(){return 0}}}buildRepositories(){const o=[];if(m){const s=this.initializeDecoratedAPIRepository();o.push(s)}const e=this.initializeDecoratedSubgraphRepository();return o.push(e),o}}function K(t,o=z(!0),e={}){const s=q.findPool(t),{injectTokens:c,tokens:i}=w(),p=new F(i),l=E(()=>o.value);function u(){return{chainId:S.network.chainId,where:{id:{eq:t==null?void 0:t.toLowerCase()},totalShares:{gt:-1},poolType:{in:I.IncludedPoolTypes}}}}const y=k.Pools.Current(t),h=async()=>{let r;if(s?r=s:r=await p.fetch(u()),!r)throw new Error("Pool does not exist");return r.onchain||([r]=await new n([r]).decorate(i.value,!1)),c([...v(r),...D(r.tokens),r.address]),r},f=T({enabled:l,keepPreviousData:!0,refetchOnWindowFocus:!1,...e});return P(y,h,f)}export{K as u};
//# sourceMappingURL=usePoolQuery-86625f8c.js.map