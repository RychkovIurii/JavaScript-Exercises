var name = "student-1";

//The charAt() method returns the character at a specified index (position) in a string
console.log(name.charAt(3));    //output:   d
console.log(name[3]);           //output:   d
console.log(name.at(3));        //output:   d

//concat() joins two or more strings:
var string2 = "student-2";
var string3 = "student-3";
console.log(name.concat(string2, string3));                  //output: student-1student-2student-3
console.log(name.concat(", ", string2, ", ", string3));      //output: student-1, student-2, student-3

// The includes() method returns true if a string contains a specified value
var text = "Hello world, welcome to the universe.";
console.log(text.includes("world"));        //output: true
    //Check if a string includes "world". Start at position 12
    console.log(text.includes("world", 12));    //output: false

// The endsWith() method returns true if a string ends with a specified value
// !!!The endsWith() method is not supported in Internet Explorer.
var text = "We learn JS";
console.log(text.endsWith("JS"));            //output: true
    // Check if the 11 first characters of a string ends with "world"
    var text = "Hello world, welcome to the universe.";
    console.log(text.endsWith("world", 11));    //output: true

// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
// Both methods accept a second parameter as the starting position for the search.
var text = "We learn JS. I learn Python also.";
var index = text.indexOf("learn");
console.log(index);                             //output: 3
    //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
    let index2 = text.lastIndexOf("learn");
    console.log(index2);                        //output: 15

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// !!!The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
var text = "We learn JS. I learn Python also.";
var index = text.search(/learn/);
console.log(index);                             //output: 3

// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
var text = "Hello JS!";
var result = text.repeat(3);
console.log(result);                            //output: Hello JS!Hello JS!Hello JS!

// The replace() method replaces a specified value with another value in a string.
// only the first match, returns a new string, does not change the string it is called on.
var text = "Hello JS! I like JS";
var result = text.replace("JS", "Python");
console.log(result);                            //output: Hello Python! I like JS
    // replaceAll()
    var text = "Hello JS! I like JS";
    var result = text.replaceAll("JS", "Python");
    console.log(result);                        // output: Hello Python! I like Python

// A string can be converted to an array with the split() method
var text = "Hello, JS! I like JS";
var result = text.split(",")    // Split on commas
console.log(result);                               // output: (2) ['Hello', ' JS! I like JS']
var result = text.split(" ")    // Split on spaces
console.log(result);                               // output: (5) ['Hello,', 'JS!', 'I', 'like', 'JS']
var result = text.split("|")    // Split on pipe
console.log(result);                               // output: ['Hello, JS! I like JS']
var result = text.split("")     // array of single characters
console.log(result);                               // output: (20) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'J', 'S', '!', ' ', 'I', ' ', 'l', 'i', 'k', 'e', ' ', 'J', 'S']
