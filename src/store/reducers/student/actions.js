export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const removeStudent = (studentId) => ({
  type: REMOVE_STUDENT,
  payload: studentId,
});
