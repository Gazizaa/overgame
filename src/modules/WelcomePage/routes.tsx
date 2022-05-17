import React from 'react'
import {getDashedStr} from '../../lib/utils/getDashedStr'
import {IRoute} from '../Auth/types'
import WelcomePage from './WelcomePage'

enum KEYS {
  WELCOME = 'WELCOME',
}

export const getRoutes = (key: string): IRoute[] => [
  {
    path: '/welcome',
    key: getDashedStr(key, KEYS.WELCOME),
    exact: true,
    component: WelcomePage,
  },
]
