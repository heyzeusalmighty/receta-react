import React from 'react';

const buttonClick = (id) => {
    console.log('id =>', id)
}

const SingleRecipe = recipe => {
    console.log(recipe.recipe)
    const { imageUrlsBySize, recipeName, sourceDisplayName, id, smallImageUrls } = recipe.recipe;
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

const SearchResults = ({ matches }) => {
    matches = matches || [];
    return (
        <div>
            <div className="row">
                { matches.map(r => (
                    <SingleRecipe recipe={r} key={r.recipeName} />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;