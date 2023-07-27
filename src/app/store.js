import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from '../features/review/ReviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});
