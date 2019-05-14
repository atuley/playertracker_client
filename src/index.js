import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import App from './App'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
