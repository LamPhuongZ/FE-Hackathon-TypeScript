import{N as S,J as e,r as h,V as R,M as C,bs as k}from"./index-B-XH01OG.js";import{D as f,a as u,b,c as g}from"./DropdownOption-Battb7M5.js";import{B as I}from"./Button-DVLe70uu.js";import{c as O,l as w}from"./calendar-D2deYMYa.js";import{L as v}from"./Label-BWTofOp8.js";import{u as z,U as A}from"./role.enum-5Ze-9Xop.js";import{c as V}from"./checked-p_Qw5dOe.js";import{s as T}from"./star-igAWdCcK.js";import{P as N}from"./Pagination-BI5vrzcu.js";import"./RightOutlined-A064xdJS.js";import"./responsiveObserver-DCA-vePo.js";import"./index-BuHiJfQB.js";import"./Overflow-Bkmcpuji.js";import"./PurePanel-CUNAt49f.js";import"./index-PNlK4sse.js";import"./useIcons-DSopAydX.js";import"./SearchOutlined-CErkTOXf.js";var a=(l=>(l.APPROVED="APPROVED",l.PENDING="PENDING",l.REJECTED="REJECTED",l))(a||{});function L({item:l,width:x,className:n,type:i=!0}){const d=S(),o=()=>{d(`/list-candidated?id=${l.jobId}`)};return e.jsx("div",{className:`cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ${n}`,children:e.jsxs("div",{className:"flex justify-center items-stretch gap-5",children:[e.jsxs("div",{className:"w-full flex flex-col justify-between gap-5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex items-center gap-1",children:e.jsx("p",{className:`text-3xl font-semibold truncate ${x} small-tablet:text-base small-tablet:w-[130px]`,children:l.title})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4",children:e.jsx("img",{src:O,alt:"calendar",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"text-xl font-medium pt-1 small-tablet:text-base",children:new Date(l.startDate).toLocaleDateString("vi-VN").replace(/\//g,"-")})]})]}),e.jsx("div",{className:"border border-solid border-[#E4E6E8] w-full"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"bg-[#E8E8E8] rounded-[20px]",children:e.jsx("p",{className:"text-sm font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]",children:l.jobType.name})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4",children:e.jsx("img",{src:w,alt:"location",className:"w-full h-full object-cover"})}),e.jsx("p",{className:" pt-1 small-tablet:text-sm",title:l.address,children:l.address})]})]})]}),i&&!(l.jobApprovalStatus===a.PENDING||l.jobApprovalStatus===a.REJECTED)&&e.jsx(I,{title:"Ứng Viên",color:"custom",className:"w-1/6 bg-[#DC2E55]",circle:!1,onClick:o})]})})}function se(){const[l,x]=h.useState(),[n,i]=h.useState(0),{role:d,isTokenExp:o}=z(),p=d===A.ROLE_EMPLOYER,m=4,{objJobManager:t}=R(s=>s.jobReducer),E=C(),y=async(s,c,r)=>{const P=k(s,c,r);E(P)};if(h.useEffect(()=>{p&&y(n,m,l??a.APPROVED)},[p,n,l]),o)return e.jsx("div",{children:"Token đã hết hạn, vui lòng đăng nhập lại."});const D=()=>((t==null?void 0:t.content)??[]).map(s=>e.jsx(L,{item:s},s.jobId)),j=async s=>{x(s)};return e.jsx("div",{className:"px-[30px]",children:p?e.jsxs("div",{className:"bg-white shadow-md py-4 px-11 rounded-[20px]",children:[e.jsxs("div",{className:"flex justify-between items-center gap-10",children:[e.jsx(v,{marginBottom:"mb-0",children:"Trạng thái công việc"}),e.jsx("div",{children:e.jsxs(f,{width:"w-[600px]",children:[e.jsx(u,{value:`${l??a.APPROVED}`}),e.jsx(b,{height:"h-[170px]",children:Object.values(a).map(s=>e.jsx(g,{name:"jobApprovalStatus",onClick:()=>j(s),children:s},s))})]})})]}),e.jsx("div",{className:"flex flex-col gap-11 mt-10",children:D()}),e.jsx(N,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:n,pageSize:m,total:t==null?void 0:t.totalElements,onChange:s=>i(s),itemRender:(s,c,r)=>c==="page"?e.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>i(s),children:s}):r,prevIcon:e.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:e.jsx("span",{style:{fontSize:"30px"},children:">"})})]}):e.jsxs("div",{className:"bg-white shadow-md py-4 px-11 rounded-[20px]",children:[e.jsxs("div",{className:"flex justify-between items-center gap-10",children:[e.jsx(v,{marginBottom:"mb-0",children:"Trạng thái công việc"}),e.jsx("div",{children:e.jsxs(f,{width:"w-[600px]",children:[e.jsx(u,{value:`${l??a.APPROVED}`}),e.jsx(b,{height:"h-[170px]",children:Object.values(a).map(s=>e.jsx(g,{name:"jobApprovalStatus",onClick:()=>j(s),children:s},s))})]})})]}),e.jsx("div",{className:"flex flex-col gap-11 mt-10",children:e.jsx("div",{className:"cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px]",children:e.jsxs("div",{className:"flex justify-center items-center gap-5",children:[e.jsx("img",{src:"https://via.placeholder.com/250x250",alt:"Job Image 1",className:"w-[150px] h-[135px] rounded-3xl small-tablet:hidden"}),e.jsxs("div",{className:"w-full flex flex-col justify-between gap-5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:"text-lg font-semibold truncate small-tablet:text-base small-tablet:w-[130px]",children:"Giao hàng"}),e.jsx("div",{className:"w-6 h-6 small-tablet:w-4 small-tablet:h-4",children:e.jsx("img",{src:V,alt:"checked",className:"w-full h-full object-cover"})})]}),e.jsxs("div",{className:"flex items-center justify-end text-end gap-1",children:[e.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4 flex items-center justify-end",children:e.jsx("img",{src:w,alt:"location",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"pt-1 text-sm truncate",children:"số 5, phường 5, quận 5"})]})]}),e.jsx("div",{className:"border border-solid border-[#E4E6E8] w-full"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"bg-[#E8E8E8] rounded-[20px] flex items-center",children:e.jsx("p",{className:"text-xs font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]",children:"Giao hàng"})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6",children:e.jsx("img",{src:T,alt:"",className:"w-full h-full"})}),e.jsx("p",{className:"text-2xl font-medium pt-1",children:"4.0"})]})]})]})]})})}),e.jsx(N,{style:{padding:"30px 20px",borderRadius:"5px",fontSize:"20px"},align:"center",current:n,pageSize:m,total:t==null?void 0:t.totalElements,onChange:s=>i(s),itemRender:(s,c,r)=>c==="page"?e.jsx("span",{style:{fontSize:"20px",padding:"0 20px",cursor:"pointer"},onClick:()=>i(s),children:s}):r,prevIcon:e.jsx("span",{style:{fontSize:"30px"},children:"<"}),nextIcon:e.jsx("span",{style:{fontSize:"30px"},children:">"})})]})})}export{se as default};
