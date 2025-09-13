let container = document.querySelector(".container");
let changeGridBtn = document.querySelector(".changeGrid");
let gridTotal = 256;

for(let i=0; i<256; i++){
    let newGrid = document.createElement("div");
    newGrid.className = "grid"
    container.appendChild(newGrid);
}
container.style.width = `${16*20}px`

let containerChildren = container.childNodes;
containerChildren.forEach((child)=>{
    child.addEventListener("mouseover", (e)=>{
        e.target.style.backgroundColor="red";
    })
})

changeGridBtn.addEventListener("click", ()=>{
    let userResult = prompt("Please tell us how much grids do you want, it must be less than 100 or else we will default the grid to 16 by 16");
    if (userResult > 100){
        userResult = 16;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let userResultTotal = userResult * userResult;
    for(let i=0; i<userResultTotal; i++){
        let newGrid = document.createElement("div");
        newGrid.className = "grid"
        container.appendChild(newGrid);
    }
    container.style.width = `${userResult*20}px`
    containerChildren.forEach((child)=>{
    child.addEventListener("mouseover", (e)=>{
        e.target.style.backgroundColor="red";
    })
})
})

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", ()=>{
    containerChildren.forEach((child)=>{
        child.style.backgroundColor = "white";
    })
})

