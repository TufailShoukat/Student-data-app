
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function TODOLIST() {
  const [count, setCount] = useState(0);
  const [studentList, setStudentList] = useState([]);
  const [studentData, setStudentData] = useState({
    firstName: '',
    fatherName: '',
    rollNo: '',
    teacherName: '',
    days: '',
    course: '',
    campus: ''
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      studentData.firstName && 
      studentData.fatherName && 
      studentData.rollNo && 
      studentData.teacherName && 
      studentData.days && 
      studentData.course && 
      studentData.campus
    ) {
      setStudentList([...studentList, studentData]);
      setStudentData({
        firstName: '',
        fatherName: '',
        rollNo: '',
        teacherName: '',
        days: '',
        course: '',
        campus: ''
      });
      setCount(count + 1);

      Swal.fire({
        icon: 'success',
        title: 'Congrations!',
        text: 'Your data has been added successfully now You are eligible for WMA Course Best Wishes For Future.',
     
        
        confirmButtonText: 'OK'
      });
      
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Sorry!',
        text: 'Please fill in all fields before adding the student.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="todo-container">
      <h1>SMIT STUDENT DATA</h1>

      <form onSubmit={handleSubmit} className="student-form">
        <input
          type="text"
          name="firstName"
          value={studentData.firstName}
          onChange={handleChange}
          placeholder="Student Name"
        />
        <input
          type="text"
          name="fatherName"
          value={studentData.fatherName}
          onChange={handleChange}
          placeholder="Father Name"
        />
        <input
          type="text"
          name="rollNo"
          value={studentData.rollNo}
          onChange={handleChange}
          placeholder="Roll No"
        />
        <input
          type="text"
          name="teacherName"
          value={studentData.teacherName}
          onChange={handleChange}
          placeholder="Trainer Name"
        />
        <input
          type="text"
          name="days"
          value={studentData.days}
          onChange={handleChange}
          placeholder="Days"
        />
        <input
          type="text"
          name="course"
          value={studentData.course}
          onChange={handleChange}
          placeholder="Course"
        />
        <input
          type="text"
          name="campus"
          value={studentData.campus}
          onChange={handleChange}
          placeholder="Campus"
        />
        <h1>STUDENT TOTAL ADDED: <span>{count}</span></h1>
        <button type="submit">ADD STUDENT</button>
      </form>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Roll No</th>
            <th>Trainer Name</th>
            <th>Days</th>
            <th>Course</th>
            <th>Campus</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.fatherName}</td>
              <td>{student.rollNo}</td>
              <td>{student.teacherName}</td>
              <td>{student.days}</td>
              <td>{student.course}</td>
              <td>{student.campus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TODOLIST;

