import{r as e,H as I,j as o,ae as a,c as h,d as j}from"./index-9b422fcd.js";const p=e.createContext(null);p.displayName="InputGroupContext";const m=p,n=I("input-group-text",{Component:"span"}),G=t=>o.jsx(n,{children:o.jsx(a,{type:"checkbox",...t})}),C=t=>o.jsx(n,{children:o.jsx(a,{type:"radio",...t})}),r=e.forwardRef(({bsPrefix:t,size:s,hasValidation:u,className:c,as:x="div",...i},d)=>{t=h(t,"input-group");const l=e.useMemo(()=>({}),[]);return o.jsx(m.Provider,{value:l,children:o.jsx(x,{ref:d,...i,className:j(c,t,s&&`${t}-${s}`,u&&"has-validation")})})});r.displayName="InputGroup";const v=Object.assign(r,{Text:n,Radio:C,Checkbox:G});export{m as I,v as a};
