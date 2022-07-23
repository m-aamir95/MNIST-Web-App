let root = document.getElementById("root");

//Create the canvas
let canvas = document.createElement("canvas");

canvas.width = 500;
canvas.height = 500;

root.appendChild(canvas);


let ctx = canvas.getContext("2d");


ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


