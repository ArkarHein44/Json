import{A as n}from"./authorize-lK45T0jY.js";import{f as p}from"./format-DrZ85exl.js";/* empty css             */function a(e){return{userInfoEle:o=>{const i=o.uid,s=o.email,r=o.displayName,l=o.photoURL,c=o.metadata.creationTime,m=p(new Date(c),"do MMM yyyy"),u=`
        
            <img src="${l}" alt="profile icon" width="80" />
            <p>UID : ${i}</p>
            <p>Display Name : ${r}</p>
            <p>Email : ${s}</p>
            <p>Create At : ${m}</p>

        `;e.innerHTML=u}}}const f=document.getElementById("userinfo"),d=document.getElementById("logoutbtn"),g=n(),y=a(f);g.getUser(e=>{console.log(e),y.userInfoEle(e)});d.addEventListener("click",e=>{const{logoutUser:t}=n();t()});
