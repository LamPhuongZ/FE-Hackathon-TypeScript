import{J as e,$ as j,N as g,M as N,r as p,V as v,bs as b}from"./index-CKou-gTF.js";import{c as w}from"./checked-p_Qw5dOe.js";import{s as y}from"./star-igAWdCcK.js";import{P as E}from"./Pagination-BoN8xT3f.js";import"./RightOutlined-v3JXUC1w.js";import"./responsiveObserver-K7H1ar1I.js";import"./index-B7nCbPin.js";import"./Overflow-DCLNlXNo.js";import"./PurePanel-CW4GkeaQ.js";import"./index-BmrpR6pc.js";import"./useIcons-BXsiy434.js";import"./SearchOutlined-C9Ic0rWX.js";function S({item:s,isSelected:o,onSelect:t,className:n,showAmount:c=!1,textWidthName:r="text-3xl"}){return e.jsxs("div",{className:`bg-white rounded-3xl shadow-md hover:shadow-xl flex gap-5 py-6 px-9 ${n} ${o?"selectCard":""}`,onClick:t,children:[e.jsx("div",{className:"my-auto",children:e.jsx("div",{className:"w-[130px] h-[130px]",children:e.jsx("img",{src:s.avatar,alt:"avatar",className:"bg-[#E8E8E8] w-full h-full object-cover rounded-full"})})}),e.jsxs("div",{className:"flex flex-col justify-evenly gap-2 w-[80%] mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center gap-5 ",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("h1",{className:`${r} font-semibold`,children:s.fullname}),s.isVerified?e.jsx("div",{className:"w-6 h-6 small-tablet:w-4 small-tablet:h-4",children:e.jsx("img",{src:w,alt:"checked",className:"w-full h-full object-cover"})}):""]}),c&&e.jsxs("div",{className:"font-semibold flex items-center gap-2",children:[e.jsx("p",{className:"text-base",children:"Số việc đã hoàn thành : "}),e.jsx("p",{className:"text-3xl",children:s.numOfJob})]})]}),e.jsx("div",{className:"border border-solid border-[#E4E6E8]"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"bg-[#E8E8E8] rounded-[20px]",children:e.jsx("p",{className:"text-lg font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]",children:s.jobSkills&&s.jobSkills.length>0?s.jobSkills[0].skill:"Kỹ năng"})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6",children:e.jsx("img",{src:y,alt:"",className:"w-full h-full"})}),e.jsx("p",{className:"text-3xl font-medium pt-1",children:s.star&&s.star?s.star:0})]})]})]})]})}function V(){const s=j(),t=new URLSearchParams(s.search).get("id"),n=g(),c=N(),[r,x]=p.useState(0),m=7,{objCandidate:l}=v(a=>a.candidateReducer),h=async(a,i,d)=>{const f=b(a,i,d);c(f)};p.useEffect(()=>{t&&h(Number(t),r-1,m)},[t,r]);const u=()=>((l==null?void 0:l.content)??[]).map(a=>e.jsx("div",{children:e.jsx(S,{className:"cursor-pointer",item:a,showAmount:!0,onSelect:()=>n(`/card-candidate-detail-job/${t}/${a.id}`)})},a.id));return e.jsxs("div",{className:"px-[30px]",children:[e.jsxs("div",{className:"bg-white shadow-md py-4 px-11 rounded-[20px]",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-2xl font-medium",children:"Danh sách ứng viên"})}),e.jsx("div",{className:"flex flex-col gap-10 mt-10",children:u()})]}),e.jsx(E,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:r,pageSize:m,total:l==null?void 0:l.totalElements,onChange:a=>x(a),itemRender:(a,i,d)=>i==="page"?e.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>x(a),children:a}):d,prevIcon:e.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:e.jsx("span",{style:{fontSize:"30px"},children:">"})})]})}export{V as default};