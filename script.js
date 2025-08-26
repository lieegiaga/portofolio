// Simple typing effect for title (optional)
const title = document.querySelector("h1");
const cursor = document.querySelector(".cursor");

let fullText = "I Am Web Designer";
let currentText = "";
let index = 0;

function type() {
  if (index < fullText.length) {
    currentText += fullText.charAt(index);
    title.innerHTML = currentText + '<span class="cursor">|</span>';
    index++;
    setTimeout(type, 100);
  }
}
type();
