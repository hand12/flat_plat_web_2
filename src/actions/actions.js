import { SET_PLAN } from './action_types'

export const set_plan = (payload) => {
	return {
		type: SET_PLAN,
		payload
	}
}
