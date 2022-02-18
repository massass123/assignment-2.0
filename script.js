const quizData = [
    {
        question: "Which CSS property controls the text size?",
        a: "text-size",
        b: "up-size",
        c: "text-inc",
        d: "all of the above",
        correct: "a",
    },
    {
        question: "How can you make a numbered list in HTML?",
        a: "<ol>",
        b: "<no>",
        c: "<li>",
        d: "<h1>",
        correct: "a",
    },
    {
        question: "Which character is used to indicate an end tag in HTML?",
        a: "$",
        b: '"',
        c: "/",
        d: "end",
        correct: "c",
    },
    {
        question: "Which is the correct CSS syntax for color",
        a: 'h1:color:"blue";',
        b: 'h1=color<"orange";>',
        c: 'h1{color==red;}',
        d: 'h1{color:yellow;}',
        correct: "d",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "#Breathtaking#",
        b: "^^JustinBieber^^",
        c: "/*DyingLight2isOverRated*/",
        d: "//IloveIceScream//",
        correct: "c",
    },
    {
        question: "What property is used to change the backgroud color?",
        a: "background-color",
        b: "backGroundColor",
        c: "backdrop-color",
        d: "backdrop-color",
        correct: "a",
    },


];



const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const progressBar = document.getElementById('progress-bar')
const progressBarBG = document.getElementById('progress-container')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    progressBar.style.width = `${(currentQuiz/quizData.length) * 100}%`
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
        }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
        } 
       else {
            
            quiz.innerHTML = `
        
            <div style="background-color:#f11515;" id="progress-container">
            <div style="background-color:#44b927; width:${(score/quizData.length) * 100}%;" id="progress-bar"></div>
            </div>
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
            
        }
    }
})