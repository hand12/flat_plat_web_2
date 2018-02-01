import {
  FETCH_PLAN
} from '../actions/fetch/types';

const initialState = () => (
  {
		plan: {},
  }
)

const fetch = (state = initialState(), action) => {
	switch(action.type) {
		case FETCH_PLAN:
			console.log("hoge")
			return state
		default:
			return state
	}
}



export default fetch;