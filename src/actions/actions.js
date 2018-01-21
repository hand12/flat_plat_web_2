import { SET_PLAN, SET_PLANS } from './action_types'


export const setPlan = (payload) => {
	return {
		type: SET_PLAN,
		payload
	}
}

export const setPlans = (payload) => {
	return {
		type: SET_PLANS,
		payload
	}
}