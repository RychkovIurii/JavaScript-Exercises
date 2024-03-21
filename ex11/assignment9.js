// update spn, if usee types
document.getElementById("infoID").oninput = function() {
    document.getElementById("spn").innerHTML = "";
}

// validate input
function addData(){
    const userName = document.getElementById("infoName").value;
    const userID = document.getElementById("infoID").value;
    const billAmount = document.getElementById("infoAmount").value;
    const spn = document.getElementById("spn");
    if (userName === ""){
        alert("Enter your name");
        return false;
    }
    else if (userID === ""){
        spn.innerHTML = "Please enter a valid ID";
        return false;
    }
    else if (billAmount === "") {
        alert("Enter your bill amount");
        return false;
    }
    saveStudentData(userName, userID, billAmount);
    return false; // not sure
}

// show 
function displayStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentDataDiv = document.getElementById('studentData');
    studentDataDiv.innerHTML = '';
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const studentDiv = document.createElement('div');
        studentDiv.innerHTML = `Name: ${student.name}, ID: ${student.id}, Bill: ${student.bill}
                                <button onclick="deleteStudent('${student.id}')">Delete</button>`;
        studentDataDiv.appendChild(studentDiv);
    }
}

// delete
function deleteStudent(studentID) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students = students.filter(student => student.id !== studentID);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

// save data
function saveStudentData(userName, userID, billAmount) {
    // create an object
    const student = {
        id: userID,
        name: userName,
        bill: billAmount
    }

    // add or update
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const existingIndex = students.findIndex(s => s.id === userID);
    if (existingIndex > -1) {
        students[existingIndex] = student;
    } else {
        students.push(student);
    }

    // transorm to JSON
    localStorage.setItem('students', JSON.stringify(students));

    // show data
    displayStudents();
}