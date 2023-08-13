import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  selectedReview: null,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    selectReview: (state, action) => {
      const { reviewId } = action.payload;

      state.selectedReview = reviewId;
    },
    editReview: (state, action) => {
      const { reviewId, updatedReview } = action.payload;

      state.reviews = state.reviews.map(review => {
        if (review.id === reviewId) {
          return {
            ...review,
            ...updatedReview,
          };
        } else {
          return review;
        }
      });
    },
    removeReview: (state, action) => {
      const { reviewId } = action.payload;

      state.reviews = state.reviews.filter(review => review.id !== reviewId);
    },
  },
});

export const { addReview, selectReview, editReview, removeReview } =
  reviewSlice.actions;

export default reviewSlice.reducer;
