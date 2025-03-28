const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      
    } else {
      menu.classList.add("showMenu");
      
    }
  }

menuButton.addEventListener("click", toggleMenu);