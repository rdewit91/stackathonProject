import React from "react";
import { useSelector } from "react-redux";
import { selectCampuses } from "../reducers/AllCampusReduce";
import { NavLink } from "react-router-dom";
import { CreateCampus } from "./Index";

const AllCampus = () => {
  const campuses = useSelector(selectCampuses);
  return (
    <div>
      <h1 id="allCamHead">All Campuses</h1>
      <CreateCampus/>
      {campuses && campuses.length ? campuses.map((campus) => (
        <div key={campus.id} > 
          <NavLink to={`/campuses/${campus.id}`} >
            <div className="campus row">
              <img src={campus.imageUrl} />
              <h2>{campus.name}</h2>
            </div>
          </NavLink>
        </div>
          ))
        : null}
    </div>
  );
};

export default AllCampus;
