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
            <div className="form-inline form-group ingredient-line">
				<button className="btn btn-danger" type="button"><i onClick={this.handleClick} className="glyphicon glyphicon-remove"></i></button>
				<input type="text" className="form-control" value={this.props.instruction} onChange={this.handleChange} />
			</div>
            
        )
    }
}

// <div class="form-inline">
//                 <div class="form-group">
//                     <label for="instr">{ this.props.id }. </label>
//                     <input type="text" className="form-control" id="instr" value={this.props.instruction} />
//                 </div>
//             </div>
