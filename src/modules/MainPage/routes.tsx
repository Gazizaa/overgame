import {getDashedStr} from '../../lib/utils/getDashedStr'
import {IRoute} from '../Auth/types'
import MainPage from './pages/MainPage'
import AddGame from './pages/AddGame'


enum KEYS {
  MAIN = 'MAIN',
}

export const getRoutes = (key: string): IRoute[] => [
  {
    path: '/main',
    key: getDashedStr(key, KEYS.MAIN),
    exact: true,
    component: MainPage,
  },
  {
    path: '/main/add-game',
    key: getDashedStr(key, KEYS.MAIN),
    exact: true,
    component: AddGame,
  },
]
