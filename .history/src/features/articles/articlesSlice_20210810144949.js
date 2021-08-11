import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
};
const articleSlice = createSlice ({
    name: "article",
    initialState,
    reducers: {
      setArticles: (state, action) => {
            state.articles = action.payload;
        }
    }

});
export const { setArticles  } = articleSlice.actions;
export const getArticles = (state) => state.article.articles;

export default articleSlice.reducer;