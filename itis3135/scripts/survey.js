const content = document.getElementById("courseTextBox");
const resetButton = document.getElementById("reset-courses");
const completedForm = document.getElementById("completed-form");
const formBody = document.getElementById("form-body");
const form = document.getElementById("form");
completedForm.hidden = true;

// If no content inside the courses then reset button not needed
if(content.textContent === "") {
    resetButton.hidden = true;
}

function addACourse(event) {
    event.preventDefault();
    
    const bulletPoint = document.createElement("li");
    const course = document.createElement("input");
    course.type = "text";
    course.class = "course";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    const breaker = document.createElement("br");
    const padding = document.createElement("p");

    bulletPoint.appendChild(course);
    content.appendChild(bulletPoint);
    content.appendChild(deleteButton);
    content.appendChild(breaker);
    content.appendChild(padding);

    resetButton.hidden = false;

    deleteButton.addEventListener("click", (event)=>{
        event.preventDefault();
        content.removeChild(deleteButton);
        content.removeChild(bulletPoint);
        content.removeChild(breaker);
        content.removeChild(padding);
        if(content.textContent === "") {
            resetButton.hidden = true;
        }
        return;
    });
}

function resetCourses(event) {
    event.preventDefault();
    content.innerHTML = "";
    resetButton.hidden = true;
    return;
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const userInputs = form.querySelectorAll("input");
    for(let i=0; i<userInputs.length; i++) {
        if(userInputs[i].type == "text" && userInputs[i].value == "") {
            alert("Please Answer All Boxes To Continue!");
            return;
        }
        else if(userInputs[i].type == "file" && userInputs[i].files.length <= 0) {
            alert("Please Provide A File To Continue!");
            return;
        }
        else if(userInputs[i].type == "checkbox" && !userInputs[i].checked)
        {
            alert("Please Agree To The Terms Of Service!");
            return;
        }
    }
    parseData(event, userInputs);
});

function parseData(event, userInputs) {
    event.preventDefault();
    const completedContent = document.getElementById("completed-content");
    completedForm.hidden = false;
    let courseContent = ``
    for(let i=10; i<userInputs.length-5; i++) {
        courseContent += `<li class="courses">${userInputs[i].value}</li>`
    }
    completedContent.innerHTML = `<h2>Introduction</h2>
            <h3 class="name">${userInputs[0].value} ${userInputs[1].value} || ${userInputs[2].value}</h3>
            <figure>
                <img src="${loadImage(event)}" alt="${userInputs[4].value}" id="myimage">
                <figcaption>${userInputs[4].value}</figcaption>
            </figure>
            <ul>
                <li>Personal Background: <p class="intro-descriptions">${userInputs[5].value}</p></li>
                <li>Professional Background: <p class="intro-descriptions">${userInputs[6].value}</p></li>
                <li>Academic Background: <p class="intro-descriptions">${userInputs[7].value}</p></li>
                <li>Background in this Subject: <p class="intro-descriptions">${userInputs[8].value}</p></li>
                <li>Primary Computer Platform: <p class="intro-descriptions">${userInputs[9].value}</p></li>
                <li>Courses I'm Taking and Why:
                    <ul>
                        ${courseContent}
                    </ul>
                </li>
                <li>Funny/Interesting Items to Remember me by: <p class="intro-descriptions">${userInputs[userInputs.length-5].value}</p></li>
                <li>I'd also like to Share: <p class="intro-descriptions">${userInputs[userInputs.length-4].value}</p></li>
            </ul>`
    formBody.hidden = true;
    return;
}

function loadImage(event) {
    event.preventDefault();
    var imageFile = document.getElementById("image").files[0];
    const imageURL = URL.createObjectURL(imageFile);
    return imageURL;
}

function resetForm() {
    const completedContent = document.getElementById("completed-content");
    completedContent.innerHTML = "";
    completedForm.hidden = true;
    formBody.hidden = false;
    return;
}
