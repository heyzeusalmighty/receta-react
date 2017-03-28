import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as recipeApi from '../api/recipe.api';
// import { Button } from 'react-toolbox/lib/button';


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

				<h4>Other way</h4>
				{this.props.recipes.map(rec => {
					return (
						<div key={rec._id}>
							<div className="details">
								<Link to={'/recipes/' + rec._id}>{rec.name}</Link>
							</div>
							<div className="controls">
								<button>A</button>
							</div>
						</div>
					)

				})}

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
