import{am as s}from"./index-oiRqT3dK.js";function u({title:n,loading:r,className:m,type:d="button",onClick:b,icon:t,iconPosition:a="left",color:e="primary"}){const l=e==="secondary"?"btn-secondary":e==="delete"?"btn-delete":e==="update"?"btn-update":e==="custom"?"btn-custom":"btn-primary";return s.jsxs("button",{type:d,className:`btn-component ${l} ${m}`,onClick:b,disabled:r,children:[t&&a==="left"&&s.jsx("span",{className:"mr-2",children:t}),n,t&&a==="right"&&s.jsx("span",{className:"ml-2",children:t})]})}export{u as B};