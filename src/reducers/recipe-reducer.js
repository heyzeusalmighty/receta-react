import * as types from './actions';
import _ from 'lodash';

const initialState = {
	recipes: [],
	recipeId: '',
	selectedRecipe: {}
}

const dummyRecipe = {
	recipeName: 'dummy'
}


const recipeReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_RECIPES_SUCCESS:
			if (state.recipeId.length === 0) {
				return Object.assign({}, state, { recipes: action.recipes });
			} else {
				let idx = _.findIndex(action.recipes, { '_id': state.recipeId });
				let recipe = (idx > -1) ? action.recipes[idx] : dummyRecipe;
				return Object.assign({}, state, { recipes: action.recipes, selectedRecipe: recipe });
			}


		case types.SELECT_RECIPE:
			let idx = _.findIndex(state.recipes, { '_id': action.recipeId});
			let recipe = (idx > -1) ? state.recipes[idx] : dummyRecipe;
			return Object.assign({}, state, { selectedRecipe: recipe, recipeId: action.recipeId });

		default:
			return state;
	}
}

export default recipeReducer;
