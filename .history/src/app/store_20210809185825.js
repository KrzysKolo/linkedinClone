import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
