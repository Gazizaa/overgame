import {RenderMainRoutes, RenderRoutes} from '../core/components'

import { getRoutes as getAuthRoutes } from '../modules/Auth/routes'
import { getRoutes as getMainRoutes } from '../modules/MainPage/routes'
import { getRoutes as getWelcomeRoutes } from '../modules/WelcomePage/routes'
import { getRoutes as gamesRoutes } from '../modules/GamePage/routes'

import {IRoute} from '../modules/Auth/types'


enum KEYS {
  AUTH = 'AUTH',
  MAIN = 'MAIN',
  INDEX = 'INDEX',
  WELCOME = 'WELCOME',
  GAME = 'GAME',
}

const mainRoutes: IRoute[] = [
  {
    path: '/main',
    key: KEYS.MAIN,
    exact: false,
    routes: getMainRoutes(KEYS.MAIN),
    component: RenderRoutes,
  },
  {
    path: '/welcome',
    key: KEYS.WELCOME,
    exact: false,
    routes: getWelcomeRoutes(KEYS.WELCOME),
    component: RenderRoutes,
  },
  {
    path: '/game',
    key: KEYS.WELCOME,
    exact: false,
    routes: gamesRoutes(KEYS.GAME),
    component: RenderRoutes,
  },
]

export const routes: IRoute[] = [
  {
    path: '/auth',
    key: KEYS.AUTH,
    component: RenderRoutes,
    routes: getAuthRoutes(KEYS.AUTH),
  },
  {
    path: '/',
    key: KEYS.INDEX,
    component: RenderMainRoutes,
    routes: mainRoutes,
  },
]
