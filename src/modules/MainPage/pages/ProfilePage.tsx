import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from '@emotion/styled'


export interface MainPageProps {
}

const ProfilePagerWrap = styled.div`
`


const ProfilePage: FC<MainPageProps> = () => {
  return (
    <ProfilePagerWrap>
        <Header/>

        <Footer/>
    </ProfilePagerWrap>
  )
}

export default ProfilePage
