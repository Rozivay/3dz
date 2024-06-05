import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import namesReducer from './reducers'; 
import App from './App';

let store = createStore(namesReducer, JSON.parse(localStorage.getItem('names')) || []);

store.subscribe(() => {
  localStorage.setItem('names', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
