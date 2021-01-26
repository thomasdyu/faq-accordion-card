//========= Accordion
const questions = document.querySelectorAll(".question-container");

// Selecting all questions and adding click event.
questions.forEach((question) => {
    question.addEventListener("click", (e) => {
        const curElement = e.currentTarget;
        const answer = curElement.nextElementSibling;
        const currentlyActive = document.querySelector(".question.active");

        if (
            currentlyActive &&
            currentlyActive !== curElement.firstElementChild
        ) {
            currentlyActive.classList.toggle("active");
            currentlyActive.parentElement.nextElementSibling.style.maxHeight = 0;
        }

        curElement.firstElementChild.classList.toggle("active");

        if (curElement.firstElementChild.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});
