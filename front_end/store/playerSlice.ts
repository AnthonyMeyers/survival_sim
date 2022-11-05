import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface playerState {
  name: string,
  type:string
  posX: number
  posY: number
}

// Initial state
const initialState: playerState = {
  name: "Bruno", type:"human_male", posX: 50, posY:50
};

// Actual Slice
export const playerslice = createSlice({
  name: "playerslice",
  initialState,
  reducers: {

    // Action to change name
    setName(state, action) {
      state.name = action.payload;
    },

  },
});

export const { setName } = playerslice.actions;

export const selectPlayerState = (state: AppState) => state.playerslice;

export default playerslice.reducer;