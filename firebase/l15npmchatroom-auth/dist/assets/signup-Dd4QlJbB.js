import{A as o}from"./authorize-C8DgjCij.js";/* empty css             */const r=document.getElementById("signupform");r.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("fullname").value.trim(),m=document.getElementById("email").value.trim(),n=document.getElementById("password").value.trim();o().registerUser(t,m,n)});
