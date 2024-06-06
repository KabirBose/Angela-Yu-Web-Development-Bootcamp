// sounds
const crash = new Audio("./sounds/crash.mp3");
const kickBass = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");

const drums = document.querySelectorAll(".drum");

window.addEventListener("keydown", (e) => {
  if (e.key === "w") crash.play();
  else if (e.key === "a") kickBass.play();
  else if (e.key === "s") snare.play();
  else if (e.key === "d") tom1.play();
  else if (e.key === "j") tom2.play();
  else if (e.key === "k") tom3.play();
  else if (e.key === "l") tom4.play();
});

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    if (drum.innerHTML === "w") crash.play();
    else if (drum.innerHTML === "a") kickBass.play();
    else if (drum.innerHTML === "s") snare.play();
    else if (drum.innerHTML === "d") tom1.play();
    else if (drum.innerHTML === "j") tom2.play();
    else if (drum.innerHTML === "k") tom3.play();
    else if (drum.innerHTML === "l") tom4.play();
  });
});
