import React from 'react';

export default class IngredientLine extends React.Component {

	handleChange = (event) => {
		this.props.onChange(this.props.id, event.target.value);
	}

	handleClick = (event) => {		
		this.props.ingredientRemoval(this.props.id);
	}

	render() {
		return (
			<div className="form-inline form-group ingredient-line">
				<button className="btn btn-danger" type="button"><i onClick={this.handleClick} className="glyphicon glyphicon-remove"></i></button>
				<input type="text" className="form-control" value={this.props.ingredient} onChange={this.handleChange} />
			</div>
		)
	}

}
