import { combineReducers } from 'redux'
import header from './modules/header'
import sidebar from './modules/sidebar'

export default combineReducers({
  header,
  sidebar,
})
