import { combineReducers } from 'redux';

import recipeReducer from './recipe-reducer';

let reducers = combineReducers({
	recipeState: recipeReducer
});

export default reducers;
