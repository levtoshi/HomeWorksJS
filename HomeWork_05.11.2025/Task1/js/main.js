// 1
const btn = document.getElementById("add-element-btn");
btn.addEventListener("click", () =>
{
    const container = document.querySelector(".container");
    const newDiv = document.createElement("div");
    newDiv.style.background = "red";
    newDiv.style.height = "70px";
    newDiv.style.width = "700px";
    container.append(newDiv);
});