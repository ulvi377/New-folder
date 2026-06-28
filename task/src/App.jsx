

import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const registerStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container">
      <div className="left">
        <StudentForm registerStudent={registerStudent} />
      </div>

      <div className="right">
        <h2>Qeydiyyatdan keçən tələbələr</h2>
        <StudentList students={students} />
      </div>
    </div>
  );
}

export default App;