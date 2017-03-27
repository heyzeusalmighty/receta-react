import React from 'react';
import { connect } from 'react-redux';
// import UserList from '../views/user-list';
import * as recipeApi from '../api/recipe.api';
import store from '../store';
// import { loadSearchLayout } from '../../actions/search-layout-actions';

const RecipeListContainer = React.createClass({

	componentDidMount: function() {
		recipeApi.getRecipes();
	},

  	render: function() {

		let recipeList = this.props.recipes.map((rec, index) => {
			return (<li key={index}>{rec.name}</li>)
		});

    	return (
			<div>
		  		<h3>Recipes</h3>
		  		<ul>
			  		{recipeList}
				</ul>
			</div>
    	);
  	}

});

const mapStateToProps = function(store) {
  return {
    recipes: store.recipeState.recipes
  };
};

export default connect(mapStateToProps)(RecipeListContainer);
