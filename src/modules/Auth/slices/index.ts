import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import credentials from './credentials'


export default combineReducers({
  auth,
  credentials,
})
