import form from './form'
import plans from './plans'
import fetch from './fetch'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	form, plans, fetch
})

export default rootReducer