import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import { reducer } from './reducer';

//export default createStore(reducer);

export default createStore(
	combineReducers({
	form: formReducer,
	motivatr: reducer
	})
);