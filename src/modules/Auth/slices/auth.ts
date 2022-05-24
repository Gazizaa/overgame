import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import history from '../../../settings/history'

import {auth} from './credentials'
import {SignInParams, SignUpParams} from '../types'
import {AuthState, CredentialsState} from '../types/interfaces'



/**
 * Actions
 */

export const signIn: AppThunk<void, SignInParams> = createAsyncThunk(
  'auth/sign_in',
  (body, thunkApi) =>
    instance(thunkApi)
      .post('/v1/users/login', body)
      .then((res: AxiosResponse<CredentialsState>) => {
        thunkApi.dispatch(auth(res.data))
      })
      .catch(thunkErrorHandler(thunkApi)),
)

export const signUp: AppThunk<void, SignUpParams> = createAsyncThunk(
    'auth/sign_up',
    (params, thunkApi) => {
        const formData = new FormData()
        formData.append(
            'user',
            new Blob([JSON.stringify(params.body)], {type: 'application/json'}),
        )

        if (params.file) {
            formData.append('imgFile', params.file)
        }

        return instance(thunkApi)
            .post('/v1/users/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res: AxiosResponse<CredentialsState>) => {
                if (res.status === 200) {
                    history.push('/auth/sign-in')
                }
            })
            .catch(thunkErrorHandler(thunkApi))
    })

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
        .addCase(signIn.rejected, (state, {payload}) => {
            state.error = payload
            state.loading = false
        })
        .addCase(signUp.pending, state => {
            state.error = null
            state.loading = true
        })
        .addCase(signUp.fulfilled, state => {
            state.error = null
            state.loading = false
        })
        .addCase(signUp.rejected, (state, {payload}) => {
            state.error = payload
            state.loading = false
        }),
})

export default authSlice.reducer
