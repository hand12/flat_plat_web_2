import { SET_PLAN, FETCH_PLANS } from './action_types'


export const setPlan = (payload) => {
	return {
		type: SET_PLAN,
		payload
	}
}

export const fetchPlans = (payload) => {
	return {
		type: FETCH_PLANS,
		payload
	}
}