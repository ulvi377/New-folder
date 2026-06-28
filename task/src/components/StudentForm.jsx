import { useState } from "react";

function StudentForm({ registerStudent }) {
  const [student, setStudent] = useState({
    name: "",
    surname: "",
    age: "",
    phone: "",
    gender: "",
    knowsOtherLanguage: "",
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleLanguage = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setStudent({
        ...student,
        languages: [...student.languages, value],
      });
    } else {
      setStudent({
        ...student,
        languages: student.languages.filter(
          (language) => language !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      ...student,
      name:
        student.name.charAt(0).toUpperCase() +
        student.name.slice(1).toLowerCase(),

      surname:
        student.surname.charAt(0).toUpperCase() +
        student.surname.slice(1).toLowerCase(),
    };

    registerStudent(newStudent);

    setStudent({
      name: "",
      surname: "",
      age: "",
      phone: "",
      gender: "",
      knowsOtherLanguage: "",
      languages: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ad"
        name="name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Soyad"
        name="surname"
        value={student.surname}
        onChange={handleChange}
      />

      <input
        type="number"
        placeholder="Yaş"
        name="age"
        value={student.age}
        onChange={handleChange}
      />

      <input
        type="tel"
        placeholder="Əlaqə nömrəsi"
        name="phone"
        value={student.phone}
        onChange={handleChange}
      />

      <h4>Cins</h4>

      <label>
        <input
          type="radio"
          name="gender"
          value="Kişi"
          checked={student.gender === "Kişi"}
          onChange={handleChange}
        />
        Kişi
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Qadın"
          checked={student.gender === "Qadın"}
          onChange={handleChange}
        />
        Qadın
      </label>

      <h4>Bildiyi dillər</h4>

      <label>
        <input
          type="checkbox"
          value="Azərbaycan"
          checked={student.languages.includes("Azərbaycan")}
          onChange={handleLanguage}
        />
        Azərbaycan
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="İngilis"
          checked={student.languages.includes("İngilis")}
          onChange={handleLanguage}
        />
        İngilis
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="Rus"
          checked={student.languages.includes("Rus")}
          onChange={handleLanguage}
        />
        Rus
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="Türk"
          checked={student.languages.includes("Türk")}
          onChange={handleLanguage}
        />
        Türk
      </label>

      <h4>Başqa dil bilirmi?</h4>

      <label>
        <input
          type="radio"
          name="knowsOtherLanguage"
          value="Bəli"
          checked={student.knowsOtherLanguage === "Bəli"}
          onChange={handleChange}
        />
        Bəli
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="knowsOtherLanguage"
          value="Xeyr"
          checked={student.knowsOtherLanguage === "Xeyr"}
          onChange={handleChange}
        />
        Xeyr
      </label>

      <br />
      <br />

      <button type="submit">
        Tələbəni qeydiyyatdan keçir
      </button>
    </form>
  );
}

export default StudentForm;