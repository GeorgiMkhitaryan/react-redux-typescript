import React from "react";
import { useAction } from "../../Hooks/useAction";
import { useAppSelector } from "../../Hooks/useSelectorHook";
import { IState } from "../../Interfaces/Interfaces";
import "./index.scss";

const Cats: React.FC = () => {
  const state = useAppSelector((state): IState => state.catApi);

  return (
    <div className="CatsContainer">
      {state.cats.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.url})` }}
              className="cartImg"
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Cats;
