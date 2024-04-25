const container = document.querySelector("#container");

const row = 16;
const column = 16;

for(let i = 0; i<row;i++){
    for(let j = 0; j<column; j++)
    {
        const gridItem = document.createElement("div");
        container.appendChild(gridItem);
    }
}

