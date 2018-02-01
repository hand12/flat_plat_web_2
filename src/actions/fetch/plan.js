import { FETCH_PLAN } from './types'

export const fetchPlan = (payload) => {
	return {
		type: FETCH_PLAN,
		payload
	}
}