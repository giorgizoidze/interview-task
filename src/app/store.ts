import { configureStore } from "@reduxjs/toolkit";
import businessLevelReducer from "../features/business/businessLevelSlice";

export const store = configureStore({
  reducer: {
    business: businessLevelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
