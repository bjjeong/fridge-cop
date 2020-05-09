import { combineReducers } from 'redux';

import recipeReducer from './recipeReducer';
import interfaceReducer from './interfaceReducer';

const RootReducer = combineReducers({
    recipes: recipeReducer,
    interface: interfaceReducer,
});

export default RootReducer;
