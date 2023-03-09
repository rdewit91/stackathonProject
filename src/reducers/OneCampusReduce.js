import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOneCampus = createAsyncThunk(
  "oneCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCampusAsync = createAsyncThunk(
  `Delete Campus`, 
  async (id) => {
    try {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const fetchCampusStudents = createAsyncThunk(
//   "singleCampusStudents",
//   async (id) => {
//     try {
//       const { data } = await axios.get(`/api/campuses/${id}/students`);
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const initialState = {
  info: {},
  // students: [],
};

const oneCampusSlice = createSlice({
  name: "oneCampus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneCampus.fulfilled, (state, action) => {
        state.info = action.payload;
      });
      builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
        return {};
      });
  },
});

export const selectOneCampus = (state) => {
  return state.oneCampus;
};

export default oneCampusSlice.reducer;