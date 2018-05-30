import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth } from '../../actions/auth'
import './logout.css'

export class Logout extends React.Component {
	onClick(event) {
		this.props.dispatch(clearAuth());
	}

	render(){
	return(
		<button className='logout-btn'
		onClick={() => this.onClick()}>
		<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Logout</Link></button>
	)
	}
}

export default connect()(Logout);