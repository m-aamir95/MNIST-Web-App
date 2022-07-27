let root = document.getElementById("root");

let reset_btn = document.getElementById("reset_btn");
let pen_btn = document.getElementById("pen");
let eraser_btn = document.getElementById("eraser");
let send_btn = document.getElementById("send");

let isMousePressed = false;
let isEraser = false;
let isPen = false;

//Create the canvas
let canvas = document.createElement("canvas");

canvas.width = 500;
canvas.height = 500;

root.appendChild(canvas);


let ctx = canvas.getContext("2d");


//Add background color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Html button event listeners

reset_btn.addEventListener("click", () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    isPen = false;
    pen_btn.style = "background-color: brown; color:white";
});


pen_btn.addEventListener("click", () => {

    if (!isPen) {
        pen_btn.style = "background-color: green; color:white";
        isPen = true;
    } else {
        pen_btn.style = "background-color: brown; color:white";
        isPen = false;
    }
    
});

eraser_btn.addEventListener('click', () => {
    isEraser = !isEraser;
    isPen = false;

    pen_btn.style = "background-color: brown; color:white";
});

send_btn.addEventListener("click", () => {
    
    const canvas_data = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const canvas_grayscale_data = [];
    for (let i = 0; i < canvas_data.data.length; i += 4){
        

        //Extracting different channels of the pixel
        const r = canvas_data.data[i];
        const g = canvas_data.data[i + 1];
        const b = canvas_data.data[i + 2];
        
        const avg_color = (r + g + b) / 3;
        canvas_grayscale_data.push(avg_color);
    }

    console.log(canvas_data.data);
    console.log(canvas_grayscale_data);

});
//#############################


//SRGB













//Is fired when click is lifted
canvas.addEventListener("click", () => {
    isMousePressed = false;
});

//Is fired when the click is pressed
canvas.addEventListener("mousedown", () => {
    isMousePressed = true;
});

//Is fired when mouse moves
canvas.addEventListener("mousemove", (evt) => {
    
    if (isMousePressed && isPen) {

        const canvasBoundingBox = canvas.getBoundingClientRect();

        //TODO; exact reason of why this works is not clear
        const x = evt.clientX - canvasBoundingBox.left;
        const y = evt.clientY - canvasBoundingBox.top;
        
        ctx.strokeStyle = "white";
        ctx.lineWidth = 6;
        ctx.strokeRect(x, y, 1, 1);
    } else if (isMousePressed && isEraser) {
        
        const canvasBoundingBox = canvas.getBoundingClientRect();

        //TODO; exact reason of why this works is not clear
        const x = evt.clientX - canvasBoundingBox.left;
        const y = evt.clientY - canvasBoundingBox.top;
        
        ctx.strokeStyle = "black";
        ctx.lineWidth = 6;
        ctx.strokeRect(x, y, 3, 3);
    }

})

