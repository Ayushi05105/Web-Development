let x=document.getElementById("1st");

x.addEventListener("mouseenter",function(){
    let r =Math.floor(Math.random()*100);

    x.innerHTML =`<h1>${r}</h1>`;
})

x.addEventListener("mouseleave",function(){
    
    x.innerHTML = "<h1>1</h1>";
})

let y=document.getElementById("2nd");

let clr="green"

y.addEventListener("mouseenter",function(){
if(clr=="green"){
    y.style.backgroundColor="green";
    clr="red";
}    
else //color==red
{
    y.style.backgroundColor="red";
    clr="green";

}
})

y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})

//rgb(a,b,c) where a,b,c lies b/w 0 to 255
 let z=document.getElementById("3rd");
 z.addEventListener("mouseenter",function(){
    let r1 =Math.floor(Math.random()*256);
    let r2 =Math.floor(Math.random()*256);
    let r3 =Math.floor(Math.random()*256);

    z.style.backgroundColor=`rgb(${r1} ${r2} ${r3})`;
      
 })

 z.addEventListener("mouseleave",function(){
      z.style.backgroundColor="white";
 })


 let a=document.getElementById("4th");
 a.addEventListener("click",function(){
    let r1 =Math.floor(Math.random()*256);
    let r2 =Math.floor(Math.random()*256);
    let r3 =Math.floor(Math.random()*256);


    x.style.backgroundColor=`rgb(${r1} ${256} ${256})`;
    y.style.backgroundColor=`rgb(${256} ${r2} ${256})`;
    z.style.backgroundColor=`rgb(${256} ${256} ${r3})`;

 })


a.addEventListener("mouseleave",function(){
        a.style.backgroundColor="white";
     })







