const container = document.querySelector("#container");
let size = 16;

function createBook(){
    container.innerHTML = ""; 
       
for(let i = 0; i<size;i++){
    
    let gridItem = document.createElement("div");
    gridItem.classList.add("row");
    container.appendChild(gridItem);
    


    for(let j = 0; j<size; j++)
    {
       
        let vertical = document.createElement("div");
        vertical.classList.add("box");
        gridItem.appendChild(vertical);
        
    }
}

let grid = document.querySelectorAll('.box');
grid.forEach(el => el.addEventListener('mouseenter',(event) => {
     
    event.target.setAttribute("style", "background: black;")
}));
};

createBoxes();

const but = document.querySelector("button");
but.addEventListener('click', () =>{
    let newGrid = prompt('Select the number of squares per side');
    if(newGrid > 100)
       alert("A maximum of 100 is allowed");
    else{
         size = Number(newGrid);
         createBoxes();
    }    
})