import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import articleReducer from '../features/articles/articlesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
