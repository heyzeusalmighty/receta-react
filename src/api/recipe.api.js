// import axios from 'axios';
import store from '../store';
import * as types from '../reducers/actions';




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
	// console.log('dude, getRecipes', {recipes: soManyRecipes})
	store.dispatch({ type: types.GET_RECIPES_SUCCESS, recipes: soManyRecipes});

	// return axios.get('http://localhost:3001/users')
    // .then(response => {
    //   store.dispatch(getUsersSuccess(response.data));
    //   return response;
    // });
}

export function getRecipe(recipeId) {
	let recId = parseInt(recipeId, 10);
	soManyRecipes.forEach(rec => {
		if (rec._id === recId) {
			store.dispatch({ type: types.SELECT_RECIPE, selectedRecipe: rec });
		}
	});


}
