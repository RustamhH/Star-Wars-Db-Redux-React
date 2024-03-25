import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fetchReducer } from './fetches';

const rootReducer = combineReducers({
  fetchReducer
});



export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];