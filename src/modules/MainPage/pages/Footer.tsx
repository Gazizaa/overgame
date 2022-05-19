import React, { FC } from 'react'
import styled from '@emotion/styled'

import dino from '../../../assets/images/footerDino.png'
import instagram from '../../../assets/images/instagram.png'
import telegram from '../../../assets/images/telegram.png'
import discord from '../../../assets/images/discord.png'
import twitter from '../../../assets/images/twitter.png'

const FooterWrap = styled.div`
  background: rgba(85, 72, 178, 0.65);
  height: 200px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
  padding-top: 80px;
  
  p, span {
    color: white;
    font-size: 12px;
  }
  
  .__footer_img {
    display: flex;
    align-items: flex-end;
    margin-left: -92px;
    img {
      width: 90px;
      height: 101px;
    }
  }
  
  .navigation {
    text-align: left;
    width: 200px;
    .__navigation_text1 {
      font-size: 16px;
      padding-bottom: 20px;
    }
    p {
      line-height: 23px;
    }
  }
  
  .inform {
    text-align: left;
    width: 270px;
    
    .___inform_text1 {
      font-size: 16px;
      padding-bottom: 20px;
    }
    .___inform_text2 {
      line-height: 23px;
    }
  }
  
  .links {
    width: 300px;
    padding-bottom: 20px;
    .findText {
      font-size: 16px;
      padding-bottom: 20px;
      text-align: left;
    }
    .socialLinks {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      img {
        width: 30px;
        padding-right: 12px;
      }

      .link {
        display: flex;
        align-items: center;
        padding-bottom: 5px;
      }
    }
  } 
  
`


export interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
  return (
    <FooterWrap>
        <div className='__footer_img'>
            <img src={dino} alt='dino'/>
        </div>
        <div className='navigation'>
            <p className='__navigation_text1'>NAVIGATION</p>
            <p>Home</p>
            <p>Our Games</p>
            <p>Add game</p>
            <p>Profile</p>
        </div>
        <div className='inform'>
            <p className='___inform_text1'>INFORMATION</p>
            <p className='___inform_text2'>Address: Almaty <br/> Mail: overgame@gmail.com</p>
        </div>
        <div className='links'>
            <p className='findText'>WHERE TO FIND US</p>
            <div className='socialLinks'>
                <div className='link'>
                    <img src={instagram} alt='instagram'/>
                    <p>Link to inst</p>
                </div>
                <div className='link'>
                    <img src={discord} alt='discord'/>
                    <p>Link to discord</p>
                </div>
                <div className='link'>
                    <img src={twitter} alt='twitter'/>
                    <p>Link to twitter</p>
                </div>
                <div className='link'>
                    <img src={telegram} alt='telegram'/>
                    <span>Link to telegram</span>
                </div>
            </div>

        </div>


    </FooterWrap>
  )
}

export default Footer
