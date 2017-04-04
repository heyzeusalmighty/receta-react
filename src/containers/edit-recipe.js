import React from 'react';
import { connect } from 'react-redux';
import * as types from '../reducers/actions'
import store from '../store';

import IngredientGroup from '../components/IngredientGroup';



class EditRecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedRecipe: props.selectedRecipe};
	}

	handleSubmit(event) {
    	event.preventDefault();
		console.log('recipeName', this.props.selectedRecipe);
	}

    handleIngredientGroupChange = (groupId, ingredientId, value) => {
        let recipe = Object.assign({}, this.state.selectedRecipe);
        recipe.ingredients[groupId].ingredients[ingredientId] = value;
        this.setState({ selectedRecipe: recipe});
    }


    handleTitleChange = (groupId, newTitle) => {
        let recipe = Object.assign({}, this.state.selectedRecipe);
        recipe.ingredients[groupId].title = newTitle;
        this.setState({ selectedRecipe: recipe });
    }

    ingredientRemoval = (groupId, ingredientId) => {
        let recipe = Object.assign({}, this.state.selectedRecipe);
        recipe.ingredients[groupId].ingredients.splice(ingredientId, 1);
        this.setState({ selectedRecipe: recipe });
    }

    saveEdit = () => {
        store.dispatch({ type: types.SAVE_EDIT, recipe: this.state.selectedRecipe });
    }

	render() {
		this.ingredients = [];
		let ingredientsElement = this.state.selectedRecipe.ingredients.map((ing, idx) => {
            let props = {
        		id: idx,
                groupChange: this.handleIngredientGroupChange,
                titleChange: this.handleTitleChange,
        		ingredients: ing.ingredients,
                ingredientRemoval: this.ingredientRemoval,
                title: ing.title
        	}

            return (
                <IngredientGroup key={idx} {...props} />
			)
		});

		return (
			<div className="panel-body">

				<div className="row">
					<div className="col-md-1">
						<button className="btn btn-success" onClick={() => this.props.saveClick('sweet')}>
							SAVE
						</button>
					</div>
					<div className="col-md-1">
						<button className="btn btn-danger" onClick={() => this.props.cancelClick('coo')}>
							CANCEL
						</button>
					</div>
				</div>


				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="recipeName">Recipe Name</label>
						<input className="form-control" id="recipeName" ref={input => this.recipeName = input} defaultValue={this.state.selectedRecipe.recipeName} />
					</div>
					<div className="form-group">
						<label htmlFor="servingSize">Serving Size</label>
						<input className="form-control" id="servingSize" ref={input => this.servingSize = input} defaultValue={this.state.selectedRecipe.servingSize} />
					</div>

					<h4>Ingredients</h4>
					<ul>{ ingredientsElement }</ul>

					<input type="submit" className="btn btn-default" value="Submit" />
				</form>
			</div>
		)
	}

}

const mapStateToProps = function(store){
	return {
		selectedRecipe: store.recipeState.selectedRecipe
	}
}


export default connect(mapStateToProps)(EditRecipeContainer)
