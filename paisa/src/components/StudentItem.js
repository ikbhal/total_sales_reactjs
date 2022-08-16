
export default function StudentItem({student}){
    
    return (
        <div>
            Name: {student.name}  <br/>
            Mobile Number: {student.mobileNumber} <br/>
            Course: {student.course} <br/>
            Notes: {student.notes} <br/>
        </div>
    );
}