import { createSlice } from "@reduxjs/toolkit";

const directionSlice = createSlice({
  name: "direction",
  initialState: null,
  reducers: {
    fromDirection: (state, action) => {
      return action.payload.from;
    },
    toDirection: (state, action) => {
      return action.payload.to;
    },
    date: (state, action) => {
      return action.payload.startDate;
    },
  },
});

export const { fromDirection, toDirection } = directionSlice.actions;
export default directionSlice.reducer;
