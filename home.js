const whiteKeys=Array.from(document.querySelectorAll(".Pkey"));
const blackKeys=Array.from(document.querySelectorAll(".subKey"));
const ball=document.querySelector(".ball");
let click=true;
const volumeController=document.querySelector(".volumeController");
const toggle=document.querySelector(".toggle");
const line=document.querySelector(".line");

volumeController.addEventListener("click",(e)=>{
    let d=e.clientX - e.target.offsetLeft;
    toggle.style.left=`${d}px`;
    line.style.width=`${d+3}px`;

})


ball.addEventListener("click",(e)=>{
    if(click){

        ball.style.left="30px";
        click=false;
        whiteKeys.forEach((key)=>{
            key.style.color="gray";
        });
        blackKeys.forEach((key)=>{
            key.style.color="gray";
        })
    }
    else{
        ball.style.left="3px";
        click=true;
        whiteKeys.forEach((key)=>{
            key.style.color="white";
        });
        blackKeys.forEach((key)=>{
            key.style.color="black";
        })
    }
   


})


whiteKeys.forEach((white)=>{
    white.addEventListener("click",()=>{
        white.style.backgroundColor="lightgray";
        setTimeout(()=>{
            white.style.backgroundColor="white";
        },150)
        
    })
})


blackKeys.forEach((black)=>{
    black.addEventListener("click",()=>{
        black.style.background="linear-gradient(black,black,black,rgb(63, 63, 63),rgb(63, 63, 63))";
        setTimeout(()=>{
            black.style.background="linear-gradient(rgb(63, 63, 63),black,black,black,black)";
        },150)
    })
})