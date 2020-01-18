import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import App from './App';

const Main = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);

Main.displayName = 'Main';

export default Main;
