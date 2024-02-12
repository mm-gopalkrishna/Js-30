const checkboxNodeList = document.querySelectorAll("input[type=checkbox]");

let lastNode;
let inBetween = false;
function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    checkboxNodeList.forEach((node) => {
      if (node === this || node === lastNode) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        node.checked = true;
      }
    });
  }

  lastNode = this;
}

checkboxNodeList.forEach((node) => {
  node.addEventListener("click", handleCheck);
});
