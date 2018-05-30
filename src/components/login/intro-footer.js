import React from 'react';
import {connect} from 'react-redux';

import {changeUserLoginState} from '../../actions/actions';
import './intro-footer.css';

export class IntroFooter extends React.Component {
	onClick(props){
		return this.props.dispatch(changeUserLoginState());
	}

	render(props){
		if(this.props.login === true){
			return(
				<div>
					<button className='btn' onClick={() => this.onClick()}>Sign Up</button>
				</div>
			)
		}
		return(
			<div>
			<button className='btn' onClick={() => this.onClick()}>Login</button>
		</div>
		)
	}
}

const mapStateToProps = state => ({
	login: state.motivatr.login
})

export default connect(mapStateToProps)(IntroFooter);