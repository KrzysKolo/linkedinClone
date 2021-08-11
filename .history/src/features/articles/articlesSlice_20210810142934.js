import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    articles: [],
    article: {},
};
const postsSlice = createSlice ({
    name: "recipes",
    initialState,
    reducers: {
        addPost: (state, action) => {
        const { post } = action.payload;
        state.push({post});
        },
      /*   setRecipes: (state, action) => {
            state.recipes = action.payload;
        } */
    }

});
export const { addPost,  } = postsSlice.actions;
//export const getRecipes = (state) => state.recipes.recipes;

export default postsSlice.reducer;