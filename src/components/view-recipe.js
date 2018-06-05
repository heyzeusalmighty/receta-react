import React from 'react';


const cardStyle = {
	width: 'calc(100% - 80px)',
	margin: '1em 20px 2em 20px'
};

const RecipeView = (props) => (
	<div className="mdl-card mdl-shadow--2dp" style={cardStyle}>

		<div className="mdl-card__title">
			<h2 className="mdl-card__title-text">{props.selectedRecipe.recipeName}</h2>
		</div>

		<div className="mdl-card__supporting-text">
			{props.selectedRecipe.description}

			<dl className="dl-horizontal">
				<dt>Serving Size</dt>
				<dd>{props.selectedRecipe.servingSize}</dd>
			</dl>
			<dl className="dl-horizontal">
				<dt>Source</dt>
				<dd>{props.selectedRecipe.source}</dd>
			</dl>
			<dl className="dl-horizontal">
				<dt>Source URl</dt>
				<dd>{props.selectedRecipe.sourceUrl}</dd>
			</dl>
			<dl className="dl-horizontal">
				<dt>Image URL</dt>
				<dd>{props.selectedRecipe.imageUrl}</dd>
			</dl>

			<h5>Tags</h5>
			{props.tags.map(tag => (
				<span className="label label-primary" key={tag}>{tag}</span>
			))}

			<h4>Ingredients</h4>
			<div className="row">
			{ props.ingredients.map((ing, index) => (
				<div className="col-md-4" key={index}>
					<ul className="list-group" >
						<li className="list-group-item active">{ing.title}</li>
						{ing.ingredients.map((ingredient, idx) => (
							<li className="list-group-item" key={idx + ingredient}>{ingredient}</li>
						))}
					</ul>
				</div>
			))}
			</div>
			
			<h4>Instructions</h4>
			<ol>
				{ props.instructions.map(ins => (
					<li key={ins.id}>
						{ ins.instruction }
					</li>
				))}
			</ol>


		</div>

		<div className="mdl-card__menu">
			<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
				<i className="material-icons">clear</i>
			</button>
		</div>
		<div className="mdl-card__actions mdl-card--border">
			<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={props.goBack}>Back</button>
			<button 
				className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" 
				onClick={() => props.editClick('cool man')}
			>Edit</button>
		</div>
	</div>
)

export default RecipeView;
