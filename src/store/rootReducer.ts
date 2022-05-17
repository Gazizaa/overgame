import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'

import authReducer from '../modules/Auth/slices'
import { moduleName as authModule } from '../modules/Auth/moduleName'


const reducers = combineReducers({
  [authModule]: authReducer,
})

export const rootReducer = (state, action) => {
  if (action.type === 'credentials/logout') {
    storage.removeItem('persist:doco_profile').then(r => r)
    storage
      .removeItem('persist:doco_credentials')
      .then(() => window.location.reload())

    return reducers(undefined, action)
  }

  return reducers(state, action)
}
