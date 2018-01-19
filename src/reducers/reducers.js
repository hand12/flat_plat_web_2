import { combineReducers } from 'redux'

import {
	SET_PLAN,
} from '../actions/action_types';

const initialState = {
	plan: {
		location: '',
		departure_date: '',
		return_date: '',
		description: '',
	}
}



const plan = (state = initialState, action) => {
	switch(action.type) {
		case SET_PLAN:
			console.log("SET_PLANよばれた")
			console.log(action.value)
			return Object.assign({}, state, {
				plan: action.value
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	plan,
})

export default rootReducer