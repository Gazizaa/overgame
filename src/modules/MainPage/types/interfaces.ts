import {Developer, Games, Genres} from './types'

export interface MainState {
  genres: Genres[]
  loading: boolean
  error: any
  games: Games[]
  developer: Developer[]
}
