import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { businessLevel } from "../../components/Main/helper";

export interface BusinessLevelState {
  level: keyof typeof businessLevel;
}

const initialState: BusinessLevelState = {
  level: "small",
};

export const businessLevelSlice = createSlice({
  name: "businessLevel",
  initialState,
  reducers: {
    changeBusinessLevel: (
      state,
      action: PayloadAction<keyof typeof businessLevel>
    ) => {
      state.level = action.payload;
    },
  },
});

export const { changeBusinessLevel } = businessLevelSlice.actions;
export default businessLevelSlice.reducer;
