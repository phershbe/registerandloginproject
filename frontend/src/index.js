import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  page: 'homepage',
  currentUser: '',
  loggedIn: false,
};

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'HOMEPAGE':
      return state = {
        ...state,
        page: 'homepage'
      };
    case 'REGISTER':
      return state = {
        ...state,
        page: 'register'
      };
    case 'LOGIN':
      return state = {
        ...state,
        page: 'login'
      };
    case 'USERNAME':
      return state = {
        ...state,
        currentUser: action.payload,
      };
    case 'LOGGEDIN':
      return state = {
        ...state,
        loggedIn: true,
      }
    default:
      return state;
  };
};

// actions
export const homepage = () => {
  return {
    type: 'HOMEPAGE'
  };
};

export const register = () => {
  return {
    type: 'REGISTER'
  };
};

export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const usernameDisplay = (currentUsername) => {
  return {
    type: 'USERNAME',
    payload: currentUsername
  };
};

export const loggedIn = () => {
  return {
    type: 'LOGGEDIN'
  };
};

// create store
const myStore = createStore(reducer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
