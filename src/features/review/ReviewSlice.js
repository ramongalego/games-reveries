import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
