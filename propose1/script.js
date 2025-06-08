// setTimeout(() => {
//   document.querySelector("#btnDivContainer").style.display = "grid";
// }, 1000);

const playBtn = document.querySelector("#play");

playBtn.addEventListener("click", () => {
  playBtn.closest("#btnDivContainer").style.display = "none";
  const video = document.querySelector("#video");
  const song = document.querySelector("#song");

  video.play();
  song.play();

  setTimeout(() => {
    document.querySelector(".graphicContainer>.inner").style.backgroundImage =
      "url('heart2.gif')";
  }, 4000);

  setTimeout(() => {
    document.querySelector("#heartDiv").style.display = "block";
  }, 5000);
});
