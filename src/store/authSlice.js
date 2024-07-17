import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

/*STEPS to create post slice:
update your store for post
create slice for posts
fetch all posts info in app.jsx and dispatch to store
fetch post info from store and diplay in Home.jsx (use filter to filter out inactive posts)
repeat 4 for all posts without filter*/

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
