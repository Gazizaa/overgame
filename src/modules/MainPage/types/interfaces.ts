import {AllDevelopers, Developer, Games, Genres, SwiperImages} from './types'

export interface MainState {
  genres: Genres[]
  loading: boolean
  error: any
  games: Games[]
  developer: Developer[]
  swiperImg: SwiperImages[]
  allDevelopers: AllDevelopers[]
  recommendedGames: Games[]
  myGames: Games[]
}
