import axios from 'axios';
import store from '../store';
import * as types from '../reducers/actions';

import dummy from './dummyRecipes'





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
	// store.dispatch({ type: types.GET_RECIPES_SUCCESS, recipes: soManyRecipes});

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


// const banh = {
//     "recipeName": "Banh Xeo (Crepe)",
//     "description": "From edible Austin",
//     "servingSize": "4",
//     "source": "old stuff",
//     "imageUrl": null,
//     "yummlyId": "2025",
//     "tags": [
//         "Breakfast"
//     ],
//     "instructions": [
//         {
//             "id": 1,
//             "instruction": "Mix all the crepe ingredients together in a bowl and let sit for 20 mins (overnight is better).",
//         },
//         {
//             "id": 2,
//             "instruction": "Heat up a tsp of oil in a nonstick pan and then take 1/4 of the pork, shrimp and onion and cook for 30 seconds.",
//         },
//         {
//             "id": 3,
//             "instruction": "Take a quarter of the batter and pour into pan, swirling the pan to evenly distribute the batter.  Sprinkle a quarter of the mung beans  and then drizzle 2 tsp of oil around the edges of the crepe.",
//         },
//         {
//             "id": 4,
//             "instruction": "Cover the skillet and cook over med heat until the bottom is crispy and golden.",
//         },
//         {
//             "id": 5,
//             "instruction": "Fold the crepe in half and remove from pan. "
//         }
//     ],
//     "ingredients": [
//         {
//             "title": "Crepe Batter",
//             "ingredients": [
//                 "2 c white rice flour",
//                 "1 c coconut milk",
//                 "1 c cornstarch",
//                 "4 c water",
//                 "2 scallions",
//                 "1 1/2 tsp turmeric",
//                 "salt (to taste)",
//                 "4 tb vegetable oil"
//             ]
//         },
//         {
//             "title": "Filling",
//             "ingredients": [
//                 "3/4 lb pork shoulder, sliced into 1/4\" slices",
//                 "3/4 lb medium shrimp, chopped",
//                 "1 white onion, thinly sliced",
//                 "1 c mung bean sprouts",
//                 "3 tb oil"
//             ]
//         },
//         {
//             "title": "Garnish",
//             "ingredients": [
//                 "Red or Iceberge lettuce leaves",
//                 "Fresh mint",
//                 "Nuoc cham"
//             ]
//         }
//     ]
// }
