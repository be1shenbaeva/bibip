import { createSlice } from "@reduxjs/toolkit";
import { Trip } from "@/global";

const tripsSlice = createSlice({
  name: "trips",
  initialState: [],
  reducers: {
    saveTrips: (state: Trip[], action) => {
      return action.payload;
    },
  },
});

export const { saveTrips } = tripsSlice.actions;
export default tripsSlice.reducer;
