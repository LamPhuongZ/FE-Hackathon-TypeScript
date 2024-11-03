import{J as e,r as o,V as $,M as B,a1 as p,a8 as O,a9 as z}from"./index-BK2FQocU.js";import{u as K,a as Q,F as n,b as d,I as U,o as _,d as Y,J as q}from"./validation-CzYkKdl-.js";import{L as t,D as g,a as f,b as D,c as v}from"./DropdownOption-QSF31vfP.js";import{B as G}from"./Button-DdKKP6yU.js";import{u as W}from"./useAddress-D9qG_PqS.js";import"./PurePanel-D9TEwxiU.js";import"./Overflow-DySd_ZlG.js";import"./index-CtLysW9H.js";import"./useIcons-DYK31srq.js";import"./SearchOutlined-DpIOZwyF.js";import"./button-CNdaH3MM.js";function X({name:a="",placeholder:x,content:l,control:u,className:h}){const{field:c}=K({control:u,name:a,defaultValue:""});return e.jsx("div",{className:"relative w-full",children:e.jsx("textarea",{id:a,...c,className:`w-full py-4 px-5 rounded-lg font-medium transition-all border border-solid border-[#DFDFDF] resize-none min-h-[200px] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${h}`,placeholder:x,value:c.value,children:l})})}function de(){const{control:a,handleSubmit:x,setValue:l,reset:u,formState:{errors:h}}=Q({mode:"onChange",resolver:_(q),defaultValues:{title:"",phone:"",address:"",startDate:"",endDate:"",duration:0,districtId:0,provinceId:0,jobTypeId:0,description:"",imageJobDetails:void 0}}),[c,b]=o.useState(!1),{provinces:w,districts:J,setProvinceAndFetchDistricts:M}=W(),{objJobType:y}=$(s=>s.typeReducer),S=B(),[j,A]=o.useState(),[N,H]=o.useState(),[m,F]=o.useState(),P=async s=>{A(s),l("jobTypeId",~~s.id)},E=s=>{H(s),l("provinceId",~~s.id),F(void 0),M(s.id)},k=s=>{F(s),l("districtId",~~s.id)},C=async()=>{const s=z();S(s)};o.useEffect(()=>{C()},[]);const[L,T]=o.useState([!1,!1,!1,!1]),R=s=>{T(r=>{const i=[...r];return i[s]=!0,i})},V=async s=>{try{const r={...s,startDate:s.startDate?Y(s.startDate).format("YYYY-MM-DDTHH:mm:ss.SSSSSS"):null,endDate:s.endDate?Y(s.endDate).format("YYYY-MM-DDTHH:mm:ss.SSSSSS"):null};if(await S(O(r)),L.some(i=>i)){p.error("Vui lòng tải lại ảnh!");return}p.success("Đã đăng bài thành công!"),u(),b(!0)}catch(r){p.error("Đăng bài thất bại!"),console.error("Add error:",r)}};return o.useEffect(()=>{c&&b(!1)},[c]),o.useEffect(()=>{var r;const s=Object.values(h);s.length>0&&p.error((r=s[0])==null?void 0:r.message)},[h]),console.log("🚀 ~ useEffect ~ arrErrors:",Object.values(h)),e.jsx("div",{className:"py-20 px-[72px]",children:e.jsxs("div",{className:"bg-white py-4 shadow-md px-11 rounded-xl",children:[e.jsx("div",{className:"mb-5 py-10",children:e.jsx("div",{children:e.jsx("h1",{className:"text-[40px] font-semibold capitalize",children:"Đăng bài ứng tuyển"})})}),e.jsxs("form",{onSubmit:x(V),children:[e.jsx("div",{className:"mb-5 lg:mb-10",children:e.jsxs(n,{children:[e.jsx(t,{htmlFor:"title",children:"Tiêu đề ứng tuyển"}),e.jsx(d,{name:"title",placeholder:"Nhập tiêu đề",control:a})]})}),e.jsxs("div",{className:"form-layout-col4",children:[e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(t,{htmlFor:"startDate",children:"Ngày bắt đầu"}),e.jsx(d,{type:"date",dateFormat:"YYYY-MM-DDTHH:mm:ss.ssssss",name:"startDate",placeholder:"Nhập ngày bắt đầu",control:a})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(t,{htmlFor:"endDate",children:"Ngày kết thúc"}),e.jsx(d,{type:"date",dateFormat:"YYYY-MM-DDTHH:mm:ss.ssssss",name:"endDate",placeholder:"Nhập ngày kết thúc",control:a})]})}),e.jsx("div",{className:"col-span-2",children:e.jsxs(n,{children:[e.jsx(t,{htmlFor:"duration",children:"Khoảng thời gian"}),e.jsx(d,{type:"number",name:"duration",min:0,placeholder:"Nhập khoảng thời gian",control:a})]})})]}),e.jsxs("div",{className:"form-layout",children:[e.jsxs(n,{children:[e.jsx(t,{htmlFor:"phone",children:"Số điện thoại"}),e.jsx(d,{type:"tel",name:"phone",placeholder:"Nhập số điện thoại",control:a})]}),e.jsxs(n,{children:[e.jsx(t,{children:"Loại công việc"}),e.jsxs(g,{children:[e.jsx(f,{value:`${(j==null?void 0:j.name)||"Loại công việc"}`}),e.jsx(D,{children:(Array.isArray(y)?y:[]).map(s=>e.jsx(v,{name:"jobTypeId",onClick:()=>P(s),children:s.name},s.id))})]})]})]}),e.jsxs("div",{className:"form-layout-col4",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs(n,{children:[e.jsx(t,{htmlFor:"address",children:"Địa chỉ"}),e.jsx(d,{name:"address",placeholder:"Nhập địa chỉ, tên đường",control:a})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(t,{children:"Tỉnh / Thành phố"}),e.jsxs(g,{children:[e.jsx(f,{value:N?N.name:"Tỉnh / Thành phố"}),e.jsx(D,{children:w.map(s=>e.jsx(v,{name:"provinceId",onClick:()=>E(s),children:s.name},s.id))})]})]})}),e.jsx("div",{className:"col-span-1",children:e.jsxs(n,{children:[e.jsx(t,{children:"Quận / Huyện"}),e.jsxs(g,{children:[e.jsx(f,{value:m?m==null?void 0:m.name:"Quận / Huyện"}),e.jsx(D,{children:J.map(s=>e.jsx(v,{name:"districtId",onClick:()=>k(s),children:s.name},s.id))})]})]})})]}),e.jsxs("div",{className:"mt-24",children:[e.jsx(t,{htmlFor:"",children:"Tải ảnh về công việc và nơi làm việc"}),e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-10 mb-20",children:e.jsx("div",{className:"grid grid-cols-2 gap-6",children:Array.from({length:4},(s,r)=>e.jsx(U,{name:`imageJobDetails${r+1}`,onFileSelect:i=>{i?(l(`imageJobDetails.${r+1}`,{file:i}),T(I=>(I[r]=!1,I))):console.error("Không có tệp nào được chọn")},resetTrigger:c,onRemove:()=>R(r)},`imageJobDetails${r+1}`))})})]}),e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(t,{htmlFor:"description",children:"Mô tả"}),e.jsx(X,{name:"description",control:a,placeholder:"Mô tả ..."})]})}),e.jsx(G,{type:"submit",title:"Đăng Bài",className:"w-full mt-10"})]})]})})}export{de as default};