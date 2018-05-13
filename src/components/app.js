import React from 'react';
import {connect} from 'react-redux';
import Home from './home';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Dashboard from './dashboard';
import FitbitAuth from './fitbit-auth'
import FitbitAuthToken from './fitbit-auth-token'
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
	componentDidUpdate(prevProps) {
			if (!prevProps.loggedIn && this.props.loggedIn) {
					// When we are logged in, refresh the auth token periodically
					this.startPeriodicRefresh();
			} else if (prevProps.loggedIn && !this.props.loggedIn) {
					// Stop refreshing when we log out
					this.stopPeriodicRefresh();
			}
	}

	componentWillUnmount() {
			this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
			this.refreshInterval = setInterval(
					() => this.props.dispatch(refreshAuthToken()),
					60 * 60 * 1000 // One hour
			);
	}

	stopPeriodicRefresh() {
			if (!this.refreshInterval) {
					return;
			}

			clearInterval(this.refreshInterval);
	} 
	render(){
	return (
		<BrowserRouter>
			<div className='app'>
				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/fitbitAuth" component={FitbitAuth} />
					<Route exact path="/fitbitAuthToken" component={FitbitAuthToken} />
				</main>
			</div>
		</BrowserRouter>
		);
	}
};

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});


export default withRouter(connect(mapStateToProps)(App));