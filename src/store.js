import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/reducers'

const configureStore = () => {
	return createStore(
		rootReducer,
		applyMiddleware(
			thunkMiddleware,
		)
	)
}

const store = configureStore()
export default store