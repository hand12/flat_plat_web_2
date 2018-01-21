import {
	SET_PLAN,
	SET_PLANS,
} from '../actions/action_types';

const initialState = () => {
  const departure_date = new Date()
  const return_date = new Date()
  return_date.setDate(return_date.getDate() + 1)

  return {
  	location: {
			name: '',
			lat: '',
			lng: ''
		},
    departure_date: departure_date,
    return_date: return_date,
		description: '',
		plans: [],
  }
}



const plan = (state = initialState(), action) => {
	switch(action.type) {
		case SET_PLAN:
			return Object.assign({}, state, {
				...action.payload
			})
		case SET_PLANS:
			return Object.assign({}, state, {
				...action.payload
			})
		default:
			return state
	}
}

export default plan;