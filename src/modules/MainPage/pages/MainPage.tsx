import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'


export interface MainPageProps {
}

const MainPage: FC<MainPageProps> = () => {
  return (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
  )
}

export default MainPage
