import React from 'react';


const RecipeView = (props) => (
	<div className="panel-body">

		<button className="btn btn-default" onClick={props.goBack}>Back</button>
		<button className="btn btn-primary" onClick={() => props.editClick('cool man')}>Edit</button>

		<dl className="dl-horizontal">
			<dt>Description</dt>
			<dd>{props.selectedRecipe.description}</dd>
		</dl>
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
		{ props.ingredients.map(ing => (
			<div className="col-md-4" key={ing._id}>
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
)

export default RecipeView;
