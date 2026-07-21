// Starting font size
let textSize = 16;

// Increase text size
function increaseText() {
    textSize = textSize + 2;
    document.body.style.fontSize = textSize + 'px';

}

// Decrease text size
function decreaseText() {
    if (textSize > 10) {
        textSize = textSize - 2;
        document.body.style.fontSize = textSize + 'px';
    }
}

// Read text aloud
function readPage() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.body.innerText;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}