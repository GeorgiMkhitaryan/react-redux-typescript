import {
  CATEGORI_DATA_LOAD,
  CAT_DATA_LOAD,
} from "../../actionTypes/actionTypes";
import { IAction, IState } from "../../Interfaces/Interfaces";

const initialState: IState = {
  loadedCats: 0,
  categories: [],
  cats: [],
  errorMsg: "",
  selectedCategory: "",
};

export const catApiReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CATEGORI_DATA_LOAD:
      return {
        ...state,
        loadedCats: state.loadedCats + 10,
        categories: action.payload,
      };
    case CAT_DATA_LOAD:
      return {
        ...state,
        cats: action.payload,
      };

    default:
      return state;
  }
};
