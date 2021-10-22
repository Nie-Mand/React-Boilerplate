import { combineReducers, createStore } from 'redux'
import reducers from './reducers/index.reducer'

export default createStore(combineReducers(reducers)) 