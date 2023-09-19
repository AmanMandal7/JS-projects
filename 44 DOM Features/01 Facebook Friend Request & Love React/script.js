const addFriend = document.querySelector(".add");
const remove = document.querySelector(".remove");
const love2 = document.querySelector(".name span");
const love2Icon = document.querySelector(".name span i");

addFriend.addEventListener("click", () => {
    addFriend.innerHTML = `<i class="ri-check-line"></i> Friends`;
    addFriend.style.pointerEvents = "none";
    remove.style.pointerEvents = "initial";
})

remove.addEventListener("click", () => {
    addFriend.innerHTML = `Add Friend`;
    addFriend.style.pointerEvents = "initial";
    remove.style.pointerEvents = "none";
});

// For Love Reacts 
var love = false;
love2.addEventListener("click", () => {
    if (!love) {
        love2.innerHTML = `<i class="ri-heart-3-fill"></i>`
        love2.style.color = 'red'
        love = true;
    } else {
        love2.innerHTML = `<i class="ri-heart-3-line"></i>`
        love2.style.color = 'black'
        love = false;
    }

})