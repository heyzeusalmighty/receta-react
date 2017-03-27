import * as types from './actions';
import _ from 'lodash';

const initialState = {
	recipes: []
}

const recipeReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_RECIPES_SUCCESS:
			console.log('GET_RECIPES_SUCCESS', action);
			return Object.assign({}, state, { recipes: action.recipes });


		return state;
	}

	return state;
}

export default recipeReducer;
