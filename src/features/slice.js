import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  sort: null,
  url: '',
  valid: { nameV: null, countryV: null, cityV: null, emailV: null, websiteV: null }
};

export const slice = createSlice({
  name: 'selection',
  initialState,
  reducers: {

    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setValid: (state, action) => {
      state.valid = action.payload;
    },
  },
  extraReducers: (builder) => {

  },
});

export const { setSort, setUrl, setValid } = slice.actions;

export default slice.reducer;