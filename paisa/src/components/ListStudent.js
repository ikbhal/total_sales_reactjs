import { getAllStudents } from "../store";
import StudentItem from "./StudentItem";
export default function ListStudent() {

    var students = getAllStudents();
    var studentComponentList =  students.map(
        student =>
        <StudentItem student={student}/>
    );
    return (
        <div>
            <h3>List of Students</h3>
            <hr/>
            {studentComponentList}
        </div>
    );
}