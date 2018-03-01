const container = document.getElementsByClassName("blocks");

const blocks = container[0];
const red = container[0].children[0];
const blue = container[0].children[1];
const green = container[0].children[2];
const pink = container[0].children[3];
const gray = container[0].children[4];

let redpos = 0;
let bluepos = 0;
let greenpos = 0;
let pinkpos = 0;
let graypos = 0;
const origin = 0;
const end = 480;

//let redmousedown = false;

blocks.style.width = '600px';


red.addEventListener('mousedown', (event) => {
  red.setAttribute('mousedown','true');
})
red.addEventListener("mouseup", (event) => {
  red.setAttribute('mousedown','false');
})
red.addEventListener("mouseleave", (event) => {
  red.setAttribute('mousedown','false');
})
blue.addEventListener('mousedown', (event) => {
  blue.setAttribute('mousedown','true');
})
blue.addEventListener('mouseup', (event) => {
  blue.setAttribute('mousedown','false');
})
blue.addEventListener('mouseleave', (event) => {
  blue.setAttribute('mousedown','false');
})
green.addEventListener('mousedown', (event) => {
  green.setAttribute('mousedown','true');
})
green.addEventListener('mouseup', (event) => {
  green.setAttribute('mousedown','false');
})
green.addEventListener('mouseleave', (event) => {
  green.setAttribute('mousedown','false');
})
pink.addEventListener('mousedown', (event) => {
  pink.setAttribute('mousedown','true');
})
pink.addEventListener('mouseup', (event) => {
  pink.setAttribute('mousedown','false');
})
pink.addEventListener('mouseleave', (event) => {
  pink.setAttribute('mousedown','false');
})
gray.addEventListener('mousedown', (event) => {
  gray.setAttribute('mousedown','true');
})
gray.addEventListener('mouseup', (event) => {
  gray.setAttribute('mousedown','false');
})
gray.addEventListener('mouseleave', (event) => {
  gray.setAttribute('mousedown','false');
})


const timerInterval = window.setInterval(() => {
changePosition();
moveBoxes();
},10);

function moveBoxes() {
  red.style.transform = `translate(${redpos}px)`;
  blue.style.transform = `translate(${bluepos}px)`;
  green.style.transform = `translate(${greenpos}px)`;
  pink.style.transform = `translate(${pinkpos}px)`;
  gray.style.transform = `translate(${graypos}px)`;
}

function changePosition() {
  if (red.getAttribute('mousedown') === 'true' && red.style.transform != `translate(${end}px)`) {
    redpos += 1;
  } else if (red.getAttribute('mousedown') === 'false' && red.style.transform != `translate(${origin}px)`) {
    redpos -= 1;
  }
  if (blue.getAttribute('mousedown') === 'true' && blue.style.transform != `translate(${end}px)`) {
    bluepos += 1;
  } else if (blue.getAttribute('mousedown') === 'false' && blue.style.transform != `translate(${origin}px)`) {
    bluepos -= 1;
  }
  if (green.getAttribute('mousedown') === 'true' && green.style.transform != `translate(${end}px)`) {
    greenpos += 1;
  } else if (green.getAttribute('mousedown') === 'false' && green.style.transform != `translate(${origin}px)`) {
    greenpos -= 1;
  }
  if (pink.getAttribute('mousedown') === 'true' && pink.style.transform != `translate(${end}px)`) {
    pinkpos += 1;
  } else if (pink.getAttribute('mousedown') === 'false' && pink.style.transform != `translate(${origin}px)`) {
    pinkpos -= 1;
  }
  if (gray.getAttribute('mousedown') === 'true' && gray.style.transform != `translate(${end}px)`) {
    graypos += 1;
  } else if (gray.getAttribute('mousedown') === 'false' && gray.style.transform != `translate(${origin}px)`) {
    graypos -= 1;
  }

}
