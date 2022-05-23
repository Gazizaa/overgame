import React, { FC } from 'react'
import {RouteProps } from 'react-router-dom'
import {IRoute} from '../../../modules/Auth/types'

export interface AppProps {
  routes: IRoute[],
}

const App: FC<AppProps & RouteProps & any> = ({ children}) => {
  return (
    <div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default App
