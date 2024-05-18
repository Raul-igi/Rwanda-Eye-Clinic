import{_ as br,a as yr,r as w,R as je,j as m,T as ea,t as ta,b as F,s as fn,E as wr,c as na,d as Kt,e as aa,f as xr,u as q,g as kr,h as z,i as Sr,p as Er,k as Or,l as Nr,m as Ar,n as Cr,o as Tr,q as Pr,v as Rr,w as jr,x as _r,y as un,z as Mr,A as qe,B as Lr,$ as Ir,S as ft,C as ra,D as dn,F as Dr,G as Yr,H as $r,I as Wr,J as mn,K as Fr,L as oa,M as ia,N as Xr,O as ke,P as Hr,Q as zr,U as Br,V as Ur,W as Kr,X as qr,Y as Gr,Z as Vr,a0 as Qr,a1 as Jr,a2 as Zr,a3 as st,a4 as pn,a5 as eo,a6 as to,a7 as no,a8 as A,a9 as ao,aa as ro,ab as oo}from"./index-f45e3450.js";import{I as sa,a as Ge}from"./InputGroup-2a449713.js";function hn(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function io(e){var t=so(e,"string");return typeof t=="symbol"?t:String(t)}function so(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lo(e,t,n){var a=w.useRef(e!==void 0),r=w.useState(t),o=r[0],i=r[1],s=e!==void 0,l=a.current;return a.current=s,!s&&l&&o!==t&&i(t),[s?e:o,w.useCallback(function(c){for(var f=arguments.length,u=new Array(f>1?f-1:0),g=1;g<f;g++)u[g-1]=arguments[g];n&&n.apply(void 0,[c].concat(u)),i(c)},[n])]}function la(e,t){return Object.keys(t).reduce(function(n,a){var r,o=n,i=o[hn(a)],s=o[a],l=br(o,[hn(a),a].map(io)),c=t[a],f=lo(s,i,e[c]),u=f[0],g=f[1];return yr({},l,(r={},r[a]=u,r[c]=g,r))},e)}function Ae(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...r){t.apply(this,r),n.apply(this,r)}},null)}const co={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function fo(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,a=t[n],r=co[e];return a+parseInt(fn(t,r[0]),10)+parseInt(fn(t,r[1]),10)}const uo={[wr]:"collapse",[na]:"collapsing",[Kt]:"collapsing",[aa]:"collapse show"},mo=je.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:r,className:o,children:i,dimension:s="height",in:l=!1,timeout:c=300,mountOnEnter:f=!1,unmountOnExit:u=!1,appear:g=!1,getDimensionValue:y=fo,...h},x)=>{const p=typeof s=="function"?s():s,b=w.useMemo(()=>Ae(N=>{N.style[p]="0"},e),[p,e]),v=w.useMemo(()=>Ae(N=>{const C=`scroll${p[0].toUpperCase()}${p.slice(1)}`;N.style[p]=`${N[C]}px`},t),[p,t]),d=w.useMemo(()=>Ae(N=>{N.style[p]=null},n),[p,n]),O=w.useMemo(()=>Ae(N=>{N.style[p]=`${y(p,N)}px`,xr(N)},a),[a,y,p]),E=w.useMemo(()=>Ae(N=>{N.style[p]=null},r),[p,r]);return m.jsx(ea,{ref:x,addEndListener:ta,...h,"aria-expanded":h.role?l:null,onEnter:b,onEntering:v,onEntered:d,onExit:O,onExiting:E,childRef:i.ref,in:l,timeout:c,mountOnEnter:f,unmountOnExit:u,appear:g,children:(N,C)=>je.cloneElement(i,{...C,className:F(o,i.props.className,uo[N],p==="width"&&"collapse-horizontal")})})}),po=mo;function ho(e,t,n,a=!1){const r=q(n);w.useEffect(()=>{const o=typeof e=="function"?e():e;return o.addEventListener(t,r,a),()=>o.removeEventListener(t,r,a)},[e])}const vo=["onKeyDown"];function go(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function bo(e){return!e||e.trim()==="#"}const ca=w.forwardRef((e,t)=>{let{onKeyDown:n}=e,a=go(e,vo);const[r]=kr(Object.assign({tagName:"a"},a)),o=q(i=>{r.onKeyDown(i),n==null||n(i)});return bo(a.href)||a.role==="button"?m.jsx("a",Object.assign({ref:t},a,r,{onKeyDown:o})):m.jsx("a",Object.assign({ref:t},a,{onKeyDown:n}))});ca.displayName="Anchor";const yo=ca,fa=w.forwardRef(({bsPrefix:e,bg:t="primary",pill:n=!1,text:a,className:r,as:o="span",...i},s)=>{const l=z(e,"badge");return m.jsx(o,{ref:s,...i,className:F(r,l,n&&"rounded-pill",a&&`text-${a}`,t&&`bg-${t}`)})});fa.displayName="Badge";const wo=fa;function xo(){const[,e]=w.useReducer(t=>!t,!1);return e}const ko=w.createContext(null),vt=ko;var vn=Object.prototype.hasOwnProperty;function gn(e,t,n){for(n of e.keys())if(Te(n,t))return n}function Te(e,t){var n,a,r;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((a=e.length)===t.length)for(;a--&&Te(e[a],t[a]););return a===-1}if(n===Set){if(e.size!==t.size)return!1;for(a of e)if(r=a,r&&typeof r=="object"&&(r=gn(t,r),!r)||!t.has(r))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(a of e)if(r=a[0],r&&typeof r=="object"&&(r=gn(t,r),!r)||!Te(a[1],t.get(r)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((a=e.byteLength)===t.byteLength)for(;a--&&e.getInt8(a)===t.getInt8(a););return a===-1}if(ArrayBuffer.isView(e)){if((a=e.byteLength)===t.byteLength)for(;a--&&e[a]===t[a];);return a===-1}if(!n||typeof e=="object"){a=0;for(n in e)if(vn.call(e,n)&&++a&&!vn.call(t,n)||!(n in t)||!Te(e[n],t[n]))return!1;return Object.keys(t).length===a}}return e!==e&&t!==t}function So(e){const t=Sr();return[e[0],w.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}const Eo=Er({defaultModifiers:[Or,Nr,Ar,Cr,Tr,Pr,Rr,jr]}),Oo=["enabled","placement","strategy","modifiers"];function No(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const Ao={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Co={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const a=(t.getAttribute("aria-describedby")||"").split(",").filter(r=>r.trim()!==n.id);a.length?t.setAttribute("aria-describedby",a.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:a}=e.elements,r=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&r==="tooltip"&&"setAttribute"in a){const o=a.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(n.id)!==-1)return;a.setAttribute("aria-describedby",o?`${o},${n.id}`:n.id)}}},To=[];function Po(e,t,n={}){let{enabled:a=!0,placement:r="bottom",strategy:o="absolute",modifiers:i=To}=n,s=No(n,Oo);const l=w.useRef(i),c=w.useRef(),f=w.useCallback(()=>{var p;(p=c.current)==null||p.update()},[]),u=w.useCallback(()=>{var p;(p=c.current)==null||p.forceUpdate()},[]),[g,y]=So(w.useState({placement:r,update:f,forceUpdate:u,attributes:{},styles:{popper:{},arrow:{}}})),h=w.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const b={},v={};Object.keys(p.elements).forEach(d=>{b[d]=p.styles[d],v[d]=p.attributes[d]}),y({state:p,styles:b,attributes:v,update:f,forceUpdate:u,placement:p.placement})}}),[f,u,y]),x=w.useMemo(()=>(Te(l.current,i)||(l.current=i),l.current),[i]);return w.useEffect(()=>{!c.current||!a||c.current.setOptions({placement:r,strategy:o,modifiers:[...x,h,Ao]})},[o,r,h,a,x]),w.useEffect(()=>{if(!(!a||e==null||t==null))return c.current=Eo(e,t,Object.assign({},s,{placement:r,strategy:o,modifiers:[...x,Co,h]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,y(p=>Object.assign({},p,{attributes:{},styles:{popper:{}}})))}},[a,e,t]),g}const bn=()=>{};function Ro(e){return e.button===0}function jo(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const St=e=>e&&("current"in e?e.current:e),yn={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function _o(e,t=bn,{disabled:n,clickTrigger:a="click"}={}){const r=w.useRef(!1),o=w.useRef(!1),i=w.useCallback(c=>{const f=St(e);_r(!!f,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),r.current=!f||jo(c)||!Ro(c)||!!un(f,c.target)||o.current,o.current=!1},[e]),s=q(c=>{const f=St(e);f&&un(f,c.target)&&(o.current=!0)}),l=q(c=>{r.current||t(c)});w.useEffect(()=>{var c,f;if(n||e==null)return;const u=Mr(St(e)),g=u.defaultView||window;let y=(c=g.event)!=null?c:(f=g.parent)==null?void 0:f.event,h=null;yn[a]&&(h=qe(u,yn[a],s,!0));const x=qe(u,a,i,!0),p=qe(u,a,v=>{if(v===y){y=void 0;return}l(v)});let b=[];return"ontouchstart"in u.documentElement&&(b=[].slice.call(u.body.children).map(v=>qe(v,"mousemove",bn))),()=>{h==null||h(),x(),p(),b.forEach(v=>v())}},[e,n,a,i,s,l])}function Mo(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function Lo(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Io({enabled:e,enableEvents:t,placement:n,flip:a,offset:r,fixed:o,containerPadding:i,arrowElement:s,popperConfig:l={}}){var c,f,u,g,y;const h=Mo(l.modifiers);return Object.assign({},l,{placement:n,enabled:e,strategy:o?"fixed":l.strategy,modifiers:Lo(Object.assign({},h,{eventListeners:{enabled:t,options:(c=h.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},h.preventOverflow,{options:i?Object.assign({padding:i},(f=h.preventOverflow)==null?void 0:f.options):(u=h.preventOverflow)==null?void 0:u.options}),offset:{options:Object.assign({offset:r},(g=h.offset)==null?void 0:g.options)},arrow:Object.assign({},h.arrow,{enabled:!!s,options:Object.assign({},(y=h.arrow)==null?void 0:y.options,{element:s})}),flip:Object.assign({enabled:!!a},h.flip)}))})}const Do=["children"];function Yo(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const $o=()=>{};function ua(e={}){const t=w.useContext(vt),[n,a]=Lr(),r=w.useRef(!1),{flip:o,offset:i,rootCloseEvent:s,fixed:l=!1,placement:c,popperConfig:f={},enableEventListeners:u=!0,usePopper:g=!!t}=e,y=(t==null?void 0:t.show)==null?!!e.show:t.show;y&&!r.current&&(r.current=!0);const h=N=>{t==null||t.toggle(!1,N)},{placement:x,setMenu:p,menuElement:b,toggleElement:v}=t||{},d=Po(v,b,Io({placement:c||x||"bottom-start",enabled:g,enableEvents:u??y,offset:i,flip:o,fixed:l,arrowElement:n,popperConfig:f})),O=Object.assign({ref:p||$o,"aria-labelledby":v==null?void 0:v.id},d.attributes.popper,{style:d.styles.popper}),E={show:y,placement:x,hasShown:r.current,toggle:t==null?void 0:t.toggle,popper:g?d:null,arrowProps:g?Object.assign({ref:a},d.attributes.arrow,{style:d.styles.arrow}):{}};return _o(b,h,{clickTrigger:s,disabled:!y}),[O,E]}const Wo={usePopper:!0};function qt(e){let{children:t}=e,n=Yo(e,Do);const[a,r]=ua(n);return m.jsx(m.Fragment,{children:t(a,r)})}qt.displayName="DropdownMenu";qt.defaultProps=Wo;const da=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},wn=()=>{};function ma(){const e=Ir(),{show:t=!1,toggle:n=wn,setToggle:a,menuElement:r}=w.useContext(vt)||{},o=w.useCallback(s=>{n(!t,s)},[t,n]),i={id:e,ref:a||wn,onClick:o,"aria-expanded":!!t};return r&&da(r)&&(i["aria-haspopup"]=!0),[i,{show:t,toggle:n}]}function pa({children:e}){const[t,n]=ma();return m.jsx(m.Fragment,{children:e(t,n)})}pa.displayName="DropdownToggle";const ha=w.createContext(null);ha.displayName="NavContext";const Fo=ha,Xo=["eventKey","disabled","onClick","active","as"];function Ho(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function va({key:e,href:t,active:n,disabled:a,onClick:r}){const o=w.useContext(ft),i=w.useContext(Fo),{activeKey:s}=i||{},l=dn(e,t),c=n==null&&e!=null?dn(s)===l:n;return[{onClick:q(u=>{a||(r==null||r(u),o&&!u.isPropagationStopped()&&o(l,u))}),"aria-disabled":a||void 0,"aria-selected":c,[ra("dropdown-item")]:""},{isActive:c}]}const ga=w.forwardRef((e,t)=>{let{eventKey:n,disabled:a,onClick:r,active:o,as:i=Dr}=e,s=Ho(e,Xo);const[l]=va({key:n,href:s.href,disabled:a,onClick:r,active:o});return m.jsx(i,Object.assign({},s,{ref:t},l))});ga.displayName="DropdownItem";function xn(){const e=xo(),t=w.useRef(null),n=w.useCallback(a=>{t.current=a,e()},[e]);return[t,n]}function Ye({defaultShow:e,show:t,onSelect:n,onToggle:a,itemSelector:r=`* [${ra("dropdown-item")}]`,focusFirstItemOnShow:o,placement:i="bottom-start",children:s}){const l=Yr(),[c,f]=$r(t,e,a),[u,g]=xn(),y=u.current,[h,x]=xn(),p=h.current,b=Wr(c),v=w.useRef(null),d=w.useRef(!1),O=w.useContext(ft),E=w.useCallback((j,_,Y=_==null?void 0:_.type)=>{f(j,{originalEvent:_,source:Y})},[f]),N=q((j,_)=>{n==null||n(j,_),E(!1,_,"select"),_.isPropagationStopped()||O==null||O(j,_)}),C=w.useMemo(()=>({toggle:E,placement:i,show:c,menuElement:y,toggleElement:p,setMenu:g,setToggle:x}),[E,i,c,y,p,g,x]);y&&b&&!c&&(d.current=y.contains(y.ownerDocument.activeElement));const T=q(()=>{p&&p.focus&&p.focus()}),I=q(()=>{const j=v.current;let _=o;if(_==null&&(_=u.current&&da(u.current)?"keyboard":!1),_===!1||_==="keyboard"&&!/^key.+$/.test(j))return;const Y=mn(u.current,r)[0];Y&&Y.focus&&Y.focus()});w.useEffect(()=>{c?I():d.current&&(d.current=!1,T())},[c,d,T,I]),w.useEffect(()=>{v.current=null});const G=(j,_)=>{if(!u.current)return null;const Y=mn(u.current,r);let X=Y.indexOf(j)+_;return X=Math.max(0,Math.min(X,Y.length)),Y[X]};return ho(w.useCallback(()=>l.document,[l]),"keydown",j=>{var _,Y;const{key:X}=j,V=j.target,ze=(_=u.current)==null?void 0:_.contains(V),Be=(Y=h.current)==null?void 0:Y.contains(V);if(/input|textarea/i.test(V.tagName)&&(X===" "||X!=="Escape"&&ze||X==="Escape"&&V.type==="search")||!ze&&!Be||X==="Tab"&&(!u.current||!c))return;v.current=j.type;const Ne={originalEvent:j,source:j.type};switch(X){case"ArrowUp":{const H=G(V,-1);H&&H.focus&&H.focus(),j.preventDefault();return}case"ArrowDown":if(j.preventDefault(),!c)f(!0,Ne);else{const H=G(V,1);H&&H.focus&&H.focus()}return;case"Tab":Fr(V.ownerDocument,"keyup",H=>{var Ke;(H.key==="Tab"&&!H.target||!((Ke=u.current)!=null&&Ke.contains(H.target)))&&f(!1,Ne)},{once:!0});break;case"Escape":X==="Escape"&&(j.preventDefault(),j.stopPropagation()),f(!1,Ne);break}}),m.jsx(ft.Provider,{value:N,children:m.jsx(vt.Provider,{value:C,children:s})})}Ye.displayName="Dropdown";Ye.Menu=qt;Ye.Toggle=pa;Ye.Item=ga;const ba=w.createContext({});ba.displayName="DropdownContext";const ya=ba,wa=w.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:a=!1,onClick:r,active:o,as:i=yo,...s},l)=>{const c=z(e,"dropdown-item"),[f,u]=va({key:n,href:s.href,disabled:a,onClick:r,active:o});return m.jsx(i,{...s,...f,ref:l,className:F(t,c,u.isActive&&"active",a&&"disabled")})});wa.displayName="DropdownItem";const zo=wa,xa=w.createContext(null);xa.displayName="NavbarContext";const Se=xa;function ka(e,t){return e}function Sa(e,t,n){const a=n?"top-end":"top-start",r=n?"top-start":"top-end",o=n?"bottom-end":"bottom-start",i=n?"bottom-start":"bottom-end",s=n?"right-start":"left-start",l=n?"right-end":"left-end",c=n?"left-start":"right-start",f=n?"left-end":"right-end";let u=e?i:o;return t==="up"?u=e?r:a:t==="end"?u=e?f:c:t==="start"?u=e?l:s:t==="down-centered"?u="bottom":t==="up-centered"&&(u="top"),u}const Ea=w.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:a,flip:r=!0,show:o,renderOnMount:i,as:s="div",popperConfig:l,variant:c,...f},u)=>{let g=!1;const y=w.useContext(Se),h=z(e,"dropdown-menu"),{align:x,drop:p,isRTL:b}=w.useContext(ya);n=n||x;const v=w.useContext(sa),d=[];if(n)if(typeof n=="object"){const j=Object.keys(n);if(j.length){const _=j[0],Y=n[_];g=Y==="start",d.push(`${h}-${_}-${Y}`)}}else n==="end"&&(g=!0);const O=Sa(g,p,b),[E,{hasShown:N,popper:C,show:T,toggle:I}]=ua({flip:r,rootCloseEvent:a,show:o,usePopper:!y&&d.length===0,offset:[0,2],popperConfig:l,placement:O});if(E.ref=oa(ka(u),E.ref),ia(()=>{T&&(C==null||C.update())},[T]),!N&&!i&&!v)return null;typeof s!="string"&&(E.show=T,E.close=()=>I==null?void 0:I(!1),E.align=n);let G=f.style;return C!=null&&C.placement&&(G={...f.style,...E.style},f["x-placement"]=C.placement),m.jsx(s,{...f,...E,style:G,...(d.length||y)&&{"data-bs-popper":"static"},className:F(t,h,T&&"show",g&&`${h}-end`,c&&`${h}-${c}`,...d)})});Ea.displayName="DropdownMenu";const Bo=Ea,Oa=w.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:a,as:r=Xr,...o},i)=>{const s=z(e,"dropdown-toggle"),l=w.useContext(vt);a!==void 0&&(o.bsPrefix=a);const[c]=ma();return c.ref=oa(c.ref,ka(i)),m.jsx(r,{className:F(n,s,t&&`${s}-split`,(l==null?void 0:l.show)&&"show"),...c,...o})});Oa.displayName="DropdownToggle";const Uo=Oa,Ko=ke("dropdown-header",{defaultProps:{role:"heading"}}),qo=ke("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),Go=ke("dropdown-item-text",{Component:"span"}),Na=w.forwardRef((e,t)=>{const{bsPrefix:n,drop:a="down",show:r,className:o,align:i="start",onSelect:s,onToggle:l,focusFirstItemOnShow:c,as:f="div",navbar:u,autoClose:g=!0,...y}=la(e,{show:"onToggle"}),h=w.useContext(sa),x=z(n,"dropdown"),p=Hr(),b=C=>g===!1?C==="click":g==="inside"?C!=="rootClose":g==="outside"?C!=="select":!0,v=q((C,T)=>{T.originalEvent.currentTarget===document&&(T.source!=="keydown"||T.originalEvent.key==="Escape")&&(T.source="rootClose"),b(T.source)&&(l==null||l(C,T))}),O=Sa(i==="end",a,p),E=w.useMemo(()=>({align:i,drop:a,isRTL:p}),[i,a,p]),N={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return m.jsx(ya.Provider,{value:E,children:m.jsx(Ye,{placement:O,show:r,onSelect:s,onToggle:v,focusFirstItemOnShow:c,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:h?y.children:m.jsx(f,{...y,ref:t,className:F(o,r&&"show",N[a])})})})});Na.displayName="Dropdown";const U=Object.assign(Na,{Toggle:Uo,Menu:Bo,Item:zo,ItemText:Go,Divider:qo,Header:Ko}),Aa=w.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:a,...r},o)=>{const i=z(e,"container"),s=typeof t=="string"?`-${t}`:"-fluid";return m.jsx(n,{ref:o,...r,className:F(a,t?`${i}${s}`:i)})});Aa.displayName="Container";const Vo=Aa,Ca=w.forwardRef(({bsPrefix:e,className:t,as:n,...a},r)=>{e=z(e,"navbar-brand");const o=n||(a.href?"a":"span");return m.jsx(o,{...a,ref:r,className:F(t,e)})});Ca.displayName="NavbarBrand";const Qo=Ca,Ta=w.forwardRef(({children:e,bsPrefix:t,...n},a)=>{t=z(t,"navbar-collapse");const r=w.useContext(Se);return m.jsx(po,{in:!!(r&&r.expanded),...n,children:m.jsx("div",{ref:a,className:t,children:e})})});Ta.displayName="NavbarCollapse";const Jo=Ta,Pa=w.forwardRef(({bsPrefix:e,className:t,children:n,label:a="Toggle navigation",as:r="button",onClick:o,...i},s)=>{e=z(e,"navbar-toggler");const{onToggle:l,expanded:c}=w.useContext(Se)||{},f=q(u=>{o&&o(u),l&&l()});return r==="button"&&(i.type="button"),m.jsx(r,{...i,ref:s,onClick:f,"aria-label":a,className:F(t,e,!c&&"collapsed"),children:n||m.jsx("span",{className:`${e}-icon`})})});Pa.displayName="NavbarToggle";const Zo=Pa,Pt=new WeakMap,kn=(e,t)=>{if(!e||!t)return;const n=Pt.get(t)||new Map;Pt.set(t,n);let a=n.get(e);return a||(a=t.matchMedia(e),a.refCount=0,n.set(a.media,a)),a};function ei(e,t=typeof window>"u"?void 0:window){const n=kn(e,t),[a,r]=w.useState(()=>n?n.matches:!1);return ia(()=>{let o=kn(e,t);if(!o)return r(!1);let i=Pt.get(t);const s=()=>{r(o.matches)};return o.refCount++,o.addListener(s),s(),()=>{o.removeListener(s),o.refCount--,o.refCount<=0&&(i==null||i.delete(o.media)),o=void 0}},[e]),a}function ti(e){const t=Object.keys(e);function n(s,l){return s===l?l:s?`${s} and ${l}`:l}function a(s){return t[Math.min(t.indexOf(s)+1,t.length-1)]}function r(s){const l=a(s);let c=e[l];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function o(s){let l=e[s];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function i(s,l,c){let f;typeof s=="object"?(f=s,c=l,l=!0):(l=l||!0,f={[s]:l});let u=w.useMemo(()=>Object.entries(f).reduce((g,[y,h])=>((h==="up"||h===!0)&&(g=n(g,o(y))),(h==="down"||h===!0)&&(g=n(g,r(y))),g),""),[JSON.stringify(f)]);return ei(u,c)}return i}const ni=ti({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),ai=ke("offcanvas-body"),ri={[Kt]:"show",[aa]:"show"},Ra=w.forwardRef(({bsPrefix:e,className:t,children:n,in:a=!1,mountOnEnter:r=!1,unmountOnExit:o=!1,appear:i=!1,...s},l)=>(e=z(e,"offcanvas"),m.jsx(ea,{ref:l,addEndListener:ta,in:a,mountOnEnter:r,unmountOnExit:o,appear:i,...s,childRef:n.ref,children:(c,f)=>w.cloneElement(n,{...f,className:F(t,n.props.className,(c===Kt||c===na)&&`${e}-toggling`,ri[c])})})));Ra.displayName="OffcanvasToggling";const oi=Ra,ja=w.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:a=!1,...r},o)=>(e=z(e,"offcanvas-header"),m.jsx(zr,{ref:o,...r,className:F(t,e),closeLabel:n,closeButton:a})));ja.displayName="OffcanvasHeader";const ii=ja,si=Br("h5"),li=ke("offcanvas-title",{Component:si});function ci(e){return m.jsx(oi,{...e})}function fi(e){return m.jsx(qr,{...e})}const _a=w.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":a,placement:r="start",responsive:o,show:i=!1,backdrop:s=!0,keyboard:l=!0,scroll:c=!1,onEscapeKeyDown:f,onShow:u,onHide:g,container:y,autoFocus:h=!0,enforceFocus:x=!0,restoreFocus:p=!0,restoreFocusOptions:b,onEntered:v,onExit:d,onExiting:O,onEnter:E,onEntering:N,onExited:C,backdropClassName:T,manager:I,renderStaticNode:G=!1,...j},_)=>{const Y=w.useRef();e=z(e,"offcanvas");const{onToggle:X}=w.useContext(Se)||{},[V,ze]=w.useState(!1),Be=ni(o||"xs","up");w.useEffect(()=>{ze(o?i&&!Be:i)},[i,o,Be]);const Ue=q(()=>{X==null||X(),g==null||g()}),Ne=w.useMemo(()=>({onHide:Ue}),[Ue]);function H(){return I||(c?(Y.current||(Y.current=new Gr({handleContainerOverflow:!1})),Y.current):Vr())}const Ke=(Q,...kt)=>{Q&&(Q.style.visibility="visible"),E==null||E(Q,...kt)},vr=(Q,...kt)=>{Q&&(Q.style.visibility=""),C==null||C(...kt)},gr=w.useCallback(Q=>m.jsx("div",{...Q,className:F(`${e}-backdrop`,T)}),[T,e]),cn=Q=>m.jsx("div",{...Q,...j,className:F(t,o?`${e}-${o}`:e,`${e}-${r}`),"aria-labelledby":a,children:n});return m.jsxs(m.Fragment,{children:[!V&&(o||G)&&cn({}),m.jsx(Ur.Provider,{value:Ne,children:m.jsx(Kr,{show:V,ref:_,backdrop:s,container:y,keyboard:l,autoFocus:h,enforceFocus:x&&!c,restoreFocus:p,restoreFocusOptions:b,onEscapeKeyDown:f,onShow:u,onHide:Ue,onEnter:Ke,onEntering:N,onEntered:v,onExit:d,onExiting:O,onExited:vr,manager:H(),transition:ci,backdropTransition:fi,renderBackdrop:gr,renderDialog:cn})})]})});_a.displayName="Offcanvas";const ui=Object.assign(_a,{Body:ai,Header:ii,Title:li}),Ma=w.forwardRef((e,t)=>{const n=w.useContext(Se);return m.jsx(ui,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});Ma.displayName="NavbarOffcanvas";const di=Ma,mi=ke("navbar-text",{Component:"span"}),La=w.forwardRef((e,t)=>{const{bsPrefix:n,expand:a=!0,variant:r="light",bg:o,fixed:i,sticky:s,className:l,as:c="nav",expanded:f,onToggle:u,onSelect:g,collapseOnSelect:y=!1,...h}=la(e,{expanded:"onToggle"}),x=z(n,"navbar"),p=w.useCallback((...d)=>{g==null||g(...d),y&&f&&(u==null||u(!1))},[g,y,f,u]);h.role===void 0&&c!=="nav"&&(h.role="navigation");let b=`${x}-expand`;typeof a=="string"&&(b=`${b}-${a}`);const v=w.useMemo(()=>({onToggle:()=>u==null?void 0:u(!f),bsPrefix:x,expanded:!!f,expand:a}),[x,f,a,u]);return m.jsx(Se.Provider,{value:v,children:m.jsx(ft.Provider,{value:p,children:m.jsx(c,{ref:t,...h,className:F(l,x,a&&b,r&&`${x}-${r}`,o&&`bg-${o}`,s&&`sticky-${s}`,i&&`fixed-${i}`)})})})});La.displayName="Navbar";const Et=Object.assign(La,{Brand:Qo,Collapse:Jo,Offcanvas:di,Text:mi,Toggle:Zo});function pi(){return m.jsx(w.Fragment,{children:m.jsx("footer",{className:"footer backgroundss",style:{backgroundColor:"#F4F5F7"},children:m.jsx("div",{className:"container",children:m.jsx(Qr,{className:"row align-items-center flex-row-reverse",children:m.jsx(Jr,{lg:12,sm:12,className:"text-center",children:"Copyright © 2024 Rwanda Eye Clinic"})})})})})}function hi(){const[e,t]=w.useState();Zr();const n=()=>{localStorage.clear(),window.location.reload()};document.addEventListener("click",function(){var o;(o=document.querySelector(".search-result"))==null||o.classList.add("d-none")});function a(){document.fullScreenElement&&document.fullScreenElement===null||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}const r=()=>{document.querySelector(".app").classList.toggle("sidenav-toggled")};return m.jsxs(w.Fragment,{children:[m.jsx("div",{className:"app-header header sticky",style:{marginBottom:"-70.7812px",backgroundColor:"#FDFEFF"},children:m.jsx(Vo,{fluid:!0,className:" main-container ",children:m.jsxs("div",{className:"d-flex",children:[m.jsx(st,{"aria-label":"Hide Sidebar",className:"app-sidebar__toggle","data-bs-toggle":"sidebar",onClick:()=>r(),to:"#"}),m.jsx(st,{className:"logo-horizontal",to:"/dashboard"}),m.jsxs(Et,{className:"d-flex order-lg-2 ms-auto header-right-icons px-0",expand:"lg",children:[m.jsxs(U,{className:"d-none",children:[m.jsx(U.Toggle,{as:"a",href:"#",variant:"light",className:"no-caret nav-link icon ",children:m.jsx("i",{className:"fe fe-search"})}),m.jsx(U.Menu,{className:" header-search dropdown-menu-start",children:m.jsxs(Ge,{className:" w-100 p-2",children:[m.jsx(pn.Control,{type:"text",placeholder:"Search...."}),m.jsx(Ge.Text,{variant:"primary",className:" btn btn-primary me-2",children:m.jsx("i",{className:"fe fe-search","aria-hidden":"true"})})]})})]}),m.jsx(Et.Toggle,{className:"navbar-toggler navresponsive-toggler d-lg-none ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent-4","aria-controls":"navbarSupportedContent-4","aria-expanded":"false","aria-label":"Toggle navigation",children:m.jsx("span",{className:"navbar-toggler-icon fe fe-more-vertical"})}),m.jsx("div",{className:"responsive-navbar p-0",children:m.jsx(Et.Collapse,{className:"",id:"navbarSupportedContent-4",children:m.jsxs("div",{className:"d-flex order-lg-2",children:[m.jsxs(U,{className:" d-lg-none d-flex",children:[m.jsx(U.Toggle,{as:"a",to:"#",className:" no-caret nav-link icon","data-bs-toggle":"dropdown",children:m.jsx("i",{className:"fe fe-search"})}),m.jsx(U.Menu,{className:" header-search dropdown-menu-start",children:m.jsxs(Ge,{className:"w-100 p-2",children:[m.jsx(pn.Control,{type:"text",placeholder:"Search...."}),m.jsx(Ge.Text,{className:"input-group-text btn btn-primary",children:m.jsx("i",{className:"fa fa-search","aria-hidden":"true"})})]})})]}),m.jsx("div",{className:"dropdown d-flex",children:m.jsx(st,{className:"nav-link icon full-screen-link",id:"fullscreen-button",onClick:a,children:m.jsx("i",{className:"ri-fullscreen-exit-line fullscreen-button"})})}),m.jsxs(U,{className:"dropdown d-flex profile-1",children:[m.jsx(U.Toggle,{as:"a",variant:"",className:"no-caret nav-link leading-none d-flex",children:m.jsx("i",{className:"fa fa-user"})}),m.jsxs(U.Menu,{className:"dropdown-menu dropdown-menu-end dropdown-menu-arrow","data-bs-popper":"none",children:[m.jsx("div",{className:"drop-heading",children:m.jsxs("div",{className:"text-center",children:[m.jsx("h5",{className:"text-dark mb-0 fw-semibold",children:e==null?void 0:e.email}),m.jsx("span",{className:"text-muted fs-12",children:e==null?void 0:e.roles.map(o=>o.name).join(", ")})]})}),m.jsxs(U.Item,{className:"text-dark fw-semibold border-top",href:"/profile",children:[m.jsx("i",{className:"dropdown-icon fe fe-user"})," Profile"]}),m.jsxs(U.Item,{className:"text-dark fw-semibold",onClick:n,children:[m.jsx("i",{className:"dropdown-icon fe fe-log-out"})," Sign out"]})]})]})]})})})]})]})})}),m.jsx("div",{className:"jumps-prevent",style:{paddingTop:"70.7812px"}})]})}var Rt={exports:{}},jt={exports:{}};/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function J(e){return getComputedStyle(e)}function W(e,t){for(var n in t){var a=t[n];typeof a=="number"&&(a=a+"px"),e.style[n]=a}return e}function Ve(e){var t=document.createElement("div");return t.className=e,t}var Sn=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function ie(e,t){if(!Sn)throw new Error("No element matching method supported");return Sn.call(e,t)}function ve(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function En(e,t){return Array.prototype.filter.call(e.children,function(n){return ie(n,t)})}var D={main:"ps",rtl:"ps__rtl",element:{thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}}},Ia={x:null,y:null};function Da(e,t){var n=e.element.classList,a=D.state.scrolling(t);n.contains(a)?clearTimeout(Ia[t]):n.add(a)}function Ya(e,t){Ia[t]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(D.state.scrolling(t))},e.settings.scrollingThreshold)}function vi(e,t){Da(e,t),Ya(e,t)}var $e=function(t){this.element=t,this.handlers={}},$a={isEmpty:{configurable:!0}};$e.prototype.bind=function(t,n){typeof this.handlers[t]>"u"&&(this.handlers[t]=[]),this.handlers[t].push(n),this.element.addEventListener(t,n,!1)};$e.prototype.unbind=function(t,n){var a=this;this.handlers[t]=this.handlers[t].filter(function(r){return n&&r!==n?!0:(a.element.removeEventListener(t,r,!1),!1)})};$e.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)};$a.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(t){return e.handlers[t].length===0})};Object.defineProperties($e.prototype,$a);var Ee=function(){this.eventElements=[]};Ee.prototype.eventElement=function(t){var n=this.eventElements.filter(function(a){return a.element===t})[0];return n||(n=new $e(t),this.eventElements.push(n)),n};Ee.prototype.bind=function(t,n,a){this.eventElement(t).bind(n,a)};Ee.prototype.unbind=function(t,n,a){var r=this.eventElement(t);r.unbind(n,a),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)};Ee.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]};Ee.prototype.once=function(t,n,a){var r=this.eventElement(t),o=function(i){r.unbind(n,o),a(i)};r.bind(n,o)};function Qe(e){if(typeof window.CustomEvent=="function")return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function ut(e,t,n,a,r){a===void 0&&(a=!0),r===void 0&&(r=!1);var o;if(t==="top")o=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(t==="left")o=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");gi(e,n,o,a,r)}function gi(e,t,n,a,r){var o=n[0],i=n[1],s=n[2],l=n[3],c=n[4],f=n[5];a===void 0&&(a=!0),r===void 0&&(r=!1);var u=e.element;e.reach[l]=null,u[s]<1&&(e.reach[l]="start"),u[s]>e[o]-e[i]-1&&(e.reach[l]="end"),t&&(u.dispatchEvent(Qe("ps-scroll-"+l)),t<0?u.dispatchEvent(Qe("ps-scroll-"+c)):t>0&&u.dispatchEvent(Qe("ps-scroll-"+f)),a&&vi(e,l)),e.reach[l]&&(t||r)&&u.dispatchEvent(Qe("ps-"+l+"-reach-"+e.reach[l]))}function M(e){return parseInt(e,10)||0}function bi(e){return ie(e,"input,[contenteditable]")||ie(e,"select,[contenteditable]")||ie(e,"textarea,[contenteditable]")||ie(e,"button,[contenteditable]")}function yi(e){var t=J(e);return M(t.width)+M(t.paddingLeft)+M(t.paddingRight)+M(t.borderLeftWidth)+M(t.borderRightWidth)}var he={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function ee(e){var t=e.element,n=Math.floor(t.scrollTop),a=t.getBoundingClientRect();e.containerWidth=Math.round(a.width),e.containerHeight=Math.round(a.height),e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(En(t,D.element.rail("x")).forEach(function(r){return ve(r)}),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(En(t,D.element.rail("y")).forEach(function(r){return ve(r)}),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=On(e,M(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=M((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=On(e,M(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=M(n*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),wi(t,e),e.scrollbarXActive?t.classList.add(D.state.active("x")):(t.classList.remove(D.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=e.isRtl===!0?e.contentWidth:0),e.scrollbarYActive?t.classList.add(D.state.active("y")):(t.classList.remove(D.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)}function On(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function wi(e,t){var n={width:t.railXWidth},a=Math.floor(e.scrollTop);t.isRtl?n.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:n.left=e.scrollLeft,t.isScrollbarXUsingBottom?n.bottom=t.scrollbarXBottom-a:n.top=t.scrollbarXTop+a,W(t.scrollbarXRail,n);var r={top:a,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?r.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth-9:r.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?r.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth*2-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:r.left=t.scrollbarYLeft+e.scrollLeft,W(t.scrollbarYRail,r),W(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),W(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}function xi(e){e.element,e.event.bind(e.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),e.event.bind(e.scrollbarYRail,"mousedown",function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top,a=n>e.scrollbarYTop?1:-1;e.element.scrollTop+=a*e.containerHeight,ee(e),t.stopPropagation()}),e.event.bind(e.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),e.event.bind(e.scrollbarXRail,"mousedown",function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left,a=n>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=a*e.containerWidth,ee(e),t.stopPropagation()})}function ki(e){Nn(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),Nn(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function Nn(e,t){var n=t[0],a=t[1],r=t[2],o=t[3],i=t[4],s=t[5],l=t[6],c=t[7],f=t[8],u=e.element,g=null,y=null,h=null;function x(v){v.touches&&v.touches[0]&&(v[r]=v.touches[0].pageY),u[l]=g+h*(v[r]-y),Da(e,c),ee(e),v.stopPropagation(),v.type.startsWith("touch")&&v.changedTouches.length>1&&v.preventDefault()}function p(){Ya(e,c),e[f].classList.remove(D.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",x)}function b(v,d){g=u[l],d&&v.touches&&(v[r]=v.touches[0].pageY),y=v[r],h=(e[a]-e[n])/(e[o]-e[s]),d?e.event.bind(e.ownerDocument,"touchmove",x):(e.event.bind(e.ownerDocument,"mousemove",x),e.event.once(e.ownerDocument,"mouseup",p),v.preventDefault()),e[f].classList.add(D.state.clicking),v.stopPropagation()}e.event.bind(e[i],"mousedown",function(v){b(v)}),e.event.bind(e[i],"touchstart",function(v){b(v,!0)})}function Si(e){var t=e.element,n=function(){return ie(t,":hover")},a=function(){return ie(e.scrollbarX,":focus")||ie(e.scrollbarY,":focus")};function r(o,i){var s=Math.floor(t.scrollTop);if(o===0){if(!e.scrollbarYActive)return!1;if(s===0&&i>0||s>=e.contentHeight-e.containerHeight&&i<0)return!e.settings.wheelPropagation}var l=t.scrollLeft;if(i===0){if(!e.scrollbarXActive)return!1;if(l===0&&o<0||l>=e.contentWidth-e.containerWidth&&o>0)return!e.settings.wheelPropagation}return!0}e.event.bind(e.ownerDocument,"keydown",function(o){if(!(o.isDefaultPrevented&&o.isDefaultPrevented()||o.defaultPrevented)&&!(!n()&&!a())){var i=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(i){if(i.tagName==="IFRAME")i=i.contentDocument.activeElement;else for(;i.shadowRoot;)i=i.shadowRoot.activeElement;if(bi(i))return}var s=0,l=0;switch(o.which){case 37:o.metaKey?s=-e.contentWidth:o.altKey?s=-e.containerWidth:s=-30;break;case 38:o.metaKey?l=e.contentHeight:o.altKey?l=e.containerHeight:l=30;break;case 39:o.metaKey?s=e.contentWidth:o.altKey?s=e.containerWidth:s=30;break;case 40:o.metaKey?l=-e.contentHeight:o.altKey?l=-e.containerHeight:l=-30;break;case 32:o.shiftKey?l=e.containerHeight:l=-e.containerHeight;break;case 33:l=e.containerHeight;break;case 34:l=-e.containerHeight;break;case 36:l=e.contentHeight;break;case 35:l=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&s!==0||e.settings.suppressScrollY&&l!==0||(t.scrollTop-=l,t.scrollLeft+=s,ee(e),r(s,l)&&o.preventDefault())}})}function Ei(e){var t=e.element;function n(i,s){var l=Math.floor(t.scrollTop),c=t.scrollTop===0,f=l+t.offsetHeight===t.scrollHeight,u=t.scrollLeft===0,g=t.scrollLeft+t.offsetWidth===t.scrollWidth,y;return Math.abs(s)>Math.abs(i)?y=c||f:y=u||g,y?!e.settings.wheelPropagation:!0}function a(i){var s=i.deltaX,l=-1*i.deltaY;return(typeof s>"u"||typeof l>"u")&&(s=-1*i.wheelDeltaX/6,l=i.wheelDeltaY/6),i.deltaMode&&i.deltaMode===1&&(s*=10,l*=10),s!==s&&l!==l&&(s=0,l=i.wheelDelta),i.shiftKey?[-l,-s]:[s,l]}function r(i,s,l){if(!he.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(i))return!1;for(var c=i;c&&c!==t;){if(c.classList.contains(D.element.consuming))return!0;var f=J(c);if(l&&f.overflowY.match(/(scroll|auto)/)){var u=c.scrollHeight-c.clientHeight;if(u>0&&(c.scrollTop>0&&l<0||c.scrollTop<u&&l>0))return!0}if(s&&f.overflowX.match(/(scroll|auto)/)){var g=c.scrollWidth-c.clientWidth;if(g>0&&(c.scrollLeft>0&&s<0||c.scrollLeft<g&&s>0))return!0}c=c.parentNode}return!1}function o(i){var s=a(i),l=s[0],c=s[1];if(!r(i.target,l,c)){var f=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(c?t.scrollTop-=c*e.settings.wheelSpeed:t.scrollTop+=l*e.settings.wheelSpeed,f=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(l?t.scrollLeft+=l*e.settings.wheelSpeed:t.scrollLeft-=c*e.settings.wheelSpeed,f=!0):(t.scrollTop-=c*e.settings.wheelSpeed,t.scrollLeft+=l*e.settings.wheelSpeed),ee(e),f=f||n(l,c),f&&!i.ctrlKey&&(i.stopPropagation(),i.preventDefault())}}typeof window.onwheel<"u"?e.event.bind(t,"wheel",o):typeof window.onmousewheel<"u"&&e.event.bind(t,"mousewheel",o)}function Oi(e){if(!he.supportsTouch&&!he.supportsIePointer)return;var t=e.element;function n(h,x){var p=Math.floor(t.scrollTop),b=t.scrollLeft,v=Math.abs(h),d=Math.abs(x);if(d>v){if(x<0&&p===e.contentHeight-e.containerHeight||x>0&&p===0)return window.scrollY===0&&x>0&&he.isChrome}else if(v>d&&(h<0&&b===e.contentWidth-e.containerWidth||h>0&&b===0))return!0;return!0}function a(h,x){t.scrollTop-=x,t.scrollLeft-=h,ee(e)}var r={},o=0,i={},s=null;function l(h){return h.targetTouches?h.targetTouches[0]:h}function c(h){return h.pointerType&&h.pointerType==="pen"&&h.buttons===0?!1:!!(h.targetTouches&&h.targetTouches.length===1||h.pointerType&&h.pointerType!=="mouse"&&h.pointerType!==h.MSPOINTER_TYPE_MOUSE)}function f(h){if(c(h)){var x=l(h);r.pageX=x.pageX,r.pageY=x.pageY,o=new Date().getTime(),s!==null&&clearInterval(s)}}function u(h,x,p){if(!t.contains(h))return!1;for(var b=h;b&&b!==t;){if(b.classList.contains(D.element.consuming))return!0;var v=J(b);if(p&&v.overflowY.match(/(scroll|auto)/)){var d=b.scrollHeight-b.clientHeight;if(d>0&&(b.scrollTop>0&&p<0||b.scrollTop<d&&p>0))return!0}if(x&&v.overflowX.match(/(scroll|auto)/)){var O=b.scrollWidth-b.clientWidth;if(O>0&&(b.scrollLeft>0&&x<0||b.scrollLeft<O&&x>0))return!0}b=b.parentNode}return!1}function g(h){if(c(h)){var x=l(h),p={pageX:x.pageX,pageY:x.pageY},b=p.pageX-r.pageX,v=p.pageY-r.pageY;if(u(h.target,b,v))return;a(b,v),r=p;var d=new Date().getTime(),O=d-o;O>0&&(i.x=b/O,i.y=v/O,o=d),n(b,v)&&h.preventDefault()}}function y(){e.settings.swipeEasing&&(clearInterval(s),s=setInterval(function(){if(e.isInitialized){clearInterval(s);return}if(!i.x&&!i.y){clearInterval(s);return}if(Math.abs(i.x)<.01&&Math.abs(i.y)<.01){clearInterval(s);return}if(!e.element){clearInterval(s);return}a(i.x*30,i.y*30),i.x*=.8,i.y*=.8},10))}he.supportsTouch?(e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",g),e.event.bind(t,"touchend",y)):he.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",g),e.event.bind(t,"pointerup",y)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",g),e.event.bind(t,"MSPointerUp",y)))}var Ni=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},Ai={"click-rail":xi,"drag-thumb":ki,keyboard:Si,wheel:Ei,touch:Oi},We=function(t,n){var a=this;if(n===void 0&&(n={}),typeof t=="string"&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=t,t.classList.add(D.main),this.settings=Ni();for(var r in n)this.settings[r]=n[r];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var o=function(){return t.classList.add(D.state.focus)},i=function(){return t.classList.remove(D.state.focus)};this.isRtl=J(t).direction==="rtl",this.isRtl===!0&&t.classList.add(D.rtl),this.isNegativeScroll=function(){var c=t.scrollLeft,f=null;return t.scrollLeft=-1,f=t.scrollLeft<0,t.scrollLeft=c,f}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new Ee,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=Ve(D.element.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=Ve(D.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",o),this.event.bind(this.scrollbarX,"blur",i),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var s=J(this.scrollbarXRail);this.scrollbarXBottom=parseInt(s.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=M(s.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=M(s.borderLeftWidth)+M(s.borderRightWidth),W(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=M(s.marginLeft)+M(s.marginRight),W(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=Ve(D.element.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=Ve(D.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",o),this.event.bind(this.scrollbarY,"blur",i),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=J(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=M(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?yi(this.scrollbarY):null,this.railBorderYWidth=M(l.borderTopWidth)+M(l.borderBottomWidth),W(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=M(l.marginTop)+M(l.marginBottom),W(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return Ai[c](a)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(c){return a.onScroll(c)}),ee(this)};We.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,W(this.scrollbarXRail,{display:"block"}),W(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=M(J(this.scrollbarXRail).marginLeft)+M(J(this.scrollbarXRail).marginRight),this.railYMarginHeight=M(J(this.scrollbarYRail).marginTop)+M(J(this.scrollbarYRail).marginBottom),W(this.scrollbarXRail,{display:"none"}),W(this.scrollbarYRail,{display:"none"}),ee(this),ut(this,"top",0,!1,!0),ut(this,"left",0,!1,!0),W(this.scrollbarXRail,{display:""}),W(this.scrollbarYRail,{display:""}))};We.prototype.onScroll=function(t){this.isAlive&&(ee(this),ut(this,"top",this.element.scrollTop-this.lastScrollTop),ut(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};We.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),ve(this.scrollbarX),ve(this.scrollbarY),ve(this.scrollbarXRail),ve(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};We.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")};const Ci=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"})),Ti=eo(Ci);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var b=1;b<arguments.length;b++){var v=arguments[b];for(var d in v)Object.prototype.hasOwnProperty.call(v,d)&&(p[d]=v[d])}return p},a=function(){function p(b,v){for(var d=0;d<v.length;d++){var O=v[d];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(b,O.key,O)}}return function(b,v,d){return v&&p(b.prototype,v),d&&p(b,d),b}}(),r=w,o=c(r),i=to,s=Ti,l=c(s);function c(p){return p&&p.__esModule?p:{default:p}}function f(p,b){var v={};for(var d in p)b.indexOf(d)>=0||Object.prototype.hasOwnProperty.call(p,d)&&(v[d]=p[d]);return v}function u(p,b){if(!(p instanceof b))throw new TypeError("Cannot call a class as a function")}function g(p,b){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:p}function y(p,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);p.prototype=Object.create(b&&b.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(p,b):p.__proto__=b)}var h={"ps-scroll-y":"onScrollY","ps-scroll-x":"onScrollX","ps-scroll-up":"onScrollUp","ps-scroll-down":"onScrollDown","ps-scroll-left":"onScrollLeft","ps-scroll-right":"onScrollRight","ps-y-reach-start":"onYReachStart","ps-y-reach-end":"onYReachEnd","ps-x-reach-start":"onXReachStart","ps-x-reach-end":"onXReachEnd"};Object.freeze(h);var x=function(p){y(b,p);function b(v){u(this,b);var d=g(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,v));return d.handleRef=d.handleRef.bind(d),d._handlerByEvent={},d}return a(b,[{key:"componentDidMount",value:function(){this.props.option&&console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'),this._ps=new l.default(this._container,this.props.options||this.props.option),this._updateEventHook(),this._updateClassName()}},{key:"componentDidUpdate",value:function(d){this._updateEventHook(d),this.updateScroll(),d.className!==this.props.className&&this._updateClassName()}},{key:"componentWillUnmount",value:function(){var d=this;Object.keys(this._handlerByEvent).forEach(function(O){var E=d._handlerByEvent[O];E&&d._container.removeEventListener(O,E,!1)}),this._handlerByEvent={},this._ps.destroy(),this._ps=null}},{key:"_updateEventHook",value:function(){var d=this,O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.keys(h).forEach(function(E){var N=d.props[h[E]],C=O[h[E]];if(N!==C){if(C){var T=d._handlerByEvent[E];d._container.removeEventListener(E,T,!1),d._handlerByEvent[E]=null}if(N){var I=function(){return N(d._container)};d._container.addEventListener(E,I,!1),d._handlerByEvent[E]=I}}})}},{key:"_updateClassName",value:function(){var d=this.props.className,O=this._container.className.split(" ").filter(function(E){return E.match(/^ps([-_].+|)$/)}).join(" ");this._container&&(this._container.className="scrollbar-container"+(d?" "+d:"")+(O?" "+O:""))}},{key:"updateScroll",value:function(){this.props.onSync(this._ps)}},{key:"handleRef",value:function(d){this._container=d,this.props.containerRef(d)}},{key:"render",value:function(){var d=this.props;d.className;var O=d.style;d.option,d.options,d.containerRef,d.onScrollY,d.onScrollX,d.onScrollUp,d.onScrollDown,d.onScrollLeft,d.onScrollRight,d.onYReachStart,d.onYReachEnd,d.onXReachStart,d.onXReachEnd;var E=d.component;d.onSync;var N=d.children,C=f(d,["className","style","option","options","containerRef","onScrollY","onScrollX","onScrollUp","onScrollDown","onScrollLeft","onScrollRight","onYReachStart","onYReachEnd","onXReachStart","onXReachEnd","component","onSync","children"]),T=E;return o.default.createElement(T,n({style:O,ref:this.handleRef},C),N)}}]),b}(r.Component);t.default=x,x.defaultProps={className:"",style:void 0,option:void 0,options:void 0,containerRef:function(){},onScrollY:void 0,onScrollX:void 0,onScrollUp:void 0,onScrollDown:void 0,onScrollLeft:void 0,onScrollRight:void 0,onYReachStart:void 0,onYReachEnd:void 0,onXReachStart:void 0,onXReachEnd:void 0,onSync:function(b){return b.update()},component:"div"},x.propTypes={children:i.PropTypes.node.isRequired,className:i.PropTypes.string,style:i.PropTypes.object,option:i.PropTypes.object,options:i.PropTypes.object,containerRef:i.PropTypes.func,onScrollY:i.PropTypes.func,onScrollX:i.PropTypes.func,onScrollUp:i.PropTypes.func,onScrollDown:i.PropTypes.func,onScrollLeft:i.PropTypes.func,onScrollRight:i.PropTypes.func,onYReachStart:i.PropTypes.func,onYReachEnd:i.PropTypes.func,onXReachStart:i.PropTypes.func,onXReachEnd:i.PropTypes.func,onSync:i.PropTypes.func,component:i.PropTypes.string},e.exports=t.default})(jt,jt.exports);var Pi=jt.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Pi,a=r(n);function r(o){return o&&o.__esModule?o:{default:o}}t.default=a.default,e.exports=t.default})(Rt,Rt.exports);var Ri=Rt.exports;const ji=no(Ri);function An(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?An(Object(n),!0).forEach(function(a){$(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):An(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function dt(e){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt(e)}function _i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Cn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Mi(e,t,n){return t&&Cn(e.prototype,t),n&&Cn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gt(e,t){return Ii(e)||Yi(e,t)||Wa(e,t)||Wi()}function Fe(e){return Li(e)||Di(e)||Wa(e)||$i()}function Li(e){if(Array.isArray(e))return _t(e)}function Ii(e){if(Array.isArray(e))return e}function Di(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Wa(e,t){if(e){if(typeof e=="string")return _t(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _t(e,t)}}function _t(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function $i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tn=function(){},Vt={},Fa={},Xa=null,Ha={mark:Tn,measure:Tn};try{typeof window<"u"&&(Vt=window),typeof document<"u"&&(Fa=document),typeof MutationObserver<"u"&&(Xa=MutationObserver),typeof performance<"u"&&(Ha=performance)}catch{}var Fi=Vt.navigator||{},Pn=Fi.userAgent,Rn=Pn===void 0?"":Pn,le=Vt,R=Fa,jn=Xa,Je=Ha;le.document;var re=!!R.documentElement&&!!R.head&&typeof R.addEventListener=="function"&&typeof R.createElement=="function",za=~Rn.indexOf("MSIE")||~Rn.indexOf("Trident/"),Ze,et,tt,nt,at,te="___FONT_AWESOME___",Mt=16,Ba="fa",Ua="svg-inline--fa",me="data-fa-i2svg",Lt="data-fa-pseudo-element",Xi="data-fa-pseudo-element-pending",Qt="data-prefix",Jt="data-icon",_n="fontawesome-i2svg",Hi="async",zi=["HTML","HEAD","STYLE","SCRIPT"],Ka=function(){try{return!0}catch{return!1}}(),P="classic",L="sharp",Zt=[P,L];function Xe(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[P]}})}var _e=Xe((Ze={},$(Ze,P,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),$(Ze,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ze)),Me=Xe((et={},$(et,P,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$(et,L,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),et)),Le=Xe((tt={},$(tt,P,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$(tt,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),tt)),Bi=Xe((nt={},$(nt,P,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$(nt,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),nt)),Ui=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qa="fa-layers-text",Ki=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qi=Xe((at={},$(at,P,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$(at,L,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),at)),Ga=[1,2,3,4,5,6,7,8,9,10],Gi=Ga.concat([11,12,13,14,15,16,17,18,19,20]),Vi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ie=new Set;Object.keys(Me[P]).map(Ie.add.bind(Ie));Object.keys(Me[L]).map(Ie.add.bind(Ie));var Qi=[].concat(Zt,Fe(Ie),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(Ga.map(function(e){return"".concat(e,"x")})).concat(Gi.map(function(e){return"w-".concat(e)})),Pe=le.FontAwesomeConfig||{};function Ji(e){var t=R.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(R&&typeof R.querySelector=="function"){var es=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];es.forEach(function(e){var t=Gt(e,2),n=t[0],a=t[1],r=Zi(Ji(n));r!=null&&(Pe[a]=r)})}var Va={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ba,replacementClass:Ua,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pe.familyPrefix&&(Pe.cssPrefix=Pe.familyPrefix);var xe=k(k({},Va),Pe);xe.autoReplaceSvg||(xe.observeMutations=!1);var S={};Object.keys(Va).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){xe[e]=n,Re.forEach(function(a){return a(S)})},get:function(){return xe[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){xe.cssPrefix=t,Re.forEach(function(n){return n(S)})},get:function(){return xe.cssPrefix}});le.FontAwesomeConfig=S;var Re=[];function ts(e){return Re.push(e),function(){Re.splice(Re.indexOf(e),1)}}var oe=Mt,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ns(e){if(!(!e||!re)){var t=R.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=R.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return R.head.insertBefore(t,a),e}}var as="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function De(){for(var e=12,t="";e-- >0;)t+=as[Math.random()*62|0];return t}function Oe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function en(e){return e.classList?Oe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Qa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Qa(e[n]),'" ')},"").trim()}function gt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function tn(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function os(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function is(e){var t=e.transform,n=e.width,a=n===void 0?Mt:n,r=e.height,o=r===void 0?Mt:r,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&za?l+="translate(".concat(t.x/oe-a/2,"em, ").concat(t.y/oe-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/oe,"em), calc(-50% + ").concat(t.y/oe,"em)) "):l+="translate(".concat(t.x/oe,"em, ").concat(t.y/oe,"em) "),l+="scale(".concat(t.size/oe*(t.flipX?-1:1),", ").concat(t.size/oe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ss=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ja(){var e=Ba,t=Ua,n=S.cssPrefix,a=S.replacementClass,r=ss;if(n!==e||a!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Mn=!1;function Ot(){S.autoAddCss&&!Mn&&(ns(Ja()),Mn=!0)}var ls={mixout:function(){return{dom:{css:Ja,insertCss:Ot}}},hooks:function(){return{beforeDOMElementCreation:function(){Ot()},beforeI2svg:function(){Ot()}}}},ne=le||{};ne[te]||(ne[te]={});ne[te].styles||(ne[te].styles={});ne[te].hooks||(ne[te].hooks={});ne[te].shims||(ne[te].shims=[]);var K=ne[te],Za=[],cs=function e(){R.removeEventListener("DOMContentLoaded",e),mt=1,Za.map(function(t){return t()})},mt=!1;re&&(mt=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),mt||R.addEventListener("DOMContentLoaded",cs));function fs(e){re&&(mt?setTimeout(e,0):Za.push(e))}function He(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,o=r===void 0?[]:r;return typeof e=="string"?Qa(e):"<".concat(t," ").concat(rs(a),">").concat(o.map(He).join(""),"</").concat(t,">")}function Ln(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var us=function(t,n){return function(a,r,o,i){return t.call(n,a,r,o,i)}},Nt=function(t,n,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?us(n,r):n,l,c,f;for(a===void 0?(l=1,f=t[o[0]]):(l=0,f=a);l<i;l++)c=o[l],f=s(f,t[c],c,t);return f};function ds(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function It(e){var t=ds(e);return t.length===1?t[0].toString(16):null}function ms(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function In(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Dt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=In(t);typeof K.hooks.addPack=="function"&&!r?K.hooks.addPack(e,In(t)):K.styles[e]=k(k({},K.styles[e]||{}),o),e==="fas"&&Dt("fa",t)}var rt,ot,it,ge=K.styles,ps=K.shims,hs=(rt={},$(rt,P,Object.values(Le[P])),$(rt,L,Object.values(Le[L])),rt),nn=null,er={},tr={},nr={},ar={},rr={},vs=(ot={},$(ot,P,Object.keys(_e[P])),$(ot,L,Object.keys(_e[L])),ot);function gs(e){return~Qi.indexOf(e)}function bs(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!gs(r)?r:null}var or=function(){var t=function(o){return Nt(ge,function(i,s,l){return i[l]=Nt(s,o,{}),i},{})};er=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),tr=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),rr=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var n="far"in ge||S.autoFetchSvg,a=Nt(ps,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});nr=a.names,ar=a.unicodes,nn=bt(S.styleDefault,{family:S.familyDefault})};ts(function(e){nn=bt(e.styleDefault,{family:S.familyDefault})});or();function an(e,t){return(er[e]||{})[t]}function ys(e,t){return(tr[e]||{})[t]}function de(e,t){return(rr[e]||{})[t]}function ir(e){return nr[e]||{prefix:null,iconName:null}}function ws(e){var t=ar[e],n=an("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ce(){return nn}var rn=function(){return{prefix:null,iconName:null,rest:[]}};function bt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?P:n,r=_e[a][e],o=Me[a][e]||Me[a][r],i=e in K.styles?e:null;return o||i||null}var Dn=(it={},$(it,P,Object.keys(Le[P])),$(it,L,Object.keys(Le[L])),it);function yt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(t={},$(t,P,"".concat(S.cssPrefix,"-").concat(P)),$(t,L,"".concat(S.cssPrefix,"-").concat(L)),t),i=null,s=P;(e.includes(o[P])||e.some(function(c){return Dn[P].includes(c)}))&&(s=P),(e.includes(o[L])||e.some(function(c){return Dn[L].includes(c)}))&&(s=L);var l=e.reduce(function(c,f){var u=bs(S.cssPrefix,f);if(ge[f]?(f=hs[s].includes(f)?Bi[s][f]:f,i=f,c.prefix=f):vs[s].indexOf(f)>-1?(i=f,c.prefix=bt(f,{family:s})):u?c.iconName=u:f!==S.replacementClass&&f!==o[P]&&f!==o[L]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var g=i==="fa"?ir(c.iconName):{},y=de(c.prefix,c.iconName);g.prefix&&(i=null),c.iconName=g.iconName||y||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!ge.far&&ge.fas&&!S.autoFetchSvg&&(c.prefix="fas")}return c},rn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===L&&(ge.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=de(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=ce()||"fas"),l}var xs=function(){function e(){_i(this,e),this.definitions={}}return Mi(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=k(k({},n.definitions[s]||{}),i[s]),Dt(s,i[s]);var l=Le[P][s];l&&Dt(l,i[s]),or()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,c=i.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[s][u]=c)}),n[s][l]=c}),n}}]),e}(),Yn=[],be={},we={},ks=Object.keys(we);function Ss(e,t){var n=t.mixoutsTo;return Yn=e,be={},Object.keys(we).forEach(function(a){ks.indexOf(a)===-1&&delete we[a]}),Yn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),dt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){be[i]||(be[i]=[]),be[i].push(o[i])})}a.provides&&a.provides(we)}),n}function Yt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=be[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=be[e]||[];r.forEach(function(o){o.apply(null,n)})}function ae(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return we[e]?we[e].apply(null,t):void 0}function $t(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ce();if(t)return t=de(n,t)||t,Ln(sr.definitions,n,t)||Ln(K.styles,n,t)}var sr=new xs,Es=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,pe("noAuto")},Os={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return re?(pe("beforeI2svg",t),ae("pseudoElements2svg",t),ae("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,fs(function(){As({autoReplaceSvgRoot:n}),pe("watch",t)})}},Ns={icon:function(t){if(t===null)return null;if(dt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:de(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=bt(t[0]);return{prefix:a,iconName:de(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Ui))){var r=yt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||ce(),iconName:de(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=ce();return{prefix:o,iconName:de(o,t)||t}}}},B={noAuto:Es,config:S,dom:Os,parse:Ns,library:sr,findIconDefinition:$t,toHtml:He},As=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?R:n;(Object.keys(K.styles).length>0||S.autoFetchSvg)&&re&&S.autoReplaceSvg&&B.dom.i2svg({node:a})};function wt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return He(a)})}}),Object.defineProperty(e,"node",{get:function(){if(re){var a=R.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Cs(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,o=e.styles,i=e.transform;if(tn(i)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=gt(k(k({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ts(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},r),{},{id:i}),children:a}]}]}function on(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,u=e.extra,g=e.watchable,y=g===void 0?!1:g,h=a.found?a:n,x=h.width,p=h.height,b=r==="fak",v=[S.replacementClass,o?"".concat(S.cssPrefix,"-").concat(o):""].filter(function(I){return u.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(u.classes).join(" "),d={children:[],attributes:k(k({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(p)})},O=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(x/p*16*.0625,"em")}:{};y&&(d.attributes[me]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(f||De())},children:[l]}),delete d.attributes.title);var E=k(k({},d),{},{prefix:r,iconName:o,main:n,mask:a,maskId:c,transform:i,symbol:s,styles:k(k({},O),u.styles)}),N=a.found&&n.found?ae("generateAbstractMask",E)||{children:[],attributes:{}}:ae("generateAbstractIcon",E)||{children:[],attributes:{}},C=N.children,T=N.attributes;return E.children=C,E.attributes=T,s?Ts(E):Cs(E)}function $n(e){var t=e.content,n=e.width,a=e.height,r=e.transform,o=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,c=k(k(k({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(c[me]="");var f=k({},i.styles);tn(r)&&(f.transform=is({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var u=gt(f);u.length>0&&(c.style=u);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ps(e){var t=e.content,n=e.title,a=e.extra,r=k(k(k({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=gt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var At=K.styles;function Wt(e){var t=e[0],n=e[1],a=e.slice(4),r=Gt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ue.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ue.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ue.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:i}}var Rs={found:!1,width:512,height:512};function js(e,t){!Ka&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ft(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=ce()),new Promise(function(a,r){if(ae("missingIconAbstract"),n==="fa"){var o=ir(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&At[t]&&At[t][e]){var i=At[t][e];return a(Wt(i))}js(e,t),a(k(k({},Rs),{},{icon:S.showMissingIcons&&e?ae("missingIconAbstract")||{}:{}}))})}var Wn=function(){},Xt=S.measurePerformance&&Je&&Je.mark&&Je.measure?Je:{mark:Wn,measure:Wn},Ce='FA "6.5.2"',_s=function(t){return Xt.mark("".concat(Ce," ").concat(t," begins")),function(){return lr(t)}},lr=function(t){Xt.mark("".concat(Ce," ").concat(t," ends")),Xt.measure("".concat(Ce," ").concat(t),"".concat(Ce," ").concat(t," begins"),"".concat(Ce," ").concat(t," ends"))},sn={begin:_s,end:lr},lt=function(){};function Fn(e){var t=e.getAttribute?e.getAttribute(me):null;return typeof t=="string"}function Ms(e){var t=e.getAttribute?e.getAttribute(Qt):null,n=e.getAttribute?e.getAttribute(Jt):null;return t&&n}function Ls(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Is(){if(S.autoReplaceSvg===!0)return ct.replace;var e=ct[S.autoReplaceSvg];return e||ct.replace}function Ds(e){return R.createElementNS("http://www.w3.org/2000/svg",e)}function Ys(e){return R.createElement(e)}function cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Ds:Ys:n;if(typeof e=="string")return R.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){r.appendChild(cr(i,{ceFn:a}))}),r}function $s(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ct={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(cr(r),n)}),n.getAttribute(me)===null&&S.keepOriginalSource){var a=R.createComment($s(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~en(n).indexOf(S.replacementClass))return ct.replace(t);var r=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return He(s)}).join(`
`);n.setAttribute(me,""),n.innerHTML=i}};function Xn(e){e()}function fr(e,t){var n=typeof t=="function"?t:lt;if(e.length===0)n();else{var a=Xn;S.mutateApproach===Hi&&(a=le.requestAnimationFrame||Xn),a(function(){var r=Is(),o=sn.begin("mutate");e.map(r),o(),n()})}}var ln=!1;function ur(){ln=!0}function Ht(){ln=!1}var pt=null;function Hn(e){if(jn&&S.observeMutations){var t=e.treeCallback,n=t===void 0?lt:t,a=e.nodeCallback,r=a===void 0?lt:a,o=e.pseudoElementsCallback,i=o===void 0?lt:o,s=e.observeMutationsRoot,l=s===void 0?R:s;pt=new jn(function(c){if(!ln){var f=ce();Oe(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Fn(u.addedNodes[0])&&(S.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&S.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&Fn(u.target)&&~Vi.indexOf(u.attributeName))if(u.attributeName==="class"&&Ms(u.target)){var g=yt(en(u.target)),y=g.prefix,h=g.iconName;u.target.setAttribute(Qt,y||f),h&&u.target.setAttribute(Jt,h)}else Ls(u.target)&&r(u.target)})}}),re&&pt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ws(){pt&&pt.disconnect()}function Fs(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Xs(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=yt(en(e));return r.prefix||(r.prefix=ce()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ys(r.prefix,e.innerText)||an(r.prefix,It(e.innerText))),!r.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Hs(e){var t=Oe(e.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(a||De()):(t["aria-hidden"]="true",t.focusable="false")),t}function zs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xs(e),a=n.iconName,r=n.prefix,o=n.rest,i=Hs(e),s=Yt("parseNodeAttributes",{},e),l=t.styleParser?Fs(e):[];return k({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Bs=K.styles;function dr(e){var t=S.autoReplaceSvg==="nest"?zn(e,{styleParser:!1}):zn(e);return~t.extra.classes.indexOf(qa)?ae("generateLayersText",e,t):ae("generateSvgReplacementMutation",e,t)}var fe=new Set;Zt.map(function(e){fe.add("fa-".concat(e))});Object.keys(_e[P]).map(fe.add.bind(fe));Object.keys(_e[L]).map(fe.add.bind(fe));fe=Fe(fe);function Bn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!re)return Promise.resolve();var n=R.documentElement.classList,a=function(u){return n.add("".concat(_n,"-").concat(u))},r=function(u){return n.remove("".concat(_n,"-").concat(u))},o=S.autoFetchSvg?fe:Zt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Bs));o.includes("fa")||o.push("fa");var i=[".".concat(qa,":not([").concat(me,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(me,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Oe(e.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=sn.begin("onTree"),c=s.reduce(function(f,u){try{var g=dr(u);g&&f.push(g)}catch(y){Ka||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(g){fr(g,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(g){l(),u(g)})})}function Us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dr(e).then(function(n){n&&fr([n],t)})}function Ks(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:$t(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:$t(r||{})),e(a,k(k({},n),{},{mask:r}))}}var qs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?Z:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,u=n.title,g=u===void 0?null:u,y=n.titleId,h=y===void 0?null:y,x=n.classes,p=x===void 0?[]:x,b=n.attributes,v=b===void 0?{}:b,d=n.styles,O=d===void 0?{}:d;if(t){var E=t.prefix,N=t.iconName,C=t.icon;return wt(k({type:"icon"},t),function(){return pe("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(g?v["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(h||De()):(v["aria-hidden"]="true",v.focusable="false")),on({icons:{main:Wt(C),mask:l?Wt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:N,transform:k(k({},Z),r),symbol:i,title:g,maskId:f,titleId:h,extra:{attributes:v,styles:O,classes:p}})})}},Gs={mixout:function(){return{icon:Ks(qs)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bn,n.nodeCallback=Us,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?R:a,o=n.callback,i=o===void 0?function(){}:o;return Bn(r,i)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,u=a.maskId,g=a.extra;return new Promise(function(y,h){Promise.all([Ft(r,s),f.iconName?Ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var p=Gt(x,2),b=p[0],v=p[1];y([n,on({icons:{main:b,mask:v},prefix:s,iconName:r,transform:l,symbol:c,maskId:u,title:o,titleId:i,extra:g,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,l=gt(s);l.length>0&&(r.style=l);var c;return tn(i)&&(c=ae("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},Vs={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return wt({type:"layer"},function(){pe("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(Fe(o)).join(" ")},children:i}]})}}}},Qs={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,c=l===void 0?{}:l,f=a.styles,u=f===void 0?{}:f;return wt({type:"counter",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:a}),Ps({content:n.toString(),title:o,extra:{attributes:c,styles:u,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(Fe(s))}})})}}}},Js={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?Z:r,i=a.title,s=i===void 0?null:i,l=a.classes,c=l===void 0?[]:l,f=a.attributes,u=f===void 0?{}:f,g=a.styles,y=g===void 0?{}:g;return wt({type:"text",content:n},function(){return pe("beforeDOMElementCreation",{content:n,params:a}),$n({content:n,transform:k(k({},Z),o),title:s,extra:{attributes:u,styles:y,classes:["".concat(S.cssPrefix,"-layers-text")].concat(Fe(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(za){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return S.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,$n({content:n.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},Zs=new RegExp('"',"ug"),Un=[1105920,1112319];function el(e){var t=e.replace(Zs,""),n=ms(t,0),a=n>=Un[0]&&n<=Un[1],r=t.length===2?t[0]===t[1]:!1;return{value:It(r?t[0]:t),isSecondary:a||r}}function Kn(e,t){var n="".concat(Xi).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var o=Oe(e.children),i=o.filter(function(C){return C.getAttribute(Lt)===t})[0],s=le.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ki),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),a();if(l&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?L:P,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Me[g][l[2].toLowerCase()]:qi[g][c],h=el(u),x=h.value,p=h.isSecondary,b=l[0].startsWith("FontAwesome"),v=an(y,x),d=v;if(b){var O=ws(x);O.iconName&&O.prefix&&(v=O.iconName,y=O.prefix)}if(v&&!p&&(!i||i.getAttribute(Qt)!==y||i.getAttribute(Jt)!==d)){e.setAttribute(n,d),i&&e.removeChild(i);var E=zs(),N=E.extra;N.attributes[Lt]=t,Ft(v,y).then(function(C){var T=on(k(k({},E),{},{icons:{main:C,mask:rn()},prefix:y,iconName:d,extra:N,watchable:!0})),I=R.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=T.map(function(G){return He(G)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function tl(e){return Promise.all([Kn(e,"::before"),Kn(e,"::after")])}function nl(e){return e.parentNode!==document.head&&!~zi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qn(e){if(re)return new Promise(function(t,n){var a=Oe(e.querySelectorAll("*")).filter(nl).map(tl),r=sn.begin("searchPseudoElements");ur(),Promise.all(a).then(function(){r(),Ht(),t()}).catch(function(){r(),Ht(),n()})})}var al={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?R:a;S.searchPseudoElements&&qn(r)}}},Gn=!1,rl={mixout:function(){return{dom:{unwatch:function(){ur(),Gn=!0}}}},hooks:function(){return{bootstrap:function(){Hn(Yt("mutationObserverCallbacks",{}))},noAuto:function(){Ws()},watch:function(n){var a=n.observeMutationsRoot;Gn?Ht():Hn(Yt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Vn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ol={mixout:function(){return{parse:{transform:function(n){return Vn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Vn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},y={outer:s,inner:u,path:g};return{tag:"g",attributes:k({},y.outer),children:[{tag:"g",attributes:k({},y.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:k(k({},a.icon.attributes),y.path)}]}]}}}},Ct={x:0,y:0,width:"100%",height:"100%"};function Qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function il(e){return e.tag==="g"?e.children:[e]}var sl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?yt(r.split(" ").map(function(i){return i.trim()})):rn();return o.prefix||(o.prefix=ce()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,l=n.transform,c=o.width,f=o.icon,u=i.width,g=i.icon,y=os({transform:l,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:k(k({},Ct),{},{fill:"white"})},x=f.children?{children:f.children.map(Qn)}:{},p={tag:"g",attributes:k({},y.inner),children:[Qn(k({tag:f.tag,attributes:k(k({},f.attributes),y.path)},x))]},b={tag:"g",attributes:k({},y.outer),children:[p]},v="mask-".concat(s||De()),d="clip-".concat(s||De()),O={tag:"mask",attributes:k(k({},Ct),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,b]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:il(g)},O]};return a.push(E,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(v,")")},Ct)}),{children:a,attributes:r}}}},ll={provides:function(t){var n=!1;le.matchMedia&&(n=le.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:k(k({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=k(k({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:k(k({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:k(k({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:k(k({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:k(k({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:k(k({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},cl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},fl=[ls,Gs,Vs,Qs,Js,al,rl,ol,sl,ll,cl];Ss(fl,{mixoutsTo:B});B.noAuto;B.config;B.library;B.dom;var zt=B.parse;B.findIconDefinition;B.toHtml;var ul=B.icon;B.layer;B.text;B.counter;function Jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jn(Object(n),!0).forEach(function(a){ye(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ht(e){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ht(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dl(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function ml(e,t){if(e==null)return{};var n=dl(e,t),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Bt(e){return pl(e)||hl(e)||vl(e)||gl()}function pl(e){if(Array.isArray(e))return Ut(e)}function hl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function vl(e,t){if(e){if(typeof e=="string")return Ut(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(e,t)}}function Ut(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function gl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bl(e){var t,n=e.beat,a=e.fade,r=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,g=e.fixedWidth,y=e.inverse,h=e.border,x=e.listItem,p=e.flip,b=e.size,v=e.rotation,d=e.pull,O=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":g,"fa-inverse":y,"fa-border":h,"fa-li":x,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},ye(t,"fa-".concat(b),typeof b<"u"&&b!==null),ye(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),ye(t,"fa-pull-".concat(d),typeof d<"u"&&d!==null),ye(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map(function(E){return O[E]?E:null}).filter(function(E){return E})}function yl(e){return e=e-0,e===e}function mr(e){return yl(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var wl=["style"];function xl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function kl(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=mr(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?t[xl(r)]=o:t[r]=o,t},{})}function pr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return pr(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=kl(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[mr(c)]=f}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=ml(n,wl);return r.attrs.style=se(se({},r.attrs.style),i),e.apply(void 0,[t.tag,se(se({},r.attrs),s)].concat(Bt(a)))}var hr=!1;try{hr=!0}catch{}function Sl(){if(!hr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zn(e){if(e&&ht(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(zt.icon)return zt.icon(e);if(e===null)return null;if(e&&ht(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Tt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}var xt=je.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,o=e.className,i=e.title,s=e.titleId,l=e.maskId,c=Zn(n),f=Tt("classes",[].concat(Bt(bl(e)),Bt(o.split(" ")))),u=Tt("transform",typeof e.transform=="string"?zt.transform(e.transform):e.transform),g=Tt("mask",Zn(a)),y=ul(c,se(se(se(se({},f),u),g),{},{symbol:r,title:i,titleId:s,maskId:l}));if(!y)return Sl("Could not find icon",c),null;var h=y.abstract,x={ref:t};return Object.keys(e).forEach(function(p){xt.defaultProps.hasOwnProperty(p)||(x[p]=e[p])}),El(h[0],x)});xt.displayName="FontAwesomeIcon";xt.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};xt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var El=pr.bind(null,je.createElement);const Ol=[{icon:m.jsx("i",{class:"side-menu__icon fa fa-user-plus"}),type:"sub",Name:"",active:!1,selected:!1,title:"Patients",class:"",color:"",badgetxt:"",path:"/patients",roles:["Nurse","Doctor","Receptionist"],condition:!1},{icon:m.jsx("i",{class:"side-menu__icon fa fa-map-signs"}),type:"sub",Name:"",active:!1,selected:!1,title:"Visits",class:"",color:"",badgetxt:"",path:"/visits",roles:["Nurse","Doctor","Receptionist"],condition:!1},{icon:m.jsx("i",{class:"side-menu__icon fa fa-heartbeat"}),type:"sub",Name:"",active:!1,selected:!1,title:"Insurance",class:"",color:"",badgetxt:"",path:"/insurance",roles:["Doctor"],condition:!1},{icon:m.jsx("i",{class:"side-menu__icon fa fa-sitemap"}),type:"sub",Name:"",active:!1,selected:!1,title:"Department",class:"",color:"",badgetxt:"",path:"/Department",roles:["Doctor"],condition:!1},{icon:m.jsx("i",{class:"side-menu__icon fa fa-unlock-alt"}),type:"sub",Name:"",active:!1,selected:!1,title:"Access Control",class:"",color:"",badgetxt:"",path:"/access-control",roles:["Doctor"],condition:!1},{icon:m.jsx("i",{class:"side-menu__icon fa fa-calendar-check-o"}),type:"sub",Name:"",active:!1,selected:!1,title:"Appointment",class:"",color:"",badgetxt:"",path:"/appointments",roles:["Doctor"],condition:!1},{icon:m.jsx("i",{class:"side-menu__icon fa fa-file"}),type:"sub",Name:"",active:!1,selected:!1,title:"Report",class:"",color:"",badgetxt:"",path:"/report",roles:["Doctor"],condition:!1}];const Nl=()=>{document.querySelector(".app").classList.contains("sidenav-toggled"),document.querySelector(".app").classList.add("sidenav-toggled-open")},Al=()=>{document.querySelector(".app").classList.remove("sidenav-toggled-open")};function Cl(){const[e,t]=w.useState([]);document.querySelector("body").classList.contains("horizontal"),window.addEventListener("resize",()=>{r()});const n=(o,i)=>{for(let s=0;s<(o==null?void 0:o.length);s++)if(i.includes(o[s]))return!0;return!1},a=async()=>{const o=await localStorage.getItem("role"),i=JSON.parse(o),s=Ol.map(l=>({...l,condition:n(i,l.roles)}));t(s)};w.useEffect(()=>{a()},[]);function r(){var g,y,h,x,p;let o=document.querySelector(".horizontal-main"),i=document.querySelector(".side-menu"),s=document.querySelector(".main-sidemenu"),l=(o==null?void 0:o.offsetWidth)-(s==null?void 0:s.offsetWidth),c=Math.ceil(Number((g=window.getComputedStyle(i))==null?void 0:g.marginLeft.split("px")[0])),f=Math.ceil(Number((y=window.getComputedStyle(i))==null?void 0:y.marginRight.split("px")[0])),u=i.scrollWidth+(0-(o==null?void 0:o.offsetWidth))+l;(o==null?void 0:o.offsetWidth)-l>=i.scrollWidth?((h=document.querySelector(".slide-left"))==null||h.classList.add("d-none"),(x=document.querySelector(".slide-right"))==null||x.classList.add("d-none"),i.style.marginRight=0,i.style.marginLeft=0):(p=document.querySelector(".slide-right"))==null||p.classList.remove("d-none"),document.querySelector("html").getAttribute("dir")==="rtl"?!(Math.abs(f)<Math.abs(u))&&(o==null?void 0:o.offsetWidth)-l<i.scrollWidth?(i.style.marginRight=-u+"px",document.querySelector(".slide-left").classList.remove("d-none")):i.style.marginRight=0:!(Math.abs(c)<Math.abs(u))&&(o==null?void 0:o.offsetWidth)-l<i.scrollWidth?(i.style.marginLeft=-u+"px",document.querySelector(".slide-right").classList.add("d-none")):i.style.marginLeft=0}return m.jsx(w.Fragment,{children:m.jsx("div",{className:"sticky",children:m.jsx("div",{className:"app-sidebar backgrounds",onMouseOver:()=>Nl(),onMouseOut:()=>Al(),children:m.jsxs(ji,{options:{suppressScrollX:!0,useBothWheelAxes:!1},children:[m.jsx("div",{className:"side-header",style:{background:"#FDFEFF"}}),m.jsx("div",{className:"main-sidemenu",children:m.jsx("ul",{className:"side-menu",style:{marginRight:"0px"},children:m.jsx(je.Fragment,{children:e==null?void 0:e.map((o,i)=>o.condition&&m.jsx("li",{className:"slide",children:m.jsxs(st,{to:o.path,className:`side-menu__item ${o.selected?"active":""}`,children:[o.icon,m.jsx("span",{className:"side-menu__label",children:o.title}),o.badgetxt?m.jsx(wo,{bg:o.color,className:o.class,children:o.badgetxt}):""]})},i))},Math.random())})})]})})})})}const Tl=()=>{var e,t,n;(e=document.querySelector(".app"))==null||e.classList.remove("sidenav-toggled"),(t=document.querySelector(".sidebar-right"))==null||t.classList.remove("sidebar-open"),(n=document.querySelector(".demo_changer"))==null||n.classList.remove("active")};function jl(e){return document.body.classList.remove("bg-account"),m.jsx(w.Fragment,{children:m.jsx(ao,{store:ro,children:m.jsx("div",{className:"horizontalMenucontainer",children:m.jsxs("div",{className:"page",children:[m.jsxs("div",{className:"page-main",children:[m.jsx(hi,{...e}),m.jsx(Cl,{}),m.jsx("div",{className:"main-content app-content",onClick:()=>Tl(),children:m.jsx("div",{className:"side-app",children:m.jsx("div",{className:"main-container container-fluid",children:m.jsx(oo,{})})})})]}),m.jsx(pi,{})]})})})})}export{jl as default};
