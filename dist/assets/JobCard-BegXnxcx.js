import{J as l}from"./index-7W-kS-y9.js";import{c as m}from"./checked-p_Qw5dOe.js";import{c as x,l as n}from"./calendar-D2deYMYa.js";import{B as o}from"./Button-DAzODAs4.js";function j({item:e,isSelected:a,onSelect:s,className:t,width:c="w-full",showImages:i=!1,showButton:d=!1,widthAddress:r=""}){return l.jsx("div",{className:`cursor-pointer w-full px-6 py-10 bg-white rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-6 small-tablet:h-[137px] small-tablet:min-w-[330px] small-tablet:px-[15px] small-tablet:py-[10px] ${t} ${a?"selectCard":""}`,onClick:s,children:l.jsxs("div",{className:"flex justify-center items-center gap-5",children:[i&&(e.images&&e.images.length>0?l.jsx("img",{src:e.images[0].url,alt:"Job Image 1",className:"w-[150px] h-[135px] rounded-3xl small-tablet:hidden",loading:"lazy"}):l.jsx("img",{src:"https://via.placeholder.com/250x250",alt:"Job Image 1",className:"w-[150px] h-[135px] rounded-3xl small-tablet:hidden",loading:"lazy"})),l.jsxs("div",{className:"w-full flex flex-col justify-between gap-5",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("p",{className:`text-lg font-semibold truncate ${c} small-tablet:text-base small-tablet:w-[130px]`,children:e.title}),e.verified?l.jsx("div",{className:"w-6 h-6 small-tablet:w-4 small-tablet:h-4",children:l.jsx("img",{src:m,alt:"checked",className:"w-full h-full object-cover",loading:"lazy"})}):""]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4",children:l.jsx("img",{src:x,alt:"calendar",className:"w-full h-full object-cover",loading:"lazy"})}),l.jsx("p",{className:"text-sm font-medium pt-1 small-tablet:text-base",children:new Date(e.startDate).toLocaleDateString("vi-VN").replace(/\//g,"-")})]})]}),l.jsx("div",{className:"border border-solid border-[#E4E6E8] w-full"}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("div",{className:"bg-[#E8E8E8] rounded-[20px]",children:l.jsx("p",{className:"text-xs font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]",children:e.jobType.name})}),l.jsxs("div",{className:"flex items-center justify-end text-end gap-1",children:[l.jsx("div",{className:"w-5 h-5 small-tablet:w-4 small-tablet:h-4 flex items-center justify-end",children:l.jsx("img",{src:n,alt:"location",className:"w-full h-full object-cover",loading:"lazy"})}),l.jsx("p",{className:`pt-1 text-sm truncate ${r}`,title:e.address,children:e.address})]})]})]}),d&&l.jsx(o,{title:"Ứng Viên",color:"delete",className:"w-1/5",circle:!1})]})})}export{j as J};
