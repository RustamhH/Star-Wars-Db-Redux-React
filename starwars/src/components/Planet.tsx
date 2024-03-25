import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Planet = () => {
  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details">
      <p className="details-txt"><b>Name:</b> {state.name}</p>
      <p className="details-txt"><b>Population:</b> {state.population}</p>
      <p className="details-txt"><b>Terrain:</b> {state.terrain}</p>
      <p className="details-txt"><b>Climate:</b> {state.climate}</p>
      <p className="details-txt"><b>Diameter:</b> {state.diameter}</p>
      <p className="details-txt"><b>Gravity:</b> {state.gravity}</p>
      <p className="details-txt"><b>Orbital Period:</b> {state.orbital_period}</p>
      <p className="details-txt"><b>Rotation Period:</b> {state.rotation_period}</p>
      <p className="details-txt"><b>Surface Water:</b> {state.surface_water}</p>
      <button className='backbutton' onClick={() => navigate("/planets")}>Back</button>
    </div>
  );
};

export default Planet;