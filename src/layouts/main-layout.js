import React from 'react';
import MyAppBar from '../components/MyAppBar';

export default (props) =>
	(
		<div className="app">
			<MyAppBar />
			<main className="container">
				{props.children}
			</main>
		</div>
	)

	//
	//
