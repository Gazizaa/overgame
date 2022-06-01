import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import {GameDetailState} from '../types'
import {Games, RateParams} from '../../MainPage/types'



/**
 * Actions
 */

export const getGameDetail: AppThunk<Games, number> = createAsyncThunk(
    'game/get_Detail',
    (gameId, thunkApi) =>
        instance(thunkApi)
            .get(`/v1/games/${gameId}`)
            .then((res: AxiosResponse<Games>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const favouriteDeveloper: AppThunk<void, number> = createAsyncThunk(
    'game/favouriteDeveloper',
    (developerId, thunkApi) =>
        instance(thunkApi)
            .post(`/v1/favourite/developer/${developerId}`)
            .then((res: AxiosResponse<void>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const favouriteGame: AppThunk<void, number> = createAsyncThunk(
    'game/favouriteGame',
    (gameId, thunkApi) =>
        instance(thunkApi)
            .post(`/v1/favourite/games/${gameId}`)
            .then((res: AxiosResponse<void>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const ratingGame: AppThunk<void, RateParams> = createAsyncThunk(
    'game/ratingGame',
    (params, thunkApi) =>
        instance(thunkApi)
            .post(`/v1/rating/games/${params.gameId}?grade=${params.grade}`)
            .then((res: AxiosResponse<void>) => {
                thunkApi.dispatch(getGameDetail(params.gameId))
               return res.data
            })
            .catch(thunkErrorHandler(thunkApi)),
)


/**
 * Reducer
 */

const initialState: GameDetailState= {
    loading: false,
    error: null,
    gameDetails: null
}

const gameDetailsSlice = createSlice({
  name: 'gameDetails',
  initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGameDetail.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getGameDetail.fulfilled, (state, {payload}) => {
                state.gameDetails = payload
                state.error = null
                state.loading = false
            })
            .addCase(getGameDetail.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(favouriteDeveloper.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(favouriteDeveloper.fulfilled, state => {
                state.error = null
                state.loading = false
            })
            .addCase(favouriteDeveloper.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(favouriteGame.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(favouriteGame.fulfilled, state => {
                state.error = null
                state.loading = false
            })
            .addCase(favouriteGame.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(ratingGame.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(ratingGame.fulfilled, state => {
                state.error = null
                state.loading = false
            })
            .addCase(ratingGame.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })

})

export default gameDetailsSlice.reducer
