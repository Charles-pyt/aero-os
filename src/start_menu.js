export const initStartMenu = () => {
  const startBtn = document.querySelector("#start-btn");
  const startMenu = document.querySelector("#start-menu");

  // 1. Ouverture/Fermeture du menu Démarrer
  startBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (startMenu.style.display === "block") {
      startMenu.style.display = "none";
    } else {
      startMenu.style.display = "block";
    }
  });

  // 2. Fermeture si on clique en dehors
  document.addEventListener("click", () => {
    if (startMenu) {
      startMenu.style.display = "none";
    }
  });

  // Empêcher la fermeture si on clique à l'intérieur du menu
  startMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 3. Gestion de l'ouverture des applications depuis le menu
  let menuZIndex = 50; // Compteur local pour les fenêtres ouvertes via le menu

  const setupAppShortcut = (menuId, winId, tabId) => {
    const menuItem = document.querySelector(menuId);
    const win = document.querySelector(winId);
    const tab = document.querySelector(tabId);

    if (menuItem && win && tab) {
      menuItem.addEventListener("click", () => {
        win.style.display = "block";
        tab.style.display = "block";
        tab.classList.add("active");
        
        menuZIndex++;
        win.style.zIndex = menuZIndex;
        
        // Ferme le menu après le clic sur l'app
        startMenu.style.display = "none";
      });
    }
  };

  // On associe chaque élément du menu à son application
  setupAppShortcut("#menu-archive", "#win-archive", "#tab-archive");
  setupAppShortcut("#menu-iss", "#win-iss", "#tab-iss");
};