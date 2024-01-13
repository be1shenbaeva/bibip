// selectedSeatsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedSeatsState {
  selectedSeats: number[];
}

const initialState: SelectedSeatsState = {
  selectedSeats: [],
};

const selectedSeatsSlice = createSlice({
  name: "selectedSeats",
  initialState,
  reducers: {
    addSelectedSeat: (state, action: PayloadAction<number>) => {
      state.selectedSeats.push(action.payload);
    },
    removeSelectedSeat: (state, action: PayloadAction<number>) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seatNum) => seatNum !== action.payload,
      );
    },
    clearSelectedSeats: (state) => {
      state.selectedSeats = [];
    },
  },
});

export const { addSelectedSeat, removeSelectedSeat, clearSelectedSeats } =
  selectedSeatsSlice.actions;

export default selectedSeatsSlice.reducer;
