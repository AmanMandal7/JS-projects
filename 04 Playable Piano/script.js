const pianoKeys = document.querySelectorAll(".piano-keys .key");

const audio = new Audio("tunes/a.wav"); //It creates a HTML audio element, by default audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key press 
    audio.play();  // playing audio
}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key))
})
