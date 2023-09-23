const addFriend = document.querySelector(".add");
const remove = document.querySelector(".remove");
const img = document.querySelector(".card img");
const love1 = document.querySelector(".card>i");
const love2 = document.querySelector(".name span");
const love2Icon = document.querySelector(".name span i");

var friends = false;
addFriend.addEventListener("click", () => {
    addFriend.innerHTML = `<i class="ri-check-line"></i> Friends`;
    addFriend.style.pointerEvents = "none";
    remove.style.pointerEvents = "initial";
    friends = true;
})

remove.addEventListener("click", () => {
    addFriend.innerHTML = `Add Friend`;
    addFriend.style.pointerEvents = "initial";
    remove.style.pointerEvents = "none";
    friends = false;
});

// For Love Reacts

img.addEventListener("dblclick", () => {
    if (friends) {
        love1.style.opacity = '0.8';
        love1.style.transform = 'scale(1.3)'

        love2.innerHTML = `<i class="ri-heart-3-fill"></i>`
        love2.style.color = 'red'
        love = true;
        setTimeout(() => {
            love1.style.transform = 'scale(1)'
        }, 300);
        setTimeout(() => {
            love1.style.opacity = '0';
        }, 1500);
    }
})

// For Second love icon

var love = false;
love2.addEventListener("click", () => {
    if (friends) {
        setTimeout(() => {
            love2.style.transform = `scale(1)`
        }, 300);
        if (!love) {
            love2.innerHTML = `<i class="ri-heart-3-fill"></i>`
            love2.style.color = 'red'
            love2.style.transform = `scale(1.2)`
            love = true;
        } else {
            love2.innerHTML = `<i class="ri-heart-3-line"></i>`
            love2.style.color = 'black'
            love = false;
        }
    } else {
        love2.innerHTML = `<i class="ri-heart-3-line"></i>`
        love2.style.color = 'black'
    }
})
