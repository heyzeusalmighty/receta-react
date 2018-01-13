import axios from 'axios';
import store from '../store';
import * as types from '../reducers/actions';

import dummy from './dummyRecipes';

const soManyRecipes = [
	{
		_id: 1,
		name: 'Mango Habanero Topical Cream'
	},
	{
		_id: 2,
		name: 'Chicken Tartare'
	},
	{
		_id: 3,
		name: 'Chocolate Covered Bratwurst'
	},
	{
		_id: 4,
		name: 'Banana Oysters Rockefeller'
	},
	{
		_id: 5,
		name: 'Carbonized Overnight Pizza'
	},
]


export function getRecipes() {
	// store.dispatch({ type: types.GET_RECIPES_SUCCESS, recipes: dummy });

	return axios.get('http://localhost:9000/api/recipes')
    .then(response => {
		store.dispatch({ type: types.GET_RECIPES_SUCCESS, recipes: response.data.recipes });
		return response;
    });
}

export function getRecipe(recipeId) {
	// let recId = parseInt(recipeId, 10);
	soManyRecipes.forEach(rec => {
		if (rec._id === recipeId) {
			console.log('you found it')
			store.dispatch({ type: types.SELECT_RECIPE, selectedRecipe: rec });
		}
	});
}

export function addNewRecipe() {
	console.log('adding new recipe', dummy[0])
	return axios.post('http://localhost:9000/api/recipes',  dummy[7])
	.then(response => {
		console.log('response ', response)
	})
}

export function saveRecipeEdit(recipe) {
	return axios.post('http://localhost:9000/api/recipes', recipe)
	.then(response => {
		store.dispatch({ type: types.SAVE_EDIT, recipe: recipe });
		console.log('response ', response);
	})
}

export function deleteRecipe(recipe) {
	return axios.delete(`http://localhost:9000/api/recipes/${recipe._id}`)
	.then(response => {
		store.dispatch({ type: types.DELETE_RECIPE, recipe });
	})
}

export function snapshot() {
	return axios.post('http://localhost:9000/api/snapshot')
	.then(response => {
		// store.dispatch({ type: types.SAVE_EDIT, recipe: recipe })
		console.log('response ', response);
	})
}