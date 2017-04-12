import React from 'react';
import styles from './ingredient-line.css'

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
		if (event.keyCode === 13) {
			event.preventDefault();
			console.log('ay, tis an ENTER key press');
			this.setState({ showInput: false });
		} else {
			console.log('keyDown', event.keyCode);
		}

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
			className="form-control ingredient-line"
			value={this.props.ingredient}
			onChange={this.handleChange}
			onBlur={this.handleBlur}
			onKeyDown={this.handleKeyDown} />
		let displayElement = <div onClick={this.handleClick}>
								<span className="btn btn-default whoa-button">Whoa</span>
								<span>{this.props.ingredient}</span>
							</div>

		let inputGroupDisplay =
			<div className="input-group">
				<div className="input-group-btn">
					<button className="btn btn-danger" type="button">W</button>
				</div>
				<span>{this.props.ingredient}</span>
			</div>

		let stackOverflowAnswer =
			<div onClick={this.handleClick}>
				{this.props.ingredient}
				<span className="pull-right">
					<span className="btn btn-xs btn-default">
						<span className="glyphicon glyphicon-remove" onClick={this.handleRemoveClick}></span>
					</span>
				</span>
			</div>

		return (
			<li className={this.isActive()}>
				{ this.state.showInput ? inputElement : stackOverflowAnswer }
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
