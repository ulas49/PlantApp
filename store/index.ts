import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import questionReducer from './questionsSlice'
import categoriesReducer from './categoriesSlice'; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    questions : questionReducer,
    categories: categoriesReducer,

  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
