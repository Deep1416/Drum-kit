let number = document.querySelectorAll(".drum").length;

//Detecting button

for (let i = 0; i < number; i++) {
  let btn = document.querySelectorAll(".drum")[i];
  btn.addEventListener("click", () => {
    let btnsound = btn.innerHTML;
    makeSound(btnsound);
    buttonAnimation(btnsound);
  });
}

// Detecting sound
let key = document.addEventListener("keypress", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(btnsound);
      break;
  }
}

function buttonAnimation(currentKey) {
  let aniButton = document.querySelector("." + currentKey);
  aniButton.classList.add("pressed");
  setTimeout(() => {
    aniButton.classList.remove("pressed");
  }, 2500);
}
