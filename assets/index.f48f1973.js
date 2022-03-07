import{r as f,o as i,c as _,a as r,b as u,w as p,n as C,d as h,F as v,t as m,u as U,e as L,f as k,g as b,h as B,i as O,j as N}from"./vendor.40afe3ec.js";const S=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};S();var l=(t,s)=>{const o=t.__vccOpts||t;for(const[c,e]of s)o[c]=e;return o};const w={data(){return{isOpened:!1}},methods:{toggleMenu(){this.isOpened=!this.isOpened}}},A={id:"brand"},D=h("Tutorial"),V=h("About"),M=h("Users"),F=r("div",{class:"bar1"},null,-1),H=r("div",{class:"bar2"},null,-1),R=r("div",{class:"bar3"},null,-1),j={class:"mobile-menu"},z=h("About"),E=h("Users");function I(t,s,o,c,e,n){const a=f("router-link");return i(),_("header",null,[r("div",A,[u(a,{to:{name:"home"}},{default:p(()=>[D]),_:1})]),r("nav",null,[r("ul",null,[r("li",null,[u(a,{to:{name:"about"}},{default:p(()=>[V]),_:1})]),r("li",null,[u(a,{to:{name:"users"}},{default:p(()=>[M]),_:1})])])]),r("div",{id:"hamburger-icon",class:C({open:e.isOpened}),onClick:s[0]||(s[0]=(...d)=>n.toggleMenu&&n.toggleMenu(...d))},[F,H,R,r("ul",j,[r("li",null,[u(a,{to:{name:"about"}},{default:p(()=>[z]),_:1})]),r("li",null,[u(a,{to:{name:"users"}},{default:p(()=>[E]),_:1})])])],2)])}var P=l(w,[["render",I]]);const T={setup(t){return(s,o)=>{const c=f("router-view");return i(),_(v,null,[u(P),r("div",null,[u(c)])],64)}}},q={};function K(t,s){return i(),_("h1",null,"Home")}var W=l(q,[["render",K]]);const G={};function J(t,s){return i(),_("h1",null,"About")}var Q=l(G,[["render",J]]);const X={props:{id:String}},Y=r("h1",null,"UserDetail",-1);function Z(t,s,o,c,e,n){return i(),_(v,null,[Y,r("h2",null,m(t.$route.params.id),1),r("h3",null,m(o.id),1)],64)}var ee=l(X,[["render",Z]]);const g={props:{imgUrl:String,name:String,birth:String},data(){return{color:"red"}},computed:{compareBirth(){return console.log("compareBirth invoked in computed"),Date.parse(this.birth)<Date.parse("1970-01-01")?(this.color="green","older"):(this.color="red","younger")}}},$=()=>{U(t=>({"28185060":t.color}))},y=g.setup;g.setup=y?(t,s)=>($(),y(t,s)):$;const te=g,re={class:"card"},ne=["src"],se={class:"card__name"},oe={class:"card__birth"};function ae(t,s,o,c,e,n){return i(),_("div",re,[r("img",{src:o.imgUrl,alt:"profile image",class:"card__img"},null,8,ne),r("h2",se,m(o.name),1),r("h2",null,m(o.birth),1),r("h3",oe,m(n.compareBirth),1)])}var ce=l(te,[["render",ae],["__scopeId","data-v-88875da0"]]);const ie=L.create({baseURL:"https://random-data-api.com/api/"});async function _e(t=10){return await ie.get(`/users/random_user?size=${t}`)}const ue={data(){return{users:[]}},async mounted(){const t=await _e(2);console.log(t.data),this.users=t.data},components:{Card:ce}},le={class:"card-list"};function de(t,s,o,c,e,n){const a=f("Card");return i(),_("div",le,[(i(!0),_(v,null,k(e.users,d=>(i(),b(a,{imgUrl:d.avatar,name:d.username,birth:d.date_of_birth,key:d.id},null,8,["imgUrl","name","birth"]))),128))])}var pe=l(ue,[["render",de]]);const me={components:{CardList:pe}};function he(t,s,o,c,e,n){const a=f("CardList");return i(),b(a)}var fe=l(me,[["render",he]]);const ve=[{path:"/",component:W,name:"home"},{path:"/about",component:Q,name:"about"},{path:"/user",component:fe,name:"users"},{path:"/user/:id",component:ee,name:"user",props:!0}],ge=B({history:O(),routes:ve}),x=N(T);x.use(ge);x.mount("#app");
