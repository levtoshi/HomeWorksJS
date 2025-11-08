const btn = document.getElementById("enter-text-btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () =>
{
    let value = prompt("Enter text:");
    container.textContent = value;
});