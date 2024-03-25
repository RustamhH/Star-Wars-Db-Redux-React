import { useEffect } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchCharacters } from '../utils/actions';

const Planets = () => {
  const navigate = useNavigate();
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters("planets"));
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1>PLANETS</h1>
      <div className="list">
        {list.map((planet, index) => (
          <div key={index} className="list-item">
            <h2>{planet.name}</h2>
            <Link
            to={`/planets/${index+1}`}
            state={{ name:planet.name , population:planet.population , terrain:planet.terrain , climate:planet.climate , diameter:planet.diameter , gravity:planet.gravity , orbital_period:planet.orbital_period , rotation_period:planet.rotation_period , surface_water:planet.surface_water }}
          >
            <p style={{color:'#ffef62'}}>Load More</p>
          </Link>
            
          </div>
        ))}
      </div>
      <button className='backbutton' onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Planets;