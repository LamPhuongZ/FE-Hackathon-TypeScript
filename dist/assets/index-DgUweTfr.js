import{aA as e}from"./index-CA2dIpiP.js";import{B as o}from"./Button-DqWDWcPX.js";function s({htmlFor:r="",children:i}){return e.jsx("label",{htmlFor:r,className:"font-semibold cursor-pointer text-2xl mb-8",children:i})}function l({name:r,type:i="text",placeholder:t,content:a,className:d}){return e.jsx("input",{id:r,type:i,className:`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${d}`,placeholder:t,children:a})}function n({children:r}){return e.jsx("div",{className:"flex flex-col items-start gap-x-5 mb-5 last-of-type:mb-0",children:r})}function m(){return e.jsx("div",{className:"py-20 px-[72px]",children:e.jsxs("div",{className:"bg-white py-4 shadow-md px-11",children:[e.jsx("div",{className:"mb-10 flex items-start justify-between px-11 pt-10",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-[40px] font-semibold",children:"Thông tin tài khoản"}),e.jsx("p",{className:"text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]",children:"Cập nhật thông tin tài khoản"})]})}),e.jsxs("form",{children:[e.jsx("div",{className:"w-[200px] h-[200px] rounded-full mx-auto mb-10"}),e.jsx("div",{className:"border border-solid border-[#D5D5D5] rounded-3xl",children:e.jsxs("div",{className:"pt-14 px-8",children:[e.jsxs("div",{className:"form-layout ",children:[e.jsxs(n,{children:[e.jsx(s,{htmlFor:"fullname",children:"Họ tên đầy đủ"}),e.jsx(l,{name:"fullname",placeholder:"Nhập họ tên đầy đủ"})]}),e.jsxs(n,{children:[e.jsx(s,{htmlFor:"date",children:"Ngày sinh"}),e.jsx(l,{name:"date",placeholder:"Nhập ngày tháng năm sinh"})]})]}),e.jsxs("div",{className:"form-layout ",children:[e.jsxs(n,{children:[e.jsx(s,{htmlFor:"phone",children:"Số điện thoại"}),e.jsx(l,{name:"phone",placeholder:"Nhập số điện thoại"})]}),e.jsxs(n,{children:[e.jsx(s,{htmlFor:"join",children:"Tham gia từ"}),e.jsx(l,{name:"join",placeholder:""})]})]}),e.jsxs("div",{className:"form-layout ",children:[e.jsxs(n,{children:[e.jsx(s,{htmlFor:"address",children:"Địa chỉ"}),e.jsx(l,{name:"address",placeholder:"Nhập địa chỉ"})]}),e.jsxs(n,{children:[e.jsx(s,{htmlFor:"email",children:"Email (nếu có)"}),e.jsx(l,{name:"email",placeholder:"Nhập email",type:"email"})]})]})]})}),e.jsx(o,{type:"submit",className:"mt-20",children:"Cập nhật"})]})]})})}export{m as default};
