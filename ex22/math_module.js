// 1. Given a floating-point number 5.4, use Math.ceil() to round
// it up to the nearest integer.
	let number1 = 5.4;
	let roundedUp = Math.ceil(number1);
	console.log(roundedUp); // 6

// 2. Given the number 8.7, use Math.floor to round it down to the 
// nearest integer
	let number2 = 8.7;
	let roundedDown = Math.floor(number2);
	console.log(roundedDown); // 8

// 3. Generate a random number between 0 and 100.
// Round it up to the nearest integer.
	let randomNumber = Math.random() * 100;
	let roundedRandomNumber = Math.ceil(randomNumber);
	console.log(roundedRandomNumber);

// 4. Find the absolute value of -15 using Math.abs()
	let negativeNumber = -15;
	let absoluteValue = Math.abs(negativeNumber);
	console.log(absoluteValue); // 15

// 5. You are creating a book of items. 
// Each page can contain 10 items. You have 55 items.
// Round up the result of dividing the number of items with the amount of items that fit on a page
// to see how many pages are required.
	let items = 55;
	let itemsPerPage = 10;
	let pagesRequired = Math.ceil(items / itemsPerPage);
	console.log(pagesRequired); // 6

// 6. Calculate how many whole hours are left until midnight.
// Round down the result to the nearest integer.
// The current time is given in total hours since midnight like this: 9.5
	let currentTime = 9.5;
	let hoursUntilMidnight = Math.floor(24 - currentTime);
	console.log(hoursUntilMidnight); // 14

// 7. You are creating an UI for a thermometer.
// You have a measuring device that gives temperatures as floating point values (5.5, 9.9, 16.0).
// a) Create a function that takes a decimal number as an argument and then removes the decimal part.
	function removeDecimalPart(number) {
		return Math.trunc(number);
	}

	console.log(removeDecimalPart(5.5)); // 5
	console.log(removeDecimalPart(9.9)); // 9
	console.log(removeDecimalPart(16.0)); // 16

// b) Create another function that takes an array of floating point temperature values
// and calculates their average. Display the result using a template literal. (`${result}`)
	function calculateAverage(temperatures) {
		let total = temperatures.reduce((sum, temp) => sum + temp, 0);
		let average = total / temperatures.length;
		return average;
	}

	let temps = [5.5, 9.9, 16.0];
	let averageTemp = calculateAverage(temps);
	console.log(`The average temperature is ${averageTemp}`); // "The average temperature is 10.466666666666667"

// 8. You are designing a virtual board game.
// The game requires you to simulate a 12-sided dice.
// Create the dice and a simple UI where the user can click a button to 
// receive a random number between 1 and 12, simulating the dice roll.
	function rollDice() {
		return Math.floor(Math.random() * 12) + 1;
	}

	// Пример использования:
	console.log(rollDice()); // Рандомное число от 1 до 12

// 8 bonus: Make the previous dice throws visible in some type of a list UI element.

//HTML:
/* <!DOCTYPE html>
<html>
<head>
    <title>Dice Roll</title>
</head>
<body>
    <button id="rollButton">Roll Dice</button>
    <div id="result"></div>
    <ul id="previousRolls"></ul>

    <script src="dice.js"></script>
</body>
</html> */

//JavaScript (dice.js):
	document.getElementById('rollButton').addEventListener('click', function() {
		let result = rollDice();
		document.getElementById('result').innerText = `You rolled: ${result}`;
		let previousRolls = document.getElementById('previousRolls');
		let listItem = document.createElement('li');
		listItem.innerText = `Rolled: ${result}`;
		previousRolls.appendChild(listItem);
	});

	function rollDice() {
		return Math.floor(Math.random() * 12) + 1;
	}


// 9. Calculate the area of a circle with a diameter of 20cm.
// The area of a circle is calculated: PI * r to the power of 2. PI is approx. 3.14.
// You can use Math.pi to get PI.
// Math.pow can be used to get the power of 2.

	let diameter = 20;
	let radius = diameter / 2;
	let area = Math.PI * Math.pow(radius, 2);
	console.log(area); // Примерно 314.1592653589793
