import { useEffect } from 'react';
import { useNavigate , Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchCharacters } from '../utils/actions';

const People = () => {
  const navigate = useNavigate();
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters("people"));
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <div>
      <h1>PEOPLE</h1>
      <div className="list">
        {list.map((person, index) => (
          <div key={index} className="list-item">
            <h2>{person.name}</h2>
            <Link
            to={`/people/${index+1}`}
            state={{ name:person.name,birth_year:person.birth_year, eye_color:person.eye_color, gender:person.gender, hair_color:person.hair_color, height:person.height, mass:person.mass , skin_color:person.skin_color }}
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

export default People;