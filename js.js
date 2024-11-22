

let smile = document.querySelector("i");
smile.onclick = function () {
    if (smile.className === "fa-regular fa-face-grin-hearts") {
        smile.className= "fa-solid fa-face-laugh-beam";
        document.body.style.backgroundColor = "lightgreen"
        document.body.style.color = "purple"
    } else {
        smile.className = "fa-regular fa-face-grin-hearts";
        document.body.style.backgroundColor = "pink"
        document.body.style.color = "blue"
    }
}