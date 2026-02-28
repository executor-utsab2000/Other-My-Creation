const startBtn = document.querySelector("#startBtn");
const introPage = document.querySelector("#introPage");
const proposalSection = document.querySelector("#proposalSection");

const video = document.querySelector("#video");
const song = document.querySelector("#song");
const finalQuestion = document.querySelector("#finalQuestion");


startBtn.addEventListener("click", () => {

  introPage.style.opacity = "0";

  setTimeout(() => {
    introPage.style.display = "none";
    proposalSection.style.display = "block";

    video.play();
    song.play();

    // Add heart background (NO REPEAT)
    setTimeout(() => {
      const inner = document.querySelector(".graphicContainer > .inner");
      inner.style.backgroundImage = "url('heart2.gif')";
      inner.style.backgroundRepeat = "no-repeat";
      inner.style.backgroundPosition = "center";
      inner.style.backgroundSize = "contain";
    }, 4000);

    // Show floating heart gif
    setTimeout(() => {
      document.querySelector("#heartDiv").style.display = "block";
      document.querySelector("#heartDiv").classList.add("show");
    }, 5000);

    // Show final question
    setTimeout(() => {
      finalQuestion.classList.add("show"); 
    }, 8000);

  }, 600);
});