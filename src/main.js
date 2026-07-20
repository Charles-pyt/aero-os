import './style.css';

const clockElement = document.querySelector("#sys-clock")

const updateClock = () => {
  const now = new Date();
  const timeString = now.toTimeString().split(' ')[0];
  clockElement.textContent = timeString;
};

setInterval(updateClock, 1000);
updateClock();

const winWelcome = document.querySelector("#win-welcome");
const closeBtnWelcome = winWelcome.querySelector(".window-close-btn");
const tabWelcome = document.querySelector("#running-apps .taskbar-app-tab");


// Open and close Windows func
// Open Window
const closeWindow = (win, tab) => {
  win.style.display = "none";
  if (tab) tab.classList.remove("active");
};
// Close Window
const openWindow = (win, tab) => {
  win.style.display = "block";
  if (tab) tab.classList.add("active");
};

closeBtnWelcome.addEventListener("click", () => {
  closeWindow(winWelcome, tabWelcome);
})
tabWelcome.addEventListener("click", () => {
  if (winWelcome.style.display === "none")  {
    highestZIndex++;
    winWelcome.style.zIndex = highestZIndex
  } else {
    closeWindow(winWelcome, tabWelcome)
  }
});

// Draggable Window
const windows = document.querySelectorAll('.window');
let highestZIndex = 10;

windows.forEach(win => {
  const header = win.querySelector('.window-header');

  let isDragging= false;
  let offsetX = 0;
  let offsetY = 0;

  win.addEventListener('mousedown', () => {
    highestZIndex++;
    win.style.zIndex = highestZIndex;
  });

  header.addEventListener('mousedown', (e) => {
    // Si on clique sur le bouton de fermeture, on ne doit pas déclencher le drag
    if (e.target.classList.contains('window-close-btn')) return;

    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    
    header.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;
    
    win.style.left = `${newX}px`;
    win.style.top = `${newY}px`;
  });

  // Fin du glissement
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      header.style.cursor = 'grab';
      document.body.style.userSelect = '';
    }
  });
});

// Archive Icon Selection
const iconArchive = document.querySelector("#icon-archive");

iconArchive.addEventListener("click", (e) => {
  e.stopPropagation(); // Évite que le clic soit intercepté par le bureau
  iconArchive.classList.toggle("selected");
});

document.addEventListener("click", () => {
  iconArchive.classList.remove("selected");
});