import{ac as j,r as s,a3 as g,j as e,ad as n,a1 as t,a2 as r,ae as o,a5 as l,af as N}from"./index-1511042f.js";const b=({authLogin:c,isAuthenticated:i,role:d})=>{const[u,x]=s.useState("");g();const[p,m]=s.useState(""),h=async a=>{a.preventDefault(),c(u,p)};return i?JSON.parse(d).includes("Nurse")?e.jsx(n,{replace:!0,to:"/visits"}):e.jsx(n,{replace:!0,to:"/patients"}):e.jsx(s.Fragment,{children:e.jsx("div",{className:"page_content background",children:e.jsx("div",{className:"container text-center text-dark  ",style:{paddingTop:200},children:e.jsx(t,{children:e.jsx(r,{lg:4,className:" d-block mx-auto",children:e.jsx(t,{children:e.jsx(r,{xl:12,md:12,children:e.jsx(o,{style:{backgroundColor:"transparent",borderColor:"black"},children:e.jsxs(o.Body,{children:[e.jsx("div",{className:"text-center mb-2"}),e.jsx("h3",{children:"Login"}),e.jsx("p",{className:"text-muted",children:"Sign In to your account"}),e.jsxs(l,{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-addon bg-white",children:e.jsx("i",{className:"fa fa-user text-dark"})}),e.jsx("input",{onChange:a=>x(a.target.value),type:"text",className:"form-control",placeholder:"Username",required:!0})]}),e.jsxs(l,{className:"input-group mb-4",children:[e.jsx("span",{className:"input-group-addon bg-white",children:e.jsx("i",{className:"fa fa-unlock-alt text-dark"})}),e.jsx("input",{onChange:a=>m(a.target.value),type:"password",className:"form-control",placeholder:"Password",required:!0})]}),e.jsx(t,{children:e.jsx("div",{children:e.jsx("button",{onClick:a=>h(a),className:"btn btn-primary btn-block",children:"Login"})})})]})})})})})})})})})},k=j(null,{authLogin:N})(b);export{k as default};
