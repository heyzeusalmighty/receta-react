import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as recipeApi from '../api/recipe.api';
// import { Button } from 'react-toolbox/lib/button';


const RecipeListContainer = React.createClass({

	componentDidMount: function() {
		// recipeApi.getRecipes();
	},

  	render: function() {
    	return (
			<div>
		  		<h3>Recipes</h3>

				<table className="table">
					<tbody>
					{this.props.recipes.map(rec =>
						(
							<tr key={rec._id}>
								<td><Link to={'/recipes/' + rec._id}>{rec.recipeName}</Link></td>
								<td><button className="btn btn-default">COOL MAN</button></td>
							</tr>
						)
					)}
					</tbody>
				</table>
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
