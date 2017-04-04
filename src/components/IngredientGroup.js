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


	render() {

		let ingLines = this.props.ingredients.map((ing, idx) => {
			let props = {
				id: idx,
				onChange: this.handleIngredientLineChange,
				ingredientRemoval: this.handleIngredientRemoval,
				ingredient: ing
			}
			return (
				<IngredientLine key={idx} {...props} />
			)
		});

		return (
			<div>
				<IngredientTitle title={this.props.title} onChange={this.handleTitleChange} />
				{ingLines}
			</div>
		)
	}
}
