import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCampusAsync, deleteCampusAsync } from "../reducers/AllCampusReduce";

const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createCampusAsync({ name, address, description }));
    setName("");
    setAddress("");
    setDescription("")
  };

  // const handleDelete = async () => {
  //   await dispatch(deleteCampusAsync(id));
  //   Navigate("/");
  // };

  return (
    <form id="campus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
        name="adress"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
  //   <div className="delete-button">
  //   <button onClick={handleDelete}>Delete</button>
  // </div>
  );
};

export default CreateCampus;