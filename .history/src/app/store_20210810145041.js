import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import artcleReducer from '../features/articles/articlesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: artcleReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
