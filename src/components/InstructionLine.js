import React from 'react';

export default class InstructionLine extends React.Component {

    handleClick = () => {
        console.log('click :', this.props.id);
        this.props.instructionDelete(this.props.id);
    }

    handleChange = (event) => {
        console.log('change :', this.props.id);
        this.props.instructionChange(this.props.id, event.target.value);
    }

    render() {
        return (

            <div className="input-group">
				<div className="input-group-btn">
					<button className="btn btn-danger" type="button"><i onClick={this.handleClick} className="glyphicon glyphicon-remove"></i></button>
				</div>
				<input type="text" className="form-control" value={this.props.instruction} onChange={this.handleChange} />
			</div>

        )
    }
}
