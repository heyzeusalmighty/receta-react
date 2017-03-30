import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import * as types from '../reducers/actions';
import ViewRecipe from '../components/view-recipe'

const RecipeContainer = React.createClass({

    getInitialState: () => {        
        return { showEdit: false }
    },

    editOnClick: () => {
        this.setState({
            showEdit: true
        });
        console.log('you are editing now')
    },

    cancelOnClick: () => {
        this.setState({
            showEdit: false
        });
    },

    componentWillMount: function() {
        this.setState({
            selectedRecipe: { recipeName: ''}
        });
        let recipeId = this.props.params.recipeId;
        store.dispatch({ type: types.SELECT_RECIPE, recipeId: recipeId });
    },

    render: function() {

        let instructions = (this.props.selectedRecipe.instructions)
            ? this.props.selectedRecipe.instructions
            : [];

        let tags = (this.props.selectedRecipe.tags)
            ? this.props.selectedRecipe.tags
            : [];

        let ingredients = (this.props.selectedRecipe.ingredients)
            ? this.props.selectedRecipe.ingredients
            : [];


        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        { this.props.selectedRecipe.recipeName }
                    </h4>
                </div>





                { this.state.showEdit
                    ? <span>dude</span>
                    : <ViewRecipe
                        selectedRecipe={this.props.selectedRecipe}
                        instructions={instructions}
                        ingredients={ingredients}
                        tags={tags}
                        editClick={this.editOnClick} />}
            </div>






        );
    }

});

const mapStateToProps = function(store) {
  return {
    recipes: store.recipeState.recipes,
    selectedRecipe: store.recipeState.selectedRecipe
  };
};

export default connect(mapStateToProps)(RecipeContainer);




// {this.props.selectedRecipe.tags.map(tag => (<span className="label label-primary">{tag}</span>))}


// <div className="panel-body">
//
//     <dl className="dl-horizontal">
//         <dt>Description</dt>
//         <dd>{this.props.selectedRecipe.description}</dd>
//     </dl>
//     <dl className="dl-horizontal">
//         <dt>Serving Size</dt>
//         <dd>{this.props.selectedRecipe.servingSize}</dd>
//     </dl>
//     <dl className="dl-horizontal">
//         <dt>Source</dt>
//         <dd>{this.props.selectedRecipe.source}</dd>
//     </dl>
//     <dl className="dl-horizontal">
//         <dt>Source URl</dt>
//         <dd>{this.props.selectedRecipe.sourceUrl}</dd>
//     </dl>
//     <dl className="dl-horizontal">
//         <dt>Image URL</dt>
//         <dd>{this.props.selectedRecipe.imageUrl}</dd>
//     </dl>
//
//     <h5>Tags</h5>
//     {tags.map(tag => (
//         <span className="label label-primary" key={tag}>{tag}</span>
//     ))}
//
//     <h4>Ingredients</h4>
//     <div className="row">
//     { ingredients.map(ing => (
//         <div className="col-md-4" key={ing._id}>
//             <ul className="list-group" >
//                 <li className="list-group-item active">{ing.title}</li>
//                 {ing.ingredients.map(ingredient => (
//                     <li className="list-group-item" key={ingredient}>{ingredient}</li>
//                 ))}
//             </ul>
//         </div>
//     ))}
//     </div>
//
//     <h4>Instructions</h4>
//     <ol>
//         { instructions.map(ins => (
//             <li key={ins.id}>
//                 { ins.instruction }
//             </li>
//         ))}
//     </ol>
// </div>
