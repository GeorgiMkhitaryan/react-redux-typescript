import axios from "axios";
import { Dispatch } from "redux";
import {
  CATEGORI_DATA_LOAD,
  CAT_DATA_LOAD,
} from "../../actionTypes/actionTypes";
import { IAction } from "../../Interfaces/Interfaces";

export const getCategories = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({ type: CATEGORI_DATA_LOAD });
      const categories = await axios.get(
        "https://api.thecatapi.com/v1/categories"
      );
      const respone: [] = categories.data;
      dispatch({
        type: CATEGORI_DATA_LOAD,
        payload: respone,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCats = (categoriId: number) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const cats = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoriId}`
      );
      const respone: [] = cats.data;
      dispatch({
        type: CAT_DATA_LOAD,
        payload: respone,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
