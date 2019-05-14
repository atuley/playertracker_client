import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import Playertracker from './Playertracker'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

render(
  <Provider store={store}>
    <Playertracker />
  </Provider>,
  document.getElementById('root')
);
