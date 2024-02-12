const panelsNodeList = document.querySelectorAll(".panel");
const panelsList = [...panelsNodeList];

for (let eachPanel of panelsList) {
  eachPanel.addEventListener("click", function () {
    eachPanel.classList.toggle("open");
    eachPanel.classList.toggle("active-slide");
  });
}
