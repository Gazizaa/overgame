import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from './NotFound'

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes?.map(route => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Route component={() => <NotFound />} />
    </Switch>
  )
}

export default RenderRoutes
