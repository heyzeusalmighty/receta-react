import React from 'react';

let searchString;

const handleKeyDown = (event, searchForThis) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        // check if its the last one
        console.log('got pressed');
        searchForThis(searchString.value);
    }
}

const SearchBox = ({ searchForThis }) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Search for things</label>
            <input
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder="Recipe?"
                ref={ el => searchString = el }
                onKeyDown={(event) => handleKeyDown(event, searchForThis)}  />
        </div>
    );
}

export default SearchBox;