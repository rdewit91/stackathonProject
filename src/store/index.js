/* Here is where you will configure the store 

*/ 
import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from '../reducers/AllCampusReduce';
import studentsSlice from '../reducers/AllStudentReduce';
import oneStudentSlice from "../reducers/OneStudentReduce";
import oneCampusSlice from "../reducers/OneCampusReduce";




const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
    oneStudent: oneStudentSlice,
    oneCampus: oneCampusSlice
  },
});

export default store;