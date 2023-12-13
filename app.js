let changeColor = document.querySelector(".change-color");
let string = "1234567890ABCDEF";

function randomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += string[Math.floor(Math.random() * 16)];
  }

  console.log(color);
  changeColor.style.backgroundColor = color;
}
randomColor();

let box = document.querySelector(".box");
let bars = document.querySelector(".bars");
let circle = document.querySelector(".circle");
let value = document.querySelector(".value");
let button = document.querySelector(".button");
let success = document.querySelector(".success");
function progressBar() {
  let progressStartValue = 0;
  let progressEndValue = 99;
  let speed = 100;
  let progress = setInterval(() => {
    if (progressStartValue <= progressEndValue) {
      value.style.display = `block`;
      success.style.display = `none`;
      progressStartValue++;

      box.style.background = `conic-gradient(green  ${
        progressStartValue * 3.6
      }deg, white 0deg)`;

      value.innerHTML = `${progressStartValue}%`;
      bars.style.width = `${progressStartValue}%`;
    } 
    else {
      clearInterval(progress);
      value.style.display = `none`;
      success.style.display = `block`;
      changeColor.style.backgroundImage = `url('javascript/images/gif.gif')`;
    }
  }, speed);
}
