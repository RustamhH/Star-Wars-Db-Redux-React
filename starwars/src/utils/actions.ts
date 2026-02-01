import { fetchActions } from './fetches';
import { AppDispatch } from './store';
import axios from 'axios'



export const fetchCharacters = (category:string) => async (dispatch: AppDispatch) => {
  try{ 
    dispatch(fetchActions.Request());
    const response = await axios.get(`https://swapi.dev/api/${category}/`);
    dispatch(fetchActions.Success(response.data.results))
  } catch (e: any) {
    dispatch(fetchActions.Error(e.messsage))
  }
}