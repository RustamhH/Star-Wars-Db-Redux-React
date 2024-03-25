import { useEffect } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchCharacters } from '../utils/actions';

const Starships = () => {
  const navigate = useNavigate();
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters("starships"));
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1>STARSHIPS</h1>
      <div className="list">
        {list.map((starship, index) => (
          <div key={index} className="list-item">
            <h2>{starship.name}</h2>
            <Link
            to={`/starships/${index+1}`}
            state={{ name:starship.name  , cargo_capacity:starship.cargo_capacity , consumables:starship.consumables , cost_in_credits:starship.cost_in_credits , crew:starship.crew , hyperdrive_rating:starship.hyperdrive_rating , length:starship.length , manufacturer:starship.manufacturer , max_atmosphering_speed:starship.max_atmosphering_speed , model:starship.model , passengers:starship.passengers , starship_class:starship.starship_class }}
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

export default Starships;