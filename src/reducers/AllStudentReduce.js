import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchStudentsAsync = createAsyncThunk(`All Student`, async () => {
  try {
    const { data } = await axios.get(`/api/students`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const createStudentAsync = createAsyncThunk( `Create Student`, async ({firstName, lastName, email, gpa}) => {
  const { data } = await axios.post(`/api/students`, {
    firstName,
    lastName,
    email,
    gpa
  });
  return data;
});

// export const deleteStudentAsync = createAsyncThunk(`Delete Student`, async (id) => {
//     const { data } = await axios.delete(`/api/students${id}`);
//     return data;
// });

const studentsSlice = createSlice({
    name: "students",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(createStudentAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      // builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      //   return {};
      // });
    },
  });
  
  export const selectStudents = (state) => {
    return state.students;
  };
  
  export default studentsSlice.reducer;