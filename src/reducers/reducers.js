import { combineReducers } from 'redux'

import {
	TOGGLE_POST_PLAN_PANEL,
} from '../actions/actions';

const initialState = {
	isActivePostPlanPanel: false
}



const post = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_POST_PLAN_PANEL:
			console.log("toggle呼ばれた")
			if (state.isActivePostPlanPanel) {
				return Object.assign({}, state, {
					isActivePostPlanPanel: false
				})
			} else {
				return Object.assign({}, state, {
					isActivePostPlanPanel: true
				})
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	post,
})

export default rootReducer