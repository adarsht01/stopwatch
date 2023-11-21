const hour=document.querySelector(".hour");
const minute=document.querySelector(".minute");
const second=document.querySelector(".second");
const milisecond=document.querySelector(".milisecond");
const start=document.querySelector(".start");
const stop=document.querySelector(".stop");
const reset=document.querySelector(".reset");

let count=0;
let id;
let secondCount=0;
    let minuteCount=0;
    let hourCount=0;
const startWatch=()=>{
    
    id=setInterval(() => {
        //milisecond.innerText=count;
        
        secondCount++;
        second.innerText=String(secondCount).padStart(2,"0");
        if(secondCount>59)
        {
            minuteCount++;
            minute.innerText=String(minuteCount).padStart(2,"0");
            secondCount=0;
        }
        if(minuteCount>59)
        {
            hourCount++;
            hour.innerText=String(hourCount).padStart(2,"0");
            minuteCount=0;
        }
    }, 1000);
}
const stopWatch=()=>{
    clearInterval(id);
}
start.addEventListener("click",startWatch);
stop.addEventListener("click",stopWatch);
reset.addEventListener("click",()=>{
    secondCount=0;
    minuteCount=0;
    hourCount=0;
    stopWatch();
    second.innerText=String(secondCount).padStart(2,"0");
    minute.innerText=String(minuteCount).padStart(2,"0");
    hour.innerText=String(hourCount).padStart(2,"0");
})