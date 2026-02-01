import { useEffect } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchCharacters } from '../utils/actions';

const Vehicles = () => {

  const navigate = useNavigate();
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters("vehicles"));
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <div>
      <h1>VEHICLES</h1>
      <div className="list">
        {list.map((vehicle, index) => (
          <div key={index} className="list-item">
            <h2>{vehicle.name}</h2>
            <Link
            to={`/vehicles/${index+1}`}
            state={{ name:vehicle.name  , cargo_capacity:vehicle.cargo_capacity , consumables:vehicle.consumables , cost_in_credits:vehicle.cost_in_credits , crew:vehicle.crew , length:vehicle.length , manufacturer:vehicle.manufacturer , max_atmosphering_speed:vehicle.max_atmosphering_speed , model:vehicle.model , passengers:vehicle.passengers , vehicle_class:vehicle.vehicle_class }}
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

export default Vehicles;