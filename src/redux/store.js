import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducer/contactsReducer';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// const store = createStore(phoneBookReducer, composeWithDevTools());

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...defaultMiddleware]
});

export default store;