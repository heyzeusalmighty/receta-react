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
			const mappedRecipe = action.recipes.map((x, idx) => ({ ...x, _id: idx }))
			if (state.recipeId.length === 0) {
				return Object.assign({}, state, { recipes: mappedRecipe });
			} else {
				let idx = _.findIndex(action.recipes, { '_id': state.recipeId });
				let recipe = (idx > -1) ? action.recipes[idx] : dummyRecipe;
				return Object.assign({}, state, { recipes: mappedRecipe, selectedRecipe: recipe });
			}


		case types.SELECT_RECIPE:
			const recipeId = parseInt(action.recipeId, 10);
			const recipe = state.recipes.find(x => x._id === recipeId);
			if (recipe) {
				return {
					...state,
					selectedRecipe: recipe,
					recipeId: recipeId,
				};
			}
			return {
				...state,
				selectedRecipe: dummyRecipe,
				recipeId: recipeId,
			}

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

		case types.DELETE_RECIPE:
			let delIdx = _.findIndex(state.recipes, { '_id': action.recipe._id });
			return Object.assign({}, state, {
				selectedRecipe: action.recipe,
			 	recipes: [
					 ...state.recipes.slice(0, delIdx),
					 ...state.recipes.slice(delIdx)
				 ]
			});

		default:
			return state;
	}
}

export default recipeReducer;
