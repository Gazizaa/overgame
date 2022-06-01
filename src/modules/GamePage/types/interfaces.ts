import {Comments, Games} from '../../MainPage/types'


export interface GameDetailState {
  gameDetails: Games
  loading: boolean
  error: any
  comments: Comments[]
}
