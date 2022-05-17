import React, { FC } from 'react'
import {RouteProps } from 'react-router-dom'
import {IRoute} from '../../../modules/Auth/types'

// import { Navigation, Header } from 'modules/common/components'




export interface AppProps {
  routes: IRoute[],
  // children?: React.ReactNode
}

const App: FC<AppProps & RouteProps & any> = ({ children, routes }) => {
  return (
    <div>
      {/*<Header />*/}
      {/*<Navigation routes={routes} />*/}

      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default App
