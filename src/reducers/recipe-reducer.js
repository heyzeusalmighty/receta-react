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
			// console.log('select Recipe', action.recipeId);
			let recipe = null;
			let idx = _.findIndex(state.recipes, { '_id': action.recipeId});
			if (idx > -1) {
				recipe = state.recipes[idx];
			} else {
				// recipe = dummyRecipe;
				recipe = state.recipes[0];
				console.log(idx, state.recipes);
			}
			return Object.assign({}, state, { selectedRecipe: recipe });

		default:
			return state;
	}
}

export default recipeReducer;


const dummyRecipe = {
	recipeName: 'dummy'
}
