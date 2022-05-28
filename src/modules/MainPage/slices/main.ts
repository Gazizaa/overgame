import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import {CreateGameParams, Genres, MainState} from '../types'



/**
 * Actions
 */

export const getGenres: AppThunk<Genres[]> = createAsyncThunk(
  'main/get_genres',
  (_, thunkApi) =>
    instance(thunkApi)
      .get('/v1/genres/all')
        .then((res: AxiosResponse<Genres[]>) => res.data)
      .catch(thunkErrorHandler(thunkApi)),
)

export const createGame: AppThunk<void, CreateGameParams> = createAsyncThunk(
    'main/create_game',
    (params, thunkApi) => {
        const formData = new FormData()
        formData.append(
            'game',
            new Blob([JSON.stringify(params.game)], {type: 'application/json'}),
        )

        if (params.imgFile) {
            formData.append('imgFile', params.imgFile)
        }

        return instance(thunkApi)
            .post('/v1/games', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res: AxiosResponse<void>) => {
                if (res.status === 200) {
                   console.log('OK')
                }
            })
            .catch(thunkErrorHandler(thunkApi))
    })

/**
 * Reducer
 */

const initialState: MainState= {
    loading: false,
    error: null,
    genres: []
}

const mainSlice = createSlice({
  name: 'genres',
  initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getGenres.fulfilled, (state, {payload}) => {
                state.genres = payload
                state.error = null
                state.loading = false
            })
            .addCase(getGenres.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(createGame.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(createGame.fulfilled, state => {
                state.error = null
                state.loading = false
            })
            .addCase(createGame.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
})

export default mainSlice.reducer
