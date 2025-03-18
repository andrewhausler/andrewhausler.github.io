document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        let classTarget = event.target.dataset.target;
        document.querySelectorAll("section").forEach((section) => {
            if (section.classList.contains(classTarget)) {
                section.style.display = "block";
            }
            else {
                section.style.display = "none";
            }
        });
    });
});