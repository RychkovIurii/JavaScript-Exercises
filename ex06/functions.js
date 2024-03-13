function printName(name) {
    console.log("Hello " + name);
    document.write("Have a good day " + name + "!<br>");    
}

let your_name = prompt("What is your name?");
printName("Iurii");
printName(your_name);

function sumOfTwo(a, b){
    let result = a + b;
    return result;
}

const result = sumOfTwo(5, 3);
document.write(result);