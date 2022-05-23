import axios, { AxiosInstance } from 'axios'
import {AppDispatch, RootState} from '../../configureStore'
import AxiosInterceptors from './interceptors'
import {auth, logout} from '../../../modules/Auth/slices/credentials'


interface IInstanceProps {
  dispatch: AppDispatch
  getState: () => RootState
}

export default ({ dispatch, getState }: IInstanceProps | any): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: 'https://overgame.kz/api',
  })

  const axiosInterceptors = new AxiosInterceptors(instance)

  instance.interceptors.request.use(
    axiosInterceptors.onRequestSuccess(getState),
    axiosInterceptors.onRequestError(),
  )

  instance.interceptors.response.use(
    axiosInterceptors.onResponseSuccess(),
    axiosInterceptors.onResponseError(
      getState,
      token => dispatch(auth(token)),
      () => dispatch(logout()),
    ),
  )

  return instance
}
