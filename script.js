
const nextQuestion = document.getElementById('next-btn');
const question = document.getElementById('questions');
const answer1 = document.querySelector('.btn1');
const answer2 = document.querySelector('.btn2');
const alerts = document.querySelector('.alerts');

// keep track of questions
let question_index = 0;

// storing questions
const questions = [
    {
      question: 'How old is sharon',
      answers: [
        { text: '19', correct: true },
        { text: '25', correct: false }
      ]
    },
    {
      question: 'what does she prefer more?',
      answers: [
        { text: 'eating', correct: false },
        { text: 'running', correct: true }
      ]
    },
    {
      question: 'she is a frontend developer',
      answers: [
        { text: 'No', correct: false },
        { text: 'Yes', correct: true }
      ]
    },
    {
      question: 'Her favourite food is what',
      answers: [
        { text: 'rice', correct: false },
        { text: 'yam', correct: true }
      ]
    }
  ]
// first question to appear
loadQuestion(question_index);

// update question
function loadQuestion(question_index) {
    reset()
    question.textContent = questions[question_index].question;
    answer1.textContent = questions[question_index].answers[0].text;
    answer2.textContent = questions[question_index].answers[1].text;
}
function reset() {
    alerts.classList.remove('green');
    alerts.classList.remove('red');
}
function nextQuestions() {
    if(question_index < questions.length - 1) {
        question_index += 1;
    } else if(question_index < questions.length - 1){
        let randomQuest = Number.parseInt(Math.random() * questions.length);
        question_index = randomQuest;
    } else{
        question_index = 0;
    }

    loadQuestion(question_index);

}
// check if the answer is right
function checkQuest1() {
    let ans1 = questions[question_index].answers[0].correct;
    if (ans1 == true) {
        alerts.classList.add('green');
        alerts.classList.remove('red'); 
    } else{
        alerts.classList.add('red');
        alerts.classList.remove('green'); 
    }
}
function checkQuest2() {
    let ans2 = questions[question_index].answers[1].correct;
    if (ans2 == true) {    
        alerts.classList.remove('red');     
        alerts.classList.add('green');
    } else{
        alerts.classList.remove('green');        
        alerts.classList.add('red');

    }
}