import{N as I,r as o,V as v,M as w,$ as S,J as t,_ as C,a0 as D}from"./index-CKou-gTF.js";import{J}from"./JobCard-B0ROKMt2.js";import{J as P}from"./JobCardDetail-BdxPIB0-.js";import{B as y}from"./index-8YY_A0We.js";import{P as N}from"./Pagination-BoN8xT3f.js";import"./checked-p_Qw5dOe.js";import"./calendar-D2deYMYa.js";import"./Button-D5xU4s-M.js";import"./index-l4hPt5EC.js";import"./role.enum-DecTfclt.js";import"./useAddress-C6OHnN3A.js";import"./SearchOutlined-C9Ic0rWX.js";import"./RightOutlined-v3JXUC1w.js";import"./responsiveObserver-K7H1ar1I.js";import"./index-B7nCbPin.js";import"./Overflow-DCLNlXNo.js";import"./PurePanel-CW4GkeaQ.js";import"./index-BmrpR6pc.js";import"./useIcons-BXsiy434.js";function T(){const r=I(),[h,l]=o.useState(0),[n,d]=o.useState(0),p=7,{objJob:s,objJobDetails:x}=v(e=>e.jobReducer),m=w(),g=async(e,a)=>{const c=C(e,a);m(c)},f=async e=>{const a=D(e);m(a)};o.useEffect(()=>{g(n-1,p)},[n]),o.useEffect(()=>{if(s!=null&&s.content){const e=s.content[0];e&&(l(e.jobId),f(e.jobId),r(`/list-job/${e.jobId}`))}},[s]);const j=e=>{l(e),f(e),r(`/list-job/${e}`)},b=()=>((s==null?void 0:s.content)??[]).map(e=>{const a=()=>{window.innerWidth<=840?r(`/card-detail-job/${e.jobId}`):j(e.jobId)};return t.jsx("div",{children:t.jsx(J,{item:e,isSelected:window.innerWidth>840?h===e.jobId:!1,onSelect:a,width:"w-[191px]",widthAddress:"w-auto max-w-[160px]"})},e.jobId)}),u=new URLSearchParams(S().search).get("section"),i=o.useRef(null);return o.useEffect(()=>{u==="listJob"&&i.current&&i.current.scrollIntoView({behavior:"smooth"})},[u]),t.jsxs("div",{children:[t.jsx(y,{}),t.jsxs("div",{ref:i,className:"grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 pt-[66px] py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]",children:[t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsxs("div",{className:"flex flex-col items-start",children:[t.jsxs("h1",{className:"text-2xl font-semibold",children:["Có tất cả ",s==null?void 0:s.totalElements," công việc"]}),t.jsx("div",{className:"border-2 border-solid border-[#DC2E55] w-[292px] "})]}),t.jsx("div",{className:"flex flex-col gap-8",children:b()})]}),t.jsx("div",{className:"small-tablet:hidden",children:x&&t.jsx(P,{item:x})})]}),t.jsx(N,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:n,pageSize:p,total:s==null?void 0:s.totalElements,onChange:e=>d(e),itemRender:(e,a,c)=>a==="page"?t.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>d(e),children:e}):c,prevIcon:t.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:t.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{T as default};