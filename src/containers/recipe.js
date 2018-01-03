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

        // this.editOnClick = this.editOnClick.bind(this);
        // this.saveOnClick = this.saveOnClick.bind(this);
        // this.cancelOnClick = this.cancelOnClick.bind(this);
    }

    editOnClick = (coocoo) => {
        this.setState({ showEdit: true });
        console.log('coocoo =>', coocoo)
    }

    cancelOnClick = (message) => {
        console.log('cancel => ', message);
        this.setState({ showEdit: false });
    }

    saveOnClick = (message) => {        
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