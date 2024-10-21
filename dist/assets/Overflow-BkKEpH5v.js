import{R as fe,ag as qe,a_ as R,a$ as Je,r,z as $,t as _,f as le,i as b,x as Ie,w as Ze,k as g,m as et,aV as tt,s as nt}from"./index-BI43o5J7.js";const Ct=e=>{const a=fe.useContext(qe);return fe.useMemo(()=>e?typeof e=="string"?e??a:e instanceof Function?e(a):a:a,[e,a])},rt=new R("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),at=new R("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),it=new R("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),st=new R("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),ot=new R("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ft=new R("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),lt=new R("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),ut=new R("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ct={"slide-up":{inKeyframes:rt,outKeyframes:at},"slide-down":{inKeyframes:it,outKeyframes:st},"slide-left":{inKeyframes:ot,outKeyframes:ft},"slide-right":{inKeyframes:lt,outKeyframes:ut}},It=(e,a)=>{const{antCls:l}=e,s=`${l}-${a}`,{inKeyframes:f,outKeyframes:i}=ct[a];return[Je(s,f,i,e.motionDurationMid),{[`
      ${s}-enter,
      ${s}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${s}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var dt=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],x=void 0;function mt(e,a){var l=e.prefixCls,s=e.invalidate,f=e.item,i=e.renderItem,u=e.responsive,p=e.responsiveDisabled,d=e.registerSize,C=e.itemKey,I=e.className,B=e.style,H=e.children,q=e.display,m=e.order,U=e.component,K=U===void 0?"div":U,D=$(e,dt),v=u&&!q;function X(S){d(C,S)}r.useEffect(function(){return function(){X(null)}},[]);var J=i&&f!==x?i(f):H,N;s||(N={opacity:v?0:1,height:v?0:x,overflowY:v?"hidden":x,order:u?m:x,pointerEvents:v?"none":x,position:v?"absolute":x});var A={};v&&(A["aria-hidden"]=!0);var E=r.createElement(K,_({className:le(!s&&l,I),style:b(b({},N),B)},A,D,{ref:a}),J);return u&&(E=r.createElement(Ie,{onResize:function(Z){var Y=Z.offsetWidth;X(Y)},disabled:p},E)),E}var W=r.forwardRef(mt);W.displayName="Item";function vt(e){if(typeof MessageChannel>"u")Ze(e);else{var a=new MessageChannel;a.port1.onmessage=function(){return e()},a.port2.postMessage(void 0)}}function yt(){var e=r.useRef(null),a=function(s){e.current||(e.current=[],vt(function(){tt.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(s)};return a}function P(e,a){var l=r.useState(a),s=g(l,2),f=s[0],i=s[1],u=et(function(p){e(function(){i(p)})});return[f,u]}var G=fe.createContext(null),gt=["component"],pt=["className"],St=["className"],Rt=function(a,l){var s=r.useContext(G);if(!s){var f=a.component,i=f===void 0?"div":f,u=$(a,gt);return r.createElement(i,_({},u,{ref:l}))}var p=s.className,d=$(s,pt),C=a.className,I=$(a,St);return r.createElement(G.Provider,{value:null},r.createElement(W,_({ref:l,className:le(p,C)},d,I)))},Ne=r.forwardRef(Rt);Ne.displayName="RawItem";var Et=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Oe="responsive",xe="invalidate";function ht(e){return"+ ".concat(e.length," ...")}function wt(e,a){var l=e.prefixCls,s=l===void 0?"rc-overflow":l,f=e.data,i=f===void 0?[]:f,u=e.renderItem,p=e.renderRawItem,d=e.itemKey,C=e.itemWidth,I=C===void 0?10:C,B=e.ssr,H=e.style,q=e.className,m=e.maxCount,U=e.renderRest,K=e.renderRawRest,D=e.suffix,v=e.component,X=v===void 0?"div":v,J=e.itemComponent,N=e.onVisibleChange,A=$(e,Et),E=B==="full",S=yt(),Z=P(S,null),Y=g(Z,2),F=Y[0],be=Y[1],h=F||0,Ke=P(S,new Map),ue=g(Ke,2),ce=ue[0],De=ue[1],Me=P(S,0),de=g(Me,2),ze=de[0],Pe=de[1],$e=P(S,0),me=g($e,2),V=me[0],We=me[1],Ue=P(S,0),ve=g(Ue,2),L=ve[0],Xe=ve[1],Ae=r.useState(null),ye=g(Ae,2),ee=ye[0],ge=ye[1],Ye=r.useState(null),pe=g(Ye,2),T=pe[0],Fe=pe[1],O=r.useMemo(function(){return T===null&&E?Number.MAX_SAFE_INTEGER:T||0},[T,F]),Ve=r.useState(!1),Se=g(Ve,2),Le=Se[0],Te=Se[1],te="".concat(s,"-item"),Re=Math.max(ze,V),ne=m===Oe,y=i.length&&ne,Ee=m===xe,ke=y||typeof m=="number"&&i.length>m,w=r.useMemo(function(){var t=i;return y?F===null&&E?t=i:t=i.slice(0,Math.min(i.length,h/I)):typeof m=="number"&&(t=i.slice(0,m)),t},[i,I,F,m,y]),re=r.useMemo(function(){return y?i.slice(O+1):i.slice(w.length)},[i,w,y,O]),k=r.useCallback(function(t,n){var o;return typeof d=="function"?d(t):(o=d&&(t==null?void 0:t[d]))!==null&&o!==void 0?o:n},[d]),je=r.useCallback(u||function(t){return t},[u]);function j(t,n,o){T===t&&(n===void 0||n===ee)||(Fe(t),o||(Te(t<i.length-1),N==null||N(t)),n!==void 0&&ge(n))}function Ge(t,n){be(n.clientWidth)}function he(t,n){De(function(o){var c=new Map(o);return n===null?c.delete(t):c.set(t,n),c})}function Qe(t,n){We(n),Pe(V)}function Be(t,n){Xe(n)}function ae(t){return ce.get(k(w[t],t))}nt(function(){if(h&&typeof Re=="number"&&w){var t=L,n=w.length,o=n-1;if(!n){j(0,null);return}for(var c=0;c<n;c+=1){var z=ae(c);if(E&&(z=z||0),z===void 0){j(c-1,void 0,!0);break}if(t+=z,o===0&&t<=h||c===o-1&&t+ae(o)<=h){j(o,null);break}else if(t+Re>h){j(c-1,t-z-L+V);break}}D&&ae(0)+L>h&&ge(null)}},[h,ce,V,L,k,w]);var we=Le&&!!re.length,_e={};ee!==null&&y&&(_e={position:"absolute",left:ee,top:0});var M={prefixCls:te,responsive:y,component:J,invalidate:Ee},He=p?function(t,n){var o=k(t,n);return r.createElement(G.Provider,{key:o,value:b(b({},M),{},{order:n,item:t,itemKey:o,registerSize:he,display:n<=O})},p(t,n))}:function(t,n){var o=k(t,n);return r.createElement(W,_({},M,{order:n,key:o,item:t,renderItem:je,itemKey:o,registerSize:he,display:n<=O}))},ie,Ce={order:we?O:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Qe,display:we};if(K)K&&(ie=r.createElement(G.Provider,{value:b(b({},M),Ce)},K(re)));else{var se=U||ht;ie=r.createElement(W,_({},M,Ce),typeof se=="function"?se(re):se)}var oe=r.createElement(X,_({className:le(!Ee&&s,q),style:H,ref:a},A),w.map(He),ke?ie:null,D&&r.createElement(W,_({},M,{responsive:ne,responsiveDisabled:!y,order:O,className:"".concat(te,"-suffix"),registerSize:Be,display:!0,style:_e}),D));return ne&&(oe=r.createElement(Ie,{onResize:Ge,disabled:!y},oe)),oe}var Q=r.forwardRef(wt);Q.displayName="Overflow";Q.Item=Ne;Q.RESPONSIVE=Oe;Q.INVALIDATE=xe;export{Q as F,rt as a,st as b,at as c,It as i,it as s,Ct as u};