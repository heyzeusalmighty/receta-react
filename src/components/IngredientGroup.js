import React from 'react';
import IngredientLine from '../components/IngredientLine';
import IngredientTitle from '../components/IngredientTitle';

export default class IngredientGroup extends React.Component {

	constructor(props) {
		super(props);
	}

	handleIngredientLineChange(fieldId, value) {
        // let newState = {};
        // newState[fieldId] = value;
        // this.setState(newState);
        console.log('fieldId: ', fieldId, ' :: value : ', value);


    }


	render() {

		let ingLines = this.props.ingredients.map((ing, idx) => {
			let props = {
				id: idx,
				onChange: this.handleIngredientLineChange,
				ingredient: ing
			}
			return (
				<IngredientLine key={idx} {...props} />
			)
		});

		return (
			<div>
				<IngredientTitle title={this.props.title} />
				{ingLines}
			</div>
		)
	}
}

//
// let ingLines = ing.ingredients.map((ingLine, ingIndex) => {
// 	let props = {
// 		id: ingIndex,
// 		onChange: this.handleIngredientLineChange,
// 		ingredient: ingLine
// 	}
// 	return (
// 		<IngredientLine key={ingIndex} {...props} />
// 	)
// });
//
//
// return (
// 	<div key={idx}>
// 		<IngredientTitle title={ing.title} />
// 		{ingLines}
// 	</div>
// )
