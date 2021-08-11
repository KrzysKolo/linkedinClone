import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    articles: [],
    article: {},
};
const articlesSlice = createSlice ({
    name: "articles",
    initialState,
    reducers: {
      getArticles: (state, action) => {
            state.articles = action.payload;
        }
    }

});
export const { addPost,  } = articlesSlice.actions;
export const getRecipes = (state) => state.recipes.recipes;

export default articlesSlice.reducer;