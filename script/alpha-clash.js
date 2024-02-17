// function play() {
//   //step1: hide the home screen. to hide the home screen add the class  hidden ti the home screen

//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   console.log(homeSection.classList);

//   //show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   //   console.log(playGroundSection.classList);
//   playGroundSection.classList.remove("hidden");
// }

function continueGame() {
  //step1: gererate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet", alphabet);
  //set randomly generated alphabet to the screen (display it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
