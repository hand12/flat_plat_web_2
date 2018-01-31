import {
	SET_FORM,
} from '../actions/action_types';

const initialState = () => {
  const departure_date = new Date()
  const return_date = new Date()
  return_date.setDate(return_date.getDate() + 1)

  return {
		plan: {
			location: {
				name: '',
				lat: '',
				lng: ''
			},
			departure_date: departure_date,
			return_date: return_date,
			description: '',
		}
  }
}



const plan = (state = initialState(), action) => {
	switch(action.type) {
		case SET_FORM:
			return Object.assign({}, state, {
				plan: action.payload
			})
		default:
			return state
	}
}

export default plan;