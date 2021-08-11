import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    articles: [],
    article: {},
};
const articlesSlice = createSlice ({
    name: "article",
    initialState,
    reducers: {
      setArticles: (state, action) => {
            state.articles = action.payload;
        }
    }

});
export const { setArticles  } = articlesSlice.actions;
export const getArticles = (state) => state.article.articles;

export default articlesSlice.reducer;