import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AccesUser from "./userAcces";

const rootReducer = combineReducers({
  accesUser: AccesUser,
});
export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
