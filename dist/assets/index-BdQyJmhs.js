import{J as e,U as u,M as x,V as d,r as f,L as b,$ as j,a0 as _}from"./index-C__RYsFq.js";import{C as v}from"./Card-NeY9TVRq.js";import{C as y}from"./CandiCard-DdwXNcJq.js";import{u as k,L as N}from"./loadingData-BqeLPPeT.js";import"./checked-p_Qw5dOe.js";import"./star-igAWdCcK.js";const C="/assets/Benefit_Homepage-D05CEPW5.png";function L(){return e.jsxs("section",{className:"benefits",children:[e.jsx("h1",{className:"benefits__title",children:"Tiện Ích Của Các Bạn"}),e.jsxs("div",{className:"benefits__content",children:[e.jsxs("div",{className:"benefits__left",children:[e.jsx("h2",{className:"benefits__subtitle",children:"Tìm Việc"}),e.jsx("p",{className:"benefits__item",children:"Tiếp cận công việc dễ dàng, nhanh chóng"}),e.jsx("p",{className:"benefits__item",children:"Lựa chọn công việc phù hợp với kỹ năng"}),e.jsx("p",{className:"benefits__item",children:"Tự do lựa chọn thời gian làm việc"})]}),e.jsx("div",{className:"benefits__center",children:e.jsx("img",{src:C,alt:"Benefits",className:"benefits__image my-10"})}),e.jsxs("div",{className:"benefits__right",children:[e.jsx("h2",{className:"benefits__subtitle",children:"Tìm Người Thuê"}),e.jsx("p",{className:"benefits__item",children:"Dễ dàng tìm kiếm và tuyển dụng phù hợp"}),e.jsx("p",{className:"benefits__item",children:"Tiết kiệm thời gian và chi phí tuyển dụng"}),e.jsx("p",{className:"benefits__item",children:"Tìm kiếm ứng viên nhanh chóng, tiện lợi"})]})]})]})}const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%3e%3cpath%20d='M28.1249%2015.0001C28.1279%2015.3846%2028.011%2015.7606%2027.7904%2016.0756C27.5699%2016.3906%2027.2567%2016.6291%2026.8944%2016.7579L19.46%2019.4614L16.7577%2026.8946C16.6245%2027.2535%2016.3847%2027.563%2016.0704%2027.7815C15.7562%2028%2015.3826%2028.1172%2014.9999%2028.1172C14.6171%2028.1172%2014.2435%2028%2013.9293%2027.7815C13.6151%2027.563%2013.3753%2027.2535%2013.2421%2026.8946L10.5385%2019.4532L3.10534%2016.7579C2.74651%2016.6247%202.43703%2016.3849%202.21849%2016.0707C1.99995%2015.7565%201.88281%2015.3829%201.88281%2015.0001C1.88281%2014.6174%201.99995%2014.2438%202.21849%2013.9295C2.43703%2013.6153%202.74651%2013.3755%203.10534%2013.2423L10.5467%2010.5388L13.2421%203.10558C13.3753%202.74675%2013.6151%202.43728%2013.9293%202.21874C14.2435%202.0002%2014.6171%201.88306%2014.9999%201.88306C15.3826%201.88306%2015.7562%202.0002%2016.0704%202.21874C16.3847%202.43728%2016.6245%202.74675%2016.7577%203.10558L19.4612%2010.547L26.8944%2013.2423C27.2567%2013.3711%2027.5699%2013.6096%2027.7904%2013.9247C28.011%2014.2397%2028.1279%2014.6156%2028.1249%2015.0001Z'%20fill='%232F1C48'/%3e%3c/svg%3e",c="/assets/avatar-1-CekbvkBE.png",I=[{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",author:"Lương Văn A",image:c},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",author:"Lương Văn A",image:c},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",author:"Lương Văn A",image:c}];function D(){return e.jsx("section",{className:"feedback",children:e.jsxs("div",{className:"feedback__group",children:[e.jsxs("h2",{className:"title",children:["Họ nói về chúng tôi",e.jsx("span",{className:"line"}),e.jsx("img",{src:w,alt:"icon-star-four-fill",width:30,height:30})]}),e.jsx("div",{className:"feedback__cards",children:I.map((t,r)=>e.jsx(v,{className:"feedback__card",children:e.jsxs("div",{className:"feedback__cardItem",children:[e.jsx("p",{className:"feedback__text",children:t.text}),e.jsxs("div",{className:"feedback__cardImg",children:[e.jsx("img",{src:t.image,alt:t.author}),e.jsx("p",{className:"feedback__author",children:t.author})]})]})},r))})]})})}function T(){const m=u(),h=k(),o=x(),{objJob:l}=d(s=>s.jobReducer),{objCandidate:n}=d(s=>s.candidateReducer),p=async(s,a)=>{const i=j(s,a);o(i)},g=async(s,a)=>{const i=_(s,a);o(i)};return f.useEffect(()=>{p(0,8),g(0,8)},[]),!l||!l.content.length?e.jsx("div",{className:"px-[50%]",children:h&&e.jsx(N,{})}):e.jsxs("section",{className:"findJob",children:[e.jsxs("div",{className:"findJob__top",children:[e.jsx("h1",{className:"title ",children:"Tìm việc"}),e.jsxs(b,{to:"/list-job",className:"findJob__link",children:[e.jsx("p",{className:"see__more",children:"Xem thêm"}),e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6 small-phone:w-4 small-phone:h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})]}),e.jsx("div",{className:"flex flex-col gap-11",children:n==null?void 0:n.content.map(s=>e.jsx("div",{children:e.jsx(y,{item:s,showAmount:!0,onSelect:()=>m(`/card-detail-job/${s.id}`)})},s.id))})]})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(L,{}),e.jsx(D,{})]})}export{V as default};
