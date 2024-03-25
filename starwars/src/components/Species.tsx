import { useEffect } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchCharacters } from '../utils/actions';

const Species = () => {
  const navigate = useNavigate();
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters("species"));
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1>SPECIES</h1>
      <div className="list">
        {list.map((specie, index) => (
          <div key={index} className="list-item">
            <h2>{specie.name}</h2>
            <Link
            to={`/species/${index+1}`}
            state={{ name:specie.name , classification:specie.classification , average_lifespan:specie.average_lifespan , average_height:specie.average_height , designation:specie.designation , eye_colors:specie.eye_colors , hair_colors:specie.hair_colors , language:specie.language , skin_colors:specie.skin_colors }}
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

export default Species;