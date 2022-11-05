import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { playerslice } from "./playerSlice";
import { createWrapper } from "next-redux-wrapper";
import { simulationapi } from "./simulationapi";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const makeStore = () =>
  configureStore({
    reducer: {
      [playerslice.name]: playerslice.reducer,
      [simulationapi.reducerPath]: simulationapi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(simulationapi.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);