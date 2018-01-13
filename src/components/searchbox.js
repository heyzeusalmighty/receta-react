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

// const SearchBox = ({ searchForThis, placeholder }) => {
//     return (
//         <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//             <input className="mdl-textfield__input" 
//                 type="text" 
//                 id="sample3"
//                 ref={ el => searchString = el }
//                 onKeyDown={event => handleKeyDown(event, searchForThis)}
//             />
//             <label className="mdl-textfield__label" htmlFor="sample3">
//                 {placeholder}
//             </label>
//         </div>
//     );
// }

// SearchBox.propTypes = {
//     searchForThis: PropTypes.func.isRequired,
//     placeholder: PropTypes.string
// };

// SearchBox.defaultProps = {
//     placeholder: 'Recipe?'
// }

// export default SearchBox;

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     if
    // }
    updatePlaceHolder = (string) => {
        if (string.length > 0 && this.state.placeholder.length !== 0) {
            this.setState({ placeholder: '' });
        }

        if (string.length === 0 && this.state.placeholder.length === 0) {

        }
        this.setState({ searchString: string });
    }

    render() {
        return (
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" 
                    type="text" 
                    id="sample3"
                    ref={ el => this.setState({ searchString:  el }) }
                    onKeyDown={event => handleKeyDown(event, this.props.searchForThis)}
                />
                <label className="mdl-textfield__label" htmlFor="sample3">
                    {this.state.placeholder}
                </label>
            </div>
        );
    }


}

export default SearchBox;