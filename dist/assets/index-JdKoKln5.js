import{V as _,M as v,N as S,r,J as e,bn as N,bo as f,bp as o,bq as k}from"./index-u6nC9utk.js";import{B as d}from"./Button-DED6Iqup.js";import{u as I}from"./useAddress-Bga9Ad-o.js";import{u as y,L as C}from"./loadingData-BCswzDcK.js";import{R as A}from"./SearchOutlined-BYYjgWGp.js";const L="/assets/banner1-Df08MXvE.png",P="/assets/banner2-CCvBMk3U.png";function T(){const{provinces:c}=I(),p=y(),{objJobSkill:a}=_(s=>s.jobSkillReducer),n=v(),m=S(),[i,u]=r.useState(""),[t,g]=r.useState(0),x=async()=>{const s=k();n(s)};r.useEffect(()=>{x()},[]);const b=(s,l)=>{a&&a.id&&n(N(a.id));const h=new URLSearchParams;h.append("jobSkillId",s.toString()),m(`/search?${h.toString()}&&skillName=${l}`)},j=()=>{n(f(i||"")),n(o(t));const s=new URLSearchParams;i?s.append("query",i):s.delete("query"),t!==0?(n(o(t)),s.append("provinceId",t.toString())):(n(o(t)),s.delete("provinceId")),m(`/search${s.toString()?`?${s.toString()}`:""}`)};return!Array.isArray(a)||a.length===0?e.jsx("div",{className:"banner",children:p&&e.jsx(C,{})}):e.jsxs("div",{className:"banner",children:[e.jsxs("div",{className:"banner__top",children:[e.jsx("div",{className:"banner__left",children:e.jsx("img",{src:L,alt:"img-banner",className:"w-full h-full"})}),e.jsx("div",{className:"banner__content cssanimation typing",children:e.jsx("h1",{className:"text",children:"Kết nối việc làm, Cơ hội mới, cuộc sống mới"})}),e.jsx("div",{className:"banner__right",children:e.jsx("img",{src:P,alt:"img-banner",className:"w-full h-full mb-2"})})]}),e.jsxs("div",{className:"banner__group",children:[e.jsxs("div",{className:"banner__search",children:[e.jsx(A,{className:"icon__search",style:{fontSize:"24px"}}),e.jsx("input",{type:"text",placeholder:"Tìm kiếm",className:"input__search",value:i,onChange:s=>u(s.target.value)}),e.jsx("div",{className:"line"}),e.jsxs("select",{className:"select__area",onChange:s=>{g(~~s.target.value),console.log(s.target.value)},children:[e.jsx("option",{value:"0",children:"Tất cả địa điểm"}),c==null?void 0:c.map((s,l)=>e.jsx("option",{value:s.id,children:s.name},`${s.id}_${l}`))]}),e.jsx(d,{title:"Tìm kiếm",className:"btn__search",circle:!1,onClick:j})]}),e.jsx("div",{className:"popular__keywords",children:e.jsxs("div",{className:"popular__keywords__group",children:[e.jsx("span",{className:"title",children:"Từ khóa phổ biến:"}),e.jsx("div",{className:"skills",children:Array.isArray(a)&&a.length>0?a.slice(0,10).map((s,l)=>e.jsx(d,{title:s.skill,className:"btn__jobSkill",circle:!1,color:"custom",onClick:()=>b(s.id,s.skill)},l)):e.jsx("p",{children:"Không có từ khóa phổ biến"})})]})})]})]})}export{T as B};
