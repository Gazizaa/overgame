import {RenderMainRoutes, RenderRoutes} from '../core/components'

import { getRoutes as getAuthRoutes } from '../modules/Auth/routes'
import { getRoutes as getMainRoutes } from '../modules/MainPage/routes'
import { getRoutes as getWelcomeRoutes } from '../modules/WelcomePage/routes'

import {IRoute} from '../modules/Auth/types'


enum KEYS {
  AUTH = 'AUTH',
  MAIN = 'MAIN',
  INDEX = 'INDEX',
  WELCOME = 'WELCOME',
}

const mainRoutes: IRoute[] = [
  {
    path: '/welcome',
    key: KEYS.WELCOME,
    exact: false,
    routes: getWelcomeRoutes(KEYS.WELCOME),
    component: RenderRoutes,
  },
  {
    path: '/main',
    key: KEYS.MAIN,
    exact: false,
    routes: getMainRoutes(KEYS.MAIN),
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
