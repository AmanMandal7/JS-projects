const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // Fetching the random quotes from this API and parsing it inot javaScript objects 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    })
}

randomQuote();

soundBtn.addEventListener("click", () => {
    // It is a web speech API that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance); // speak method speaks the utterance
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `http://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);


