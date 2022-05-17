import React from 'react'
import {getDashedStr} from '../../lib/utils/getDashedStr'
import {
  Auth,
  SignIn
} from './pages'
import {IRoute} from './types'


enum KEYS {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

export const getRoutes = (key: string): IRoute[] => [
  {
    path: '/auth',
    key: getDashedStr(key),
    exact: true,
    component: Auth,
  },
  {
    path: '/auth/sign-in',
    key: getDashedStr(key, KEYS.SIGN_IN),
    exact: true,
    component: SignIn,
  },
  {
    path: '/auth/sign-up',
    key: getDashedStr(key, KEYS.SIGN_UP),
    exact: true,
    component: () => <div style={{color: 'white'}}>Coming Soon!</div>,
  },
]
