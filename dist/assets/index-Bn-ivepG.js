import{aA as t,aD as d}from"./index-D9qM8uag.js";const x="/assets/404-Dr8yzO2v.gif";function m({title:a,loading:s,color:n="rgba(63, 140, 255, 0.63)",bgColor:l="#6da2f139",borderColor:o="transparent",margin:c,onClick:i,icon:e,iconPosition:r="left"}){return t.jsxs("button",{style:{color:n,backgroundColor:l,borderColor:o,margin:c},className:"p-2 text-base border border-solid rounded-md cursor-pointer transition-all duration-1000 hover:scale-90",onClick:i,disabled:s,children:[e&&r==="left"&&t.jsx("span",{className:"mr-2",children:e}),a,e&&r==="right"&&t.jsx("span",{className:"ml-2",children:e})]})}function u(){const a=d();return t.jsxs("div",{className:"container-wrapper bg-white mt-4 relative h-[600px] bg-no-repeat bg-center",style:{backgroundImage:`url(${x})`,backgroundSize:"inherit"},children:[t.jsx("div",{className:"error absolute left-1/2 top-10 text-center transform -translate-x-1/2 rotate-10 ",children:t.jsx("h1",{className:"text-slate-900 text-9xl font-bold",children:"404"})}),t.jsxs("div",{className:"content absolute left-1/2 top-[80%] text-center transform -translate-x-1/2",children:[t.jsx("h1",{className:"text-slate-900 text-3xl font-bold",children:"Thông tin đang được cập nhật"}),t.jsx(m,{margin:"20px",title:"Về Trang Chủ",onClick:()=>a("/")})]})]})}export{u as default};