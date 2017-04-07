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

//
// <div className="input-group">
// 	<div className="input-group-btn">
// 		<button className="btn btn-danger" type="button"><i onClick={this.handleClick} className="glyphicon glyphicon-remove"></i></button>
// 	</div>
// 	<input type="text" className="form-control" value={this.props.instruction} onChange={this.handleChange} />
// </div>
//
//
// <div className="form-group" >
// 	<label htmlFor="ingredientTitle">Title</label>
// 	<input className="form-control"
// 		type="text"
// 		id="ingredientTitle"
// 		value={this.props.title}
// 		onChange={this.handleChange}
// 		/>
// </div>
