import form from './form'
import plans from './plans'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	form, plans
})

export default rootReducer