import React from 'react';

export default class IngredientTitle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: this.props.title
		}
	}

	handleChange = (event) => {
		this.setState({ inputValue: event.target.value });
	}

	render() {
		return (

			<div className="form-group" >
				<label htmlFor="ingredientTitle">Title</label>
				<input className="form-control"
					type="text"
					id="ingredientTitle"
					value={this.state.inputValue}
					onChange={this.handleChange}
					/>
			</div>

		)
	}

}
