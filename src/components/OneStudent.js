import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectOneStudent, fetchOneStudent, deleteStudentAsync, fetchStudentCampuses } from '../reducers/OneStudentReduce'


const OneStudent = () => {
  const { studentId } = useParams();

  const oneStudent = useSelector(selectOneStudent);
  const { firstName, lastName, email, imageUrl, gpa } = oneStudent.info;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneStudent(studentId));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteStudentAsync(studentId))
    navigate("/students");
  }

  return (
    <div id="single-student" className="column" >
      <div id="single-student-detail" className="row">
        <div className="column mr1">
            <img src={imageUrl} />
            <h2>{firstName} {lastName}</h2>
            <h3>{email}</h3>
            <h3>{gpa}</h3>
        </div>
      </div>

      {/* <div id="single-student-nav">
        <NavLink to={`/students/${id}/campuses`}>Campuses</NavLink>
      </div>
      <hr />
      <Routes>
        <Route path="/campuses" element={<CampusList campuses={campuses} />} />
      </Routes> */}

      <div className="delete-button">
        <button onClick={handleDelete}>Delete</button>
      </div>

    </div>
  );
};

export default OneStudent;
