import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import artclesReducer from '../features/articles/articlesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    articles: artclesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
