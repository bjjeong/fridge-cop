import { combineReducers } from 'redux';

import recipeReducer from './recipeReducer';
// import ErrorReducer from './ErrorReducer';

const RootReducer = combineReducers({
    recipes: recipeReducer,
});

export default RootReducer;
