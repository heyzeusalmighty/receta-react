import React from 'react';
import PropTypes from 'prop-types';

let searchString;

const handleKeyDown = (event, searchForThis) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        // check if its the last one
        console.log('got pressed');
        searchForThis(searchString.value);
    }
}

const SearchBox = ({ searchForThis, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Search for things</label>
            <input
                className="form-control" 
                id="exampleInputEmail1" 
                placeholder={placeholder}
                ref={ el => searchString = el }
                onKeyDown={(event) => handleKeyDown(event, searchForThis)}  />
        </div>
    );
}

SearchBox.propTypes = {
    searchForThis: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

SearchBox.defaultProps = {
    placeholder: 'Recipe?'
}

export default SearchBox;