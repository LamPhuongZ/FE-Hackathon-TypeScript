import{J as e,_ as g}from"./index-DTX65zQ1.js";function v({title:t,loading:o,className:l,type:u="button",onClick:p,icon:r,iconPosition:s="left",color:a="primary",circle:c=!0,to:h}){const n=a==="secondary"?"btn-secondary":a==="delete"?"btn-delete":a==="update"?"btn-update":a==="custom"?"btn-custom":"btn-primary",m=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"circle-1 group-hover:top-1 group-hover:right-2 group-hover:scale-150"}),e.jsx("div",{className:"circle-2 group-hover:top-1 group-hover:right-2 group-hover:scale-150"}),e.jsx("div",{className:"circle-3 group-hover:top-1 group-hover:right-2 group-hover:scale-150"}),e.jsx("div",{className:"circle-4 group-hover:top-1 group-hover:right-2 group-hover:scale-150"})]});return e.jsx(e.Fragment,{children:h?e.jsxs(g,{to:h,className:`btn-component group ${n} ${l}`,onClick:p,children:[c&&m,e.jsxs("span",{className:"relative z-20",children:[r&&s==="left"&&e.jsx("span",{className:"mr-2",children:r}),t,r&&s==="right"&&e.jsx("span",{className:"ml-2",children:r})]})]}):e.jsxs("button",{type:u,className:`btn-component group ${n} ${l}`,onClick:p,disabled:o,children:[c&&m," ",e.jsxs("span",{className:"relative z-20",children:[r&&s==="left"&&e.jsx("span",{className:"mr-2",children:r}),t,r&&s==="right"&&e.jsx("span",{className:"ml-2",children:r})]})]})})}export{v as B};