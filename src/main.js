const openButton = document.getElementById("menu-opn-btn");
const openButtonSvg = document.getElementById("menu-opn-btn-svg");
const openButtonUse = document.getElementById("menu-opn-btn-use");
const closeButton = document.getElementById("menu-cls-btn");
const mobMenu = document.getElementById("menu-navigation");
const mobMenuItems = mobMenu.querySelectorAll("li");
const targetDiv = document.getElementById("mob-menu");


openButton.addEventListener("click", function() {
    targetDiv.classList.add("is-open");
});

closeButton.addEventListener("click", function() {
    targetDiv.classList.remove("is-open");
});


mobMenuItems.forEach(item => {
    item.addEventListener('click', function() {
    targetDiv.classList.remove("is-open");
    });
});

document.addEventListener("click", function () { 
    if (!mobMenu.contains(event.target) && event.target !== openButton && event.target !== openButtonSvg && event.target !== openButtonUse) { 
    targetDiv.classList.remove("is-open")
    }
});

