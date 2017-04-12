import React from 'react';
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import InstructionLine from './InstructionLine';

const startingProps = {
	id: 1,
	instruction: 'dude',
	instructionChange: () => { console.log('change')},
	instructionDelete: () => { console.log('delete')},
	instructionAdd: () => { console.log('add')}
};

it('should not focus if the instruction is there', () => {
	expect(3).toEqual(3);
});

it('should render without shitting the bed', () => {
	const div = document.createElement('div');
	ReactDOM.render(<InstructionLine {...startingProps} />, div);
});

it('should contain something I think', () => {
	// const wrapper = shallow(<InstructionLine {...startingProps} />);
	console.log(wrapper)
});
