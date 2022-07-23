let root = document.getElementById("root");
let reset_btn = document.getElementById("reset_btn");
let pen = document.getElementById("pen");

let isDrawing = false;

//Create the canvas
let canvas = document.createElement("canvas");

canvas.width = 500;
canvas.height = 500;

root.appendChild(canvas);


let ctx = canvas.getContext("2d");


//Add background color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

reset_btn.addEventListener("click", () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
});


pen.addEventListener("click", () => {
    pen.style = "background-color: green; color:white";
    isDrawing = true;
});



canvas.addEventListener("click", () => {
    console.log("Kclick");
})

canvas.addEventListener("mousedown", () => {
    console.log("clicking");
});

