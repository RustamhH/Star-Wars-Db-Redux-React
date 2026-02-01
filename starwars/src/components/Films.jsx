import { useEffect } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchCharacters } from '../utils/actions';

const Films = () => {
  
  const navigate = useNavigate();
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters("films"));
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>FILMS</h1>
      <div className="list">
          {list.map((film, index) => (
          <div key={index} className="list-item">
            <h2>{film.title}</h2>
            <Link
            to={`/films/${index+1}`}
            state={{ title: film.title, director: film.director,release_date:film.release_date,episode_id:film.episode_id,producers:film.producer }}
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

export default Films;