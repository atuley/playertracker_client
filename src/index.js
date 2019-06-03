import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root_reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import SearchContainer from './containers/search_container'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <SearchContainer />
  </Provider>,
  document.getElementById('root')
)
