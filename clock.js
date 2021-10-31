const clock = document.querySelector(".clock");
function gettime() {
  const time = new Date();
  const hour = time.getHours();
  const mintues = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    mintues < 10 ? `0${mintues}` : mintues
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
setInterval(gettime, 1000);
gettime();
