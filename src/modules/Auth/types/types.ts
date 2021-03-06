import {FC} from 'react'

export type SignInParams = {
  username: string
  password: string
}

export type SignUpParams = {
  body: {
    username: string,
    email: string,
    dateOfBirth: string,
    roleCode?: string
  }
  file?: File
}


export type INavigationRoute = {
  icon: FC
  name: string
}

export type IRoute = {
  path: string
  key: string
  skip?: boolean
  exact?: boolean
  component: FC<any>
  nav?: INavigationRoute
  routes?: IRoute[]
  access?: any
}
