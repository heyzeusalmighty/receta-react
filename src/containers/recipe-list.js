import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as recipeApi from '../api/recipe.api';
import * as yummlyApi from '../api/yummly.api';
import SearchBox from '../components/searchbox';
import SearchResults from '../components/searchResults';
import RecipeModal from '../components/recipe.modal';
// import { Button } from 'react-toolbox/lib/button';


class RecipeListContainer extends React.Component {

	constructor(props) {
		super(props);
		recipeApi.getRecipes();
		this.state = {
			searching: false,
			searchTerm: '',
			searchMatches: [],
			searchedRecipe: null
		};
	}

	deleteButton = (recipe) => {
		console.log('delete', recipe);
		recipeApi.deleteRecipe(recipe);
	}

	search = () => {
		this.setState({ searching: true });
	}

	searchForThis = (searchString) => {
		yummlyApi.getSearchResults(searchString)
		.then(results => {
			console.log('results', results);
			this.setState({ searchMatches: results.matches });	
		});
	}

	renderSearchArea = () => {
		if (this.state.searching) {
			return (
				<div>
					<SearchBox searchForThis={this.searchForThis} />
					<SearchResults matches={this.state.searchMatches} getRecipe={this.goGetSearchRecipe} />
				</div>
			)
		}
	}

	goGetSearchRecipe = recipe => {
		console.log('dudeeeeeee');
		this.setState({ searchedRecipe: recipe });
	}

	renderSearchRecipe = () => {
		if (this.state.searchedRecipe) {
			return (
				<RecipeModal />
			);
		}
	}

	render() {
		return (
			<div>
		  		<h3>Recipes</h3>

				<button className="btn btn-success" onClick={this.addNewRecipe}>ADD</button>
				<button className="btn btn-primary" onClick={this.search}>Search</button>
				{this.renderSearchArea()}
				{this.renderSearchRecipe()}
				<table className="table">
					<tbody>
					{this.props.recipes.map(rec =>
						(
							<tr key={rec._id}>
								<td><Link to={'/recipes/' + rec._id}>{rec.recipeName}</Link></td>
								<td><button className="btn btn-default">COOL MAN</button></td>
								<td><button className="btn btn-danger" onClick={() => this.deleteButton(rec)}>X</button></td>
							</tr>
						)
					)}
					</tbody>
				</table>
			</div>
    	);
	}
}

const mapStateToProps = function(store) {
  return {
    recipes: store.recipeState.recipes
  };
};

export default connect(mapStateToProps)(RecipeListContainer);
