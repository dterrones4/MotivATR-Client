import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import './fitbit-auth.css';
import {Link, Redirect} from 'react-router-dom';
import {storeFitbitTokens} from '../actions/actions';

export class FitbitAuth extends React.Component {
	onClick(props){
		let queryString = window.location.search.slice(1); //req.query

		// we'll store the parameters here
		let obj = {};

		// if query string exists
		if (queryString) {

			// stuff after # is not part of query string, so get rid of it
			queryString = queryString.split('#')[0];

			// split our query string into its component parts
			var arr = queryString.split('&');

			for (var i=0; i<arr.length; i++) {
				// separate the keys and the values
				var a = arr[i].split('=');

				// in case params look like: list[]=thing1&list[]=thing2
				var paramNum = undefined;
				var paramName = a[0].replace(/\[\d*\]/, function(v) {
						paramNum = v.slice(1,-1);
						return '';
				});

				// set parameter value (use 'true' if empty)
				var paramValue = typeof(a[1])==='undefined' ? true : a[1];

				// (optional) keep case consistent
				paramName = paramName.toLowerCase();
				paramValue = paramValue.toLowerCase();

				// if parameter name already exists
				if (obj[paramName]) {
					// convert value to array (if still string)
					if (typeof obj[paramName] === 'string') {
						obj[paramName] = [obj[paramName]];
					}
					// if no array index number specified...
					if (typeof paramNum === 'undefined') {
						// put the value on the end of the array
						obj[paramName].push(paramValue);
					}
					// if array index number specified...
					else {
						// put the value at that index number
						obj[paramName][paramNum] = paramValue;
					}
				}
				// if param name doesn't exist yet, set it
				else {
					obj[paramName] = paramValue;
				}
			}
		}
		const data = {
			code: obj.code,
			token: localStorage.getItem('authToken'),
			id: this.props.currentUser.id
		};
		return this.props.dispatch(storeFitbitTokens(data));
	};



	render() {
		return(
			<main>
				<Header />
				<div id='fitbitAuth' className='center row'>
				Congrats you're all set! Head to the dashboard to get started.
				<button onClick={() => this.onClick()}>Dashboard</button>
				</div>
			</main>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(FitbitAuth);