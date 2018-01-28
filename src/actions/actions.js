import { SET_PLAN, SET_PLANS, RECEIVE_PLANS } from './action_types'
import { HOST } from '../api_hosts'

import store from '../store'


export const setPlan = (payload) => {
	return {
		type: SET_PLAN,
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

