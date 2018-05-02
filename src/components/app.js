import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';

export default function App(props){
	return (
		<Router>
			<div className='app'>
				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/dashboard" component={Dashboard}  />
				</main>
			</div>
		</Router>
	);
}