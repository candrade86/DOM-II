const container = document.getElementsByClassName("blocks");

const red = container[0].children[0];
const blue = container[0].children[1];
const green = container[0].children[2];
const pink = container[0].children[3];
const grey = container[0].children[4];



red.addEventListener("click", (event) => {
    
    red.style.order = "-1";
    blue.style.order = "0";
    green.style.order = "0";
    pink.style.order = "0";
    grey.style.order = "0";
    
  });
  
  blue.addEventListener("click", (event) => {
    
        blue.style.order = "-1";
        red.style.order = "0";
        green.style.order = "0";
        pink.style.order = "0";
        grey.style.order = "0";
        
  });
  
  green.addEventListener("click", (event) => {
    blue.style.order = "0";
    red.style.order = "0";
    green.style.order = "-1";
    pink.style.order = "0";
    grey.style.order = "0";
  });

  pink.addEventListener("click", (event) => {
    blue.style.order = "0";
    red.style.order = "0";
    green.style.order = "0";
    pink.style.order = "-1";
    grey.style.order = "0";
  });
  
  grey.addEventListener("click", (event) => {
    blue.style.order = "0";
    red.style.order = "0";
    green.style.order = "0";
    pink.style.order = "0";
    grey.style.order = "-1";
  });

 


// containerement's inline style attribute..addEventListener("click", (event) => {
//     if(event.color === "black") {
//         console.log(black);
//     }
// })

// blue.addEventListener("click", (event) => {
//     event.color = "black";
// }) 

