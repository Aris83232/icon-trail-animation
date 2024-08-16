const bodyEL = document.querySelector("body");

bodyEL.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");

    //For Position
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    //For random Size of the icon
    const size = Math.random()*100 + 25;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    //For deletion of the element after a set period of time
    bodyEL.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove()
    }, 3000)
})