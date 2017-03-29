import React from 'react';
import { connect } from 'react-redux';
// import UserList from '../views/user-list';
import * as recipeApi from '../api/recipe.api';
import store from '../store';
import * as types from '../reducers/actions';

const RecipeContainer = React.createClass({

    componentWillMount: function() {
        this.setState({
            selectedRecipe: { recipeName: ''}
        });
        let recipeId = this.props.params.recipeId;
        store.dispatch({ type: types.SELECT_RECIPE, recipeId: recipeId });
    },

    render: function() {

        return (
            <div>	Recipe
                <span>{this.props.selectedRecipe.recipeName}</span>

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
