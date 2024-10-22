import{j as e,r as c,a as k,b as L,B as x,f as C}from"./index-DhI-xt9E.js";import{b as E,u as R,F as d,L as a,a as u,I as j,o as I,J as A}from"./validation-BmmLpffM.js";import{B}from"./Button-CHgJIKcL.js";import"./useIcons-jDJYIqej.js";import"./index-p73gxAHu.js";import"./SearchOutlined-CgnCFxX1.js";import"./Overflow-DSeIglUj.js";import"./button-DmlVS39n.js";function J({name:o="",placeholder:t,content:n,control:h,className:i}){const{field:l}=E({control:h,name:o,defaultValue:""});return e.jsx("div",{className:"relative w-full",children:e.jsx("textarea",{id:o,...l,className:`w-full py-4 px-5 rounded-lg font-medium transition-all border border-solid border-[#DFDFDF] resize-none min-h-[200px] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${i}`,placeholder:t,value:l.value,children:n})})}const N=c.createContext(void 0);function M({children:o}){const[t,n]=c.useState(!1),i={show:t,setShow:n,toggle:()=>{n(!t)}};return e.jsx(N.Provider,{value:i,children:o})}function v(){const o=c.useContext(N);if(typeof o>"u")throw new Error("useDropdown must be used within DropdownProvider");return o}function O({children:o}){return e.jsx(M,{children:e.jsx("div",{className:"relative inline-block w-full",children:o})})}function V({value:o=""}){const{toggle:t,show:n}=v();return e.jsxs("div",{className:"flex items-center justify-between px-[20px] py-[16px] border border-solid border-[#DFDFDF] rounded-lg cursor-pointer font-medium",onClick:t,children:[e.jsx("span",{children:o}),e.jsx("span",{children:n?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})}function z({children:o}){const{show:t}=v();return e.jsx(e.Fragment,{children:t&&e.jsx("div",{className:"absolute top-full left-0 w-full bg-white shadow-sm",children:o})})}function W({onClick:o,children:t,name:n}){const{setShow:h}=v(),i=()=>{o==null||o(),h(!1)};return e.jsx("div",{id:n,className:"px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100",onClick:i,children:t})}function Y(){const{control:o,handleSubmit:t,setValue:n,reset:h,formState:{errors:i}}=R({mode:"onChange",resolver:I(A),defaultValues:{titlePost:"",phone:"",address:"",jobType:"",description:"",pic1:void 0,pic2:void 0,pic3:void 0,pic4:void 0}}),[l,g]=c.useState(!1),{objJobType:b}=k(s=>s.typeReducer),F=L(),[f,w]=c.useState(),D=async s=>{w(s),n("jobType",s.name)},S=async()=>{const s=C();F(s)};c.useEffect(()=>{S()},[]);const[T,p]=c.useState([!1,!1,!1,!1]),m=s=>{p(r=>{const y=[...r];return y[s]=!0,y})},P=async()=>{try{if(T.some(s=>s)){x.error("Vui lòng tải lại ảnh!");return}x.success("Đã đăng bài thành công!"),h({titlePost:"",phone:"",address:"",jobType:"",description:"",pic1:void 0,pic2:void 0,pic3:void 0,pic4:void 0}),g(!0),w(void 0)}catch(s){x.error("Đăng bài thất bại!"),console.error("Add error:",s)}};return c.useEffect(()=>{l&&g(!1)},[l]),c.useEffect(()=>{var r;const s=Object.values(i);s.length>0&&x.error((r=s[0])==null?void 0:r.message)},[i]),console.log("🚀 ~ useEffect ~ arrErrors:",Object.values(i)),e.jsx("div",{className:"py-20 px-[72px]",children:e.jsxs("div",{className:"bg-white py-4 shadow-md px-11 rounded-xl",children:[e.jsx("div",{className:"mb-5 py-10",children:e.jsx("div",{children:e.jsx("h1",{className:"text-[40px] font-semibold capitalize",children:"Đăng bài ứng tuyển"})})}),e.jsxs("form",{onSubmit:t(P),children:[e.jsx("div",{className:"mb-5 lg:mb-10",children:e.jsxs(d,{children:[e.jsx(a,{htmlFor:"titlePost",children:"Tiêu đề ứng tuyển"}),e.jsx(u,{name:"titlePost",placeholder:"Nhập tiêu đề",control:o})]})}),e.jsxs("div",{className:"form-layout",children:[e.jsxs(d,{children:[e.jsx(a,{htmlFor:"phone",children:"Số điện thoại"}),e.jsx(u,{name:"phone",placeholder:"Nhập số điện thoại",control:o})]}),e.jsxs(d,{children:[e.jsx(a,{children:"Loại công việc"}),e.jsxs(O,{children:[e.jsx(V,{value:`${(f==null?void 0:f.name)||"Loại công việc"}`}),e.jsx(z,{children:(Array.isArray(b)?b:[]).map(s=>e.jsx(W,{name:"jobType",onClick:()=>D(s),children:s.name},s.id))})]})]})]}),e.jsxs("div",{className:"form-layout-col4",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs(d,{children:[e.jsx(a,{htmlFor:"address",children:"Địa chỉ"}),e.jsx(u,{name:"address",placeholder:"Nhập địa chỉ, tên đường",control:o})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(d,{children:[e.jsx(a,{htmlFor:"district",children:"Quận / Huyện"}),e.jsx(u,{name:"district",placeholder:"Nhập quận, huyện",control:o})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(d,{children:[e.jsx(a,{htmlFor:"province",children:"Tỉnh / Thành Phố"}),e.jsx(u,{name:"province",placeholder:"Nhập tỉnh, thành phố",control:o})]})})]}),e.jsxs("div",{className:"mt-24",children:[e.jsx(a,{htmlFor:"",children:"Tải ảnh về công việc và nơi làm việc"}),e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-10 mb-20",children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(j,{name:"pic1",onFileSelect:s=>{s&&(n("pic1",s),p(r=>(r[0]=!1,r)))},resetTrigger:l,onRemove:()=>m(0)}),e.jsx(j,{name:"pic2",onFileSelect:s=>{s&&(n("pic2",s),p(r=>(r[1]=!1,r)))},resetTrigger:l,onRemove:()=>m(1)}),e.jsx(j,{name:"pic3",onFileSelect:s=>{s&&(n("pic3",s),p(r=>(r[2]=!1,r)))},resetTrigger:l,onRemove:()=>m(2)}),e.jsx(j,{name:"pic4",onFileSelect:s=>{s&&(n("pic4",s),p(r=>(r[3]=!1,r)))},resetTrigger:l,onRemove:()=>m(3)})]})})]}),e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(a,{htmlFor:"description",children:"Mô tả"}),e.jsx(J,{name:"description",control:o,placeholder:"Mô tả ..."})]})}),e.jsx(B,{type:"submit",title:"Đăng Bài",className:"w-full mt-10"})]})]})})}export{Y as default};
