import React from "react";
import { useEffect } from "react";
import { useAction } from "../../Hooks/useAction";
import { useAppSelector } from "../../Hooks/useSelectorHook";
import { IState } from "../../Interfaces/Interfaces";
import { RootState } from "../../store/reducers/rootReducer";
import "./index.scss";

const Categories: React.FC = () => {
  const state = useAppSelector((state: RootState): IState => state.catApi);
  const { getCategories, getCats } = useAction();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="CategoriesContainer">
      <div className="sidebar">
        {state.categories
          ? state.categories.map((item) => {
              return (
                <a
                  className="active categoriButton"
                  href="#home"
                  key={item.id}
                  onClick={() => getCats(item.id)}
                >
                  {item.name}
                </a>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Categories;
