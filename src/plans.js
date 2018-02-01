import {
	SET_PLANS,
	RECEIVE_PLANS
} from '../actions/action_types';

const initialState = () => (
  {
    plans: []
  }
)

const plans = (state = initialState(), action) => {
	switch(action.type) {
		case SET_PLANS:
			return state
		case RECEIVE_PLANS:
			return Object.assign({}, state, {
				plans: action.payload
			})
		default:
			return state
	}
}



export default plans;