import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div>
      {students.length === 0 ? (
        <h3>Hələ heç bir tələbə qeydiyyatdan keçməyib.</h3>
      ) : (
        students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;