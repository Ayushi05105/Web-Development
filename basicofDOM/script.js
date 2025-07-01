let x=document.querySelector("h1");
x.addEventListener("click",function(){
    x.style.color ="pink";
    x.style.fontFamily="Gill Sans";
    x.style.backgroundColor ="red";
} )


let y=document.querySelector("h2");
setTimeout(function( ){
    y.innerHTML="changed now";
},2*1000);
