import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFetchReducer {
  list: object[],
  isLoading: boolean,
  error: string
}


const initialState: IFetchReducer = {
  list: [],
  isLoading: false,
  error: ''
}

export const FetchSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    Request: (state) => {
      state.isLoading = true;
    },
    Success: (state, action: PayloadAction<object[]>) => {
      state.list = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    Error: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const fetchReducer = FetchSlice.reducer
export const fetchActions = FetchSlice.actions
