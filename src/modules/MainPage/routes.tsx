import {getDashedStr} from '../../lib/utils/getDashedStr'
import {IRoute} from '../Auth/types'
import MainPage from './pages/MainPage'
import AddGame from './pages/AddGame'
import ProfilePage from './pages/ProfilePage'


enum KEYS {
  MAIN = 'MAIN',
  AGG_GAME = 'AGG_GAME',
  PROFILE = 'PROFILE',
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
    key: getDashedStr(key, KEYS.AGG_GAME),
    exact: true,
    component: AddGame,
  },
  {
    path: '/main/profile',
    key: getDashedStr(key, KEYS.PROFILE),
    exact: true,
    component: ProfilePage,
  },
]
