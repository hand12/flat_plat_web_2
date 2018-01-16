import { combineReducers } from 'redux'

import {
	SET_PLAN,
} from '../actions/action_types';

const initialState = {
	plan: {
		location: '',
		departure_date: new Date,
		return_date: (new Date).setDate(new Date() + 3),
		description: '',
	}
}



const Plan = (state = initialState, action) => {
	switch(action.type) {
		case SET_PLAN:
			console.log("SET_PLANよばれた")
			console.log(action)
			return state
			// return Object.assign({}, state, {
			// 	isActivePostPlanPanel: false
			// })
		default:
			return state
	}
}

const rootReducer = combineReducers({
	Plan,
})

export default rootReducer