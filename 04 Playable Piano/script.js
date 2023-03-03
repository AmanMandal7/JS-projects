const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keysCheckBox = document.querySelector(".keys-checkbox");
const volumeSlider = document.querySelector(".volume-slider input");


let allKeys = [];
let audio = new Audio("tunes/a.wav"); //It creates a HTML audio element, by default audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key press 
    audio.play();  // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element 
    clickedKey.classList.add("active"); //adding active class to the clicked key element
    setTimeout(() => {
        clickedKey.classList.remove("active"); // removing active class after 150 ms from the clicked key element
    }, 150);

}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // Passing the range slider value as an audio volume
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // If the pressed key is in allKeys array, only call the playTune function
    if (allKeys.includes(e.key)) playTune(e.key);
}

keysCheckBox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressedKey);
