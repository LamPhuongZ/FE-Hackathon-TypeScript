import{r as n,b as j,a as b,j as e,g as h,c as S}from"./index-BI43o5J7.js";import{J}from"./JobCard-CFxoWA8h.js";import{J as D}from"./JobCardDetail-BVACStcc.js";import{P as I}from"./Pagination-BkEGO0B5.js";import"./checked-p_Qw5dOe.js";import"./location-C6017rog.js";import"./Button-u1BPlhFy.js";import"./Overflow-BkKEpH5v.js";import"./responsiveObserver-B9TU4czE.js";import"./useIcons-BitlO8zO.js";import"./index-BiDFPFbx.js";function _(){const[x,m]=n.useState(1),[r,i]=n.useState(0),c=7,{objJob:s,objJobDetails:p}=j(t=>t.jobReducer),d=b(),u=async(t,a)=>{const o=h(t,a);d(o)},l=async t=>{const a=S(t);d(a)};n.useEffect(()=>{u(r-1,c),l(1)},[r]);const g=t=>{m(t),l(t)},f=()=>((s==null?void 0:s.content)??[]).map(t=>e.jsx("div",{children:e.jsx(J,{item:t,isSelected:x===t.jobId,onSelect:()=>g(t.jobId),width:"w-[191px]"})},t.jobId));return e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 py-4 px-[72px]",children:[e.jsx("div",{className:"flex flex-col gap-8",children:f()}),p&&e.jsx(D,{item:p})]}),e.jsx(I,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:r,pageSize:c,total:s==null?void 0:s.totalElements,onChange:t=>i(t),itemRender:(t,a,o)=>a==="page"?e.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>i(t),children:t}):o,prevIcon:e.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:e.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{_ as default};