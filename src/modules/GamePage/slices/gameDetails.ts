import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import {GameDetailState} from '../types'
import {CommentParams, Comments, Games, RateParams} from '../../MainPage/types'



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

export const getComment: AppThunk<Comments[], number> = createAsyncThunk(
    'game/get_comments',
    (gameId, thunkApi) =>
        instance(thunkApi)
            .get(`/v1/comment/games/${gameId}`)
            .then((res: AxiosResponse<Comments[]>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const sendComment: AppThunk<void, CommentParams> = createAsyncThunk(
    'game/comment',
    (params, thunkApi) =>
        instance(thunkApi)
            .post(`/v1/comment/games/${params.gameId}?text=${params.text}`)
            .then((res: AxiosResponse<void>) => {
                thunkApi.dispatch(getComment(params.gameId))
                return res.data
            })
            .catch(thunkErrorHandler(thunkApi)),
)

export const deleteComment: AppThunk<void, CommentParams> = createAsyncThunk(
    'game/deleteComment',
    (params, thunkApi) =>
        instance(thunkApi)
            .delete(`/v1/comment/${params.commentId}`)
            .then((res: AxiosResponse<void>) => {
                thunkApi.dispatch(getComment(params.gameId))
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
    gameDetails: null,
    comments: []
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

            .addCase(getComment.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getComment.fulfilled, (state, {payload}) => {
                state.comments = payload
                state.error = null
                state.loading = false
            })
            .addCase(getComment.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(sendComment.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(sendComment.fulfilled, state => {
                state.error = null
                state.loading = false
            })
            .addCase(sendComment.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(deleteComment.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(deleteComment.fulfilled, state => {
                state.error = null
                state.loading = false
            })
            .addCase(deleteComment.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })

})

export default gameDetailsSlice.reducer
