import{aa as m,r as s,Z as h,j as e,ab as g,X as t,Y as n,ac as r,ad as j}from"./index-86994f21.js";import{a as o}from"./InputGroup-a5f233d2.js";const b=({authLogin:l,isAuthenticated:c,role:N})=>{const[i,d]=s.useState("");h();const[u,x]=s.useState(""),p=async a=>{a.preventDefault(),l(i,u)};return c?e.jsx(g,{replace:!0,to:"/patients"}):e.jsx(s.Fragment,{children:e.jsx("div",{className:"page_content background",children:e.jsx("div",{className:"container text-center text-dark  ",style:{paddingTop:200},children:e.jsx(t,{children:e.jsx(n,{lg:4,className:" d-block mx-auto",children:e.jsx(t,{children:e.jsx(n,{xl:12,md:12,children:e.jsx(r,{style:{backgroundColor:"transparent",borderColor:"black"},children:e.jsxs(r.Body,{children:[e.jsx("div",{className:"text-center mb-2"}),e.jsx("h3",{children:"Login"}),e.jsx("p",{className:"text-muted",children:"Sign In to your account"}),e.jsxs(o,{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-addon bg-white",children:e.jsx("i",{className:"fa fa-user text-dark"})}),e.jsx("input",{onChange:a=>d(a.target.value),type:"text",className:"form-control",placeholder:"Username",required:!0})]}),e.jsxs(o,{className:"input-group mb-4",children:[e.jsx("span",{className:"input-group-addon bg-white",children:e.jsx("i",{className:"fa fa-unlock-alt text-dark"})}),e.jsx("input",{onChange:a=>x(a.target.value),type:"password",className:"form-control",placeholder:"Password",required:!0})]}),e.jsx(t,{children:e.jsx("div",{children:e.jsx("button",{onClick:a=>p(a),className:"btn btn-primary btn-block",children:"Login"})})})]})})})})})})})})})},v=m(null,{authLogin:j})(b);export{v as default};