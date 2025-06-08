document.querySelector("#play").addEventListener("click", () => {
  const video = document.querySelector("#video");
  const song = document.querySelector("#song");
  video.play();
  song.play();
  
  setTimeout(() => {
    document.querySelector(".mainContainer").style.backgroundImage =
      "url('heartsGif.gif')";
  }, 4000);

  setTimeout(() => {
    document.querySelector("#heartDiv").style.display = "grid";
  }, 5000);
});
