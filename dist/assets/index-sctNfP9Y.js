import{N as v,r,V as w,M as I,a0 as S,J as t,$ as C,a1 as D}from"./index-pFVdx9L3.js";import{J}from"./JobCard-DTUbEtxy.js";import{J as P}from"./JobCardDetail-CpYlIj6r.js";import{B as y}from"./index-DefsL_nv.js";import{P as N}from"./Pagination-eX9XYnf-.js";import"./checked-p_Qw5dOe.js";import"./calendar-D2deYMYa.js";import"./Button-j4AAYWSM.js";import"./index-CLbcuEez.js";import"./role.enum-3anQw8ih.js";import"./useAddress-kTC2VjRJ.js";import"./loadingData-DZnKJ9bS.js";import"./SearchOutlined-BcT8nnCA.js";import"./RightOutlined-Dn15bgxX.js";import"./responsiveObserver-YHigBj1a.js";import"./index-BLPHaDof.js";import"./Overflow-B3BILk7e.js";import"./PurePanel-CJciXoPf.js";import"./index-CNQ_-D8b.js";import"./useIcons-CBnoQWkn.js";function X(){const o=v(),[h,l]=r.useState(0),[n,d]=r.useState(0),p=7,{objJob:s,objJobDetails:x}=w(e=>e.jobReducer),m=I(),g=async(e,a)=>{const c=C(e,a);m(c)},f=async e=>{const a=D(e);m(a)};r.useEffect(()=>{g(n-1,p)},[n]),r.useEffect(()=>{if(s!=null&&s.content){const e=s.content[0];e&&(l(e.jobId),f(e.jobId),o(`/list-job/${e.jobId}`))}},[s]);const j=e=>{l(e),f(e),o(`/list-job/${e}`)},b=()=>((s==null?void 0:s.content)??[]).map(e=>{const a=()=>{window.innerWidth<=840?o(`/card-detail-job/${e.jobId}`):j(e.jobId)};return t.jsx("div",{children:t.jsx(J,{item:e,isSelected:window.innerWidth>840?h===e.jobId:!1,onSelect:a,width:"w-[191px]",widthAddress:"w-auto max-w-[160px]"})},e.jobId)}),u=new URLSearchParams(S().search).get("section"),i=r.useRef(null);return r.useEffect(()=>{u==="listJob"&&i.current&&i.current.scrollIntoView({behavior:"smooth"})},[u]),t.jsxs("div",{children:[t.jsx(y,{}),t.jsxs("div",{ref:i,className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 pt-[66px] py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]",children:[t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsxs("div",{className:"flex flex-col items-start",children:[t.jsxs("h1",{className:"text-2xl font-semibold",children:["Có tất cả ",s==null?void 0:s.totalElements," công việc"]}),t.jsx("div",{className:"border-2 border-solid border-[#DC2E55] w-[292px] "})]}),t.jsx("div",{className:"flex flex-col gap-8",children:b()})]}),t.jsx("div",{className:"small-tablet:hidden",children:x&&t.jsx(P,{item:x})})]}),t.jsx(N,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:n,pageSize:p,total:s==null?void 0:s.totalElements,onChange:e=>d(e),itemRender:(e,a,c)=>a==="page"?t.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>d(e),children:e}):c,prevIcon:t.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:t.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{X as default};
