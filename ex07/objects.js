const someObject = {
    name: "Iurii", 
    age: 52
}

const person = {
    firstName: "Joe", 
    lastName: "Smith",
    location: {city: "Helsinki"},
    country: "Finland", 
    fullName: function() {
        return this.firstName + " " + this.lastName;
      }
}
console.log(person.firstName);          // output: Joe

const group = {
    object1:{
        name:"Jussi",
        age: 40, 
        location: "Helsinki"
    }, 
    object2:{
        name:"Tuomas",
        age: 30, 
        location: "Vantaa"
    }, 
    object3:{
        name:"Jaakko",
        age: 20, 
        location: "Kerava"
    }
}

console.log(group.object2);         // output: {name: 'Tuomas', age: 30, location: 'Vantaa'}
console.log(group.object2.name);    // output: Tuomas

group.object2.name = "Leo";
console.log(group.object2.name);    // output: Leo

let employee = [];
function addEmployee(id, name, salary){
    employee.push({id, name, salary})
}

addEmployee(1, "Jussi Mak", 3000);
console.log(employee);
console.log(employee[0]);
console.log(employee[0].name);
addEmployee(2, "Alex T", 3500);
console.log(employee[1].name);

function getId(array) {
    array.forEach(function(emp) {
        console.log(emp.id);
    });
}

getId(employee);

employee.forEach(function(emp) {
    console.log(emp.id);
});

function employeeInfo() {
    employee.forEach((value) => {
        console.log("ID is " + value.id + ". Name is " +  value.name + ". Salary is " + value.salary);
    })
}

employeeInfo();

function updateEmployeeInfo(id){
    const index = employee.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employee[index].salary = 4000;
    } 
    else {
        console.log("Employee not found");
    }
}
updateEmployeeInfo(2);
console.log(employee[1]);

function updateEmployeeInfo1(id, newSalary){
    const foundEmployee = employee.find(value => {
        return value.id === id
    });
    if (foundEmployee) {
        foundEmployee.salary = newSalary;
    } 
    else {
        console.log("Employee not found");
    }
}
updateEmployeeInfo1(2, 6000);
console.log(employee[1]);

function deleteEmployeeInfo(id){
    const index = employee.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employee.splice(index, 1);
        console.log("Employee deleted");
    } else {
        console.log("Employee not found");
    }
}
deleteEmployeeInfo(1);
console.log(employee);

function deleteEmployeeInfo1(id){
    employee = employee.filter((value) => {
        return value.id !== id;
    })
}
deleteEmployeeInfo1(2);
console.log(employee);