import React from "react";
import { useSelector } from "react-redux";
import { selectStudents } from "../reducers/AllStudentReduce";
import { NavLink } from "react-router-dom";
import { CreateStudent } from "./Index"

const AllStudent = () => {
  const students = useSelector(selectStudents)
  
  return (
    <div>
      <h1 id="allStuHead">All Students</h1>
      <CreateStudent/>
      {students && students.length ? students.map((student) => (
        <div key={student.id} >
          <NavLink to={`/students/${student.id}`} >
            <div className="student row">
              <img src={student.imageUrl} />
              <h2>{student.firstName} {student.lastName}</h2>
            </div>
          </NavLink>
        </div>
          ))
        : null}
        
    </div>
  );
};

export default AllStudent;