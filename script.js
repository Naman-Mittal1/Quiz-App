const quizData = [
    {
        question: "HTML Stands for?",
        a: ' Hyper Text Modul Language',
        b: ' Hyper Text Markup Language',
        c: ' Hyper Test Markup Language',
        d: ' Hyperlink Markup Language',
        correct: 'b'   
    },
    {
        question: "Which data structure uses LIFO?",
        a: ' Array',
        b: ' Int',
        c: ' Stack',
        d: ' Queue',
        correct: 'c'  
    },
    {
        question: "What is FIFO?",
        a: ' First In First Out',
        b: ' Few In Few out',
        c: ' First in Few Out',
        d: ' Few In First Out',
        correct: 'a'  
    },
    {
        question: "A short sections of code written to complete a task.",
        a: ' Buffer',
        b: ' Function',
        c: ' Array',
        d: ' Loop',
        correct: 'b'  
    },
    {
        question: "What dose this equation mean ? a != t",
        a: ' A is assinged to t',
        b: ' A and t are equal',
        c: ' T is added to a',
        d: ' A is not equal to t',
        correct: 'd'  
    }
];

const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function getSelected()
{
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer =  answerEl.id;
        }
        
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Congrats! Your answered correctly ${score}  out of ${quizData.length} questions </h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
    
})
