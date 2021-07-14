import React from "react";

import Home from "./view/Home";
import { Provider } from "react-redux";
import { store } from "./store/rootReducer/rootReducer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
