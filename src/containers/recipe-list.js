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
		const bodyStyle = {
			marginLeft: '20px'
		};
		return (
			<div style={bodyStyle}>
		  		<h3>Recipes</h3>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.addNewRecipe}>ADD</button>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.search}>Search</button>
				{this.renderSearchArea()}
				{this.renderSearchRecipe()}
				<table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
					<tbody>
					{this.props.recipes.map(rec =>
						(
							<tr key={rec._id}>
								<td className="mdl-data-table__cell--non-numeric">
									<Link to={'/recipes/' + rec._id}>{rec.recipeName}</Link>
								</td>
								<td><button className="mdl-button mdl-js-button mdl-button--raised">COOL MAN</button></td>
								<td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={() => this.deleteButton(rec)}>X</button></td>
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
