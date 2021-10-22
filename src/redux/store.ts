import { combineReducers, createStore } from 'redux'
import reducers from './reducers'

export default createStore(combineReducers(reducers)) 