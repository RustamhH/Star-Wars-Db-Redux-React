import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Film = () => {
  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details">
      <p className="details-txt"><b>Title:</b> {state.title}</p>
      <p className="details-txt"><b>Director:</b> {state.director}</p>
      <p className="details-txt"><b>Release Date:</b> {state.release_date}</p>
      <p className="details-txt"><b>Producers:</b> {state.producers}</p>
      <p className="details-txt"><b>Episode Id:</b> {state.episode_id}</p>
      <button className='backbutton' onClick={() => navigate("/films")}>Back</button>
    </div>
  );
};

export default Film;