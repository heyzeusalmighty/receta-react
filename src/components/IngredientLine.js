import React from 'react';

export default class IngredientLine extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showInput: false};
	}

	handleChange = (event) => {
		console.log('event => ', event)
		this.props.onChange(this.props.id, event.target.value);
	}

	handleClick = (event) => {
		this.setState({ showInput: !this.state.showInput });
	}

	handleKeyDown = (event) => {
		if (event.keyCode === 9) {
			event.preventDefault();
			console.log('it was a tab');
		}
		console.log('keyDown', event.keyCode);
	}

	handleRemoveClick = (event) => {
		this.props.ingredientRemoval(this.props.id);
	}

	handleBlur = (event) => {
		this.setState({ showInput: false });
	}

	isActive = () => {

		return 'list-group-item ' + ((this.state.showInput) ? 'active' : '');
	}

	render() {

		let inputElement = <input autoFocus type="text"
			className="form-control"
			value={this.props.ingredient}
			onChange={this.handleChange}
			onBlur={this.handleBlur}
			onKeyDown={this.handleKeyDown} />
		let displayElement = <div onClick={this.handleClick}>
			<span>{this.props.ingredient}</span>
		</div>

		return (
			<li className={this.isActive()}>
				{ this.state.showInput ? inputElement : displayElement }
			</li>
		)
	}

}

// <span className="badge"><i onClick={this.handleRemoveClick} className="glyphicon glyphicon-remove"></i></span>

// <div className="input-group">
// 	<div className="input-group-btn">
// 		<button className="btn btn-danger" type="button"><i onClick={this.handleClick} className="glyphicon glyphicon-remove"></i></button>
// 	</div>
// 	<input type="text" className="form-control" value={this.props.ingredient} onChange={this.handleChange} />
// </div>
