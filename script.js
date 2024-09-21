
const Questions = [
    {
        question: 'which is largest animal in the world?',
        answers: [
            { text: "shark", correct: false },
            { text: "whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "giraffe", correct: false },


        ]

    },

    {
        question: 'who is king?',
        answers: [
            { text: "Virat Kholi", correct: true },
            { text: "Ben Stokes", correct: false },
            { text: "Babar Azam", correct: false },
            { text: "Kane Williamson", correct: false },
        ]

    },
    {
        question: 'which is largest desert in the world?',
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobie", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct: true },
        ]

    },
    {
        question: 'which is the smallest continent in the world?',
        answers: [
            { text: "Australlia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
            { text: "Asia", correct: false },
        ]

    },
    {
        question: 'which is smallest country in the world?',
        answers: [
            { text: "bhutan", correct: false },
            { text: "Vacitan city", correct: true },
            { text: "Nepal", correct: false },
            { text: "srilanka", correct: false },
        ]

    },

]

const Next = document.querySelector(".btn2")
let Questionindex = 0;
let score = 0;
const Ques = document.querySelector(".question")
const Ansmain = document.querySelector(".answer")
const buttons = document.querySelectorAll(".btn");
function startQuiz() {

    Questionindex = 0;
    score = 0;
    ShowQuestion()

}



function ShowQuestion() {

    const CurrentQuestion = Questions[Questionindex]

    const CurrentQuestionIndex = Questionindex + 1
    Ques.innerHTML = CurrentQuestionIndex + "." + CurrentQuestion.question


    CurrentQuestion.answers.forEach((answer) => {

        const button = document.createElement("button")
        button.classList.add("btn")
        button.innerHTML = answer.text
        Ansmain.appendChild(button)


        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        Next.disabled=true
        button.addEventListener("click", SelectAns)

    }
    )


}

function SelectAns(e) {
    Next.disabled=false;
    const selectbtn = e.target
    const isCorrect = selectbtn.dataset.correct === "true"
    if (isCorrect) {
        selectbtn.classList.add("True")
        score++
    }
    else {
        selectbtn.classList.add("False")
    }

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((a) => {


        a.disabled = true
        Next.style.display = "block";

        if (a.dataset.correct === "true") {
            a.classList.add("True")
        }


        
    })
    Next.addEventListener("click", nextquestion)

}


function nextquestion() {
    Questionindex++
    if (Questionindex < Questions.length) {

        const Ansmain = document.querySelector(".answer")

        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((a) => {
            Ansmain.removeChild(a)
        })
        ShowQuestion()


    }


    else {
        showScore()
    }

}

function showScore() {

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((a) => {
        Ansmain.removeChild(a)
    })
    Ques.innerHTML = `You scored ${score} out of ${Questions.length}`
    Next.innerHTML = "Play Again"

    Next.addEventListener("click", function (e) {
        location.reload();
    })

}


startQuiz()



