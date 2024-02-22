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
  console.log(playerPressed);

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log("You get a point");

    // Update score:
    // 1. Get the current score

    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);

    // 2. Increase score by 1 point if you pressed the correct alphabet

    const nweScore = currentScore + 1;

    // 3. Show the updated goal

    currentScoreElement.innerText = nweScore;
    // Set new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } 
  
  else {
    console.log("You lose a point");

    // 1. Get the current life number

    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    console.log(currentLife);

    // 2. Lose a life if you pressed a wrong key
    const newLife = currentLife - 1;

    // 3. Display the updated life count

    currentLifeElement.innerText = newLife;
  }
}

// function keyboardKeyUpEvent(event) {
//   const playerPressed = event.key;
//   console.log("player pressed", playerPressed);
//   // Expected key to press
//   const currentAlphabetElement = document.getElementById("current-alphabet");
//   const currentAlphabet = currentAlphabetElement.innerText;
//   const expectedAlphabet = currentAlphabet.toLowerCase();
//   console.log(playerPressed, expectedAlphabet);

//   // Checked matched or not

//   if (playerPressed === expectedAlphabet) {
//     console.log("You get a point");
//   } else {
//     console.log("You lose a life");
//   }
// }

document.addEventListener("keyup", keyboardKeyUpEvent);

function continueGame() {
  //1. Generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log("Your Random Alphabet ", alphabet);
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
