const hamburgerMenuList = document.querySelector(".hamburger_menu_list");
const hamburgerMenuBtn = document.querySelector(".hamburger_menu_btn");

hamburgerMenuBtn.addEventListener("click", () =>
{
    hamburgerMenuList.classList.toggle("active");
});