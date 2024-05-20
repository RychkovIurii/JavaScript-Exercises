// 1. Given an array of numbers, use the map method to create a new
// array with each element squared.
const numbers = [2, 4, 6, 8];


const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [4, 16, 36, 64]


// 2.
// Extract all even numbers from this array using the filter method:
const numbers2 = [1, 2, 3, 4, 5, 6];


const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]


// 3. 
// Using reduce, find the sum of all numbers in this array:
const numbers3 = [10, 20, 30, 40];


const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 100


// 4.
// Use the forEach method to log each element of this array to the console:
const items = ["window", "coffee machine", "lamp"];


items.forEach(item => console.log(item));
// Output:
// window
// coffee machine
// lamp


// 5.
// Convert this string to an array:
let str = "yo";


let strArray = str.split('');
console.log(strArray); // ["y", "o"]


// 6.
// Flatten this multidimensional array:
const arrays = [[6,5,4],[3,2,1],[0]];


const flattenedArray = arrays.flat();
console.log(flattenedArray); // [6, 5, 4, 3, 2, 1, 0]


// 7.
// a) 
// Access the first element from the second array in this multidimensional array:
let multiDim = [["car", "washing machine"], ["yard", "fence"]];

let firstElementOfSecondArray = multiDim[1][0];
console.log(firstElementOfSecondArray); // "yard"

// b)
// Add a third array into the multidimensional array. Give it 2 elements.
multiDim.push(["tree", "house"]);
console.log(multiDim);

// [["car", "washing machine"], ["yard", "fence"], ["tree", "house"]]

// c)
// Remove the "car" element from the array.
multiDim[0].splice(multiDim[0].indexOf("car"), 1);
console.log(multiDim);

// [["washing machine"], ["yard", "fence"], ["tree", "house"]]

// 8.
// Create an HTML document and connect a script (it can be this one) to it.
// Create 3 div elements.
// Access and change the text content of all the divs to "Hello World" using querySelectorAll and forEach.

/*
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Div Text Change</title>
</head>
<body>
    <div></div>
    <div></div>
    <div></div>
    <script src="script.js"></script>
</body>
</html>
*/
//JavaScript (script.js):
document.querySelectorAll('div').forEach(div => {
    div.textContent = 'Hello World';
});

// 9. Project:
// Create a simple flashcard application.
// Create some sample questions and answers to them.
// Develop an UI that gives the ability to change questions by topic.
// Create at least 3 topics with 3 questions each. 
// Implement a study mode where questions are displayed one at a time and can be flipped to reveal the answer.
// Question quality doesn't matter here, but you can create real questions if you want.

// You can add a mode to add more flashcards. Give the ability to choose an existing topic or create a new one.
// Create a way for the user to alter the questions in your app.
// The app could be used for language learning for example.

// Tips and ideas:
// The flashcars can be objects with question-answer pairs.
// If your topic allows for it (like language learning), you could
// have several questions displayed at once.
// As your app grows, handle complexity by using functions and naming them appropriately.
// Don't let the functions get too big: use each function for a specific purpose.
// You could use Math.random() to randomly choose questions.
// The filter method could be used to omit certain questions from being displayed (like if the user already understands them well).
// LocalStorage can be used to store user-entered questions and perhaps user progress.

// For further development, you could implement a voice reader or score tracking into the app. 
// These could be used to enhance learning.
/*
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard App</title>
</head>
<body>
    <h1>Flashcard App</h1>
    <div id="flashcard"></div>
    <button id="flip">Flip</button>
    <button id="next">Next</button>
    <script src="flashcard.js"></script>
</body>
</html>
*/

//JavaScript (flashcard.js):
const topics = {
    Math: [
        { question: "2+2", answer: "4" },
        { question: "3*3", answer: "9" },
        { question: "Square root of 16", answer: "4" }
    ],
    Science: [
        { question: "H2O is the chemical formula for what?", answer: "Water" },
        { question: "What planet is known as the Red Planet?", answer: "Mars" },
        { question: "What is the speed of light?", answer: "299,792,458 m/s" }
    ],
    History: [
        { question: "Who was the first President of the USA?", answer: "George Washington" },
        { question: "What year did the WW2 end?", answer: "1945" },
        { question: "Who discovered America?", answer: "Christopher Columbus" }
    ]
};

let currentTopic = "Math";
let currentIndex = 0;
let showQuestion = true;

const flashcardDiv = document.getElementById('flashcard');
const flipButton = document.getElementById('flip');
const nextButton = document.getElementById('next');

function displayFlashcard() {
    const flashcard = topics[currentTopic][currentIndex];
    flashcardDiv.textContent = showQuestion ? flashcard.question : flashcard.answer;
}

flipButton.addEventListener('click', () => {
    showQuestion = !showQuestion;
    displayFlashcard();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % topics[currentTopic].length;
    showQuestion = true;
    displayFlashcard();
});

displayFlashcard();



//По желанию можно расширить функциональность приложения флеш-карт, добавив следующие возможности:
/*
Возможность выбора темы.
Добавление новых флеш-карт.
Сохранение прогресса в localStorage.
Удаление флеш-карт.
HTML
Обновим HTML файл, добавив форму для выбора темы, добавления новых флеш-карт и кнопки для удаления.

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard App</title>
</head>
<body>
    <h1>Flashcard App</h1>
    
    <div>
        <label for="topicSelect">Select Topic:</label>
        <select id="topicSelect"></select>
        <button id="addTopicButton">Add New Topic</button>
    </div>
    
    <div id="flashcard"></div>
    <button id="flip">Flip</button>
    <button id="next">Next</button>
    <button id="deleteCard">Delete Card</button>
    
    <div>
        <h2>Add New Flashcard</h2>
        <form id="addFlashcardForm">
            <label for="newQuestion">Question:</label>
            <input type="text" id="newQuestion" required>
            <label for="newAnswer">Answer:</label>
            <input type="text" id="newAnswer" required>
            <button type="submit">Add Flashcard</button>
        </form>
    </div>
    
    <script src="flashcard.js"></script>
</body>

JavaScript
Добавим функции для работы с темами, добавления флеш-карт и сохранения данных в localStorage.

// flashcard.js

const topics = JSON.parse(localStorage.getItem('topics')) || {
    Math: [
        { question: "2+2", answer: "4" },
        { question: "3*3", answer: "9" },
        { question: "Square root of 16", answer: "4" }
    ],
    Science: [
        { question: "H2O is the chemical formula for what?", answer: "Water" },
        { question: "What planet is known as the Red Planet?", answer: "Mars" },
        { question: "What is the speed of light?", answer: "299,792,458 m/s" }
    ],
    History: [
        { question: "Who was the first President of the USA?", answer: "George Washington" },
        { question: "What year did the WW2 end?", answer: "1945" },
        { question: "Who discovered America?", answer: "Christopher Columbus" }
    ]
};

let currentTopic = Object.keys(topics)[0];
let currentIndex = 0;
let showQuestion = true;

const flashcardDiv = document.getElementById('flashcard');
const flipButton = document.getElementById('flip');
const nextButton = document.getElementById('next');
const deleteCardButton = document.getElementById('deleteCard');
const topicSelect = document.getElementById('topicSelect');
const addFlashcardForm = document.getElementById('addFlashcardForm');
const newQuestionInput = document.getElementById('newQuestion');
const newAnswerInput = document.getElementById('newAnswer');
const addTopicButton = document.getElementById('addTopicButton');

function populateTopicSelect() {
    topicSelect.innerHTML = '';
    Object.keys(topics).forEach(topic => {
        let option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });
    topicSelect.value = currentTopic;
}

function displayFlashcard() {
    const flashcard = topics[currentTopic][currentIndex];
    flashcardDiv.textContent = showQuestion ? flashcard.question : flashcard.answer;
}

function saveTopics() {
    localStorage.setItem('topics', JSON.stringify(topics));
}

flipButton.addEventListener('click', () => {
    showQuestion = !showQuestion;
    displayFlashcard();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % topics[currentTopic].length;
    showQuestion = true;
    displayFlashcard();
});

deleteCardButton.addEventListener('click', () => {
    topics[currentTopic].splice(currentIndex, 1);
    if (topics[currentTopic].length === 0) {
        delete topics[currentTopic];
        currentTopic = Object.keys(topics)[0];
    }
    currentIndex = 0;
    saveTopics();
    populateTopicSelect();
    displayFlashcard();
});

topicSelect.addEventListener('change', (event) => {
    currentTopic = event.target.value;
    currentIndex = 0;
    showQuestion = true;
    displayFlashcard();
});

addFlashcardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newQuestion = newQuestionInput.value;
    const newAnswer = newAnswerInput.value;
    if (!topics[currentTopic]) {
        topics[currentTopic] = [];
    }
    topics[currentTopic].push({ question: newQuestion, answer: newAnswer });
    newQuestionInput.value = '';
    newAnswerInput.value = '';
    saveTopics();
    displayFlashcard();
});

addTopicButton.addEventListener('click', () => {
    const newTopic = prompt("Enter new topic name:");
    if (newTopic && !topics[newTopic]) {
        topics[newTopic] = [];
        currentTopic = newTopic;
        currentIndex = 0;
        showQuestion = true;
        saveTopics();
        populateTopicSelect();
        displayFlashcard();
    }
});

populateTopicSelect();
displayFlashcard();

Объяснение расширенной функциональности:
Возможность выбора темы:

Добавлена функция populateTopicSelect, которая заполняет выпадающий список тем.
При изменении выбранной темы вызывается обработчик события, который обновляет текущую тему и отображает первую карточку.
Добавление новых флеш-карт:

Добавлена форма для добавления новых флеш-карт с полями для вопроса и ответа.
Обработчик формы добавляет новую карточку в текущую тему и обновляет localStorage.
Удаление флеш-карт:

Добавлена кнопка для удаления текущей флеш-карты. Если в теме больше нет карточек, тема удаляется, и выбирается следующая доступная тема.
Сохранение данных в localStorage:

Функция saveTopics сохраняет текущее состояние тем и карточек в localStorage.
Добавление новой темы:

Кнопка добавления новой темы вызывает диалоговое окно для ввода названия новой темы. Если такая тема не существует, она добавляется.
*/