const btn = document.getElementById("hide-btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () =>
{
    container.classList.toggle("hide");
});