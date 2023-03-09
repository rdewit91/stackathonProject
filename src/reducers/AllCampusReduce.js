import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCampusessAsync = createAsyncThunk(`All Campus`, async () => {
  try {
    const { data } = await axios.get(`/api/campuses`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const createCampusAsync = createAsyncThunk( `Create Campus`, async ({ name, address, description}) => {
    const { data } = await axios.post(`/api/campuses`, {
      name,
      address,
      description
    });
    return data;
  }
);

// export const deleteCampusAsync = createAsyncThunk(`Delete Camus`, async (id) => {
//     const { data } = await axios.delete(`/api/campuses${id}`);
//     return data;
// });

const campusesSlice = createSlice({
    name: "campuses",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCampusessAsync.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(createCampusAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      // builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
      //   return {};
      // });
    },
  });
  
  export const selectCampuses = (state) => {
    return state.campuses;
  };
  
  export default campusesSlice.reducer;