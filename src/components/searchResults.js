import React from 'react';

const buttonClick = (id, getRecipe) => {
    getRecipe(id);
}

const SingleRecipe = (recipe, getRecipe) => {
    console.log(recipe.recipe)
    const { imageUrlsBySize, recipeName, sourceDisplayName, id } = recipe.recipe;
    return (
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={imageUrlsBySize[90]} alt="..." />
                <div className="caption">
                    <h3>{recipeName}</h3>
                    <p><i>{sourceDisplayName}</i></p>
                    <p>
                        <button className="btn btn-default" onClick={() => buttonClick(id)}>Button</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

const SingleListItem = ({recipe, getRecipe}) => {
    const { imageUrlsBySize, recipeName, sourceDisplayName, id } = recipe;
    const style = { cursor: 'pointer' };
    return (
        <div className="list-group-item row" onClick={() => buttonClick(id, getRecipe)} style={style}>
            <div className="col-md-2 thumbnail">
                <img src={imageUrlsBySize[90]} alt="..." />
            </div>
            <div className="col-md-10">
                <h4>{recipeName}</h4>
                <p><i>{sourceDisplayName}</i></p>
                
            </div>
        </div>
    );
}

const SearchResults = ({ matches, getRecipe }) => {
    matches = matches || [];
    return (
        <div>
            <div className="list-group">
                { matches.map(r => (
                    <SingleListItem recipe={r} key={r.recipeName} getRecipe={getRecipe} />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;