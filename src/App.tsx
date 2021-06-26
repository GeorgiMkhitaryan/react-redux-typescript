import React from "react";
import { Provider } from "react-redux";
import Categories from "./Components/Categories/Categories";
import Cats from "./Components/Cats/Cats";
import { store } from "./store/store";
import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Categories></Categories>
          <Cats></Cats>
        </div>
      </Provider>
    </>
  );
};

export default App;
