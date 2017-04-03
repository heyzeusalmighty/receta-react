import React from 'react';

export default class IngredientLine extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: this.props.ingredient
		}
	}

	handleChange = (event) => {
		// this.setState({ inputValue: event.target.value });
		this.props.onChange(this.props.id, event.target.value);
	}

	render() {
		return (
			<div className="form-inline form-group ingredient-line">
				<button className="btn btn-danger"><i className="glyphicon glyphicon-remove"></i></button>
				<input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleChange} />
			</div>
		)
	}

}


// <div className="form-inline form-group ingredient-line">
// 	<button className="btn btn-danger"><i className="glyphicon glyphicon-remove"></i></button>
// 	<input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleChange} />
// </div>
