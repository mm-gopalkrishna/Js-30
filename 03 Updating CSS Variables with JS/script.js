const spacingEl = document.querySelector(".spacing");
const blurEl = document.querySelector(".blur");
const colorEl = document.querySelector(".color");
const jsTextEl = document.querySelector(".js-text");
const imgContainerEl = document.querySelector(".img-container");
const imageEl = document.querySelector(".image");

spacingEl.addEventListener("input", function (e) {
  console.log(e.target.value);
  imgContainerEl.style.padding = `${e.target.value}px`;
});

blurEl.addEventListener("input", function (e) {
  const blur = `${e.target.value}px`;
  imageEl.style.filter = `blur(${blur})`;
});

colorEl.addEventListener("input", function (e) {
  jsTextEl.style.color = e.target.value;
  imgContainerEl.style.backgroundColor = e.target.value;
});
