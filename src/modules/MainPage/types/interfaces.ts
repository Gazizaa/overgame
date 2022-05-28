import {Genres} from './types'

export interface MainState {
  genres: Genres[]
  loading: boolean
  error: any
}
