const container = document.querySelector('.container');

let num = 256;

for (i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div)
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
}

