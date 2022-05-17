import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'

import {auth} from './credentials'
import {SignInParams} from '../types'
import {AuthState, CredentialsState} from '../types/interfaces'




/**
 * Actions
 */

export const signIn: AppThunk<void, SignInParams> = createAsyncThunk(
  'auth/sign_in',
  (body, thunkApi) =>
    instance(thunkApi)
      .post('/user-service/v1/admin/logi', body)
      .then((res: AxiosResponse<CredentialsState>) => {
        thunkApi.dispatch(auth(res.data))
      })
      .catch(thunkErrorHandler(thunkApi)),
)

/**
 * Reducer
 */

const initialState: AuthState = {
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signIn.pending, state => {
        state.error = null
        state.loading = true
      })
      .addCase(signIn.fulfilled, state => {
        state.error = null
        state.loading = false
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.error = payload
        state.loading = false
      }),
})

export default authSlice.reducer
