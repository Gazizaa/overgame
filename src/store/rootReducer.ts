import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'

import authReducer from '../modules/Auth/slices'
import welcomeReducer from '../modules/WelcomePage/slices'
import commonReducer from '../modules/common/slices'
import mainReducer from '../modules/MainPage/slices'

import { moduleName as authModule } from '../modules/Auth/moduleName'
import { moduleName as welcomeModule } from '../modules/WelcomePage/moduleName'
import { moduleName as commonModule } from '../modules/common/moduleName'


const reducers = combineReducers({
  [authModule]: authReducer,
  [welcomeModule]: welcomeReducer,
  [commonModule]: commonReducer,
  main: mainReducer
})

export const rootReducer = (state, action) => {
  if (action.type === 'credentials/logout') {
    storage.removeItem('persist:overgame_profile').then(r => r)
    storage
      .removeItem('persist:overgame_credentials')
      .then(() => window.location.reload())

    return reducers(undefined, action)
  }

  return reducers(state, action)
}
