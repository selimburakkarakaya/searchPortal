import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/Slice';

export const store = configureStore({
  reducer: {
    selection: reducer,
  },
});
