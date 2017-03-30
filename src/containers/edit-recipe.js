import React from 'react';
import { connect } from 'react-redux';
import store from '../store';


class EditRecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedRecipe: props.selectedRecipe};
	}

	handleSubmit(event) {
		// console.log('event.target.value', event.target.value);

		console.log('recipeName', this.recipeName);

		event.preventDefault();
	}

	render() {
		return (
			<div className="panel-body">

				<div className="row">
					<div className="col-md-1">
						<button className="btn btn-success" onClick={() => this.props.saveClick('sweet')}>
							SAVE
						</button>
					</div>
					<div className="col-md-1">
						<button className="btn btn-danger" onClick={() => this.props.cancelClick('coo')}>
							CANCEL
						</button>
					</div>
				</div>


				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="recipeName">Recipe Name</label>
						<input className="form-control" id="recipeName" ref={input => this.recipeName = input} defaultValue={this.props.selectedRecipe.recipeName} />
					</div>
					<div className="form-group">
						<label htmlFor="servingSize">Serving Size</label>
						<input className="form-control" id="servingSize" ref={input => this.servingSize = input} defaultValue={this.props.selectedRecipe.servingSize} />
					</div>

					<h4>Ingredients</h4>
					this.props.selectedRecipe.ingredients.map((ing, idx) =>
						(
							<div className="form-group">
								<label htmlFor="ingredientTitle">Title</label>
								<input className="form-control"
									id="ingredientTitle"
									ref={input => this.ingredients[idx].title = input}
									defaultValue={this.props.selectedRecipe.ingredients[idx].title} />
							</div>
						)
					)



					<input type="submit" className="btn btn-default" value="Submit" />
				</form>






			</div>

		)
	}

}

const mapStateToProps = function(store){
	return {
		selectedRecipe: store.recipeState.selectedRecipe
	}
}


export default connect(mapStateToProps)(EditRecipeContainer)

// <input className="form-control" id="exampleInputEmail1" value={this.state.selectedRecipe.recipeName} onChange={this.handleChange} />
// <button className="btn btn-danger" onClick{() => this.props.cancelClick('cool')}>
// 	CANCEL
// </button>
// Editing recipes => { this.props.selectedRecipe.recipeName }
