import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import {AppThunk, instance} from '../../../store'
import {thunkErrorHandler} from '../../../settings/errorHandler'
import {AllDevelopers, CreateGameParams, Developer, Games, Genres, MainState, SwiperImages} from '../types'



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

export const getFavouriteGame: AppThunk<Games[], number> = createAsyncThunk(
    'main/get_favourite_games',
    (id, thunkApi) =>
        instance(thunkApi)
            .get(`/v1/favourite/games/users/${id}`)
            .then((res: AxiosResponse<Games[]>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const getFavouriteDeveloper: AppThunk<Developer[], number> = createAsyncThunk(
    'main/get_favourite_developer',
    (id, thunkApi) =>
        instance(thunkApi)
            .get(`/v1/favourite/developer/users/${id}`)
            .then((res: AxiosResponse<Developer[]>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const getSwiperImages: AppThunk<SwiperImages[]> = createAsyncThunk(
    'main/get_swiper_img',
    (_, thunkApi) =>
        instance(thunkApi)
            .get('/v1/banners')
            .then((res: AxiosResponse<SwiperImages[]>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const getDevelopers: AppThunk<AllDevelopers[]> = createAsyncThunk(
    'main/get_all_developers',
    (_, thunkApi) =>
        instance(thunkApi)
            .get('/v1/users/developers')
            .then((res: AxiosResponse<AllDevelopers[]>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)

export const getRecommendedGames: AppThunk<Games[]> = createAsyncThunk(
    'main/get_recommended_games',
    (_, thunkApi) =>
        instance(thunkApi)
            .get('/v1/games/by-status', {
                params: {
                    status: 'ACCEPTED'
                }
            })
            .then((res: AxiosResponse<Games[] | any>) => res.data.content)
            .catch(thunkErrorHandler(thunkApi)),
)

export const getMyGames: AppThunk<Games[], number> = createAsyncThunk(
    'main/get_my_games',
    (id, thunkApi) =>
        instance(thunkApi)
            .get(`/v1/games/users/${id}`)
            .then((res: AxiosResponse<Games[]>) => res.data)
            .catch(thunkErrorHandler(thunkApi)),
)



/**
 * Reducer
 */

const initialState: MainState= {
    loading: false,
    error: null,
    genres: [],
    games: [],
    developer: [],
    swiperImg: [],
    allDevelopers: [],
    recommendedGames: [],
    myGames: []
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
            .addCase(getFavouriteGame.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getFavouriteGame.fulfilled, (state, {payload}) => {
                state.games = payload
                state.error = null
                state.loading = false
            })
            .addCase(getFavouriteGame.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(getFavouriteDeveloper.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getFavouriteDeveloper.fulfilled, (state, {payload}) => {
                state.developer = payload
                state.error = null
                state.loading = false
            })
            .addCase(getFavouriteDeveloper.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(getSwiperImages.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getSwiperImages.fulfilled, (state, {payload}) => {
                state.swiperImg = payload
                state.error = null
                state.loading = false
            })
            .addCase(getSwiperImages.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(getDevelopers.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getDevelopers.fulfilled, (state, {payload}) => {
                state.allDevelopers = payload
                state.error = null
                state.loading = false
            })
            .addCase(getDevelopers.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(getRecommendedGames.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getRecommendedGames.fulfilled, (state, {payload}) => {
                state.recommendedGames = payload
                state.error = null
                state.loading = false
            })
            .addCase(getRecommendedGames.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
            .addCase(getMyGames.pending, state => {
                state.error = null
                state.loading = true
            })
            .addCase(getMyGames.fulfilled, (state, {payload}) => {
                state.myGames = payload
                state.error = null
                state.loading = false
            })
            .addCase(getMyGames.rejected, (state, {payload}) => {
                state.error = payload
                state.loading = false
            })
})

export default mainSlice.reducer
