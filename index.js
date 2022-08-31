//****Button Events****//
const matches = document.querySelectorAll(".drum");
for (let i = 0; i < matches.length; i++) {
  matches[i].addEventListener("click", letter);
  function letter() {
    const btnInnerHtml = this.innerHTML;
    makeSound(btnInnerHtml);
    btnAnimation(btnInnerHtml);
  }
}

//****PressKey Events****//
document.addEventListener("keypress", (e) => {
  makeSound(e.key);
  btnAnimation(e.key);
});

function makeSound(key) {
  var wAudio = new Audio("sounds/crash.mp3");
  var aAudio = new Audio("sounds/kick-bass.mp3");
  var sAudio = new Audio("sounds/snare.mp3");
  var dAudio = new Audio("sounds/tom-1.mp3");
  var jAudio = new Audio("sounds/tom-2.mp3");
  var kAudio = new Audio("sounds/tom-3.mp3");
  var lAudio = new Audio("sounds/tom-4.mp3");

  switch (key) {
    case "w":
      wAudio.play();
      break;
    case "a":
      aAudio.play();
      break;
    case "s":
      sAudio.play();
      break;
    case "d":
      dAudio.play();
      break;
    case "j":
      jAudio.play();
      break;
    case "k":
      kAudio.play();
      break;
    case "l":
      lAudio.play();
      break;
    default:
      alert("click button or press key to play");
  }
}

function btnAnimation(currentKey) {
  const activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 120);
}
