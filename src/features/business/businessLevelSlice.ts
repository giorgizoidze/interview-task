import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  CompanyType,
  UpdateCompanyPayload,
  businessLevel,
} from "../../components/Main/helper";

export interface BusinessLevelState {
  level: keyof typeof businessLevel;
  companies: CompanyType;
}

const initialState: BusinessLevelState = {
  level: "small",
  companies: [
    {
      id: 1,
      name: "Sapling",
      imgSrc: "../../../public/sapling.PNG",
      position: "HR Managment",
      level: "",
      isChecked: false,
    },
    {
      id: 2,
      name: "Workday",
      imgSrc: "../../../public/workday.png",
      position: "HR Managment",
      level: "",
      isChecked: false,
    },
    {
      id: 3,
      name: "Xero",
      imgSrc: "../../../public/xero.png",
      position: "Employers Base",
      level: "",
      isChecked: false,
    },
    {
      id: 4,
      name: "Rippling",
      imgSrc: "../../../public/rippling.jpg",
      position: "Salary Management",
      level: "",
      isChecked: false,
    },
    {
      id: 5,
      name: "Expensify",
      imgSrc: "../../../public/expensify.jpg",
      position: "HR Managment",
      level: "",
      isChecked: false,
    },
    {
      id: 6,
      name: "Zenefits",
      imgSrc: "../../../public/zenefits.png",
      position: "HR Managment",
      level: "",
      isChecked: false,
    },
  ],
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
    updateCompanyBusinessLevel: (
      state,
      action: PayloadAction<UpdateCompanyPayload>
    ) => {
      const updatedCompany = state.companies.find(
        (c) => c.name === action.payload.name
      )!;

      updatedCompany.level = action.payload.isChecked ? state.level : "";
      updatedCompany.isChecked = action.payload.isChecked;
    },
  },
});

export const { changeBusinessLevel, updateCompanyBusinessLevel } =
  businessLevelSlice.actions;
export default businessLevelSlice.reducer;
