const quizData = [
    {
        question: 'What is the capital of India?',
        a: 'New Delhi',
        b: 'Kolkata',
        c: 'Bangalore',
        d: 'Hyderabad',
        correct: 'a'
    }, {
        question: 'What is the national sport of India?',
        a: 'Cricket',
        b: 'Hockey',
        c: 'Football',
        d: 'Kabaddi',
        correct: 'b'  
    },{
        question: 'What does HTML stands for',
        a: 'Hello world',
        b: 'HypoText Marking Language',
        c: 'Bangalore',
        d: 'HyperText Markup Language',
        correct: 'd'
    },{
        question: 'What is the capital of India?',
        a: 'New Delhi',
        b: 'Kolkata',
        c: 'Bangalore',
        d: 'Hyderabad',
        correct: 'a'
    }, {
        question: 'What is the national sport of India?',
        a: 'Cricket',
        b: 'Hockey',
        c: 'Football',
        d: 'Kabaddi',
        correct: 'b'  
    },{
        question: 'What does HTML stands for',
        a: 'Hello world',
        b: 'HypoText Marking Language',
        c: 'Bangalore',
        d: 'HyperText Markup Language',
        correct: 'd'
    }
]

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const buttonEl = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    questionEl.textContent =  quizData[currentQuestion].question;

    aText.textContent = quizData[currentQuestion].a;
    bText.textContent = quizData[currentQuestion].b;
    cText.textContent = quizData[currentQuestion].c;
    dText.textContent = quizData[currentQuestion].d; 
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        if(answerEl.id === getSelected()){
            answerEl.checked = false;
        }
    })
}

buttonEl.addEventListener("click", function() {
    let answer = getSelected();

    if(answer){
        if(answer == quizData[currentQuestion].correct){
            ++score;
        }

        currentQuestion++;
        if((currentQuestion < quizData.length)){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`
            <h2>
                You've answered ${score} questions correctly
            </h2>
            <button onclick="location.reload()">
                Reload
            </button>
            `
        }
    }
    else{
        alert("You've to choose one option!!");
    }
    
})