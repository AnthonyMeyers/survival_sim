import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface loadState {
isLoading: boolean
}

// Initial state
const initialState: loadState = {
  isLoading : false
};

// Actual Slice
export const loadSlice = createSlice({
  name: "loadSlice",
  initialState,
  reducers: {

    // Action to change name
    setLoaded(state) {
      state.isLoading = true;
    },
    setUnloaded(state) {
        state.isLoading = false;
      },
  },
});

export const { setLoaded, setUnloaded } = loadSlice.actions;

export const selectLoadState = (state: AppState) => state.loadSlice;

export default loadSlice.reducer;