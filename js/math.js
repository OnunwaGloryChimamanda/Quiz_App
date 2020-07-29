const startButton = document.getElementById('start-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
submitButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//function that runs when start is clicked
function startGame() {
   startButton.classList.add('hide')
//    startButton.innerHTML =" Next";
   questionContainerElement.classList.remove('hide')
   shuffledQuestions = questions.sort(()=> Math.random() - .5)
   currentQuestionIndex = 0
   setNextQuestion()
}

//function that sets next question
function setNextQuestion() {
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    submitButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//displays the restart button when questions have been exhausted
function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    submitButton.classList.remove('hide')
  }else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
  }
 
}

//checks if answer is correct or wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//array containing questions and answers
const questions = [
    {
        question: 'what is 2+2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '12', correct: false},
            {text: '8', correct: false}
        ]
    },

    {

        question: 'what is 2+2/5?',
        answers: [
            {text: '12/5', correct: true},
            {text: '22/5', correct: false},
            {text: '12/3', correct: false},
            {text: '4/5', correct: false}
        ]

    },

    {
        question: 'what is 5/0?',
        answers: [
            {text: '12/5', correct: false},
            {text: '5', correct: false},
            {text: '0', correct: false},
            {text: 'undefined', correct: true}
        ]
    },

    {
        question: 'what is a right-angled rhombus called?',
        answers: [
            {text: 'rectangle', correct: false},
            {text: 'triangle', correct: false},
            {text: 'no idea', correct: false},
            {text: 'square', correct: true}
        ]
    },

    {
        question: 'circles sharing the same centre are called?',
        answers: [
            {text: 'circumference', correct: false},
            {text: 'concentric', correct: true},
            {text: 'ball', correct: false},
            {text: 'none of the above', correct: false}
        ]
    },

    {
        question: 'what kind of motion does a pendulum exhibit?',
        answers: [
            {text: 'relative', correct: false},
            {text: 'rotational', correct: false},
            {text: 'simple harmonic motion', correct: true},
            {text: 'random', correct: false}
        ]
    },

    {
        question: 'A triangle with three sides equal is called?',
        answers: [
            {text: 'right-angled', correct: false},
            {text: 'scalene', correct: false},
            {text: 'isosceles', correct: false},
            {text: 'equilateral', correct: true}
        ]
    },

    {
        question: 'alternate angles are?',
        answers: [
            {text: 'equal', correct: true},
            {text: 'unequal', correct: false},
            {text: 'infinite', correct: false},
            {text: 'undefined', correct: false}
        ]
    },

    {
        question: 'a straight line touching a circle is called?',
        answers: [
            {text: 'cone', correct: false},
            {text: 'equidistant', correct: false},
            {text: 'point', correct: false},
            {text: 'tangent', correct: true}
        ]
    },

    {
        question: 'BONUS: what is 5/0?',
        answers: [
            {text: '12/5', correct: false},
            {text: '5', correct: false},
            {text: '0', correct: false},
            {text: 'undefined', correct: true}
        ]
    },

]