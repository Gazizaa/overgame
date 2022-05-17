import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {CredentialsState} from '../types/interfaces'



/**
 * Actions
 */

/**
 * Reducer
 */

const initialState: CredentialsState = {
  accessToken: '',
  refreshToken: '',
  expiresIn: null,
  refreshExpiresIn: null,
  refreshTokenExpDate: '',
  tokenType: '',
  sessionState: '',
  scope: '',
}

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<CredentialsState>) => action.payload,
    logout: () => initialState,
  },
})

export const { auth, logout } = credentialsSlice.actions
export default persistReducer(
  {
    storage,
    key: 'doco_credentials',
    version: 1,
  },
  credentialsSlice.reducer,
)
