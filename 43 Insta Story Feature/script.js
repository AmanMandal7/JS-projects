arr = [
    { dp: 'https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', story: 'https://images.unsplash.com/flagged/photo-1570700005880-4ecdb8595d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' },
    { dp: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', story: 'https://images.unsplash.com/photo-1602046819770-00c5902e3f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' },
    { dp: 'https://images.unsplash.com/photo-1575439462433-8e1969065df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', story: 'https://images.unsplash.com/photo-1602743052181-e82869c36c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' },
    { dp: 'https://images.unsplash.com/photo-1525943837837-af668e09139d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', story: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80' },
    { dp: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', story: 'https://images.unsplash.com/photo-1568026530336-f706373e9d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' },
]

const stories = document.querySelector(".stories");
const homePage = document.querySelector(".homePage");
const fullPreview = document.querySelector(".fullpreview");
const fullPrevImg = document.querySelector(".fullpreview img");
const crossIcon = document.querySelector(".fullpreview i")

var clutter = '';
arr.forEach((elem, index) => {
    clutter += `<div class="story">
            <div class="overlay"></div>
            <img
            id="${index}"
              src="${elem.dp}"
              alt="img"
            />
          </div>`
});

stories.innerHTML = clutter;

crossIcon.addEventListener("click", () => {
    fullPreview.style.display = "none";
    homePage.style.display = "block";
})

stories.addEventListener("click", (dets) => {
    fullPrevImg.src = `${arr[dets.target.id].story}`
    fullPreview.style.display = "block";
    homePage.style.display = "none";
    setTimeout(() => {
        fullPreview.style.display = "none";
        homePage.style.display = "block";
    }, 10200);
});

