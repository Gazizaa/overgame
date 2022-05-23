import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {ProfileType, ProfileState} from '../types/types'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import {AppThunk, instance} from '../../../store'



/**
 * Actions
 */

export const fetchProfile: AppThunk<ProfileType> = createAsyncThunk(
  'profile/fetch',
  (_, thunkApi) =>
    instance(thunkApi)
      .get('/v1/users/me')
      .then((res: AxiosResponse<ProfileType>) => res.data)
      .catch(thunkErrorHandler(thunkApi)),
)

// export const resetPassword: AppThunk<
//   void,
//   ResetPasswordParamsType
// > = createAsyncThunk('reset/password', (params, thunkApi) => {
//   return instance(thunkApi)
//     .post('user-service/v1/employee/reset-password', params)
//     .then(() => {
//       message.success('Пароль успешно изменен')
//     })
//     .catch(err => {
//       messageOnError(err)
//       thunkErrorHandler(thunkApi)(err)
//     })
// })

/**
 * Reducer
 */

const initialProfile = {
  dateOfBirth: '',
  email: '',
  id: null,
  img: '',
  imgUrl: '',
  roleCode: '',
  username: '',
}

const initialState: ProfileState = {
  profile: initialProfile ,
  loading: false,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchProfile.pending, state => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.error = null
        state.loading = false
        state.profile = payload
      })
      .addCase(fetchProfile.rejected, (state, { payload }) => {
        state.error = payload
        state.loading = false
      })
})

export default persistReducer(
  {
    storage,
    key: 'overgame_profile',
    version: 1,
  },
  profileSlice.reducer,
)
