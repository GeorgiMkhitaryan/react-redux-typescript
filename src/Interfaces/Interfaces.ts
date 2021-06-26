export interface IAction {
  type: string;
  payload?: [];
}
export interface ICategoriItem {
  id: number;
  name: string;
}

export interface IState {
  loadedCats: number;
  categories: any[];
  cats: any[];
  errorMsg: string;
  selectedCategory: string;
}
