import{W as y,r as d,N as U,P as _,a3 as b,K as a,a4 as H,a5 as K,Y as Q}from"./index-LyLtH85X.js";import{L as r}from"./Label-KoOU49hk.js";import{I as u,a as c}from"./ImageUpload-B-8IDDzh.js";import{u as z,d as D,F as i,o as V,P as W}from"./validation-WG9Ztj34.js";import{B as q}from"./Button-CjmVQLNZ.js";import{s as G}from"./star-igAWdCcK.js";import{D as k,a as F,b as O,c as I}from"./DropdownOption-BEEvz1mI.js";import{u as X}from"./useAddress-CVzHGwug.js";import{u as Z,U as $}from"./role.enum-DLuvSdRe.js";import{S as P}from"./index-j51b8INV.js";import"./PurePanel-DY40WfVK.js";import"./Overflow-DqBOuTZd.js";import"./index-Bwt0LYZi.js";import"./useIcons-DO1ljww1.js";import"./SearchOutlined-urhn5vgU.js";import"./button-BhqHQu8Q.js";function fe(){const{role:Y}=Z(),E=Y===$.ROLE_EMPLOYER,{userProfile:s}=y(e=>e.userReducer),{objJobSkill:m}=y(e=>e.jobSkillReducer),w=async()=>{C(H())};d.useEffect(()=>{m||w()},[m]);const B=Array.isArray(m)?m.map(e=>({label:e.skill,value:e.id})):[];console.log({objJobSkill:m});const C=U(),{provinces:h,districts:p,setProvinceAndFetchDistricts:f,loading:S}=X(),[l,v]=d.useState(null),[x,j]=d.useState(null),[g,T]=d.useState([]),M=e=>{console.log("Selected job skills:",e),T(e)};d.useEffect(()=>{if(s&&!S&&h.length>0){const e=h.find(n=>~~n.id===s.provinceId);e&&(v(e),t("provinceId",e.id),f(e.id))}},[s,h,S]),d.useEffect(()=>{if(p.length>0&&l){const e=p.find(n=>~~n.id===(s==null?void 0:s.districtId));e&&(j(e),t("districtId",e.id))}},[p,l,s]);const A=e=>{v(e),j(null),t("provinceId",e.id),t("districtId",0),f(e.id)},L=e=>{j(e),t("districtId",e.id)};d.useEffect(()=>{l&&(j(null),f(l.id))},[l]);const{control:o,handleSubmit:R,setValue:t,formState:{errors:N}}=z({mode:"onChange",resolver:V(W)});d.useEffect(()=>{console.log("useEffect: ",s),_(Q)&&s&&(t("fullname",s==null?void 0:s.fullname),t("phone",s==null?void 0:s.phone),t("address",s==null?void 0:s.address),t("dob",D(s==null?void 0:s.dob).format("YYYY-MM-DD")),t("avatar",s==null?void 0:s.avatar),t("email",s==null?void 0:s.email),t("createdDate",D(s==null?void 0:s.createdDate).format("YYYY-MM-DD")),t("imgFrontOfCard",s==null?void 0:s.imgFrontOfCard),t("imgBackOfCard",s==null?void 0:s.imgBackOfCard))},[s]);const J=async e=>{try{console.log("value trc: ",e),console.log("value skill: ",g);const n={fullname:e.fullname,email:e.email,phone:e.phone,dob:D(e.dob).format("YYYY-MM-DD"),avatar:e.avatar,address:e.address,provinceId:e.provinceId,districtId:e.districtId,createdDate:e.createdDate,imgFrontOfCard:e.imgFrontOfCard,imgBackOfCard:e.imgBackOfCard,jobSkills:g};await C(K(n)),b.success("Đã cập nhật thông tin thành công!")}catch(n){b.error("Cập nhật thất bại!"),console.error("Update error:",n)}};return d.useEffect(()=>{var n;const e=Object.values(N);e.length>0&&b.error((n=e[0])==null?void 0:n.message)},[N]),a.jsx("div",{className:"px-[30px]",children:a.jsxs("div",{className:"bg-white py-4 shadow-md px-11",children:[a.jsx("div",{className:"mb-5 flex items-start justify-between px-11 pt-10",children:a.jsxs("div",{children:[a.jsx("h1",{className:"text-[40px] font-semibold",children:"Thông tin tài khoản"}),a.jsx("p",{className:"text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]",children:"Cập nhật thông tin tài khoản"})]})}),a.jsxs("form",{onSubmit:R(J),children:[a.jsx("div",{className:"w-[244px] h-[244px] rounded-full mx-auto mb-7",children:a.jsx(u,{listType:"picture-circle",name:"avatar",imageSize:"w-full h-[250px]",fileList:s!=null&&s.avatar?[{url:s.avatar,name:"Avatar"}]:[],onFileSelect:e=>{e&&t("avatar",e)}})}),a.jsxs("div",{className:"flex items-center justify-center mb-10 gap-3",children:[a.jsx("div",{className:"w-10 h-1w-10",children:a.jsx("img",{src:G,alt:"",className:"w-full h-full"})}),a.jsx("h1",{className:"text-4xl font-medium mt-2",children:"4.0"})]}),a.jsxs("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl pt-14 px-8 ",children:[a.jsxs("div",{className:"form-layout",children:[a.jsxs(i,{children:[a.jsx(r,{htmlFor:"fullname",children:"Họ tên đầy đủ"}),a.jsx(c,{name:"fullname",placeholder:"Nhập họ tên đầy đủ",control:o})]}),a.jsxs(i,{children:[a.jsx(r,{htmlFor:"dob",children:"Ngày sinh"}),a.jsx(c,{type:"date",dateFormat:"YYYY-MM-DD",name:"dob",placeholder:"Nhập ngày tháng năm sinh",control:o})]})]}),a.jsxs("div",{className:"form-layout ",children:[a.jsxs(i,{children:[a.jsx(r,{htmlFor:"phone",children:"Số điện thoại"}),a.jsx(c,{name:"phone",type:"number",placeholder:"Nhập số điện thoại",control:o})]}),a.jsxs(i,{children:[a.jsx(r,{htmlFor:"createdDate",children:"Tham gia từ"}),a.jsx(c,{name:"createdDate",placeholder:"Thời gian tham gia",className:"text-center border-none",disabled:!0,control:o})]})]}),a.jsxs("div",{className:"form-layout ",children:[a.jsxs(i,{children:[a.jsx(r,{children:"Tỉnh / Thành phố"}),a.jsxs(k,{children:[a.jsx(F,{value:l?l.name:"Tỉnh / Thành phố"}),a.jsx(O,{children:h.map(e=>a.jsx(I,{name:"provinceId",onClick:()=>A(e),children:e.name},e.id))})]})]}),a.jsxs(i,{children:[a.jsx(r,{children:"Quận / Huyện"}),a.jsxs(k,{children:[a.jsx(F,{value:x?x==null?void 0:x.name:"Quận / Huyện"}),a.jsx(O,{children:p.map(e=>a.jsx(I,{name:"districtId",onClick:()=>L(e),children:e.name},e.id))})]})]})]}),a.jsxs("div",{className:"form-layout",children:[a.jsxs(i,{children:[a.jsx(r,{htmlFor:"address",children:"Địa chỉ"}),a.jsx(c,{name:"address",placeholder:"Nhập địa chỉ",control:o})]}),a.jsxs(i,{children:[a.jsx(r,{htmlFor:"email",children:"Email"}),a.jsx(c,{name:"email",placeholder:"Nhập email",type:"email",control:o,disabled:!0})]})]})]}),!E&&a.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl py-14 px-8 mt-7",children:a.jsxs(i,{children:[a.jsx(r,{htmlFor:"",children:"Kỹ năng"}),a.jsx(P,{id:"jobSkills",style:{width:"100%"},mode:"multiple",placeholder:"Chọn kỹ năng",options:B,value:g,onChange:M})]})}),a.jsxs("div",{className:"mt-24",children:[a.jsx(r,{htmlFor:"",children:"Tải ảnh CCCD / CMND"}),a.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl p-4 mt-5",children:a.jsxs("div",{className:"form-layout lg:mb-0",children:[a.jsx(u,{name:"imgFrontOfCard",fileList:s!=null&&s.imgFrontOfCard?[{url:s.imgFrontOfCard,name:"imgFrontOfCard"}]:[],onFileSelect:e=>{e&&t("imgFrontOfCard",e)}}),a.jsx(u,{name:"imgBackOfCard",fileList:s!=null&&s.imgBackOfCard?[{url:s.imgBackOfCard,name:"imgBackOfCard"}]:[],onFileSelect:e=>{e&&t("imgBackOfCard",e)}})]})})]}),a.jsx(q,{type:"submit",title:"Cập Nhật",className:"w-full mt-20 h-16"})]})]})})}export{fe as default};