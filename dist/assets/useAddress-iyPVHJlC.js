import{r as s,O as p}from"./index-DTX65zQ1.js";const S=()=>{const[a,r]=s.useState([]),[o,d]=s.useState([]),[n,c]=s.useState([]),[i,e]=s.useState(!1),[l,u]=s.useState(null);return s.useEffect(()=>{(async()=>{e(!0);try{const t=await p.get("/datas/address.json",{headers:{"Content-Type":"application/json"}});r(t.data.province),d(t.data.district),c(t.data.ward),e(!1)}catch(t){console.log(t),u("Failed to load address data"),e(!1)}})()},[]),{provinces:a,districts:o,wards:n,loading:i,error:l}};export{S as u};