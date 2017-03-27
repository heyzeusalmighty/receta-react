import React from 'react';
import { Link } from 'react-router';

export default function(props) {
	return (
		<div className="app">
			<div className="header">
				<ul>
					<li><Link to="/" activeClassName="active">Home</Link></li>
				</ul>
			</div>
			<main>
				{props.children}
			</main>
		</div>
	)
}
