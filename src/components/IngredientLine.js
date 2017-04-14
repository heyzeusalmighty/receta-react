import React from 'react';

export default class IngredientLine extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showInput: this.props.focus };

	}

	componentDidMount() {
		console.log('mounted', this.props.ingredientCount, this.props.id)
	}

	handleChange = (event) => {
		// console.log('event => ', event)
		this.props.onChange(this.props.id, event.target.value);
	}

	handleClick = (event) => {
		this.setState({ showInput: !this.state.showInput });
	}

	handleKeyDown = (event) => {
		if (event.keyCode === 9) {
			event.preventDefault();
			console.log('it was a tab');
			// go down to the next one and focus on that
		}

		if (event.keyCode === 27) {
			console.log('you pressed escape');
			if (this.props.ingredient.length === 0) {
				this.handleRemoveClick();
			}
		}

		if (event.keyCode === 13) {
			event.preventDefault();
			console.log('ay, tis an ENTER key press');
			this.setState({ showInput: false });
			// check if its the last one
			if ((this.props.id + 1) === this.props.ingredientCount) {
				console.log('this is the last one');
				this.props.addIngredient();
			}
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

		let style = {
			color: '#d9534f'
		}

		let inputElement = <input autoFocus type="text"
			className="form-control ingredient-line"
			value={this.props.ingredient }
			onChange={this.handleChange}
			onBlur={this.handleBlur}
			onKeyDown={this.handleKeyDown} />

		let stackOverflowAnswer =
			<div onClick={this.handleClick}>

				<span className="pull-left">
					<span className="btn btn-xs btn-default" style={style}>
						<span className="glyphicon glyphicon-remove" onClick={this.handleRemoveClick}></span>
					</span>
				</span>
				{this.props.ingredient }
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
