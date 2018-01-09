import React from 'react';
import MyAppBar from '../components/MyAppBar';

export default (props) =>
	(
		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<MyAppBar />
			<main className="mdl-layout__content">
				<div className="page-content">
					{props.children}
				</div>
			</main>
		</div>
	);