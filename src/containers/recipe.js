import React from 'react';
import { connect } from 'react-redux';
// import UserList from '../views/user-list';
import * as recipeApi from '../api/recipe.api';
import store from '../store';
// import { loadSearchLayout } from '../../actions/search-layout-actions';

const RecipeContainer = React.createClass({

  componentDidMount: function() {
	  recipeApi.getRecipes();
	// userApi.getUsers();
    // store.dispatch(loadSearchLayout('users', 'User Results'));
  },

  render: function() {
	 
    return (
      <div>	Recipe</div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    recipes: store.recipeState.recipes
  };
};

export default connect(mapStateToProps)(RecipeContainer);
