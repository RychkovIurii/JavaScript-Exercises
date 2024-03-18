console.log(this);

// Finding HTML Elements
// document.getElementById(id)	            Find an element by element id
// document.getElementsByTagName(name)	    Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name


// Changing HTML Elements
// Property	                                Description
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	        Change the attribute value of an HTML element
// element.style.property = new style	    Change the style of an HTML element
// Method	                                Description
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element


// Adding and Deleting Elements
// Method	                            Description
// document.createElement(element)	    Create an HTML element
// document.removeChild(element)	    Remove an HTML element
// document.appendChild(element)	    Add an HTML element
// document.replaceChild(new, old)	    Replace an HTML element
// document.write(text)	                Write into the HTML output stream


// Adding Events Handlers
// Method	Description
// document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event

document.getElementById("info").innerHTML = "Hello from getElementById";
//document.getElementById("info").innerText = "Hello from getElementById";

document.getElementById("Varia").innerHTML = "MAK 23";

const changeYear = 2025
const year = document.getElementById("year");
    year.innerHTML = "year.innerHTML = " + changeYear;


// document.getElementById !!! returns a collection of elements, not a single element
const useFunction = document.getElementById("useFunction");
const sqrt = function(num){
    return num * num;
}
const result = sqrt(5);
useFunction.innerHTML = "useFunction.innerHTML = " + result;



const findClass = document.getElementsByClassName("byClass");
for (let i = 0; i < findClass.length; i++) {
    findClass[i].innerHTML = "findClass.innerHTML";
}
console.log(findClass);      // output: HTMLCollection(2) [div.byClass, div.byClass]

//const findClass = document.querySelector(".byClass");
//findClass.innerHTML = "findClass.innerHTML";


const classInfo1 = document.getElementsByClassName("info1");
console.log(classInfo1);     // output: HTMLCollection(2) [div.info1, h4.info1]
classInfo1[1].innerHTML = "Heading new info1 container" 

const byTag = document.getElementsByTagName("p");
console.log(byTag[0]);      // output:  <p> paragraph container</p>
byTag[0].style.color = "green";
console.log(byTag[0]);      // output:  <p style = "color: green;"> paragraph container</p>

const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);  // output: HTMLCollection(4) [p, p, p, p]
for (i=1; i<allParagraphs.length; i++){
    allParagraphs[i].style.color = "blue";  
}

const qselect = document.querySelector("h4");
console.log(qselect);  // output: <h4 id="useFunction">useFunction.innerHTML = 25</h4>
const schoolSelector = document.querySelector("#school");
console.log(schoolSelector);
const qselectAll = document.querySelectorAll("p");
qselectAll[0].style.color = "yellow";
schoolSelector.style.color = "red";


// element.attribute
const anchor = document.querySelector("a");
anchor.innerHTML = "DuckDuckGo";
anchor.href = "https://duckduckgo.com/";
