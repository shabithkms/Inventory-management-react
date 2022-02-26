import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import tabReducer from './tabSlice';

export default configureStore({
  reducer: {
    product: productReducer,
    tab: tabReducer,
  },
});
