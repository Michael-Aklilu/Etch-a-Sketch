const container = document.querySelector("#container");
let row = 16;
let column = 16;

function createBook(){
    container.innerHTML = ""; 
       
for(let i = 0; i<row;i++){
    
    let gridItem = document.createElement("div");
    gridItem.classList.add("row");
    container.appendChild(gridItem);
    


    for(let j = 0; j<column; j++)
    {
       
        let vertical = document.createElement("div");
        vertical.classList.add("box");
        gridItem.appendChild(vertical);
        
    }
}

let grid = document.querySelectorAll('.box');
grid.forEach(el => el.addEventListener('mouseenter',(event) => {
     
    event.target.setAttribute("style", "background: red;")
}));
};

createBook();

const but = document.querySelector("button");
but.addEventListener('click', (event) =>{
    let newGrid = prompt('Select the number of squares per side');
    if(newGrid > 100)
       alert("A maximum of 100 is allowed");
    else{
         row = Number(newGrid);
         column = Number(newGrid);
         console.log(row);
         createBook();
    }    
})