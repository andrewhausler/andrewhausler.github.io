/** Image Button Control Module */
const imageButtons = Array.from(document.querySelectorAll(".img-btn"));
const imgFrame = document.getElementById("img-frame");
const enlargedImg = imgFrame.querySelector("img");
const figCaption = imgFrame.querySelector("p");
let currentIndex = 0;

imageButtons.forEach((img, index) => {
    img.addEventListener("click", (event) => {
        event.preventDefault();
        enlargedImg.src = img.src;
        enlargedImg.alt = img.alt;
        figCaption.textContent = img.alt;
        currentIndex = index;
        console.log(currentIndex);
    });
});

/** Previous and Next Control Arrows */
const previous = document.getElementById("prev");
const next = document.getElementById("next");

function changeImageBy(event, numberDifference) {
    event.preventDefault();
    currentIndex = currentIndex + numberDifference;
    if (currentIndex >= 0 && currentIndex < imageButtons.length) {
        enlargedImg.src = imageButtons[currentIndex].src;
        figCaption.textContent = imageButtons[currentIndex].alt;
    }
    else if (currentIndex >= imageButtons.length) {
        currentIndex = 0;
        enlargedImg.src = imageButtons[currentIndex].src;
        figCaption.textContent = imageButtons[currentIndex].alt;
    }
    else {
        currentIndex = imageButtons.length - 1;
        enlargedImg.src = imageButtons[currentIndex].src;
        figCaption.textContent = imageButtons[currentIndex].alt;
    }
}
