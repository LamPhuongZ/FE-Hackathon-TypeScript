import{J as e}from"./index-Bjx22gm8.js";import{c as i}from"./checked-p_Qw5dOe.js";import{c as d,l as n}from"./calendar-D2deYMYa.js";import{B as o}from"./Button-47Y6j8J0.js";function j({item:l,isSelected:s,onSelect:a,className:t,width:c="w-full",showImages:r=!1,showButton:m=!1,widthAddress:x=""}){return e.jsx("div",{className:`cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ${t} ${s?"selectCard":""}`,onClick:a,children:e.jsxs("div",{className:"flex justify-center items-center gap-5",children:[r&&(l.images&&l.images.length>0?e.jsx("img",{src:l.images[0].url,alt:"Job Image 1",className:"w-[150px] h-[135px] rounded-3xl small-tablet:hidden"}):e.jsx("img",{src:"https://via.placeholder.com/250x250",alt:"Job Image 1",className:"w-[150px] h-[135px] rounded-3xl small-tablet:hidden"})),e.jsxs("div",{className:"w-full flex flex-col justify-between gap-5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:`text-lg font-semibold truncate ${c} small-tablet:text-base small-tablet:w-[130px]`,children:l.title}),l.verified?e.jsx("div",{className:"w-6 h-6 small-tablet:w-4 small-tablet:h-4",children:e.jsx("img",{src:i,alt:"checked",className:"w-full h-full object-cover"})}):""]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4",children:e.jsx("img",{src:d,alt:"calendar",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"text-sm font-medium pt-1 small-tablet:text-base",children:new Date(l.startDate).toLocaleDateString("vi-VN").replace(/\//g,"-")})]})]}),e.jsx("div",{className:"border border-solid border-[#E4E6E8] w-full"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"bg-[#E8E8E8] rounded-[20px]",children:e.jsx("p",{className:"text-xs font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]",children:l.jobType.name})}),e.jsxs("div",{className:"flex items-center justify-end text-end gap-1",children:[e.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4 flex items-center justify-end",children:e.jsx("img",{src:n,alt:"location",className:"w-full h-full object-cover"})}),e.jsx("p",{className:`pt-1 text-sm truncate ${x}`,title:l.address,children:l.address})]})]})]}),m&&e.jsx(o,{title:"Ứng Viên",color:"delete",className:"w-1/5",circle:!1})]})})}export{j as J};