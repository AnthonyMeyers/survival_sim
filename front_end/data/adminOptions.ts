import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface adminOptionsState {
  showGrid: boolean,

}

// Initial state
const initialState: adminOptionsState = {
  showGrid: false
};

// Actual Slice
export const adminOptionsSlice = createSlice({
  name: "adminOptionsSlice",
  initialState,
  reducers: {

    // Action to change name
    setShowGrid(state) {
      state.showGrid = !state.showGrid;
    },

  },
});

export const { setShowGrid } = adminOptionsSlice.actions;

export const selectAdminOptionsState = (state: AppState) => state.adminOptionsSlice;

export default adminOptionsSlice.reducer;