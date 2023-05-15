import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNumber: "",
};

const pageNumberSlice = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    clearPageNumber: (state) => {
      state.pageNumber = "";
    },
    deletePageNumber: (state) => {
      delete state.pageNumber;
    },
  },
});

export const { setPageNumber, clearPageNumber, deletePageNumber } = pageNumberSlice.actions;

export const selectPageNumber = (state) => state.pageNumber.pageNumber;

export default pageNumberSlice.reducer;

