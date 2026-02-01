import {  useLocation, useNavigate } from "react-router-dom";

const Person = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="details">
      <p className="details-txt"><b>Name:</b> {state.name}</p>
      <p className="details-txt"><b>Birth Year:</b> {state.birth_year}</p>
      <p className="details-txt"><b>Eye Color:</b> {state.eye_color}</p>
      <p className="details-txt"><b>Gender:</b> {state.gender}</p>
      <p className="details-txt"><b>Hair Color:</b> {state.hair_color}</p>
      <p className="details-txt"><b>Height:</b> {state.height}</p>
      <p className="details-txt"><b>Mass:</b> {state.mass}</p>
      <p className="details-txt"><b>Skin Color:</b> {state.skin_color}</p>
      <button className='backbutton' onClick={() => navigate("/people")}>Back</button>
    </div>
  );
};

export default Person;