import{N as I,r,V as v,M as w,$ as S,J as t,_ as C,a0 as D}from"./index-BK2FQocU.js";import{J}from"./JobCard-ERQDjAEU.js";import{J as P}from"./JobCardDetail-CO9U2hi_.js";import{B as y}from"./index-Cawpg4k7.js";import{P as N}from"./Pagination-BcNhG-fJ.js";import"./calendar-D2deYMYa.js";import"./Button-DdKKP6yU.js";import"./index-CksmKbc2.js";import"./role.enum-BHDjr6Q3.js";import"./useAddress-D9qG_PqS.js";import"./SearchOutlined-DpIOZwyF.js";import"./RightOutlined-D1xVRlBm.js";import"./responsiveObserver-CwaVC2kM.js";import"./index-Cau-TXkY.js";import"./Overflow-DySd_ZlG.js";import"./PurePanel-D9TEwxiU.js";import"./index-CtLysW9H.js";import"./useIcons-DYK31srq.js";function Q(){const u=I(),[h,c]=r.useState(0),[n,l]=r.useState(0),d=7,{objJob:s,objJobDetails:p}=v(e=>e.jobReducer),x=w(),g=async(e,a)=>{const i=C(e,a);x(i)},m=async e=>{const a=D(e);x(a)};r.useEffect(()=>{g(n-1,d)},[n]),r.useEffect(()=>{if(s!=null&&s.content){const e=s.content[0];e&&(c(e.jobId),m(e.jobId))}},[s]);const j=e=>{c(e),m(e)},b=()=>((s==null?void 0:s.content)??[]).map(e=>{const a=()=>{window.innerWidth<=840?u(`/card-detail-job/${e.jobId}`):j(e.jobId)};return t.jsx("div",{children:t.jsx(J,{item:e,isSelected:window.innerWidth>840?h===e.jobId:!1,onSelect:a,width:"w-[191px]",widthAddress:"w-auto max-w-[160px]"})},e.jobId)}),f=new URLSearchParams(S().search).get("section"),o=r.useRef(null);return r.useEffect(()=>{f==="listJob"&&o.current&&o.current.scrollIntoView({behavior:"smooth"})},[f]),t.jsxs("div",{children:[t.jsx(y,{}),t.jsxs("div",{ref:o,className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 pt-[66px] py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]",children:[t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsxs("div",{className:"flex flex-col items-start",children:[t.jsxs("h1",{className:"text-2xl font-semibold",children:["Có tất cả ",s==null?void 0:s.totalElements," công việc"]}),t.jsx("div",{className:"border-2 border-solid border-[#DC2E55] w-[292px] "})]}),t.jsx("div",{className:"flex flex-col gap-8",children:b()})]}),t.jsx("div",{className:"small-tablet:hidden",children:p&&t.jsx(P,{item:p})})]}),t.jsx(N,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:n,pageSize:d,total:s==null?void 0:s.totalElements,onChange:e=>l(e),itemRender:(e,a,i)=>a==="page"?t.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>l(e),children:e}):i,prevIcon:t.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:t.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{Q as default};