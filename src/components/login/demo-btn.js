import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDemo } from '../../actions/actions';

export class DemoBtn extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		this.props.dispatch(setDemo(true));
	}

	render(){
	return(
		<button className='btn'
		onClick={this.onClick}>
		<Link to="/dashboard">Demo</Link></button>
	)
	}
}

export default connect()(DemoBtn);