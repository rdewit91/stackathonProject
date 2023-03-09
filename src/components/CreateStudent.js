import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStudentAsync, deleteStudentAsync } from "../reducers/AllStudentReduce";

const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createStudentAsync({ firstName, lastName, email, gpa}));
    setFirstName("");
    setLastName("");
    setEmail("")
    setGpa("")
  };

  // const handleDelete = async () => {
  //   await dispatch(deleteStudentAsync(id));
  //   Navigate("/");
  // };

  return (
    <form id="student-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="gpa">GPA:</label>
        <input
        name="gpa"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
      />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  //   <div className="delete-button">
  //   <button onClick={handleDelete}>Delete</button>
  // </div>
  );
};

export default CreateStudent;