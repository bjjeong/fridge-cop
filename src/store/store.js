import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

export default configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
});
