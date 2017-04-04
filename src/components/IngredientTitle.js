import React from 'react';

export default class IngredientTitle extends React.Component {

	handleChange = (event) => {
		this.props.onChange(event.target.value);
	}

	render() {
		return (
			<div className="form-group" >
				<label htmlFor="ingredientTitle">Title</label>
				<input className="form-control"
					type="text"
					id="ingredientTitle"
					value={this.props.title}
					onChange={this.handleChange}
					/>
			</div>

		)
	}

}
