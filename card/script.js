var main = document.getElementById("main");
let arr =
["https://i.pinimg.com/736x/6b/5a/f3/6b5af3b449bc1ae65296878f63b226ac.jpg",
"https://i.pinimg.com/736x/09/88/cd/0988cd9b6a30240bde07fc610d74fb67.jpg",
"https://i.pinimg.com/736x/3a/ef/a4/3aefa4e5b64532c49432413b3921fd9a.jpg",
"https://i.pinimg.com/736x/87/6e/40/876e40af3640cf3ecd07022a6e103c1b.jpg",
"https://i.pinimg.com/736x/f1/f1/90/f1f1906b669c0b7f93e6ab725d64a27a.jpg",
"https://i.pinimg.com/736x/4d/fc/68/4dfc68e9d3050bb4feb592f877b857bb.jpg",
"https://i.pinimg.com/736x/ad/05/b7/ad05b75b1d33cf964de88f98c8c3ec13.jpg",
"https://i.pinimg.com/736x/cf/15/73/cf1573352bfb7ddd9d1488cec10a14fe.jpg"
];
let s="";
for(let i=1;i<=65;i++){
   let r=Math.floor(Math.random()*7);
   s+=`<div class="card"><h1><img src=${arr[r]}></div>`;
}
main.innerHTML = s;



