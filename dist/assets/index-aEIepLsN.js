import{V as l,J as s,M as x,U as j,r as m,bk as g}from"./index-oewEFuDq.js";import{B as h}from"./Button-BI1GIPrp.js";import{u as _}from"./useAddress-Bg7I66UA.js";import{R as N}from"./SearchOutlined-izeilgEQ.js";const f="/assets/banner1-Df08MXvE.png",k="/assets/banner2-CCvBMk3U.png",v=()=>{const{isLoading:i}=l(a=>a.jobReducer),{isLoading:r}=l(a=>a.jobSkillReducer),{isLoading:n}=l(a=>a.typeReducer),{isLoading:c}=l(a=>a.userReducer);return{jobLoading:i,jobSkillLoading:r,typeLoading:n,userLoading:c}};function L(){return s.jsx("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:s.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})}function R(){const{provinces:i}=_(),r=v(),{objJobSkill:n}=l(e=>e.jobSkillReducer),c=x(),a=j(),[t,d]=m.useState(""),u=async()=>{const e=g();c(e)};m.useEffect(()=>{u()},[]);const p=e=>{d(e)},b=()=>{t&&a(`/search?query=${encodeURIComponent(t)}`)};return!Array.isArray(n)||n.length===0?s.jsx("div",{className:"banner",children:r&&s.jsx(L,{})}):s.jsxs("div",{className:"banner",children:[s.jsxs("div",{className:"banner__top",children:[s.jsx("div",{className:"banner__left",children:s.jsx("img",{src:f,alt:"img-banner",className:"w-full h-full"})}),s.jsx("div",{className:"banner__content cssanimation typing",children:s.jsx("h1",{className:"text",children:"Kết nối việc làm, Cơ hội mới, cuộc sống mới"})}),s.jsx("div",{className:"banner__right",children:s.jsx("img",{src:k,alt:"img-banner",className:"w-full h-full mb-2"})})]}),s.jsxs("div",{className:"banner__group",children:[s.jsxs("div",{className:"banner__search",children:[s.jsx(N,{className:"icon__search",style:{fontSize:"24px"}}),s.jsx("input",{type:"text",placeholder:"Tìm kiếm",className:"input__search",value:t,onChange:e=>d(e.target.value)}),s.jsx("div",{className:"line"}),s.jsxs("select",{className:"select__area",children:[s.jsx("option",{value:"all",children:"Tất cả địa điểm"}),i==null?void 0:i.map((e,o)=>s.jsx("option",{children:e.name},`${e.id}_${o}`))]}),s.jsx(h,{title:"Tìm kiếm",className:"btn__search",circle:!1,onClick:b})]}),s.jsx("div",{className:"popular__keywords",children:s.jsxs("div",{className:"popular__keywords__group",children:[s.jsx("span",{className:"title",children:"Từ khóa phổ biến:"}),s.jsx("div",{className:"skills",children:Array.isArray(n)&&n.length>0?n.slice(0,10).map((e,o)=>s.jsx(h,{title:e.skill,className:"btn__jobSkill",circle:!1,color:"custom",onClick:()=>p(e.skill)},o)):s.jsx("p",{children:"Không có từ khóa phổ biến"})})]})})]})]})}export{R as B,L,v as u};