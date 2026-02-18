const text = "MISSION: BUILD. CREATE. INNOVATE.";
let index = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

type();
