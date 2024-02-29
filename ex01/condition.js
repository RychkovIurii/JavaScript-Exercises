var price = 1050;
var color = "black";
if (price < 1000 || color === "black"){
    console.log("buy iphone")
}
else if (price < 800 && color !== "white"){
    document.write("buy samsung")
}
else{
    alert("save money")
}

var age = prompt("What is your age?");
age = parseInt(age);
alert("Your age is " + age);
switch(true){
    case age < 14:
        alert("You should wait a bit");
        break;
    case age >= 14 && age < 18:
        alert("Welcome to the course, bring a letter from parents");
        break;
    default:
        alert("Welcome to the course");
}