import React from 'react';
import { connect } from 'react-redux';
// import UserList from '../views/user-list';
import * as recipeApi from '../api/recipe.api';
// import store from '../store';

const RecipeContainer = React.createClass({

  componentDidMount: function() {
      let recipeId = this.props.params.recipeId;      
      recipeApi.getRecipe(recipeId);
  },

  render: function() {

    return (
      <div>	Recipe
          <span>{this.props.selectedRecipe.name}</span>

      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    recipes: store.recipeState.recipes,
    selectedRecipe: store.recipeState.selectedRecipe
  };
};

export default connect(mapStateToProps)(RecipeContainer);
