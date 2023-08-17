const selectTag = document.querySelectorAll("select");
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    for (const coutry_code in countries) {
        let selected;
        if (id == 0 && coutry_code == "en-GB") {
            selected = "selected";
        } else if (id == 1 && coutry_code == "hi-IN") {
            selected = "selected";
        }
        let option = `<option value="${coutry_code}" ${selected}>${countries[coutry_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
})

translateBtn.addEventListener("click", () => {
    let text = fromText.value,
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        toText.value = data.responseData.translatedText;
    })
})