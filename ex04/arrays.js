const array = [10, "first", 12, 13, 14, "student 5", "student 6"];
console.log(array);
console.log(array[1]);
// for (let i = 0; i < array.length; i++){
//     console.log("in index: " + i + " - value: " + array[i]);
// }

const array2 = [5, 1, 4, 3, 2];
console.log(array2.sort());         //output: [1, 2, 3, 4, 5]



//The at() method returns the same as []
// array.at(index)
console.log(array2.at(2));          //output: 3
console.log(array2[2]);             //output: 3



//The concat() method creates a new array by merging (concatenating) existing arrays
// array1.concat(array2, array3, ..., arrayX)
const myNum = ["1", "2"];
const myLetters = ["A", "B", "C"];
const newArray = myNum.concat(myLetters);
console.log(newArray);              //output: ['1', '2', 'A', 'B', 'C']



//The fill() method fills specified elements in an array with a value
// array.fill(value, start, end)
console.log(myLetters.fill("Kiwi", 1, 3));      //output: ['A', 'Kiwi', 'Kiwi']



//The filter() method creates a new array filled with elements that pass a test provided by a function
// array.filter(function(currentValue, index, arr), thisValue)
const ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
  }
console.log(ages.filter(checkAdult));       //output: [32, 33, 40]



//The find() method returns the value of the first element that passes a test
// array.find(function(currentValue, index, arr),thisValue)
console.log(ages.find(checkAdult));         //output: 32

const myCheck = ages.find(value => value === 16);
console.log(myCheck);                       // Output: 16


            // Array Find Methods:
            // Method	        RETURN
            // indexOf()	    The value of the first element with a specified value
            // lastIndexOf()	The index of the last element with a specified value
            // find()	        The value of the first element that passes a test
            // findIndex()	    The index of the first element that passes a test
            // findLast()	    The value of the last element that passes a test
            // findLastIndex()	The index of the last element that passes a test


//The findIndex() method returns the index (position) of the first element that passes a test
// array.findIndex(function(currentValue, index, arr), thisValue)
let index = ages.findIndex(student);
function student(value){
    return value < 18;
}
console.log(index);         //output: 2
//console.log(ages.findIndex(33));    // !!!ERROR, number 33 is not a function



// The findLast() method returns the value of the last element that passes a test.
const ages2 = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
  }
console.log(ages2.findLast(checkAdult));        //output: 20