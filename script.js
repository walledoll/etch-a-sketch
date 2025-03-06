function createGrid(gridSize, container) {
  const containerSize = 700;
  const cellSize = containerSize / gridSize;
  container.style.height = `${containerSize}px`;
  container.style.width = `${containerSize}px`;

  for (let i = 0; i < Math.pow(gridSize, 2); ++i) {
    const cell = document.createElement("div");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.className = "cell";
    container.append(cell);
  }
}

function getGrid() {
  return Number(inputDim.value);
}
const menu = document.querySelector(".menu");

const container = document.querySelector(".container");


const buttonSub = document.createElement("button");
menu.appendChild(buttonSub);

const inputDim = document.createElement("input");
menu.appendChild(inputDim);
buttonSub.textContent = "Set Grid";
inputDim.type = "number";
inputDim.placeholder = "Enter grid size";
inputDim.min = 1;
inputDim.max = 100;
inputDim.value = 16;

const GridSize = getGrid();
createGrid(+inputDim.value, container);

document.addEventListener("dragstart", (event) => event.preventDefault());

buttonSub.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(+inputDim.value, container);
});



container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = "rgb(0,0,0)";
  }
});

const delButton = document.createElement("button");
menu.appendChild(delButton);
delButton.textContent = "Clear grid";

delButton.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(+inputDim.value, container);
});

const setRgb = document.createElement("button");
menu.appendChild(setRgb);
setRgb.textContent = "setRGB";
setRgb.addEventListener("click", (event)=>{
  container.addEventListener("mousemove", (event) => {
    if(event.target.classList.contains("cell")){
      event.target.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    }
  });
})

const setBlack = document.createElement("button");
menu.appendChild(setBlack);
setBlack.textContent = "setBlack";
setBlack.addEventListener("click", (event)=>{
  container.addEventListener("mousemove", (event) => {
    if(event.target.classList.contains("cell")){
      event.target.style.backgroundColor = "rgb(0,0,0)";
    }
  });
})

const erase = document.createElement("button");
menu.appendChild(erase);
erase.textContent = "Erase";
erase.addEventListener("click", (event)=>{
  container.addEventListener("mousemove", (event) => {
    if(event.target.classList.contains("cell")){
      event.target.style.backgroundColor = "rgb(255,255,255)";
    }
  });
})
