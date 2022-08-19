

const questions = document.querySelectorAll(".question");


questions.forEach((question) => {


    const button = question.querySelector(".question__button");

    const questionText = question.querySelector(".question__title__text")

    button.addEventListener("click", () => {

        questions.forEach((item) => {

            if(item !== question) {

                item.classList.remove("show-answer");

            }

        })

        question.classList.toggle("show-answer");

    })

    questionText.addEventListener("click", () => {

        questions.forEach((item) => {

            if(item !== question) {

                item.classList.remove("show-answer");
            }

        })

        question.classList.toggle("show-answer");


    })



})