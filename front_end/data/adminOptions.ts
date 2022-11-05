import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface adminOptionsState {
  showGrid: boolean,
  showCoords: boolean

}

// Initial state
const initialState: adminOptionsState = {
  showGrid: false,
  showCoords:false,
};

// Actual Slice
export const adminOptionsSlice = createSlice({
  name: "adminOptionsSlice",
  initialState,
  reducers: {

    // Action to change name
    setShowGrid(state) {
      state.showGrid = !state.showGrid;
      if(!state.showGrid)state.showCoords = false
    },
    setShowCoords(state) {
        if(state.showGrid){
        state.showCoords = !state.showCoords;
        }
      },
  },
});

export const { setShowGrid, setShowCoords } = adminOptionsSlice.actions;

export const selectAdminOptionsState = (state: AppState) => state.adminOptionsSlice;

export default adminOptionsSlice.reducer;