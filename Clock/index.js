const hoursEl=document.querySelector(".hours");
const minutesEl=document.querySelector(".minutes");
const secondsEl=document.querySelector(".seconds");

console.log(hoursEl);

function updateClock() {
    const currentDate = new Date();
    // setTimeout(updateClock, 1000);
    // console.log(currentDate);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
  
    const hourDeg = (hour / 12) * 360;
    hoursEl.style.transform = `rotate(${hourDeg}deg`;

    const minuteDeg = (minute / 60) * 360;
    minutesEl.style.transform = `rotate(${minuteDeg}deg`;

    const secondDeg = (second / 60) * 360;
    secondsEl.style.transform = `rotate(${secondDeg}deg`;
    
  
    //console.log(hour, minute, second);
  }
  
  setInterval(updateClock,1000)
