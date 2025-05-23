// Table Of Contents Hide/Show
const tableOfContents = document.getElementById("table-of-contents");
const navbarButton = document.getElementById("navbar-button");
const mainBody = document.getElementById("main-body");

navbarButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (tableOfContents.style.display !== "none") {
        tableOfContents.style.display = "none";
        navbarButton.style.left = "30px";
        mainBody.style.marginLeft = "40px";
    }
    else {
        tableOfContents.style.display = "block";
        navbarButton.style.left = "200px";
        mainBody.style.marginLeft = "200px";
    }
});


// Language Searching
const inputSearch = document.getElementById("search");
const submitSearch = document.getElementById("submit-search");

const availableLanguages = {
   "html": "./htmlBasics.html",
    "javascript": "./jsBasics.html",
    "css": "./cssBasics.html"
};

submitSearch.addEventListener("click", () => {
    console.log("Button Clicked");
    const fixedInput = inputSearch.value.trim().toLowerCase();
    const regexInput = new RegExp(fixedInput, "i");
    for (let key in availableLanguages) {
        if (regexInput.test(key)) {
            window.location.href = availableLanguages[key];
            return;
        }
    }
    alert("There is no link to: " + inputSearch.value);
});

// Image Hide/Show
const imgBtn = document.querySelectorAll(".img-btn");

imgBtn.forEach((div) => {
    const btn = div.querySelector("button");
    const figure = div.querySelector("figure");

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        if (figure.style.display === "none" || figure.style.display === "") {
            figure.style.display = "block";
            btn.textContent = "Hide Example";
        }
        else {
            figure.style.display = "none";
            btn.textContent = "Show Example";
        }
    });
});