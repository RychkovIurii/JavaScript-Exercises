// 1. 
// a) Write a function that takes a JSON string as input and returns
// the parsed object. Use a try catch block to catch any 
// errors during parsing and print the error message using console.error.
// If the parsing is successful, return the parsed object.
// b) Add a console warning before the parsing begins.

function parseJSON(jsonString) {
    console.warn("Starting to parse JSON string");
    try {
        let parsedObject = JSON.parse(jsonString);
        return parsedObject;
    } catch (error) {
        console.error("Error parsing JSON string:", error.message);
    }
}

// Пример использования:
const jsonString = '{"name": "John", "age": 30}';
const result = parseJSON(jsonString);
console.log(result); // {name: "John", age: 30}

const invalidJsonString = '{"name": "John", "age": 30';
const invalidResult = parseJSON(invalidJsonString); // Ошибка в консоли

// 2.
// a)
// Create a function that validates user input. The function
// should check if the input is a non-empty string.
// If the input isn't a non-empty string, throw a TypeError along with
// an error message. Place a try catch block around the function call and
// log the error using console.error.
// If the input is valid, log an appropriate message.
// b)
// Add a finally block that indicates that input validation is complete.


function validateInput(input) {
    try {
        if (typeof input !== 'string' || input.trim() === '') {
            throw new TypeError("Input must be a non-empty string");
        }
        console.log("Valid input:", input);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Input validation complete");
    }
}

// Пример использования:
validateInput("Hello, World!"); // Valid input
validateInput(""); // Ошибка в консоли


// 3.
// Write a function that simulates processing a user's information.
// Using Math.random, make the function randomly work and not work correctly.
// Throw a TypeError for invalid types and RangeError for invalid values
// (for example invalid age).
// Use a try catch block to catch these errors by logging different 
// messages for each type of error using console.error.

function processUserInfo(user) {
    try {
        if (typeof user.name !== 'string') {
            throw new TypeError("Invalid type for name");
        }
        if (typeof user.age !== 'number' || user.age < 0 || user.age > 120) {
            throw new RangeError("Invalid value for age");
        }
		//Симуляция ошибок
        if (Math.random() > 0.5) {
            throw new Error("Random processing error");
        }
        console.log("User information processed successfully");
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("TypeError:", error.message);
        } else if (error instanceof RangeError) {
            console.error("RangeError:", error.message);
        } else {
            console.error("Error:", error.message);
        }
    }
}

// Пример использования:
processUserInfo({name: "John", age: 30}); // Может быть успешно или вызывать ошибку
processUserInfo({name: "John", age: -5}); // RangeError
processUserInfo({name: 123, age: 30}); // TypeError


// 4.
// a)
// Using a loop, create an array that contains over 1000 elements.
// Create another array that contains 500 elements. You can use a function 
// or just loops.
// Create a third, empty array.

// b)
// Write a function that sums array elements. Use a parameter for the array.
// If the array length is over 1000, log a warning to the console that warns
// about potential performance issues.
// Proceed with the calculation and return the sum.
// Test your function with all 3 arrays.

const largeArray = Array.from({ length: 1001 }, (_, i) => i);
const mediumArray = Array.from({ length: 500 }, (_, i) => i);
const emptyArray = [];

console.log(largeArray); // [0, 1, 2, ..., 1000]

// b) Функция для суммирования элементов массива

function sumArrayElements(arr) {
    if (arr.length > 1000) {
        console.warn("Array length exceeds 1000 elements. This may cause performance issues.");
    }
    return arr.reduce((sum, value) => sum + value, 0);
}

// Пример использования:
console.log(sumArrayElements(largeArray)); // Сумма элементов
console.log(sumArrayElements(mediumArray)); // Сумма элементов
console.log(sumArrayElements(emptyArray)); // 0


// 5.
// a)
// Write a series of simple functions that call one another and log messages to the console.
// First -> Second -> Third..
// Create at least 3 functions. Observe the order of messages and how they are displayed in the console.

function first() {
    console.log("First function called");
    second();
}

function second() {
    console.log("Second function called");
    third();
}

function third() {
    console.log("Third function called");
}

first();
// Output:
// First function called
// Second function called
// Third function called


// b)
// Modify the functions to include a deliberate error in the last function.
// This could be a reference to an undefined variable or something else.
// Observe the error message in the console when the code is running.
// Check how the stack trace works.

function first() {
    console.log("First function called");
    second();
}

function second() {
    console.log("Second function called");
    third();
}

function third() {
    console.log("Third function called");
    nonExistentFunction(); // Ошибка
}

try {
    first();
} catch (error) {
    console.error("Caught an error:", error.message);
}
// Output:
// First function called
// Second function called
// Third function called
// Ошибка в консоли


// 6.
// Cause a stack overflow error by creating a recursive function
// (a function that calls itself)
// that never stops. Try to catch this error and display a custom error message.

function recursiveFunction() {
    try {
        return recursiveFunction();
    } catch (error) {
        console.error("Stack overflow detected! Custom error message.");
    }
}

recursiveFunction();
// Ошибка в консоли
