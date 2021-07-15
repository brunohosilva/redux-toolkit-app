import React from 'react';

import { Provider } from 'react-redux';

import { AppStore } from './store/reduxConfig/storeConfig';
import Home from './view/Home';

const App = () => {
  return (
    <>
      <Provider store={AppStore}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
