// function playNow() {
//   // 1. Hide the home-screen section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // 2. Show the playground section
//   const playGround = document.getElementById("play-ground");
//   console.log(playGround.classList);
//   playGround.classList.remove("hidden");
// }

function keyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);
  // Expected key to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // Checked matched or not

  if (playerPressed === expectedAlphabet) {
    console.log("You get a point");
  } else {
    console.log("You lose a life");
  }
}

document.addEventListener("keyup", keyboardKeyUpEvent);

function continueGame() {
  //1. Generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your Random Alphabet ", alphabet);
  //2. Show the random Alphabet to the screen

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function playNow() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
