import { combineReducers } from 'redux'
import counters from './counters'
import CarSelector from './CarSelector'

export default combineReducers({
    counters,
    CarSelector
})