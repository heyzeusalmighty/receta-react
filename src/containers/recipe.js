import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import store from '../store';
import * as types from '../reducers/actions';
import ViewRecipe from '../components/view-recipe'
import EditRecipe from './edit-recipe';


class RecipeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: { recipeName: ''},
            showEdit: false
        };

        let recipeId = this.props.params.recipeId;
        store.dispatch({ type: types.SELECT_RECIPE, recipeId: recipeId });

        this.editOnClick = this.editOnClick.bind(this);
        this.saveOnClick = this.saveOnClick.bind(this);
        this.cancelOnClick = this.cancelOnClick.bind(this);
    }

    editOnClick(coocoo) {
        this.setState({ showEdit: true });
        console.log('coocoo =>', coocoo)
    }

    cancelOnClick(message) {
        console.log('cancel => ', message);
        this.setState({ showEdit: false });
    }

    saveOnClick(message) {
        console.log('saving => ', message);
        this.setState({ showEdit: false });
    }    

    render() {
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
                    ? <EditRecipe
                        saveClick={this.saveOnClick}
                        cancelClick={this.cancelOnClick} />
                    : <ViewRecipe
                        selectedRecipe={this.props.selectedRecipe}
                        instructions={instructions}
                        ingredients={ingredients}
                        tags={tags}
                        editClick={this.editOnClick}
                        goBack={browserHistory.goBack} />
                }
            </div>
        );
    }
}


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
