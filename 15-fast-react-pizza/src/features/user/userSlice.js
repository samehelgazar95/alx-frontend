import { createSlice } from "@reduxjs/toolkit";

const initState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducer: {
    updateUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;
