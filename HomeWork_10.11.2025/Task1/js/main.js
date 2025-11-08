for (let i = 1; i <= 3; ++i)
{
    const container = document.getElementById(`container-${i}`);
    const btn = document.createElement("button");
    
    btn.classList.add("remove_btn");
    btn.textContent = "X";
    btn.addEventListener("click", () => 
    {
        container.remove();
    });

    container.firstElementChild.append(btn);
}