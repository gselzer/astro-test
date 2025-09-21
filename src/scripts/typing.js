// Typing effect for animated paragraph
const greetings = ["Hi, I'm Gabe!", "Hallo, ich bin Gabe!", "嗨, 我是 Gabe!"];
const typingSpeed = 50; // ms per character

function typeText(element, speed) {
  let i = 0;
  let idx = 0;
  let forwards = true;
  function type() {
    element.textContent = greetings[idx].slice(0, i);
    if (forwards && i === greetings[idx].length) {
        forwards = false;
        setTimeout(type, 10000);
    } else if (!forwards && i === 0) {
        forwards = true;
        idx = (idx + 1) % greetings.length;
        setTimeout(type, 500);
    }
    else {
        i = forwards ? i + 1 : i - 1;
        setTimeout(type, speed);
    }
  }
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("greeting");
  if (el) {
    typeText(el, typingSpeed);
  }
});
