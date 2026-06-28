function StudentCard({ student }) {
  return (
    <div className="card">
      <h3>
        {student.name} {student.surname}
      </h3>

      <p>
        <b>Yaşı:</b> {student.age}
      </p>

      <p>
        <b>Əlaqə nömrəsi:</b> {student.phone}
      </p>

      <p>
        <b>Cinsi:</b> {student.gender}
      </p>

      <p>
        <b>Bildiyi dillər:</b>{" "}
        {student.languages.length > 0
          ? student.languages.join(", ")
          : "Yoxdur"}
      </p>

      <p>
        <b>Başqa dil bilirmi:</b>{" "}
        {student.knowsOtherLanguage || "Xeyr"}
      </p>
    </div>
  );
}

export default StudentCard;