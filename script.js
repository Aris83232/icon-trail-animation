const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = yPos + "px";
    spanEl.style.top = xPos + "px";
    bodyEL.appendChild(spanEl);
})