import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import SwiperPage from './SwiperPage'
import backgroundImage from '../../../assets/images/HeaderBackground.png'
import styled from '@emotion/styled'


export interface MainPageProps {
}

const MainPagerWrap = styled.div`
  .header {
    background-image: url(${backgroundImage});
    height: 650px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
`


const MainPage: FC<MainPageProps> = () => {
  return (
    <MainPagerWrap>
        <div className='header'>
            <Header/>
            <SwiperPage/>
        </div>
        <Body/>
        <Footer/>
    </MainPagerWrap>
  )
}

export default MainPage
