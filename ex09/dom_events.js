function pow2(num1){
    console.log(num1 + num1)
}
pow2(1);

function sayHello(){
    const info = document.getElementById("info").innerHTML = "Hello from function sayHello";
}

function changeText(id) {
    id.innerHTML = "We did it!";
}

function printInput() {
    // Get the value entered in the input field
    var inputValue = document.getElementById("inputID").value;
    // Get the reference to the div where the output will be printed
    var outputDiv = document.getElementById("divID");
    // Print the input value into the output div
    outputDiv.textContent = inputValue;
}

document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });

const secondButton = document.getElementById("myBtn2");
secondButton.addEventListener("click", function() {
    document.getElementById("secondBtnDiv").innerHTML = "Hello! We changed it";
});