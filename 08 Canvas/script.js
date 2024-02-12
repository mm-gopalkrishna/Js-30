let canvasEl = document.getElementById("canvas");

let context = canvasEl.getContext("2d");

context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;

let endPointX = 0;
let endPointY = 0;
let isDrawing = false;
let hue = 0;
let direction = true;

function drawCanvas(e) {
  if (isDrawing === false) {
    return;
  }
  console.log(e);
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  context.beginPath();
  context.moveTo(endPointX, endPointY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  endPointX = e.offsetX;
  endPointY = e.offsetY;

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvasEl.addEventListener("mousemove", drawCanvas);
canvasEl.addEventListener("mousedown", (e) => {
  isDrawing = true;
  endPointX = e.offsetX;
  endPointY = e.offsetY;
});
canvasEl.addEventListener("mouseup", () => (isDrawing = false));
canvasEl.addEventListener("mouseout", () => (isDrawing = false));
