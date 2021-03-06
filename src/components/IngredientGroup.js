import React from 'react';
import IngredientLine from '../components/IngredientLine';
import IngredientTitle from '../components/IngredientTitle';

export default class IngredientGroup extends React.Component {

	handleIngredientLineChange = (ingredientId, value) => {
		this.props.groupChange(this.props.id, ingredientId, value);
    }

	handleTitleChange = (title) => {
		this.props.titleChange(this.props.id, title);
	}

	handleIngredientRemoval = (ingredientId) => {
		this.props.ingredientRemoval(this.props.id, ingredientId);
	}

	handleIngredientAdd = () => {
		this.props.addNewIngredient(this.props.id);
	}

	handleTabChange = (ingredientId) => {
		console.log('tab tab tab ', ingredientId);
		this.props.tabChange(this.props.id, ingredientId);
	}


	render() {

		let ingLines = this.props.ingredients.map((ing, idx) => {
			let ingredient = ing;
			let focus = false;
			if (ing.focus) {
				console.log('coool man', idx, ing.ingredient)
				ingredient = ing.ingredient;
				focus = true;
			}
			let props = {
				id: idx,
				ingredient,
				focus,
				ingredientCount: this.props.ingredients.length,
				onChange: this.handleIngredientLineChange,
				ingredientRemoval: this.handleIngredientRemoval,
				addIngredient: this.handleIngredientAdd,
				tabChange: this.handleTabChange

			}
			return (
				<IngredientLine key={idx} {...props} />
			)
		});

		return (
			<div className="col-md-4">
			<ul className="list-group">
				<IngredientTitle title={this.props.title} onChange={this.handleTitleChange} />
				<button type="button" className="list-group-item active" onClick={this.handleIngredientAdd}>Add New Ingredient</button>
				{ingLines}
			</ul>
			</div>
		)
	}
}

// <div>
// 	<IngredientTitle title={this.props.title} onChange={this.handleTitleChange} />
// 	{ingLines}
// </div>
