
// to imort package in node.js 
// express package
// require function 
    // take package name input
    // load the package 
const { response } = require('express');
var express = require('express');

var student = {
    name: 'Laxmi',
    rollNumber: 101
};

var studentList = [];

var app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));
app.use(express.json());

// http://localhost:3001/hello
app.get('/hello', function(request, response){
    response.send("how are you laxmi");
});
// get the student -  laxmi
app.get('/get_all_students', function(req, res){
    res.json(studentList);
});

app.get('/students/:rollNumber', function(req, res){
    var rollNumber = req.params.rollNumber;
    for(var i =0;i<studentList.length;i++){
            var oneStudent = studentList[i];
            if(oneStudent.rollNumber == rollNumber ){
                return res.json(oneStudent);
            }
    }

    return res.json({"message": "no result"});
});

app.get('/delete_student/:rollNumber', function(req, res){
    var rollNumber = req.params.rollNumber;
    for(var i =0;i<studentList.length;i++){
        var oneStudent = studentList[i];
        if(oneStudent.rollNumber == rollNumber ){
            
            studentList.splice(i, 1);
            return res.json({'message': 'delete successful'});
            break;
        }
    }
    return res.json({'message': 'not found'});
});

app.post('/students', function(req, res){
    var roll_number = req.body.roll_number;
    var name = req.body.name;

    var newStudent = {
        rollNumber: roll_number,
        name: name
    };
    studentList.push(newStudent);

    res.send("response received  " 
        + "roll_number:" +  roll_number 
        + ", name:" + name);
})


// app.get('/students', getStudentList);
console.log('Starting server on port 3001');
app.listen(3001);