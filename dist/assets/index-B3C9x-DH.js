import{U as o,a4 as c,M as x,V as m,r as n,a0 as p,a5 as f,J as a}from"./index-BYvDUxkM.js";import{J as b}from"./JobCardDetail-Z3RWuj0q.js";import{J as j}from"./JobCard-C74bfLv8.js";import"./location-CV_8o-1e.js";import"./Button-BB9KZmcU.js";function I(){const i=o(),{jobId:t}=c(),r=x(),{objJobDetails:e,objJobType:l}=m(s=>s.jobReducer);n.useEffect(()=>{t&&(r(p(Number(t))),e&&r(f(e.jobType.id)))},[t,r,e]);const d=()=>((l==null?void 0:l.content)??[]).filter(s=>s.jobId!==(e==null?void 0:e.jobId)).slice(0,7).map(s=>a.jsx(j,{item:s,width:"w-[191px]",widthAddress:"w-auto max-w-[160px]",onSelect:()=>i(`/card-detail-job/${s.jobId}`)},s.jobId));return a.jsxs("div",{className:"grid grid-cols-[867px_minmax(0,_1fr)] gap-x-7 py-20 px-[72px] 2xl:grid-cols-[1300px_minmax(0,_1fr)] small-tablet:grid-cols-[minmax(0,_1fr)] small-tablet:px-2 small-tablet:py-5 ",children:[a.jsx("div",{children:e&&a.jsx(b,{item:e})}),a.jsxs("div",{className:"flex flex-col gap-6 small-tablet:hidden",children:[a.jsxs("div",{className:"flex flex-col items-end",children:[a.jsx("h1",{className:"text-2xl font-medium",children:"Loại công việc liên quan"}),a.jsx("div",{className:"border-2 border-solid border-[#2EE498] w-[292px] "})]}),a.jsx("div",{className:" flex flex-col gap-8",children:d()})]})]})}export{I as default};