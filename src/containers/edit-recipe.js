import React from 'react';
import { connect } from 'react-redux';
import * as types from '../reducers/actions'
import store from '../store';
import * as recipeApi from '../api/recipe.api';

import IngredientGroup from '../components/IngredientGroup';
import InstructionLine from '../components/InstructionLine';



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

	handleInstructionChange = (instructionId, value) => {
		let recipe = Object.assign({}, this.state.selectedRecipe);
        let instIndex = instructionId - 1;
		recipe.instructions[instIndex].instruction = value;
		this.setState({ selectedRecipe: recipe });
	}

	handleInstructionDelete = (instructionId) => {
		let recipe = Object.assign({}, this.state.selectedRecipe);
        let instructionIndex = instructionId - 1;
		recipe.instructions.splice(instructionIndex, 1);
		this.setState({ selectedRecipe: recipe });
	}

	handleInstructionAdd = () => {
		let recipe = Object.assign({}, this.state.selectedRecipe);
		recipe.instructions.push({ id: recipe.instructions.length + 1, instruction: '' });
		this.setState({ selectedRecipe: recipe });
	}

    handleIngredientAdd = (groupId) => {
        let recipe = Object.assign({}, this.state.selectedRecipe);
		recipe.ingredients[groupId].ingredients.push('dude');
		this.setState({ selectedRecipe: recipe });
    }

    saveEdit = () => {
        // store.dispatch({ type: types.SAVE_EDIT, recipe: this.state.selectedRecipe });
        recipeApi.saveRecipeEdit(this.state.selectedRecipe);
        this.props.saveClick();
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
                addNewIngredient: this.handleIngredientAdd,
                title: ing.title
        	}

            return (
                <IngredientGroup  key={idx} {...props} />
			)
		});

		let instructionsElement = this.state.selectedRecipe.instructions.map((ins) => {
			let props = {
				id: ins.id,
				instruction: ins.instruction,
				instructionChange: this.handleInstructionChange,
				instructionDelete: this.handleInstructionDelete,
                instructionAdd: this.handleInstructionAdd
			};

			return (
				<InstructionLine key={ins.id} {...props} />
			)
		})

		return (
			<div className="panel-body">

				<div className="row">
					<div className="col-md-1">
						<button className="btn btn-success" onClick={this.saveEdit}>
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
                    <div className="row">
                        { ingredientsElement }
                    </div>
					<ul></ul>

					<h4>
						<button className="btn btn-success" type="button" onClick={this.handleInstructionAdd}>
							<i className="glyphicon glyphicon-plus"></i>
						</button>
						&nbsp;&nbsp;&nbsp;

						Instructions</h4>

					{ instructionsElement }


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
