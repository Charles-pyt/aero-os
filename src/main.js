import './style.css';

const clockElement = document.querySelector("#sys-clock")

const updateClock = () => {
  const now = new Date();
  const timeString = now.toTimeString().split(' ')[0];
  clockElement.textContent = timeString;
};

setInterval(updateClock, 1000);
updateClock();