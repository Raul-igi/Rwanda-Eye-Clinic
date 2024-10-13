import{_ as Ga,a as Xa,r as p,R as Ne,j as d,T as _n,t as $n,b as D,s as qt,E as Va,c as Rn,d as It,e as Ln,f as Qa,u as H,g as Ja,h as Y,i as Za,p as er,k as tr,l as nr,m as ar,n as rr,o as ir,q as or,v as sr,w as lr,x as cr,y as Gt,z as fr,A as Le,B as ur,$ as dr,S as Ve,C as Dn,D as Xt,F as mr,G as pr,H as vr,I as gr,J as Vt,K as br,L as Fn,M as zn,N as Yn,O as hr,P as pe,Q as yr,U as xr,V as wr,W as kr,X as Nr,Y as Or,Z as Sr,a0 as Ar,a1 as Cr,a2 as Er,a3 as jr,a4 as vt,a5 as De,a6 as Qt,a7 as S,a8 as Pr,a9 as Ir,aa as Tr,ab as Mr,ac as _r}from"./index-31366e83.js";function Jt(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function $r(e){var t=Rr(e,"string");return typeof t=="symbol"?t:String(t)}function Rr(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lr(e,t,n){var a=p.useRef(e!==void 0),r=p.useState(t),i=r[0],o=r[1],l=e!==void 0,s=a.current;return a.current=l,!l&&s&&i!==t&&o(t),[l?e:i,p.useCallback(function(c){for(var f=arguments.length,u=new Array(f>1?f-1:0),m=1;m<f;m++)u[m-1]=arguments[m];n&&n.apply(void 0,[c].concat(u)),o(c)},[n])]}function Un(e,t){return Object.keys(t).reduce(function(n,a){var r,i=n,o=i[Jt(a)],l=i[a],s=Ga(i,[Jt(a),a].map($r)),c=t[a],f=Lr(l,o,e[c]),u=f[0],m=f[1];return Xa({},s,(r={},r[a]=u,r[c]=m,r))},e)}function he(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...r){t.apply(this,r),n.apply(this,r)}},null)}const Dr={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Fr(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,a=t[n],r=Dr[e];return a+parseInt(qt(t,r[0]),10)+parseInt(qt(t,r[1]),10)}const zr={[Va]:"collapse",[Rn]:"collapsing",[It]:"collapsing",[Ln]:"collapse show"},Yr=Ne.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:r,className:i,children:o,dimension:l="height",in:s=!1,timeout:c=300,mountOnEnter:f=!1,unmountOnExit:u=!1,appear:m=!1,getDimensionValue:v=Fr,...b},w)=>{const g=typeof l=="function"?l():l,N=p.useMemo(()=>he(A=>{A.style[g]="0"},e),[g,e]),x=p.useMemo(()=>he(A=>{const C=`scroll${g[0].toUpperCase()}${g.slice(1)}`;A.style[g]=`${A[C]}px`},t),[g,t]),k=p.useMemo(()=>he(A=>{A.style[g]=null},n),[g,n]),E=p.useMemo(()=>he(A=>{A.style[g]=`${v(g,A)}px`,Qa(A)},a),[a,v,g]),O=p.useMemo(()=>he(A=>{A.style[g]=null},r),[g,r]);return d.jsx(_n,{ref:w,addEndListener:$n,...b,"aria-expanded":b.role?s:null,onEnter:N,onEntering:x,onEntered:k,onExit:E,onExiting:O,childRef:o.ref,in:s,timeout:c,mountOnEnter:f,unmountOnExit:u,appear:m,children:(A,C)=>Ne.cloneElement(o,{...C,className:D(i,o.props.className,zr[A],g==="width"&&"collapse-horizontal")})})}),Ur=Yr;function Wr(e,t,n,a=!1){const r=H(n);p.useEffect(()=>{const i=typeof e=="function"?e():e;return i.addEventListener(t,r,a),()=>i.removeEventListener(t,r,a)},[e])}const Br=["onKeyDown"];function Hr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Kr(e){return!e||e.trim()==="#"}const Wn=p.forwardRef((e,t)=>{let{onKeyDown:n}=e,a=Hr(e,Br);const[r]=Ja(Object.assign({tagName:"a"},a)),i=H(o=>{r.onKeyDown(o),n==null||n(o)});return Kr(a.href)||a.role==="button"?d.jsx("a",Object.assign({ref:t},a,r,{onKeyDown:i})):d.jsx("a",Object.assign({ref:t},a,{onKeyDown:n}))});Wn.displayName="Anchor";const qr=Wn,Bn=p.forwardRef(({bsPrefix:e,bg:t="primary",pill:n=!1,text:a,className:r,as:i="span",...o},l)=>{const s=Y(e,"badge");return d.jsx(i,{ref:l,...o,className:D(r,s,n&&"rounded-pill",a&&`text-${a}`,t&&`bg-${t}`)})});Bn.displayName="Badge";const Gr=Bn;function Xr(){const[,e]=p.useReducer(t=>!t,!1);return e}const Vr=p.createContext(null),tt=Vr;var Zt=Object.prototype.hasOwnProperty;function en(e,t,n){for(n of e.keys())if(xe(n,t))return n}function xe(e,t){var n,a,r;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((a=e.length)===t.length)for(;a--&&xe(e[a],t[a]););return a===-1}if(n===Set){if(e.size!==t.size)return!1;for(a of e)if(r=a,r&&typeof r=="object"&&(r=en(t,r),!r)||!t.has(r))return!1;return!0}if(n===Map){if(e.size!==t.size)return!1;for(a of e)if(r=a[0],r&&typeof r=="object"&&(r=en(t,r),!r)||!xe(a[1],t.get(r)))return!1;return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((a=e.byteLength)===t.byteLength)for(;a--&&e.getInt8(a)===t.getInt8(a););return a===-1}if(ArrayBuffer.isView(e)){if((a=e.byteLength)===t.byteLength)for(;a--&&e[a]===t[a];);return a===-1}if(!n||typeof e=="object"){a=0;for(n in e)if(Zt.call(e,n)&&++a&&!Zt.call(t,n)||!(n in t)||!xe(e[n],t[n]))return!1;return Object.keys(t).length===a}}return e!==e&&t!==t}function Qr(e){const t=Za();return[e[0],p.useCallback(n=>{if(t())return e[1](n)},[t,e[1]])]}const Jr=er({defaultModifiers:[tr,nr,ar,rr,ir,or,sr,lr]}),Zr=["enabled","placement","strategy","modifiers"];function ei(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const ti={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},ni={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:n}=e.elements;if("removeAttribute"in t){const a=(t.getAttribute("aria-describedby")||"").split(",").filter(r=>r.trim()!==n.id);a.length?t.setAttribute("aria-describedby",a.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:n,reference:a}=e.elements,r=(t=n.getAttribute("role"))==null?void 0:t.toLowerCase();if(n.id&&r==="tooltip"&&"setAttribute"in a){const i=a.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(n.id)!==-1)return;a.setAttribute("aria-describedby",i?`${i},${n.id}`:n.id)}}},ai=[];function ri(e,t,n={}){let{enabled:a=!0,placement:r="bottom",strategy:i="absolute",modifiers:o=ai}=n,l=ei(n,Zr);const s=p.useRef(o),c=p.useRef(),f=p.useCallback(()=>{var g;(g=c.current)==null||g.update()},[]),u=p.useCallback(()=>{var g;(g=c.current)==null||g.forceUpdate()},[]),[m,v]=Qr(p.useState({placement:r,update:f,forceUpdate:u,attributes:{},styles:{popper:{},arrow:{}}})),b=p.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:g})=>{const N={},x={};Object.keys(g.elements).forEach(k=>{N[k]=g.styles[k],x[k]=g.attributes[k]}),v({state:g,styles:N,attributes:x,update:f,forceUpdate:u,placement:g.placement})}}),[f,u,v]),w=p.useMemo(()=>(xe(s.current,o)||(s.current=o),s.current),[o]);return p.useEffect(()=>{!c.current||!a||c.current.setOptions({placement:r,strategy:i,modifiers:[...w,b,ti]})},[i,r,b,a,w]),p.useEffect(()=>{if(!(!a||e==null||t==null))return c.current=Jr(e,t,Object.assign({},l,{placement:r,strategy:i,modifiers:[...w,ni,b]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,v(g=>Object.assign({},g,{attributes:{},styles:{popper:{}}})))}},[a,e,t]),m}const tn=()=>{};function ii(e){return e.button===0}function oi(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const lt=e=>e&&("current"in e?e.current:e),nn={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function si(e,t=tn,{disabled:n,clickTrigger:a="click"}={}){const r=p.useRef(!1),i=p.useRef(!1),o=p.useCallback(c=>{const f=lt(e);cr(!!f,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),r.current=!f||oi(c)||!ii(c)||!!Gt(f,c.target)||i.current,i.current=!1},[e]),l=H(c=>{const f=lt(e);f&&Gt(f,c.target)&&(i.current=!0)}),s=H(c=>{r.current||t(c)});p.useEffect(()=>{var c,f;if(n||e==null)return;const u=fr(lt(e)),m=u.defaultView||window;let v=(c=m.event)!=null?c:(f=m.parent)==null?void 0:f.event,b=null;nn[a]&&(b=Le(u,nn[a],l,!0));const w=Le(u,a,o,!0),g=Le(u,a,x=>{if(x===v){v=void 0;return}s(x)});let N=[];return"ontouchstart"in u.documentElement&&(N=[].slice.call(u.body.children).map(x=>Le(x,"mousemove",tn))),()=>{b==null||b(),w(),g(),N.forEach(x=>x())}},[e,n,a,o,l,s])}function li(e){const t={};return Array.isArray(e)?(e==null||e.forEach(n=>{t[n.name]=n}),t):e||t}function ci(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function fi({enabled:e,enableEvents:t,placement:n,flip:a,offset:r,fixed:i,containerPadding:o,arrowElement:l,popperConfig:s={}}){var c,f,u,m,v;const b=li(s.modifiers);return Object.assign({},s,{placement:n,enabled:e,strategy:i?"fixed":s.strategy,modifiers:ci(Object.assign({},b,{eventListeners:{enabled:t,options:(c=b.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},b.preventOverflow,{options:o?Object.assign({padding:o},(f=b.preventOverflow)==null?void 0:f.options):(u=b.preventOverflow)==null?void 0:u.options}),offset:{options:Object.assign({offset:r},(m=b.offset)==null?void 0:m.options)},arrow:Object.assign({},b.arrow,{enabled:!!l,options:Object.assign({},(v=b.arrow)==null?void 0:v.options,{element:l})}),flip:Object.assign({enabled:!!a},b.flip)}))})}const ui=["children"];function di(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const mi=()=>{};function Hn(e={}){const t=p.useContext(tt),[n,a]=ur(),r=p.useRef(!1),{flip:i,offset:o,rootCloseEvent:l,fixed:s=!1,placement:c,popperConfig:f={},enableEventListeners:u=!0,usePopper:m=!!t}=e,v=(t==null?void 0:t.show)==null?!!e.show:t.show;v&&!r.current&&(r.current=!0);const b=A=>{t==null||t.toggle(!1,A)},{placement:w,setMenu:g,menuElement:N,toggleElement:x}=t||{},k=ri(x,N,fi({placement:c||w||"bottom-start",enabled:m,enableEvents:u??v,offset:o,flip:i,fixed:s,arrowElement:n,popperConfig:f})),E=Object.assign({ref:g||mi,"aria-labelledby":x==null?void 0:x.id},k.attributes.popper,{style:k.styles.popper}),O={show:v,placement:w,hasShown:r.current,toggle:t==null?void 0:t.toggle,popper:m?k:null,arrowProps:m?Object.assign({ref:a},k.attributes.arrow,{style:k.styles.arrow}):{}};return si(N,b,{clickTrigger:l,disabled:!v}),[E,O]}const pi={usePopper:!0};function Tt(e){let{children:t}=e,n=di(e,ui);const[a,r]=Hn(n);return d.jsx(d.Fragment,{children:t(a,r)})}Tt.displayName="DropdownMenu";Tt.defaultProps=pi;const Kn=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},an=()=>{};function qn(){const e=dr(),{show:t=!1,toggle:n=an,setToggle:a,menuElement:r}=p.useContext(tt)||{},i=p.useCallback(l=>{n(!t,l)},[t,n]),o={id:e,ref:a||an,onClick:i,"aria-expanded":!!t};return r&&Kn(r)&&(o["aria-haspopup"]=!0),[o,{show:t,toggle:n}]}function Gn({children:e}){const[t,n]=qn();return d.jsx(d.Fragment,{children:e(t,n)})}Gn.displayName="DropdownToggle";const Xn=p.createContext(null);Xn.displayName="NavContext";const vi=Xn,gi=["eventKey","disabled","onClick","active","as"];function bi(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Vn({key:e,href:t,active:n,disabled:a,onClick:r}){const i=p.useContext(Ve),o=p.useContext(vi),{activeKey:l}=o||{},s=Xt(e,t),c=n==null&&e!=null?Xt(l)===s:n;return[{onClick:H(u=>{a||(r==null||r(u),i&&!u.isPropagationStopped()&&i(s,u))}),"aria-disabled":a||void 0,"aria-selected":c,[Dn("dropdown-item")]:""},{isActive:c}]}const Qn=p.forwardRef((e,t)=>{let{eventKey:n,disabled:a,onClick:r,active:i,as:o=mr}=e,l=bi(e,gi);const[s]=Vn({key:n,href:l.href,disabled:a,onClick:r,active:i});return d.jsx(o,Object.assign({},l,{ref:t},s))});Qn.displayName="DropdownItem";function rn(){const e=Xr(),t=p.useRef(null),n=p.useCallback(a=>{t.current=a,e()},[e]);return[t,n]}function je({defaultShow:e,show:t,onSelect:n,onToggle:a,itemSelector:r=`* [${Dn("dropdown-item")}]`,focusFirstItemOnShow:i,placement:o="bottom-start",children:l}){const s=pr(),[c,f]=vr(t,e,a),[u,m]=rn(),v=u.current,[b,w]=rn(),g=b.current,N=gr(c),x=p.useRef(null),k=p.useRef(!1),E=p.useContext(Ve),O=p.useCallback((I,T,$=T==null?void 0:T.type)=>{f(I,{originalEvent:T,source:$})},[f]),A=H((I,T)=>{n==null||n(I,T),O(!1,T,"select"),T.isPropagationStopped()||E==null||E(I,T)}),C=p.useMemo(()=>({toggle:O,placement:o,show:c,menuElement:v,toggleElement:g,setMenu:m,setToggle:w}),[O,o,c,v,g,m,w]);v&&N&&!c&&(k.current=v.contains(v.ownerDocument.activeElement));const _=H(()=>{g&&g.focus&&g.focus()}),L=H(()=>{const I=x.current;let T=i;if(T==null&&(T=u.current&&Kn(u.current)?"keyboard":!1),T===!1||T==="keyboard"&&!/^key.+$/.test(I))return;const $=Vt(u.current,r)[0];$&&$.focus&&$.focus()});p.useEffect(()=>{c?L():k.current&&(k.current=!1,_())},[c,k,_,L]),p.useEffect(()=>{x.current=null});const X=(I,T)=>{if(!u.current)return null;const $=Vt(u.current,r);let F=$.indexOf(I)+T;return F=Math.max(0,Math.min(F,$.length)),$[F]};return Wr(p.useCallback(()=>s.document,[s]),"keydown",I=>{var T,$;const{key:F}=I,K=I.target,Me=(T=u.current)==null?void 0:T.contains(K),_e=($=b.current)==null?void 0:$.contains(K);if(/input|textarea/i.test(K.tagName)&&(F===" "||F!=="Escape"&&Me||F==="Escape"&&K.type==="search")||!Me&&!_e||F==="Tab"&&(!u.current||!c))return;x.current=I.type;const be={originalEvent:I,source:I.type};switch(F){case"ArrowUp":{const z=X(K,-1);z&&z.focus&&z.focus(),I.preventDefault();return}case"ArrowDown":if(I.preventDefault(),!c)f(!0,be);else{const z=X(K,1);z&&z.focus&&z.focus()}return;case"Tab":br(K.ownerDocument,"keyup",z=>{var Re;(z.key==="Tab"&&!z.target||!((Re=u.current)!=null&&Re.contains(z.target)))&&f(!1,be)},{once:!0});break;case"Escape":F==="Escape"&&(I.preventDefault(),I.stopPropagation()),f(!1,be);break}}),d.jsx(Ve.Provider,{value:A,children:d.jsx(tt.Provider,{value:C,children:l})})}je.displayName="Dropdown";je.Menu=Tt;je.Toggle=Gn;je.Item=Qn;const Jn=p.createContext({});Jn.displayName="DropdownContext";const Zn=Jn,ea=p.forwardRef(({bsPrefix:e,className:t,eventKey:n,disabled:a=!1,onClick:r,active:i,as:o=qr,...l},s)=>{const c=Y(e,"dropdown-item"),[f,u]=Vn({key:n,href:l.href,disabled:a,onClick:r,active:i});return d.jsx(o,{...l,...f,ref:s,className:D(t,c,u.isActive&&"active",a&&"disabled")})});ea.displayName="DropdownItem";const hi=ea,ta=p.createContext(null);ta.displayName="NavbarContext";const ve=ta;function na(e,t){return e}function aa(e,t,n){const a=n?"top-end":"top-start",r=n?"top-start":"top-end",i=n?"bottom-end":"bottom-start",o=n?"bottom-start":"bottom-end",l=n?"right-start":"left-start",s=n?"right-end":"left-end",c=n?"left-start":"right-start",f=n?"left-end":"right-end";let u=e?o:i;return t==="up"?u=e?r:a:t==="end"?u=e?f:c:t==="start"?u=e?s:l:t==="down-centered"?u="bottom":t==="up-centered"&&(u="top"),u}const ra=p.forwardRef(({bsPrefix:e,className:t,align:n,rootCloseEvent:a,flip:r=!0,show:i,renderOnMount:o,as:l="div",popperConfig:s,variant:c,...f},u)=>{let m=!1;const v=p.useContext(ve),b=Y(e,"dropdown-menu"),{align:w,drop:g,isRTL:N}=p.useContext(Zn);n=n||w;const x=p.useContext(Fn),k=[];if(n)if(typeof n=="object"){const I=Object.keys(n);if(I.length){const T=I[0],$=n[T];m=$==="start",k.push(`${b}-${T}-${$}`)}}else n==="end"&&(m=!0);const E=aa(m,g,N),[O,{hasShown:A,popper:C,show:_,toggle:L}]=Hn({flip:r,rootCloseEvent:a,show:i,usePopper:!v&&k.length===0,offset:[0,2],popperConfig:s,placement:E});if(O.ref=zn(na(u),O.ref),Yn(()=>{_&&(C==null||C.update())},[_]),!A&&!o&&!x)return null;typeof l!="string"&&(O.show=_,O.close=()=>L==null?void 0:L(!1),O.align=n);let X=f.style;return C!=null&&C.placement&&(X={...f.style,...O.style},f["x-placement"]=C.placement),d.jsx(l,{...f,...O,style:X,...(k.length||v)&&{"data-bs-popper":"static"},className:D(t,b,_&&"show",m&&`${b}-end`,c&&`${b}-${c}`,...k)})});ra.displayName="DropdownMenu";const yi=ra,ia=p.forwardRef(({bsPrefix:e,split:t,className:n,childBsPrefix:a,as:r=hr,...i},o)=>{const l=Y(e,"dropdown-toggle"),s=p.useContext(tt);a!==void 0&&(i.bsPrefix=a);const[c]=qn();return c.ref=zn(c.ref,na(o)),d.jsx(r,{className:D(n,l,t&&`${l}-split`,(s==null?void 0:s.show)&&"show"),...c,...i})});ia.displayName="DropdownToggle";const xi=ia,wi=pe("dropdown-header",{defaultProps:{role:"heading"}}),ki=pe("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),Ni=pe("dropdown-item-text",{Component:"span"}),oa=p.forwardRef((e,t)=>{const{bsPrefix:n,drop:a="down",show:r,className:i,align:o="start",onSelect:l,onToggle:s,focusFirstItemOnShow:c,as:f="div",navbar:u,autoClose:m=!0,...v}=Un(e,{show:"onToggle"}),b=p.useContext(Fn),w=Y(n,"dropdown"),g=yr(),N=C=>m===!1?C==="click":m==="inside"?C!=="rootClose":m==="outside"?C!=="select":!0,x=H((C,_)=>{_.originalEvent.currentTarget===document&&(_.source!=="keydown"||_.originalEvent.key==="Escape")&&(_.source="rootClose"),N(_.source)&&(s==null||s(C,_))}),E=aa(o==="end",a,g),O=p.useMemo(()=>({align:o,drop:a,isRTL:g}),[o,a,g]),A={down:w,"down-centered":`${w}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return d.jsx(Zn.Provider,{value:O,children:d.jsx(je,{placement:E,show:r,onSelect:l,onToggle:x,focusFirstItemOnShow:c,itemSelector:`.${w}-item:not(.disabled):not(:disabled)`,children:b?v.children:d.jsx(f,{...v,ref:t,className:D(i,r&&"show",A[a])})})})});oa.displayName="Dropdown";const W=Object.assign(oa,{Toggle:xi,Menu:yi,Item:hi,ItemText:Ni,Divider:ki,Header:wi}),sa=p.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:a,...r},i)=>{const o=Y(e,"container"),l=typeof t=="string"?`-${t}`:"-fluid";return d.jsx(n,{ref:i,...r,className:D(a,t?`${o}${l}`:o)})});sa.displayName="Container";const Oi=sa,la=p.forwardRef(({bsPrefix:e,className:t,as:n,...a},r)=>{e=Y(e,"navbar-brand");const i=n||(a.href?"a":"span");return d.jsx(i,{...a,ref:r,className:D(t,e)})});la.displayName="NavbarBrand";const Si=la,ca=p.forwardRef(({children:e,bsPrefix:t,...n},a)=>{t=Y(t,"navbar-collapse");const r=p.useContext(ve);return d.jsx(Ur,{in:!!(r&&r.expanded),...n,children:d.jsx("div",{ref:a,className:t,children:e})})});ca.displayName="NavbarCollapse";const Ai=ca,fa=p.forwardRef(({bsPrefix:e,className:t,children:n,label:a="Toggle navigation",as:r="button",onClick:i,...o},l)=>{e=Y(e,"navbar-toggler");const{onToggle:s,expanded:c}=p.useContext(ve)||{},f=H(u=>{i&&i(u),s&&s()});return r==="button"&&(o.type="button"),d.jsx(r,{...o,ref:l,onClick:f,"aria-label":a,className:D(t,e,!c&&"collapsed"),children:n||d.jsx("span",{className:`${e}-icon`})})});fa.displayName="NavbarToggle";const Ci=fa,gt=new WeakMap,on=(e,t)=>{if(!e||!t)return;const n=gt.get(t)||new Map;gt.set(t,n);let a=n.get(e);return a||(a=t.matchMedia(e),a.refCount=0,n.set(a.media,a)),a};function Ei(e,t=typeof window>"u"?void 0:window){const n=on(e,t),[a,r]=p.useState(()=>n?n.matches:!1);return Yn(()=>{let i=on(e,t);if(!i)return r(!1);let o=gt.get(t);const l=()=>{r(i.matches)};return i.refCount++,i.addListener(l),l(),()=>{i.removeListener(l),i.refCount--,i.refCount<=0&&(o==null||o.delete(i.media)),i=void 0}},[e]),a}function ji(e){const t=Object.keys(e);function n(l,s){return l===s?s:l?`${l} and ${s}`:s}function a(l){return t[Math.min(t.indexOf(l)+1,t.length-1)]}function r(l){const s=a(l);let c=e[s];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function i(l){let s=e[l];return typeof s=="number"&&(s=`${s}px`),`(min-width: ${s})`}function o(l,s,c){let f;typeof l=="object"?(f=l,c=s,s=!0):(s=s||!0,f={[l]:s});let u=p.useMemo(()=>Object.entries(f).reduce((m,[v,b])=>((b==="up"||b===!0)&&(m=n(m,i(v))),(b==="down"||b===!0)&&(m=n(m,r(v))),m),""),[JSON.stringify(f)]);return Ei(u,c)}return o}const Pi=ji({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Ii=pe("offcanvas-body"),Ti={[It]:"show",[Ln]:"show"},ua=p.forwardRef(({bsPrefix:e,className:t,children:n,in:a=!1,mountOnEnter:r=!1,unmountOnExit:i=!1,appear:o=!1,...l},s)=>(e=Y(e,"offcanvas"),d.jsx(_n,{ref:s,addEndListener:$n,in:a,mountOnEnter:r,unmountOnExit:i,appear:o,...l,childRef:n.ref,children:(c,f)=>p.cloneElement(n,{...f,className:D(t,n.props.className,(c===It||c===Rn)&&`${e}-toggling`,Ti[c])})})));ua.displayName="OffcanvasToggling";const Mi=ua,da=p.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:a=!1,...r},i)=>(e=Y(e,"offcanvas-header"),d.jsx(xr,{ref:i,...r,className:D(t,e),closeLabel:n,closeButton:a})));da.displayName="OffcanvasHeader";const _i=da,$i=wr("h5"),Ri=pe("offcanvas-title",{Component:$i});function Li(e){return d.jsx(Mi,{...e})}function Di(e){return d.jsx(Or,{...e})}const ma=p.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":a,placement:r="start",responsive:i,show:o=!1,backdrop:l=!0,keyboard:s=!0,scroll:c=!1,onEscapeKeyDown:f,onShow:u,onHide:m,container:v,autoFocus:b=!0,enforceFocus:w=!0,restoreFocus:g=!0,restoreFocusOptions:N,onEntered:x,onExit:k,onExiting:E,onEnter:O,onEntering:A,onExited:C,backdropClassName:_,manager:L,renderStaticNode:X=!1,...I},T)=>{const $=p.useRef();e=Y(e,"offcanvas");const{onToggle:F}=p.useContext(ve)||{},[K,Me]=p.useState(!1),_e=Pi(i||"xs","up");p.useEffect(()=>{Me(i?o&&!_e:o)},[o,i,_e]);const $e=H(()=>{F==null||F(),m==null||m()}),be=p.useMemo(()=>({onHide:$e}),[$e]);function z(){return L||(c?($.current||($.current=new Sr({handleContainerOverflow:!1})),$.current):Ar())}const Re=(q,...st)=>{q&&(q.style.visibility="visible"),O==null||O(q,...st)},Ka=(q,...st)=>{q&&(q.style.visibility=""),C==null||C(...st)},qa=p.useCallback(q=>d.jsx("div",{...q,className:D(`${e}-backdrop`,_)}),[_,e]),Kt=q=>d.jsx("div",{...q,...I,className:D(t,i?`${e}-${i}`:e,`${e}-${r}`),"aria-labelledby":a,children:n});return d.jsxs(d.Fragment,{children:[!K&&(i||X)&&Kt({}),d.jsx(kr.Provider,{value:be,children:d.jsx(Nr,{show:K,ref:T,backdrop:l,container:v,keyboard:s,autoFocus:b,enforceFocus:w&&!c,restoreFocus:g,restoreFocusOptions:N,onEscapeKeyDown:f,onShow:u,onHide:$e,onEnter:Re,onEntering:A,onEntered:x,onExit:k,onExiting:E,onExited:Ka,manager:z(),transition:Li,backdropTransition:Di,renderBackdrop:qa,renderDialog:Kt})})]})});ma.displayName="Offcanvas";const Fi=Object.assign(ma,{Body:Ii,Header:_i,Title:Ri}),pa=p.forwardRef((e,t)=>{const n=p.useContext(ve);return d.jsx(Fi,{ref:t,show:!!(n!=null&&n.expanded),...e,renderStaticNode:!0})});pa.displayName="NavbarOffcanvas";const zi=pa,Yi=pe("navbar-text",{Component:"span"}),va=p.forwardRef((e,t)=>{const{bsPrefix:n,expand:a=!0,variant:r="light",bg:i,fixed:o,sticky:l,className:s,as:c="nav",expanded:f,onToggle:u,onSelect:m,collapseOnSelect:v=!1,...b}=Un(e,{expanded:"onToggle"}),w=Y(n,"navbar"),g=p.useCallback((...k)=>{m==null||m(...k),v&&f&&(u==null||u(!1))},[m,v,f,u]);b.role===void 0&&c!=="nav"&&(b.role="navigation");let N=`${w}-expand`;typeof a=="string"&&(N=`${N}-${a}`);const x=p.useMemo(()=>({onToggle:()=>u==null?void 0:u(!f),bsPrefix:w,expanded:!!f,expand:a}),[w,f,a,u]);return d.jsx(ve.Provider,{value:x,children:d.jsx(Ve.Provider,{value:g,children:d.jsx(c,{ref:t,...b,className:D(s,w,a&&N,r&&`${w}-${r}`,i&&`bg-${i}`,l&&`sticky-${l}`,o&&`fixed-${o}`)})})})});va.displayName="Navbar";const ct=Object.assign(va,{Brand:Si,Collapse:Ai,Offcanvas:zi,Text:Yi,Toggle:Ci});function Ui(){return d.jsx(p.Fragment,{children:d.jsx("footer",{className:"footer backgroundss",style:{backgroundColor:"#F4F5F7"},children:d.jsx("div",{className:"container",children:d.jsx(Cr,{className:"row align-items-center flex-row-reverse",children:d.jsx(Er,{lg:12,sm:12,className:"text-center",children:"Copyright © 2024 Rwanda Eye Clinic"})})})})})}function Wi(){const[e,t]=p.useState();jr();const n=()=>{localStorage.clear(),window.location.reload()};document.addEventListener("click",function(){var i;(i=document.querySelector(".search-result"))==null||i.classList.add("d-none")});function a(){document.fullScreenElement&&document.fullScreenElement===null||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}const r=()=>{document.querySelector(".app").classList.toggle("sidenav-toggled")};return d.jsxs(p.Fragment,{children:[d.jsx("div",{className:"app-header header sticky",style:{marginBottom:"-70.7812px",backgroundColor:"#FDFEFF"},children:d.jsx(Oi,{fluid:!0,className:" main-container ",children:d.jsxs("div",{className:"d-flex",children:[d.jsx("div",{"aria-label":"Hide Sidebar",className:"app-sidebar__toggle","data-bs-toggle":"sidebar",onClick:()=>r()}),d.jsx(vt,{className:"logo-horizontal",to:"/dashboard"}),d.jsxs(ct,{className:"d-flex order-lg-2 ms-auto header-right-icons px-0",expand:"lg",children:[d.jsxs(W,{className:"d-none",children:[d.jsx(W.Toggle,{as:"a",href:"#",variant:"light",className:"no-caret nav-link icon ",children:d.jsx("i",{className:"fe fe-search"})}),d.jsx(W.Menu,{className:" header-search dropdown-menu-start",children:d.jsxs(De,{className:" w-100 p-2",children:[d.jsx(Qt.Control,{type:"text",placeholder:"Search...."}),d.jsx(De.Text,{variant:"primary",className:" btn btn-primary me-2",children:d.jsx("i",{className:"fe fe-search","aria-hidden":"true"})})]})})]}),d.jsx(ct.Toggle,{className:"navbar-toggler navresponsive-toggler d-lg-none ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent-4","aria-controls":"navbarSupportedContent-4","aria-expanded":"false","aria-label":"Toggle navigation",children:d.jsx("span",{className:"navbar-toggler-icon fe fe-more-vertical"})}),d.jsx("div",{className:"responsive-navbar p-0",children:d.jsx(ct.Collapse,{className:"",id:"navbarSupportedContent-4",children:d.jsxs("div",{className:"d-flex order-lg-2",children:[d.jsxs(W,{className:" d-lg-none d-flex",children:[d.jsx(W.Toggle,{as:"a",to:"#",className:" no-caret nav-link icon","data-bs-toggle":"dropdown",children:d.jsx("i",{className:"fe fe-search"})}),d.jsx(W.Menu,{className:" header-search dropdown-menu-start",children:d.jsxs(De,{className:"w-100 p-2",children:[d.jsx(Qt.Control,{type:"text",placeholder:"Search...."}),d.jsx(De.Text,{className:"input-group-text btn btn-primary",children:d.jsx("i",{className:"fa fa-search","aria-hidden":"true"})})]})})]}),d.jsx("div",{className:"dropdown d-flex",children:d.jsx(vt,{className:"nav-link icon full-screen-link",id:"fullscreen-button",onClick:a,children:d.jsx("i",{className:"ri-fullscreen-exit-line fullscreen-button"})})}),d.jsxs(W,{className:"dropdown d-flex profile-1",children:[d.jsx(W.Toggle,{as:"a",variant:"",className:"no-caret nav-link leading-none d-flex",children:d.jsx("i",{className:"fa fa-user"})}),d.jsxs(W.Menu,{className:"dropdown-menu dropdown-menu-end dropdown-menu-arrow","data-bs-popper":"none",children:[d.jsx("div",{className:"drop-heading",children:d.jsxs("div",{className:"text-center",children:[d.jsx("h5",{className:"text-dark mb-0 fw-semibold",children:e==null?void 0:e.email}),d.jsx("span",{className:"text-muted fs-12",children:e==null?void 0:e.roles.map(i=>i.name).join(", ")})]})}),d.jsxs(W.Item,{className:"text-dark fw-semibold border-top",href:"/profile",children:[d.jsx("i",{className:"dropdown-icon fe fe-user"})," Profile"]}),d.jsxs(W.Item,{className:"text-dark fw-semibold",onClick:n,children:[d.jsx("i",{className:"dropdown-icon fe fe-log-out"})," Sign out"]})]})]})]})})})]})]})})}),d.jsx("div",{className:"jumps-prevent",style:{paddingTop:"70.7812px"}})]})}function sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sn(Object(n),!0).forEach(function(a){R(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Qe(e){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qe(e)}function Bi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ln(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Hi(e,t,n){return t&&ln(e.prototype,t),n&&ln(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mt(e,t){return qi(e)||Xi(e,t)||ga(e,t)||Qi()}function Pe(e){return Ki(e)||Gi(e)||ga(e)||Vi()}function Ki(e){if(Array.isArray(e))return bt(e)}function qi(e){if(Array.isArray(e))return e}function Gi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,l;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(s){i=!0,l=s}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function ga(e,t){if(e){if(typeof e=="string")return bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bt(e,t)}}function bt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Vi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cn=function(){},_t={},ba={},ha=null,ya={mark:cn,measure:cn};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(ba=document),typeof MutationObserver<"u"&&(ha=MutationObserver),typeof performance<"u"&&(ya=performance)}catch{}var Ji=_t.navigator||{},fn=Ji.userAgent,un=fn===void 0?"":fn,ne=_t,P=ba,dn=ha,Fe=ya;ne.document;var Z=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",xa=~un.indexOf("MSIE")||~un.indexOf("Trident/"),ze,Ye,Ue,We,Be,V="___FONT_AWESOME___",ht=16,wa="fa",ka="svg-inline--fa",se="data-fa-i2svg",yt="data-fa-pseudo-element",Zi="data-fa-pseudo-element-pending",$t="data-prefix",Rt="data-icon",mn="fontawesome-i2svg",eo="async",to=["HTML","HEAD","STYLE","SCRIPT"],Na=function(){try{return!0}catch{return!1}}(),j="classic",M="sharp",Lt=[j,M];function Ie(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[j]}})}var Oe=Ie((ze={},R(ze,j,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),R(ze,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ze)),Se=Ie((Ye={},R(Ye,j,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),R(Ye,M,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ye)),Ae=Ie((Ue={},R(Ue,j,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),R(Ue,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ue)),no=Ie((We={},R(We,j,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),R(We,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),We)),ao=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Oa="fa-layers-text",ro=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,io=Ie((Be={},R(Be,j,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),R(Be,M,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Be)),Sa=[1,2,3,4,5,6,7,8,9,10],oo=Sa.concat([11,12,13,14,15,16,17,18,19,20]),so=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ce=new Set;Object.keys(Se[j]).map(Ce.add.bind(Ce));Object.keys(Se[M]).map(Ce.add.bind(Ce));var lo=[].concat(Lt,Pe(Ce),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(Sa.map(function(e){return"".concat(e,"x")})).concat(oo.map(function(e){return"w-".concat(e)})),we=ne.FontAwesomeConfig||{};function co(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var uo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uo.forEach(function(e){var t=Mt(e,2),n=t[0],a=t[1],r=fo(co(n));r!=null&&(we[a]=r)})}var Aa={styleDefault:"solid",familyDefault:"classic",cssPrefix:wa,replacementClass:ka,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};we.familyPrefix&&(we.cssPrefix=we.familyPrefix);var me=h(h({},Aa),we);me.autoReplaceSvg||(me.observeMutations=!1);var y={};Object.keys(Aa).forEach(function(e){Object.defineProperty(y,e,{enumerable:!0,set:function(n){me[e]=n,ke.forEach(function(a){return a(y)})},get:function(){return me[e]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){me.cssPrefix=t,ke.forEach(function(n){return n(y)})},get:function(){return me.cssPrefix}});ne.FontAwesomeConfig=y;var ke=[];function mo(e){return ke.push(e),function(){ke.splice(ke.indexOf(e),1)}}var ee=ht,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function po(e){if(!(!e||!Z)){var t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=P.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return P.head.insertBefore(t,a),e}}var vo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ee(){for(var e=12,t="";e-- >0;)t+=vo[Math.random()*62|0];return t}function ge(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Dt(e){return e.classList?ge(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ca(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function go(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ca(e[n]),'" ')},"").trim()}function nt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ft(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function bo(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:c}}function ho(e){var t=e.transform,n=e.width,a=n===void 0?ht:n,r=e.height,i=r===void 0?ht:r,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&xa?s+="translate(".concat(t.x/ee-a/2,"em, ").concat(t.y/ee-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/ee,"em), calc(-50% + ").concat(t.y/ee,"em)) "):s+="translate(".concat(t.x/ee,"em, ").concat(t.y/ee,"em) "),s+="scale(".concat(t.size/ee*(t.flipX?-1:1),", ").concat(t.size/ee*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var yo=`:root, :host {
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
}`;function Ea(){var e=wa,t=ka,n=y.cssPrefix,a=y.replacementClass,r=yo;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var pn=!1;function ft(){y.autoAddCss&&!pn&&(po(Ea()),pn=!0)}var xo={mixout:function(){return{dom:{css:Ea,insertCss:ft}}},hooks:function(){return{beforeDOMElementCreation:function(){ft()},beforeI2svg:function(){ft()}}}},Q=ne||{};Q[V]||(Q[V]={});Q[V].styles||(Q[V].styles={});Q[V].hooks||(Q[V].hooks={});Q[V].shims||(Q[V].shims=[]);var B=Q[V],ja=[],wo=function e(){P.removeEventListener("DOMContentLoaded",e),Je=1,ja.map(function(t){return t()})},Je=!1;Z&&(Je=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Je||P.addEventListener("DOMContentLoaded",wo));function ko(e){Z&&(Je?setTimeout(e,0):ja.push(e))}function Te(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Ca(e):"<".concat(t," ").concat(go(a),">").concat(i.map(Te).join(""),"</").concat(t,">")}function vn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var No=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},ut=function(t,n,a,r){var i=Object.keys(t),o=i.length,l=r!==void 0?No(n,r):n,s,c,f;for(a===void 0?(s=1,f=t[i[0]]):(s=0,f=a);s<o;s++)c=i[s],f=l(f,t[c],c,t);return f};function Oo(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function xt(e){var t=Oo(e);return t.length===1?t[0].toString(16):null}function So(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function gn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function wt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=gn(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,gn(t)):B.styles[e]=h(h({},B.styles[e]||{}),i),e==="fas"&&wt("fa",t)}var He,Ke,qe,ce=B.styles,Ao=B.shims,Co=(He={},R(He,j,Object.values(Ae[j])),R(He,M,Object.values(Ae[M])),He),zt=null,Pa={},Ia={},Ta={},Ma={},_a={},Eo=(Ke={},R(Ke,j,Object.keys(Oe[j])),R(Ke,M,Object.keys(Oe[M])),Ke);function jo(e){return~lo.indexOf(e)}function Po(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!jo(r)?r:null}var $a=function(){var t=function(i){return ut(ce,function(o,l,s){return o[s]=ut(l,i,{}),o},{})};Pa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){r[s.toString(16)]=o})}return r}),Ia=t(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){r[s]=o})}return r}),_a=t(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(s){r[s]=o}),r});var n="far"in ce||y.autoFetchSvg,a=ut(Ao,function(r,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:s}),r},{names:{},unicodes:{}});Ta=a.names,Ma=a.unicodes,zt=at(y.styleDefault,{family:y.familyDefault})};mo(function(e){zt=at(e.styleDefault,{family:y.familyDefault})});$a();function Yt(e,t){return(Pa[e]||{})[t]}function Io(e,t){return(Ia[e]||{})[t]}function oe(e,t){return(_a[e]||{})[t]}function Ra(e){return Ta[e]||{prefix:null,iconName:null}}function To(e){var t=Ma[e],n=Yt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ae(){return zt}var Ut=function(){return{prefix:null,iconName:null,rest:[]}};function at(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?j:n,r=Oe[a][e],i=Se[a][e]||Se[a][r],o=e in B.styles?e:null;return i||o||null}var bn=(qe={},R(qe,j,Object.keys(Ae[j])),R(qe,M,Object.keys(Ae[M])),qe);function rt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},R(t,j,"".concat(y.cssPrefix,"-").concat(j)),R(t,M,"".concat(y.cssPrefix,"-").concat(M)),t),o=null,l=j;(e.includes(i[j])||e.some(function(c){return bn[j].includes(c)}))&&(l=j),(e.includes(i[M])||e.some(function(c){return bn[M].includes(c)}))&&(l=M);var s=e.reduce(function(c,f){var u=Po(y.cssPrefix,f);if(ce[f]?(f=Co[l].includes(f)?no[l][f]:f,o=f,c.prefix=f):Eo[l].indexOf(f)>-1?(o=f,c.prefix=at(f,{family:l})):u?c.iconName=u:f!==y.replacementClass&&f!==i[j]&&f!==i[M]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var m=o==="fa"?Ra(c.iconName):{},v=oe(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||v||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!ce.far&&ce.fas&&!y.autoFetchSvg&&(c.prefix="fas")}return c},Ut());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===M&&(ce.fass||y.autoFetchSvg)&&(s.prefix="fass",s.iconName=oe(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=ae()||"fas"),s}var Mo=function(){function e(){Bi(this,e),this.definitions={}}return Hi(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=h(h({},n.definitions[l]||{}),o[l]),wt(l,o[l]);var s=Ae[j][l];s&&wt(s,o[l]),$a()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,s=o.iconName,c=o.icon,f=c[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[l][u]=c)}),n[l][s]=c}),n}}]),e}(),hn=[],fe={},de={},_o=Object.keys(de);function $o(e,t){var n=t.mixoutsTo;return hn=e,fe={},Object.keys(de).forEach(function(a){_o.indexOf(a)===-1&&delete de[a]}),hn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Qe(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){fe[o]||(fe[o]=[]),fe[o].push(i[o])})}a.provides&&a.provides(de)}),n}function kt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=fe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=fe[e]||[];r.forEach(function(i){i.apply(null,n)})}function J(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return de[e]?de[e].apply(null,t):void 0}function Nt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ae();if(t)return t=oe(n,t)||t,vn(La.definitions,n,t)||vn(B.styles,n,t)}var La=new Mo,Ro=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,le("noAuto")},Lo={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(le("beforeI2svg",t),J("pseudoElements2svg",t),J("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,ko(function(){Fo({autoReplaceSvgRoot:n}),le("watch",t)})}},Do={icon:function(t){if(t===null)return null;if(Qe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:oe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=at(t[0]);return{prefix:a,iconName:oe(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(ao))){var r=rt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||ae(),iconName:oe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=ae();return{prefix:i,iconName:oe(i,t)||t}}}},U={noAuto:Ro,config:y,dom:Lo,parse:Do,library:La,findIconDefinition:Nt,toHtml:Te},Fo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?P:n;(Object.keys(B.styles).length>0||y.autoFetchSvg)&&Z&&y.autoReplaceSvg&&U.dom.i2svg({node:a})};function it(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Te(a)})}}),Object.defineProperty(e,"node",{get:function(){if(Z){var a=P.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function zo(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Ft(o)&&n.found&&!a.found){var l=n.width,s=n.height,c={x:l/s/2,y:.5};r.style=nt(h(h({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Yo(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:o}),children:a}]}]}function Wt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,c=e.maskId,f=e.titleId,u=e.extra,m=e.watchable,v=m===void 0?!1:m,b=a.found?a:n,w=b.width,g=b.height,N=r==="fak",x=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(L){return u.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(u.classes).join(" "),k={children:[],attributes:h(h({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(g)})},E=N&&!~u.classes.indexOf("fa-fw")?{width:"".concat(w/g*16*.0625,"em")}:{};v&&(k.attributes[se]=""),s&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||Ee())},children:[s]}),delete k.attributes.title);var O=h(h({},k),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:l,styles:h(h({},E),u.styles)}),A=a.found&&n.found?J("generateAbstractMask",O)||{children:[],attributes:{}}:J("generateAbstractIcon",O)||{children:[],attributes:{}},C=A.children,_=A.attributes;return O.children=C,O.attributes=_,l?Yo(O):zo(O)}function yn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,c=h(h(h({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[se]="");var f=h({},o.styles);Ft(r)&&(f.transform=ho({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var u=nt(f);u.length>0&&(c.style=u);var m=[];return m.push({tag:"span",attributes:c,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Uo(e){var t=e.content,n=e.title,a=e.extra,r=h(h(h({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=nt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dt=B.styles;function Ot(e){var t=e[0],n=e[1],a=e.slice(4),r=Mt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Wo={found:!1,width:512,height:512};function Bo(e,t){!Na&&!y.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function St(e,t){var n=t;return t==="fa"&&y.styleDefault!==null&&(t=ae()),new Promise(function(a,r){if(J("missingIconAbstract"),n==="fa"){var i=Ra(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dt[t]&&dt[t][e]){var o=dt[t][e];return a(Ot(o))}Bo(e,t),a(h(h({},Wo),{},{icon:y.showMissingIcons&&e?J("missingIconAbstract")||{}:{}}))})}var xn=function(){},At=y.measurePerformance&&Fe&&Fe.mark&&Fe.measure?Fe:{mark:xn,measure:xn},ye='FA "6.5.2"',Ho=function(t){return At.mark("".concat(ye," ").concat(t," begins")),function(){return Da(t)}},Da=function(t){At.mark("".concat(ye," ").concat(t," ends")),At.measure("".concat(ye," ").concat(t),"".concat(ye," ").concat(t," begins"),"".concat(ye," ").concat(t," ends"))},Bt={begin:Ho,end:Da},Ge=function(){};function wn(e){var t=e.getAttribute?e.getAttribute(se):null;return typeof t=="string"}function Ko(e){var t=e.getAttribute?e.getAttribute($t):null,n=e.getAttribute?e.getAttribute(Rt):null;return t&&n}function qo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(y.replacementClass)}function Go(){if(y.autoReplaceSvg===!0)return Xe.replace;var e=Xe[y.autoReplaceSvg];return e||Xe.replace}function Xo(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function Vo(e){return P.createElement(e)}function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Xo:Vo:n;if(typeof e=="string")return P.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Fa(o,{ceFn:a}))}),r}function Qo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Fa(r),n)}),n.getAttribute(se)===null&&y.keepOriginalSource){var a=P.createComment(Qo(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Dt(n).indexOf(y.replacementClass))return Xe.replace(t);var r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,s){return s===y.replacementClass||s.match(r)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return Te(l)}).join(`
`);n.setAttribute(se,""),n.innerHTML=o}};function kn(e){e()}function za(e,t){var n=typeof t=="function"?t:Ge;if(e.length===0)n();else{var a=kn;y.mutateApproach===eo&&(a=ne.requestAnimationFrame||kn),a(function(){var r=Go(),i=Bt.begin("mutate");e.map(r),i(),n()})}}var Ht=!1;function Ya(){Ht=!0}function Ct(){Ht=!1}var Ze=null;function Nn(e){if(dn&&y.observeMutations){var t=e.treeCallback,n=t===void 0?Ge:t,a=e.nodeCallback,r=a===void 0?Ge:a,i=e.pseudoElementsCallback,o=i===void 0?Ge:i,l=e.observeMutationsRoot,s=l===void 0?P:l;Ze=new dn(function(c){if(!Ht){var f=ae();ge(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!wn(u.addedNodes[0])&&(y.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&y.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&wn(u.target)&&~so.indexOf(u.attributeName))if(u.attributeName==="class"&&Ko(u.target)){var m=rt(Dt(u.target)),v=m.prefix,b=m.iconName;u.target.setAttribute($t,v||f),b&&u.target.setAttribute(Rt,b)}else qo(u.target)&&r(u.target)})}}),Z&&Ze.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jo(){Ze&&Ze.disconnect()}function Zo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function es(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=rt(Dt(e));return r.prefix||(r.prefix=ae()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Io(r.prefix,e.innerText)||Yt(r.prefix,xt(e.innerText))),!r.iconName&&y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ts(e){var t=ge(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return y.autoA11y&&(n?t["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||Ee()):(t["aria-hidden"]="true",t.focusable="false")),t}function ns(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=es(e),a=n.iconName,r=n.prefix,i=n.rest,o=ts(e),l=kt("parseNodeAttributes",{},e),s=t.styleParser?Zo(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var as=B.styles;function Ua(e){var t=y.autoReplaceSvg==="nest"?On(e,{styleParser:!1}):On(e);return~t.extra.classes.indexOf(Oa)?J("generateLayersText",e,t):J("generateSvgReplacementMutation",e,t)}var re=new Set;Lt.map(function(e){re.add("fa-".concat(e))});Object.keys(Oe[j]).map(re.add.bind(re));Object.keys(Oe[M]).map(re.add.bind(re));re=Pe(re);function Sn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var n=P.documentElement.classList,a=function(u){return n.add("".concat(mn,"-").concat(u))},r=function(u){return n.remove("".concat(mn,"-").concat(u))},i=y.autoFetchSvg?re:Lt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(as));i.includes("fa")||i.push("fa");var o=[".".concat(Oa,":not([").concat(se,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(se,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=ge(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var s=Bt.begin("onTree"),c=l.reduce(function(f,u){try{var m=Ua(u);m&&f.push(m)}catch(v){Na||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(m){za(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(m){s(),u(m)})})}function rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ua(e).then(function(n){n&&za([n],t)})}function is(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Nt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Nt(r||{})),e(a,h(h({},n),{},{mask:r}))}}var os=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?G:a,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,c=n.maskId,f=c===void 0?null:c,u=n.title,m=u===void 0?null:u,v=n.titleId,b=v===void 0?null:v,w=n.classes,g=w===void 0?[]:w,N=n.attributes,x=N===void 0?{}:N,k=n.styles,E=k===void 0?{}:k;if(t){var O=t.prefix,A=t.iconName,C=t.icon;return it(h({type:"icon"},t),function(){return le("beforeDOMElementCreation",{iconDefinition:t,params:n}),y.autoA11y&&(m?x["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(b||Ee()):(x["aria-hidden"]="true",x.focusable="false")),Wt({icons:{main:Ot(C),mask:s?Ot(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:A,transform:h(h({},G),r),symbol:o,title:m,maskId:f,titleId:b,extra:{attributes:x,styles:E,classes:g}})})}},ss={mixout:function(){return{icon:is(os)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Sn,n.nodeCallback=rs,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?P:a,i=n.callback,o=i===void 0?function(){}:i;return Sn(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,s=a.transform,c=a.symbol,f=a.mask,u=a.maskId,m=a.extra;return new Promise(function(v,b){Promise.all([St(r,l),f.iconName?St(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var g=Mt(w,2),N=g[0],x=g[1];v([n,Wt({icons:{main:N,mask:x},prefix:l,iconName:r,transform:s,symbol:c,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,s=nt(l);s.length>0&&(r.style=s);var c;return Ft(o)&&(c=J("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},ls={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return it({type:"layer"},function(){le("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(Pe(i)).join(" ")},children:o}]})}}}},cs={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,s=a.attributes,c=s===void 0?{}:s,f=a.styles,u=f===void 0?{}:f;return it({type:"counter",content:n},function(){return le("beforeDOMElementCreation",{content:n,params:a}),Uo({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(Pe(l))}})})}}}},fs={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?G:r,o=a.title,l=o===void 0?null:o,s=a.classes,c=s===void 0?[]:s,f=a.attributes,u=f===void 0?{}:f,m=a.styles,v=m===void 0?{}:m;return it({type:"text",content:n},function(){return le("beforeDOMElementCreation",{content:n,params:a}),yn({content:n,transform:h(h({},G),i),title:l,extra:{attributes:u,styles:v,classes:["".concat(y.cssPrefix,"-layers-text")].concat(Pe(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,l=null,s=null;if(xa){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/c,s=f.height/c}return y.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,yn({content:n.innerHTML,width:l,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},us=new RegExp('"',"ug"),An=[1105920,1112319];function ds(e){var t=e.replace(us,""),n=So(t,0),a=n>=An[0]&&n<=An[1],r=t.length===2?t[0]===t[1]:!1;return{value:xt(r?t[0]:t),isSecondary:a||r}}function Cn(e,t){var n="".concat(Zi).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=ge(e.children),o=i.filter(function(C){return C.getAttribute(yt)===t})[0],l=ne.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(ro),c=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),a();if(s&&f!=="none"&&f!==""){var u=l.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?M:j,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Se[m][s[2].toLowerCase()]:io[m][c],b=ds(u),w=b.value,g=b.isSecondary,N=s[0].startsWith("FontAwesome"),x=Yt(v,w),k=x;if(N){var E=To(w);E.iconName&&E.prefix&&(x=E.iconName,v=E.prefix)}if(x&&!g&&(!o||o.getAttribute($t)!==v||o.getAttribute(Rt)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var O=ns(),A=O.extra;A.attributes[yt]=t,St(x,v).then(function(C){var _=Wt(h(h({},O),{},{icons:{main:C,mask:Ut()},prefix:v,iconName:k,extra:A,watchable:!0})),L=P.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=_.map(function(X){return Te(X)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ms(e){return Promise.all([Cn(e,"::before"),Cn(e,"::after")])}function ps(e){return e.parentNode!==document.head&&!~to.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function En(e){if(Z)return new Promise(function(t,n){var a=ge(e.querySelectorAll("*")).filter(ps).map(ms),r=Bt.begin("searchPseudoElements");Ya(),Promise.all(a).then(function(){r(),Ct(),t()}).catch(function(){r(),Ct(),n()})})}var vs={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=En,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?P:a;y.searchPseudoElements&&En(r)}}},jn=!1,gs={mixout:function(){return{dom:{unwatch:function(){Ya(),jn=!0}}}},hooks:function(){return{bootstrap:function(){Nn(kt("mutationObserverCallbacks",{}))},noAuto:function(){Jo()},watch:function(n){var a=n.observeMutationsRoot;jn?Ct():Nn(kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Pn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},bs={mixout:function(){return{parse:{transform:function(n){return Pn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Pn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:u,path:m};return{tag:"g",attributes:h({},v.outer),children:[{tag:"g",attributes:h({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),v.path)}]}]}}}},mt={x:0,y:0,width:"100%",height:"100%"};function In(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hs(e){return e.tag==="g"?e.children:[e]}var ys={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?rt(r.split(" ").map(function(o){return o.trim()})):Ut();return i.prefix||(i.prefix=ae()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,c=i.width,f=i.icon,u=o.width,m=o.icon,v=bo({transform:s,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:h(h({},mt),{},{fill:"white"})},w=f.children?{children:f.children.map(In)}:{},g={tag:"g",attributes:h({},v.inner),children:[In(h({tag:f.tag,attributes:h(h({},f.attributes),v.path)},w))]},N={tag:"g",attributes:h({},v.outer),children:[g]},x="mask-".concat(l||Ee()),k="clip-".concat(l||Ee()),E={tag:"mask",attributes:h(h({},mt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,N]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:hs(m)},E]};return a.push(O,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(x,")")},mt)}),{children:a,attributes:r}}}},xs={provides:function(t){var n=!1;ne.matchMedia&&(n=ne.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=h(h({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:h(h({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ws={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},ks=[xo,ss,ls,cs,fs,vs,gs,bs,ys,xs,ws];$o(ks,{mixoutsTo:U});U.noAuto;U.config;U.library;U.dom;var Et=U.parse;U.findIconDefinition;U.toHtml;var Ns=U.icon;U.layer;U.text;U.counter;function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tn(Object(n),!0).forEach(function(a){ue(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function et(e){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Os(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ss(e,t){if(e==null)return{};var n=Os(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function jt(e){return As(e)||Cs(e)||Es(e)||js()}function As(e){if(Array.isArray(e))return Pt(e)}function Cs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Es(e,t){if(e){if(typeof e=="string")return Pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(e,t)}}function Pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function js(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ps(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,f=e.spinReverse,u=e.pulse,m=e.fixedWidth,v=e.inverse,b=e.border,w=e.listItem,g=e.flip,N=e.size,x=e.rotation,k=e.pull,E=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":m,"fa-inverse":v,"fa-border":b,"fa-li":w,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},ue(t,"fa-".concat(N),typeof N<"u"&&N!==null),ue(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),ue(t,"fa-pull-".concat(k),typeof k<"u"&&k!==null),ue(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(O){return E[O]?O:null}).filter(function(O){return O})}function Is(e){return e=e-0,e===e}function Wa(e){return Is(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ts=["style"];function Ms(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _s(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Wa(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Ms(r)]=i:t[r]=i,t},{})}function Ba(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(s){return Ba(e,s)}),r=Object.keys(t.attributes||{}).reduce(function(s,c){var f=t.attributes[c];switch(c){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=_s(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?s.attrs[c.toLowerCase()]=f:s.attrs[Wa(c)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Ss(n,Ts);return r.attrs.style=te(te({},r.attrs.style),o),e.apply(void 0,[t.tag,te(te({},r.attrs),l)].concat(jt(a)))}var Ha=!1;try{Ha=!0}catch{}function $s(){if(!Ha&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Mn(e){if(e&&et(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Et.icon)return Et.icon(e);if(e===null)return null;if(e&&et(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function pt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}var ot=Ne.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,c=Mn(n),f=pt("classes",[].concat(jt(Ps(e)),jt(i.split(" ")))),u=pt("transform",typeof e.transform=="string"?Et.transform(e.transform):e.transform),m=pt("mask",Mn(a)),v=Ns(c,te(te(te(te({},f),u),m),{},{symbol:r,title:o,titleId:l,maskId:s}));if(!v)return $s("Could not find icon",c),null;var b=v.abstract,w={ref:t};return Object.keys(e).forEach(function(g){ot.defaultProps.hasOwnProperty(g)||(w[g]=e[g])}),Rs(b[0],w)});ot.displayName="FontAwesomeIcon";ot.propTypes={beat:S.bool,border:S.bool,beatFade:S.bool,bounce:S.bool,className:S.string,fade:S.bool,flash:S.bool,mask:S.oneOfType([S.object,S.array,S.string]),maskId:S.string,fixedWidth:S.bool,inverse:S.bool,flip:S.oneOf([!0,!1,"horizontal","vertical","both"]),icon:S.oneOfType([S.object,S.array,S.string]),listItem:S.bool,pull:S.oneOf(["right","left"]),pulse:S.bool,rotation:S.oneOf([0,90,180,270]),shake:S.bool,size:S.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:S.bool,spinPulse:S.bool,spinReverse:S.bool,symbol:S.oneOfType([S.bool,S.string]),title:S.string,titleId:S.string,transform:S.oneOfType([S.string,S.object]),swapOpacity:S.bool};ot.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Rs=Ba.bind(null,Ne.createElement);const Ls=[{icon:d.jsx("i",{class:"side-menu__icon fa fa-user-plus"}),type:"sub",Name:"",active:!1,selected:!1,title:"Patients",class:"",color:"",badgetxt:"",path:"/patients",roles:["Administrator","Nurse","Doctor","Receptionist","Optometrist","Optic"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-map-signs"}),type:"sub",Name:"",active:!1,selected:!1,title:"Visits",class:"",color:"",badgetxt:"",path:"/visits",roles:["Administrator","Nurse","Doctor","Receptionist","Optometrist"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-heartbeat"}),type:"sub",Name:"",active:!1,selected:!1,title:"Insurance",class:"",color:"",badgetxt:"",path:"/insurance",roles:["Administrator","Doctor"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-sitemap"}),type:"sub",Name:"",active:!1,selected:!1,title:"Department",class:"",color:"",badgetxt:"",path:"/Department",roles:["Administrator","Doctor"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-unlock-alt"}),type:"sub",Name:"",active:!1,selected:!1,title:"Access Control",class:"",color:"",badgetxt:"",path:"/access-control",roles:["Administrator","Doctor"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-calendar-check-o"}),type:"sub",Name:"",active:!1,selected:!1,title:"Appointment",class:"",color:"",badgetxt:"",path:"/appointments",roles:["Administrator","Doctor"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-clock-o"}),type:"sub",Name:"",active:!1,selected:!1,title:"Manage schedules",class:"",color:"",badgetxt:"",path:"/specialists",roles:["Administrator","Doctor","Receptionist"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-file"}),type:"sub",Name:"",active:!1,selected:!1,title:"Report",class:"",color:"",badgetxt:"",path:"/report",roles:["Administrator","Doctor"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-wechat"}),type:"sub",Name:"",active:!1,selected:!1,title:"Chat",class:"",color:"",badgetxt:"",path:"/chat",roles:["Administrator","Doctor","Receptionist","Nurse","Optometrist"],condition:!1},{icon:d.jsx("i",{class:"side-menu__icon fa fa-wpforms"}),type:"sub",Name:"",active:!1,selected:!1,title:"Ordonances",class:"",color:"",badgetxt:"",path:"/ordonance",roles:["Administrator","Optic"],condition:!1}];const Ds=()=>{document.querySelector(".app").classList.contains("sidenav-toggled"),document.querySelector(".app").classList.add("sidenav-toggled-open")},Fs=()=>{document.querySelector(".app").classList.remove("sidenav-toggled-open")};function zs(){const[e,t]=p.useState([]),[n,a]=p.useState(0);document.querySelector("body").classList.contains("horizontal"),window.addEventListener("resize",()=>{l()});const r=(s,c)=>{for(let f=0;f<(s==null?void 0:s.length);f++)if(c.includes(s[f]))return!0;return!1},i=async()=>{const s=await localStorage.getItem("role"),c=JSON.parse(s),f=Ls.map(u=>({...u,condition:r(c,u.roles)}));t(f)},o=async()=>{let s=await localStorage.getItem("token"),c=await localStorage.getItem("user"),f=JSON.parse(c);const u={headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,userId:f.id}};Ir.get("http://www.ubuzima.rw/rec/message/chats",u).then(m=>{if(console.log(m.data),m.data.response.length>0){const v=m.data.response.reduce((b,w)=>b+w.unreadIds.length,0);a(v)}}).catch(m=>{setLoading(!1),console.log(m.message)})};p.useEffect(()=>{i(),o()},[]);function l(){var w,g,N,x,k;let s=document.querySelector(".horizontal-main"),c=document.querySelector(".side-menu"),f=document.querySelector(".main-sidemenu"),u=(s==null?void 0:s.offsetWidth)-(f==null?void 0:f.offsetWidth),m=Math.ceil(Number((w=window.getComputedStyle(c))==null?void 0:w.marginLeft.split("px")[0])),v=Math.ceil(Number((g=window.getComputedStyle(c))==null?void 0:g.marginRight.split("px")[0])),b=c.scrollWidth+(0-(s==null?void 0:s.offsetWidth))+u;(s==null?void 0:s.offsetWidth)-u>=c.scrollWidth?((N=document.querySelector(".slide-left"))==null||N.classList.add("d-none"),(x=document.querySelector(".slide-right"))==null||x.classList.add("d-none"),c.style.marginRight=0,c.style.marginLeft=0):(k=document.querySelector(".slide-right"))==null||k.classList.remove("d-none"),document.querySelector("html").getAttribute("dir")==="rtl"?!(Math.abs(v)<Math.abs(b))&&(s==null?void 0:s.offsetWidth)-u<c.scrollWidth?(c.style.marginRight=-b+"px",document.querySelector(".slide-left").classList.remove("d-none")):c.style.marginRight=0:!(Math.abs(m)<Math.abs(b))&&(s==null?void 0:s.offsetWidth)-u<c.scrollWidth?(c.style.marginLeft=-b+"px",document.querySelector(".slide-right").classList.add("d-none")):c.style.marginLeft=0}return d.jsx(p.Fragment,{children:d.jsx("div",{className:"sticky",children:d.jsx("div",{className:"app-sidebar backgrounds",onMouseOver:()=>Ds(),onMouseOut:()=>Fs(),children:d.jsxs(Pr,{options:{suppressScrollX:!0,useBothWheelAxes:!1},children:[d.jsx("div",{className:"side-header",style:{background:"#FDFEFF"}}),d.jsx("div",{className:"main-sidemenu",children:d.jsx("ul",{className:"side-menu",style:{marginRight:"0px"},children:d.jsx(Ne.Fragment,{children:e==null?void 0:e.map((s,c)=>s.condition&&d.jsx("li",{className:"slide",children:d.jsxs(vt,{to:s.path,className:`side-menu__item ${s.selected?"active":""}`,children:[s.icon,d.jsx("span",{className:"side-menu__label",children:s.title}),s.title==="Chat"&&n>0?d.jsx(Gr,{bg:"danger",className:"side-badge",children:n}):""]})},c))},Math.random())})})]})})})})}const Ys=()=>{var e,t,n;(e=document.querySelector(".app"))==null||e.classList.remove("sidenav-toggled"),(t=document.querySelector(".sidebar-right"))==null||t.classList.remove("sidebar-open"),(n=document.querySelector(".demo_changer"))==null||n.classList.remove("active")};function Ws(e){return document.body.classList.remove("bg-account"),d.jsx(p.Fragment,{children:d.jsx(Tr,{store:Mr,children:d.jsx("div",{className:"horizontalMenucontainer",children:d.jsxs("div",{className:"page",children:[d.jsxs("div",{className:"page-main",children:[d.jsx(Wi,{...e}),d.jsx(zs,{}),d.jsx("div",{className:"main-content app-content",style:{marginBlockStart:20},onClick:()=>Ys(),children:d.jsx("div",{className:"side-app",children:d.jsx("div",{className:"main-container container-fluid",children:d.jsx(_r,{})})})})]}),d.jsx(Ui,{})]})})})})}export{Ws as default};
