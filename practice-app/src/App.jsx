import { useState, useReducer, useEffect } from "react";
import { reducer } from "./Reducer";

const students = [
  {id:1, name:"Safiq"},
  {id:2, name:"Rafiq"}
];



function App() {
  // const [studentData, setStudentData] = useState(students);
  // const [isMessage, setIsMessage] = useState(false);
  // const [messageText, setMessageText] = useState("");
  const [studentPage, dispatch] = useReducer(reducer, {
    studentData: students,
    isMessage: false,
    messageText: ""
  });
  const [newStudent, setNewStudent] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();

    // setStudentData((prevData) => [
    //   ...prevData,
    //   {id: new Date().getTime().toString(), name:newStudent}
    // ]);
    // setMessageText("New Student Added");
    // setIsMessage(true);

    
    const newStudentObj = { id: new Date().getTime().toString(), name: newStudent };
    dispatch({ type: "ADD", payload: newStudentObj });

    setNewStudent("");

  }

  const handleRemoveSudent = (id) => {
    dispatch({
      type: "Remove",
      payload: id
    })
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: "HideMessage",payload:null})
    }, 5000);
  },[studentPage.isMessage,studentPage.messageText])

  return (
    <>
      <h1 className="mb-5">useReducer Practice</h1>
      
      <h3>Student Add Form</h3>
      <form onSubmit={handleFormData}>
        <input type="text" placeholder="Enter Name" value={newStudent} onChange={(e) => setNewStudent(e.target.value)} />
        <button type="submit">Add</button>
      </form>     

      <h3 className="mt-4">Students List</h3>
      <ol>
        {studentPage.studentData?.map((student) => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleRemoveSudent(student.id)}>Remove</button>
          </li>
        ))}
      </ol>


      {studentPage.isMessage && <small className="text-success position-fixed bottom-0 end-0">{ studentPage.messageText }</small>}
    </>
  );
}

export default App