import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectOneCampus, fetchOneCampus, deleteCampusAsync, fetchCampusStudents } from '../reducers/OneCampusReduce'

const OneCampus = () => {
  const { campusId } = useParams();

  const oneCampus = useSelector(selectOneCampus);
  const { name, imageUrl, address, description } = oneCampus.info;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCampus(campusId));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteCampusAsync(campusId))
    navigate("/campuses");
  }

  return (
    <div id="one-campus" className="column">
      <div id="one-campus-detail" className="row">
        <div className="column mr1">
        <img src={imageUrl} />
          <h2>{name}</h2>
          <h3>{address}</h3>
          <h3>{description}</h3>
        </div>
      </div>

      <div className="delete-button">
          <button onClick={handleDelete}>Delete</button>
      </div>

    </div>
  );
};

export default OneCampus;