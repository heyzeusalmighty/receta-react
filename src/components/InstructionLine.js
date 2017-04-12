import React from 'react';

export default class InstructionLine extends React.Component {

    componentDidMount = () => {
        // this is being used to determine new instructions
        // and then focusing on them        
        if (this.props.instruction.length === 0) {
            this.instructionInput.focus();
        }

    }

    handleClick = () => {
        console.log('click :', this.props.id);
        this.props.instructionDelete(this.props.id);
    }

    handleChange = (event) => {
        console.log('change :', this.props.id);
        this.props.instructionChange(this.props.id, event.target.value);
    }

    handleKeyDown = (event) => {
		if (event.keyCode === 9) {
			event.preventDefault();
			console.log('it was a tab');
		}

		if (event.keyCode === 13) {
			event.preventDefault();
			console.log('ay, tis an ENTER key press');
            this.props.instructionAdd();
		}
	}

    render() {
        return (

            <div className="input-group">
				<div className="input-group-btn">
					<button className="btn btn-danger" type="button"><i onClick={this.handleClick} className="glyphicon glyphicon-remove"></i></button>
				</div>
				<input type="text"
                    ref={(input) => { this.instructionInput = input; }}
                    className="form-control"
                    value={this.props.instruction}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown} />
			</div>

        )
    }
}
