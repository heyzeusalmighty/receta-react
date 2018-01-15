import React from 'react';

const buttonClick = (id, getRecipe) => {
    getRecipe(id);
}

const SingleRecipe = (recipe, getRecipe) => {
    const { imageUrlsBySize, recipeName, sourceDisplayName, id } = recipe.recipe;
    const listStyle = { height: '90px'};
    const picStyle = { height: '90px', width: '90px', borderRadius: 0 };
    return (
        <li className="mdl-list__item mdl-list__item--three-line" style={listStyle}>
            <span className="mdl-list__item-primary-content">
                <img src={imageUrlsBySize[90]} alt="..." className="mdl-list__item-avatar" style={picStyle} />
                <span>{recipeName}</span>
                <span className="mdl-list__item-text-body">
                    {sourceDisplayName}
                </span>
            </span>
            <span className="mdl-list__item-secondary-content">
                <span className="mdl-list__item-secondary-action" href="#">
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                        <i className="material-icons">star</i>
                    </button>
                </span>
            </span>
        </li>
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
    const resultStyle = { maxWidth: '600px'}
    return (
        <div style={resultStyle}>
            <ul className='mdl-list'>
                {
                    matches.map(r => (
                        <SingleRecipe recipe={r} key={r.recipeName} getRecipe={getRecipe} />
                    ))
                }
            </ul>
        </div>
    );
}

export default SearchResults;