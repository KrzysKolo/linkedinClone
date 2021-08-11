import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
};
const postsSlice = createSlice ({
    name: "recipes",
    initialState,
    reducers: {
        addRecipe: (state, action) => {
        const { recipe } = action.payload;
        state.push({recipe});
        },
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        }
    }

});
export const { addRecipe, setRecipes } = recipesSlice.actions;
export const getRecipes = (state) => state.recipes.recipes;

export default postsSlice.reducer;