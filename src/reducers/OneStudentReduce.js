import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOneStudent = createAsyncThunk(
  "oneStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteStudentAsync = createAsyncThunk(
  `Delete Student`, 
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/students/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
});

// export const fetchStudentCampuses = createAsyncThunk(
//   "singleCampusStudents",
//   async (id) => {
//     try {
//       const { data } = await axios.get(`/api/students/${id}/campuses`);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const initialState = {
  info: {},
  // campuses: [],
};

const oneStudentSlice = createSlice({
  name: "oneStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneStudent.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
        return {};
      });
  },
});

export const selectOneStudent = (state) => {
  return state.oneStudent;
};

export default oneStudentSlice.reducer;