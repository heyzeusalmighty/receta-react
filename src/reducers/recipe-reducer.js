import * as types from './actions';
import _ from 'lodash';

const initialState = {
	recipes: [],
	recipeId: '',
	selectedRecipe: {}
}

const dummyRecipe = {
	recipeName: 'dummy',
	tags: [],
	instructions: [],
	ingredients: []
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

		case types.SAVE_EDIT:
			let editIdx = _.findIndex(state.recipes, { '_id': action.recipe._id });
			return Object.assign({}, state, {
				selectedRecipe: action.recipe,
			 	recipes: [
					...state.recipes.slice(0, editIdx),
					action.recipe,
					...state.recipes.slice(editIdx + 1)
				]
			});

		default:
			return state;
	}
}

export default recipeReducer;
