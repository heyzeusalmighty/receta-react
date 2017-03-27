import * as types from './actions';
import _ from 'lodash';

const initialState = {
	recipes: [],
	selectedRecipe: {}
}

const recipeReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_RECIPES_SUCCESS:
			return Object.assign({}, state, { recipes: action.recipes });

		case types.SELECT_RECIPE:
			return Object.assign({}, state, { selectedRecipe: action.selectedRecipe });

		default:
			return state;
	}
}

export default recipeReducer;
