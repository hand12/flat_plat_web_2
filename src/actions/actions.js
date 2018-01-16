import { SET_PLAN } from './action_types'

export const set_plan = (value) => {
	return {
		type: SET_PLAN,
		value
	}
}
