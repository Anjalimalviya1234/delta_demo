let gameseq = [];
let userseq = [];
let btns=["yellow","red","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});
function gameflash(btn){
   btn.classList.add("flash") ;
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);

    
}
function userflash(btn){
    btn.classList.add("userflash") ;
    setTimeout(function(){
     btn.classList.remove("userflash");
    },250);
 
     
 }
function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`; 
    let  randinx=Math.floor(Math.random()*3);
    let randcolor=btns[randinx];
    let randbtn= document.querySelector(`.${randcolor}`);
    // console.log(randinx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
console.log(gameseq);
    //random button choose karega
    gameflash(randbtn);

}
function checkAns(idx)
{
console.log("current level:",level) ;
if(userseq[idx]=== gameseq[idx])
{
   if(userseq.length==gameseq.length)
   {
    setTimeout(levelup,1000);
   }
}
else{
    h2.innerHTML = `game over:  your score was <b>${ level}</b> <br>press any key to start.`; 
  document.querySelector("body").style.backgroundcolor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundcolor="white";
  });
    reset();

}

}

function btnpress()
{
  console.log(this);
let btn=this;
userflash(btn);
usercolor=btn.getAttribute("id");
userseq.push(usercolor);

checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    started=false;
    gameseq=[];
    usercolor=[];
    level=0;
}