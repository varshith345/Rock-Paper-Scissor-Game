let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const rIdx=Math.floor(Math.random()*3);
    return options[rIdx];
};
const draw=()=>{
    console.log("Game was Draw");
    msg.innerText="Game DRAWN. Play Again!";
    msg.style.background="black";
};
const showwin=(uwin,uc,cc)=>{
    if(uwin){
         console.log("You WIN!");
         msg.innerText=`You WON! Your ${uc} beats ${cc}`;
         msg.style.background="green";
         userscore++;
         userpara.innerText=userscore;
    }     
    else{
         console.log("You LOST!");
         msg.innerText=`You LOST! ${cc} beats your ${uc}`;
         msg.style.background="red";
         compscore++;
         comppara.innerText=compscore;
    }     
};
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice=gencompchoice();
    console.log("Comp choice = ",compchoice);
    let uwin=true;
    if(userchoice==compchoice) draw();
    else{
    if(userchoice=="rock"){
       uwin=compchoice=="scissors"?true:false;
    }
    else if(userchoice=="paper"){
        uwin=compchoice=="rock"?true:false;
     }
     else if(userchoice=="scissors"){
        uwin=compchoice=="paper"?true:false;
     }
     showwin(uwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});