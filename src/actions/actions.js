import { SET_FORM, SET_PLAN, SET_PLANS, RECEIVE_PLANS } from './action_types'
import { HOST } from '../api_hosts'

import store from '../store'


export const setForm = (payload) => {
	return {
		type: SET_FORM,
		payload
	}
}

export const setPlans = (payload) => {
	fetchPlans(payload)
	return {
		type: SET_PLANS,
		payload,
	}
}

export const setPlan = (payload) => {
	// fetchPlan(payload)
	return {
		type: SET_PLAN,
		payload
	}
}

const fetchPlan = (plan) => {
	// if(plan) {
	// 	fetch(HOST + "plans", {
	// 		mode: "cors",
	// 	})
	// 	.then((response) => {
	// 		if(!response.ok) {
	// 			throw Error(response.statusText)
	// 		}
	// 		return response
	// 	})
	// 	.then((response) => response.json())
	// 	.then((json) => {
	// 		store.dispatch(receivePlans(json))
	// 	})
	// 	.catch((err) => {
	// 		console.log(err)
	// 	})
	// }
}

const fetchPlans = (plans) => {
	if(plans.length == 0) {
		fetch(HOST + "plans", {
			mode: "cors",
		})
		.then((response) => {
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then((response) => response.json())
		.then((json) => {
			store.dispatch(receivePlans(json))
		})
		.catch((err) => {
			console.log(err)
		})
	}
}

const receivePlans = (payload) => {
	return {
		type: RECEIVE_PLANS,
		payload,
	}
}

