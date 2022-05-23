import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Welcome} from '../types/types'

/**
 * Actions
 */

// export const fetchActivityScopes: AppThunk<ActivityScopeType[]> = createAsyncThunk(
//   'activityScope/fetch',
//   (_, thunkApi) =>
//     instance(thunkApi)
//       .get('/user-service/v1/activity-scopes')
//       .then(res => res.data)
//       .catch(thunkErrorHandler(thunkApi)),
// )

/**
 * Reducer
 */

const initialState: Welcome = {
  turnOn: false
}

const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
      turnOnOffBtn: (state, action: PayloadAction<boolean>) => {
          state.turnOn = action.payload
      },
  },
  extraReducers: builder =>
    builder

})

export default welcomeSlice.reducer
export const {
    turnOnOffBtn
} = welcomeSlice.actions
