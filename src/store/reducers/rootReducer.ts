import { combineReducers } from "redux";
import { catApiReducer } from "./catApiReducer";

export const rootReducer = combineReducers({
  catApi: catApiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
