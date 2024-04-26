const container = document.querySelector("#container");

const row = 16;
const column = 16;


for(let i = 0; i<row;i++){
    for(let j = 0; j<column; j++)
    {
        gridItem = document.createElement("div");
        gridItem.classList.add("box");
        container.appendChild(gridItem);
        
        
    }
}
const grid = document.querySelectorAll('.box');
grid.forEach(el => el.addEventListener('mouseenter',(event) => {
     
    event.target.setAttribute("style", "background: red;")
}));


