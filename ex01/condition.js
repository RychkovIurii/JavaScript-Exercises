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
age = parseInt(age); // age = Number(age);
alert("Your age is " + age);
switch(true){
    case age < 14:
        alert("You should wait a bit");
        break;
    case age > 14 && age < 18:
        alert("Welcome to the course, bring a letter from parents");
        break;
    case age === 14:
        alert("Welcome to the course, bring a letter from parents and your id");
        break;
    default:
        alert("Welcome to the course");
}

//!we could do it without cast. Ex. age == 14. In this case "14" == 14. === compares types also!

//document.write("<h1 style='background-color: gray; height: 300px; width: 200px'>adding some background color or style<\h1>")
