import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: "user",
    initialState: {
      user: null
    },
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        logout: (state, action) => {
            state.user = null;
        }
    }

});
export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;