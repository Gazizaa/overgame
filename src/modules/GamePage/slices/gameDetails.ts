import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import {GameDetailState} from '../types'
import {Games} from '../../MainPage/types'



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
})

export default gameDetailsSlice.reducer
