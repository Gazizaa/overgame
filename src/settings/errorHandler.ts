import { AxiosError } from 'axios'

interface CustomerRejectWithValue {
  rejectWithValue: any
}

export const thunkErrorHandler = (thunkApi: CustomerRejectWithValue) => (
  error: AxiosError,
) => {
  return thunkApi.rejectWithValue(error.response.data)
}
