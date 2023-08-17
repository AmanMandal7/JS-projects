const selectTag = document.querySelectorAll("select");

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