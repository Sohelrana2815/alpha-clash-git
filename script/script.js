// function playNow() {
//   // 1. Hide the home-screen section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // 2. Show the playgroun section
//   const playGround = document.getElementById("play-ground");
//   console.log(playGround.classList);
//   playGround.classList.remove("hidden");
// }

function playNow() {
  hideElementById("home-screen");
  showElementById("play-ground");
}
