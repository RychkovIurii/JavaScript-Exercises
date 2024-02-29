/*JavaScript Exercises-1 conditions. Prompts the user to enter the name of the recipient.
Checks if the name is "mmm, "qqq”, or "hhhh". If so, it will display a message that 
this recipient is not allowed, add the message background color of red.
If the name is allowed, it will then prompt the user for the amount of money they want to send.
Checks if the amount is greater than 2000. If so, it will display a message that such 
an amount cannot be sent.If the amount is within the limit, it will display a message 
confirming the transaction, add background color of green.*/
var name = prompt("What is your name?");

switch(true){
    case name == "mmm" || name == "hhhh" || name =="qqq":
        document.write("<h3 style='width: 300px; background-color: red; border: 1px solid #ccc; \
        border-radius: 5px'>The " + name + " is not allowed</h3>");
        break;
    default:
        var amount = prompt("What is the amount that you want to send?")
        if (amount > 2000){
            alert("It is too much. You can send less than 2000");
        }
        else{
            document.write("<h3 style='width: 300px; background-color: green; \
            border: 1px solid #ccc; border-radius: 5px'>SUCCESS</h3>");
        }
}
