import{m as $,l as H,d,r,as as E,ak as y,aF as z,aE as C}from"./index-C__RYsFq.js";import{R as M}from"./index-DVNIr_ie.js";import{d as D,R as N}from"./SearchOutlined-Cwi3DGhg.js";const O=e=>{const{multipleSelectItemHeight:l,paddingXXS:i,lineWidth:n,INTERNAL_FIXED_ITEM_MARGIN:t}=e,o=e.max(e.calc(i).sub(n).equal(),0),s=e.max(e.calc(o).sub(t).equal(),0);return{basePadding:o,containerPadding:s,itemHeight:d(l),itemLineHeight:d(e.calc(l).sub(e.calc(e.lineWidth).mul(2)).equal())}},P=e=>{const{multipleSelectItemHeight:l,selectHeight:i,lineWidth:n}=e;return e.calc(i).sub(l).div(2).sub(n).equal()},W=e=>{const{componentCls:l,iconCls:i,borderRadiusSM:n,motionDurationSlow:t,paddingXS:o,multipleItemColorDisabled:s,multipleItemBorderColorDisabled:c,colorIcon:a,colorIconHover:h,INTERNAL_FIXED_ITEM_MARGIN:u}=e;return{[`${l}-selection-overflow`]:{position:"relative",display:"flex",flex:"auto",flexWrap:"wrap",maxWidth:"100%","&-item":{flex:"none",alignSelf:"center",maxWidth:"100%",display:"inline-flex"},[`${l}-selection-item`]:{display:"flex",alignSelf:"center",flex:"none",boxSizing:"border-box",maxWidth:"100%",marginBlock:u,borderRadius:n,cursor:"default",transition:`font-size ${t}, line-height ${t}, height ${t}`,marginInlineEnd:e.calc(u).mul(2).equal(),paddingInlineStart:o,paddingInlineEnd:e.calc(o).div(2).equal(),[`${l}-disabled&`]:{color:s,borderColor:c,cursor:"not-allowed"},"&-content":{display:"inline-block",marginInlineEnd:e.calc(o).div(2).equal(),overflow:"hidden",whiteSpace:"pre",textOverflow:"ellipsis"},"&-remove":Object.assign(Object.assign({},H()),{display:"inline-flex",alignItems:"center",color:a,fontWeight:"bold",fontSize:10,lineHeight:"inherit",cursor:"pointer",[`> ${i}`]:{verticalAlign:"-0.2em"},"&:hover":{color:h}})}}}},q=(e,l)=>{const{componentCls:i,INTERNAL_FIXED_ITEM_MARGIN:n}=e,t=`${i}-selection-overflow`,o=e.multipleSelectItemHeight,s=P(e),c=l?`${i}-${l}`:"",a=O(e);return{[`${i}-multiple${c}`]:Object.assign(Object.assign({},W(e)),{[`${i}-selector`]:{display:"flex",flexWrap:"wrap",alignItems:"center",height:"100%",paddingInline:a.basePadding,paddingBlock:a.containerPadding,borderRadius:e.borderRadius,[`${i}-disabled&`]:{background:e.multipleSelectorBgDisabled,cursor:"not-allowed"},"&:after":{display:"inline-block",width:0,margin:`${d(n)} 0`,lineHeight:d(o),visibility:"hidden",content:'"\\a0"'}},[`${i}-selection-item`]:{height:a.itemHeight,lineHeight:d(a.itemLineHeight)},[`${t}-item + ${t}-item`]:{[`${i}-selection-search`]:{marginInlineStart:0}},[`${t}-item-suffix`]:{height:"100%"},[`${i}-selection-search`]:{display:"inline-flex",position:"relative",maxWidth:"100%",marginInlineStart:e.calc(e.inputPaddingHorizontalBase).sub(s).equal(),"\n          &-input,\n          &-mirror\n        ":{height:o,fontFamily:e.fontFamily,lineHeight:d(o),transition:`all ${e.motionDurationSlow}`},"&-input":{width:"100%",minWidth:4.1},"&-mirror":{position:"absolute",top:0,insetInlineStart:0,insetInlineEnd:"auto",zIndex:999,whiteSpace:"pre",visibility:"hidden"}},[`${i}-selection-placeholder`]:{position:"absolute",top:"50%",insetInlineStart:e.inputPaddingHorizontalBase,insetInlineEnd:e.inputPaddingHorizontalBase,transform:"translateY(-50%)",transition:`all ${e.motionDurationSlow}`}})}};function S(e,l){const{componentCls:i}=e,n=l?`${i}-${l}`:"",t={[`${i}-multiple${n}`]:{fontSize:e.fontSize,[`${i}-selector`]:{[`${i}-show-search&`]:{cursor:"text"}},[`
        &${i}-show-arrow ${i}-selector,
        &${i}-allow-clear ${i}-selector
      `]:{paddingInlineEnd:e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()}}};return[q(e,l),t]}const X=e=>{const{componentCls:l}=e,i=$(e,{selectHeight:e.controlHeightSM,multipleSelectItemHeight:e.multipleItemHeightSM,borderRadius:e.borderRadiusSM,borderRadiusSM:e.borderRadiusXS}),n=$(e,{fontSize:e.fontSizeLG,selectHeight:e.controlHeightLG,multipleSelectItemHeight:e.multipleItemHeightLG,borderRadius:e.borderRadiusLG,borderRadiusSM:e.borderRadius});return[S(e),S(i,"sm"),{[`${l}-multiple${l}-sm`]:{[`${l}-selection-placeholder`]:{insetInline:e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()},[`${l}-selection-search`]:{marginInlineStart:2}}},S(n,"lg")]};var L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},_=function(l,i){return r.createElement(E,y({},l,{ref:i,icon:L}))},A=r.forwardRef(_);function j(e){let{suffixIcon:l,clearIcon:i,menuItemSelectedIcon:n,removeIcon:t,loading:o,multiple:s,hasFeedback:c,prefixCls:a,showSuffixIcon:h,feedbackIcon:u,showArrow:b,componentName:B}=e;const x=i??r.createElement(z,null),m=I=>l===null&&!c&&!b?null:r.createElement(r.Fragment,null,h!==!1&&I,c&&u);let g=null;if(l!==void 0)g=m(l);else if(o)g=m(r.createElement(D,{spin:!0}));else{const I=`${a}-suffix`;g=w=>{let{open:v,showSearch:R}=w;return m(v&&R?r.createElement(N,{className:I}):r.createElement(A,{className:I}))}}let f=null;n!==void 0?f=n:s?f=r.createElement(M,null):f=null;let p=null;return t!==void 0?p=t:p=r.createElement(C,null),{clearIcon:x,suffixIcon:g,itemIcon:f,removeIcon:p}}export{O as a,X as b,W as g,j as u};
