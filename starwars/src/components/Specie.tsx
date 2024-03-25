import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Specie = () => {
  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details">
      <p className="details-txt"><b>Name:</b> {state.name}</p>
      <p className="details-txt"><b>Classification:</b> {state.classification}</p>
      <p className="details-txt"><b>Avg.Height:</b> {state.average_height}</p>
      <p className="details-txt"><b>Avg.Lifespan:</b> {state.average_lifespan}</p>
      <p className="details-txt"><b>Designation:</b> {state.designation}</p>
      <p className="details-txt"><b>Eye Colors:</b> {state.eye_colors}</p>
      <p className="details-txt"><b>Hair Colors:</b> {state.hair_colors}</p>
      <p className="details-txt"><b>Language:</b> {state.language}</p>
      <p className="details-txt"><b>Skin Colors:</b> {state.skin_colors}</p>
      <button className='backbutton' onClick={() => navigate("/species")}>Back</button>
    </div>
  );
};

export default Specie;