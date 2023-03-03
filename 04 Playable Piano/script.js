const pianoKeys = document.querySelectorAll(".piano-keys .key");

const audio = new Audio("tunes/a.wav"); //It creates a HTML audio element, by default audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key press 
    audio.play();  // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element 
    clickedKey.classList.add("active"); //adding active class to the clicked key element
    setTimeout(() => {
        clickedKey.classList.remove("active"); // removing active class after 150 ms from the clicked key element
    }, 150)

}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const pressedKey = (e) => {
    playTune(e.key);
}

document.addEventListener("keydown", pressedKey);
