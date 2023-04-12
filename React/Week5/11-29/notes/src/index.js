import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux'; //passes down to all of components
import { createStore } from 'redux'; //creates the store

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      }
    case "RESET":
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

render(<App />, document.getElementById('root'));
