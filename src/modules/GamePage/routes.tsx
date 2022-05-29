import {getDashedStr} from '../../lib/utils/getDashedStr'
import {IRoute} from '../Auth/types'
import GamePage from './pages/GamePage'


enum KEYS {
  GAME = 'GAME',
}

export const getRoutes = (key: string): IRoute[] => [
  {
    path: '/game/:game_id',
    key: getDashedStr(key, KEYS.GAME),
    exact: true,
    component: GamePage,
  },
]
