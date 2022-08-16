var students = [];

function addStudent(student) {
    console.log("adding student ", student);
    students.push(student);
    console.log("students:", students);
}

function getAllStudents(){
    return students;
}

export {addStudent, getAllStudents};