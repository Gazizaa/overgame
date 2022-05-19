import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'


export interface MainPageProps {
}

const MainPage: FC<MainPageProps> = () => {
  return (
    <>
        <Header/>
        <Footer/>
    </>
  )
}

export default MainPage
