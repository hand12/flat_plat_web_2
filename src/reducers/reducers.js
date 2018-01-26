import plan from './plan'
import plans from './plans'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	plan, plans
})

export default rootReducer