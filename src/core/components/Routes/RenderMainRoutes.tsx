import React from 'react'
import { Redirect } from 'react-router-dom'

import {App} from '../App'
import {RenderRoutes} from './index'


const RenderMainRoutes = ({ routes }) => {

  const allRoutes = [...routes]


  if (allRoutes.length > 0) {
    allRoutes.push({
      path: '/',
      key: 'stub',
      exact: true,
      skip: true,
      component: () => <Redirect to={routes[0].path} />,
      routes: [],
    })
  }

  return (
    <App
      routes={allRoutes}
    >
      <RenderRoutes routes={allRoutes} />
    </App>
  )
}

export default RenderMainRoutes
