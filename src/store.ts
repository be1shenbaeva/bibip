import { configureStore } from "@reduxjs/toolkit";
import { bibipTripApi } from "./services/BibipTripService";
import directionReducer from "./slices/direction-slice";
import tripsSlice from "@/slices/trips-slice";
import selectedSeatsReducer from "@/slices/seats-slice";

export const store = configureStore({
  reducer: {
    [bibipTripApi.reducerPath]: bibipTripApi.reducer,
    direction: directionReducer,
    trips: tripsSlice,
    selectedSeats: selectedSeatsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bibipTripApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
