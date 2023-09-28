const container = document.querySelector('.container');
const body = document.querySelector('body')

const btn = document.createElement("button");
btn.textContent = "New Grid";
body.insertBefore(btn, container);

createStandardGrid();

let customGrid;

btn.addEventListener("click", () => {
    customGrid = parseInt(prompt("What's your desired number of squares?"));
    
    if (customGrid > 100) {
        alert('Max Number of Squares is 100')
    } 

    createCustomGrid(customGrid)
});

function createCustomGrid(gridSize) {
    let boxAmount = gridSize * gridSize;

    let boxSize = (400 / gridSize) + 'px';

    while (container.firstChild) container.removeChild(container.firstChild)

    for (i = 0; i < boxAmount; i++) {
      createBox()
    }

    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.setAttribute('style', `width: ${boxSize}; height: ${boxSize}`)
    })
}

function createStandardGrid() {
    for (i = 0; i < 256; i++){
        createBox()
    }
}

function createBox() {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
    div.addEventListener("mouseover", changeBoxColor);
}

function changeBoxColor(e) {
  e.target.style.backgroundColor = changeColor();
  console.log(e.target.className);
}

function changeColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}



