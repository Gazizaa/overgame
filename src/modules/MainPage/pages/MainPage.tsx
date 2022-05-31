import React, {FC, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import SwiperPage from './SwiperPage'
import backgroundImage from '../../../assets/images/HeaderBackground.png'
import styled from '@emotion/styled'
import {useAppDispatch} from "../../../store/hooks";
import {getDevelopers, getRecommendedGames, getSwiperImages} from "../slices/main";


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
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getSwiperImages())
        dispatch(getDevelopers())
        dispatch(getRecommendedGames())
    }, [])

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
