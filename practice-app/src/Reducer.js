export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allStudents = [...state.studentData, action.payload];
    return {
      ...state,
      studentData: allStudents,
      isMessage: true,
      messageText: "New Student added"
    };
  }

  if (action.type === "Remove") {
    const filteredStudents = [...state.studentData].filter((student) => student.id !== action.payload);
    return {
      ...state,
      studentData: filteredStudents,
      isMessage: true,
      messageText: "Student removed"
    };
  }

  if (action.type === "HideMessage") {
    return {
      ...state,
      isMessage: false,
      messageText: ""
    };
  }
}