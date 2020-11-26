// Getting the CANVAS Via DOM
canvas = document.getElementById("canvas");
// Getting the Reference For the CANVAS
ctx = canvas.getContext("2d");
// Car 1 Properties
car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;
// Car 2 Properties
car2Width = 120;
car2Height = 70;
car2Image = "car1.png";
car2X = 10;
car2Y = 100;
// Background Image
backgroundImg = "racing.jpg";

function add() {
  // Background
  backgroundImgTag = new Image();
  backgroundImgTag.onload = uploadBg;
  backgroundImgTag.src = backgroundImg;
  // Car 1
  car1ImgTag = new Image();
  car1ImgTag.onload = uploadcar1;
  car1ImgTag.src = car1Image;
  // Car 2
  car2ImgTag = new Image();
  car2ImgTag.onload = uploadcar2;
  car2ImgTag.src = car2Image;
}
// Functions
function uploadBg() {
  ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
  ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}

function uploadcar2() {
  ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}
// Event Listeners And their Functions
window.addEventListener("keydown", function keyPress(e) {
  keyPressed = e.keyCode;
  if (keyPressed == "38") {
    car1Up();
  }
  if (keyPressed == "40") {
    car1Down();
  }
  if (keyPressed == "37") {
    car1Left();
  }
  if (keyPressed == "39") {
    car1Right();
  }
  if (keyPressed == "87") {
    car2Up();
  }
  if (keyPressed == "85") {
    car2Up();
  }
  if (keyPressed == "65") {
    car2Left();
  }
  if (keyPressed == "83") {
    car2Down();
  }
  if (keyPressed == "68") {
    car2Right();
  }
  if (car1X > 500) {
    var won = document.getElementById("won");
    won.innerHTML = "Car 1 Won!!";
  }
  if (car2X > 500) {
    var won = document.getElementById("won");
    won.innerHTML = "Car 2 Won!!";
  }
});

// Car 1 Up Function
function car1Up() {
  if (car1Y >= 0) {
    car1Y = car1Y - 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 1 Down Function
function car1Down() {
  if (car1Y <= 500) {
    car1Y = car1Y + 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 1 Left Function
function car1Left() {
  if (car1X >= 0) {
    car1X = car1X - 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 1 Right Function
function car1Right() {
  if (car1X <= 500) {
    car1X = car1X + 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 2 Up Function
function car2Up() {
  if (car2Y >= 0) {
    car2Y = car2Y - 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 2 Down Function
function car2Down() {
  if (car2Y <= 500) {
    car2Y = car2Y + 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 2 Left Function
function car2Left() {
  if (car2X >= 0) {
    car2X = car2X - 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}

// Car 2 Right Function
function car2Right() {
  if (car2X <= 500) {
    car2X = car2X + 10;
    uploadBg();
    uploadcar1();
    uploadcar2();
  }
}
