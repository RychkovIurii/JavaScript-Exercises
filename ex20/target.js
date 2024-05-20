// Target and KeyboardEvent: key tasks
// Create an HTML file and connect this JS file to it.
// Good luck have fun!

// 1: Create a button and a counter. Using event.target, increment and display
// the counter value in the console and on the HTML page in a text element.

	/* Шаг 1: Создание HTML файла
	Создадим HTML файл, который подключит наш JavaScript файл.
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Event Handling Tasks</title>
	</head>
	<body>
		<div>
			<button id="incrementButton">Increment</button>
			<p>Counter: <span id="counter">0</span></p>
		</div>

		<ul id="colorList">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>

		<form id="inputForm">
			<label>Name: <input type="text" name="name"></label><br>
			<label>Age: <input type="number" name="age"></label><br>
			<label>Address: <input type="text" name="address"></label><br>
		</form>

		<textarea id="keyLogger" placeholder="Type something..."></textarea><br>

		<input type="text" id="uppercaseAlert" placeholder="Type something here..."><br>

		<button id="selfDestructButton">Self-Destruct</button>

		<ul id="removableList">
			<li>Item A</li>
			<li>Item B</li>
			<li>Item C</li>
		</ul>

		<script src="script.js"></script>
	</body>
	*/

// 2: Create an <ul> with <li> elements that contain text.
// Write JS code that changes the list item's color to blue when clicking it.

// 3: Create a form with multiple input fields like name, age, address.
// Attach an event listener to the form that logs the value of the input field
// when the user clicks out of it. This is called a blur event.

// 4: Create a textarea element to your HTML page.
// Write a JS script that logs each user key press while the user is focusing on the textarea.

// 5: Create an input field.
// Alert the user whenever they enter an uppercase letter.

// 6: Create a self-destruct button. When you click it, it waits for the user to press enter.
// When enter is pressed, delete everything from the HTML page.

// 7: Create a new ul or reuse the ul from task 2.
// Create a new, empty array.
// When you click the li elements, push the element's text value to the array and delete the 
// element from the HTML page. 



	/* Шаг 1: Создание HTML файла
	Создадим HTML файл, который подключит наш JavaScript файл. */

		// script.js

	// Task 1: Increment counter
	let counterValue = 0;
	const incrementButton = document.getElementById('incrementButton');
	const counterDisplay = document.getElementById('counter');

	incrementButton.addEventListener('click', (event) => {
		counterValue++;
		counterDisplay.textContent = counterValue;
		console.log(counterValue);
	});

	// Task 2: Change list item color
	const colorList = document.getElementById('colorList');
	colorList.addEventListener('click', (event) => {
		if (event.target.tagName === 'LI') {
			event.target.style.color = 'blue';
		}
	});

	// Task 3: Log input field value on blur event
	const inputForm = document.getElementById('inputForm');
	inputForm.addEventListener('blur', (event) => {
		if (event.target.tagName === 'INPUT') {
			console.log(event.target.value);
		}
	}, true);

	// Task 4: Log each key press in textarea
	const keyLogger = document.getElementById('keyLogger');
	keyLogger.addEventListener('keypress', (event) => {
		console.log(`Key pressed: ${event.key}`);
	});

	// Task 5: Alert on uppercase letter
	const uppercaseAlert = document.getElementById('uppercaseAlert');
	uppercaseAlert.addEventListener('input', (event) => {
		if (event.target.value.slice(-1).match(/[A-Z]/)) {
			alert('Uppercase letter entered!');
		}
	});

	// Task 6: Self-destruct button
	const selfDestructButton = document.getElementById('selfDestructButton');
	selfDestructButton.addEventListener('click', () => {
		document.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				document.body.innerHTML = '';
			}
		}, { once: true });
	});

	// Task 7: Push element text to array and delete element
	const removableList = document.getElementById('removableList');
	let itemsArray = [];

	removableList.addEventListener('click', (event) => {
		if (event.target.tagName === 'LI') {
			itemsArray.push(event.target.textContent);
			console.log(itemsArray);
			event.target.remove();
		}
	});

/* 	Объяснение кода
	Increment counter: Инкрементируем значение счетчика при каждом нажатии кнопки и обновляем отображение на странице.
	Change list item color: Изменяем цвет элемента списка на синий при нажатии на него.
	Log input field value on blur: Выводим значение поля ввода в консоль при событии blur (когда поле теряет фокус).
	Log each key press in textarea: Логируем каждое нажатие клавиши, когда пользователь вводит текст в textarea.
	Alert on uppercase letter: Выводим сообщение, если введена заглавная буква.
	Self-destruct button: Удаляем все содержимое страницы при нажатии кнопки и нажатии клавиши Enter.
	Push element text to array and delete element: Добавляем текст элемента списка в массив и удаляем элемент со страницы при нажатии на него.
	 */