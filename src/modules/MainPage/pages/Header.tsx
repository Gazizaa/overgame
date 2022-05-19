import React, { FC } from 'react'
import styled from '@emotion/styled'

import backgroundImage from '../../../assets/images/HeaderBackground.png'
import profileImg from '../../../assets/images/profileImg.png'
import profile2Img from '../../../assets/images/profileImg2.png'
import OG from '../../../assets/images/OG.png'
import home from '../../../assets/images/Home.png'
import ourGames from '../../../assets/images/ourGames.png'
import addGame from '../../../assets/images/addGame.png'
import help from '../../../assets/images/help.png'
import search from '../../../assets/images/searchIcon.png'
import inputIcon from '../../../assets/images/inputIcon.png'

const HeaderWrap = styled.div`
  .header {
    background-image: url(${backgroundImage});
    height: 700px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
  
  .nav {
    display: flex;
    justify-content: space-around;
    
    .profile {
      width: 20%;
      border-radius: 20px;
      display: flex;
      padding-top: 10px;

      .imgBox {
        img {
          width: 100px;
        }
      }
      
      .profileBox {
        background: rgba(253, 117, 74, 0.75);
        padding: 5px;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        width: 170px;
        height: 75px;
        margin-top: 5px;
        
        .name {
          background-image: url(${profile2Img});
          width: 60px;
          height: 26px;
          background-size: cover;
          background-repeat: no-repeat;
        }

        p {
          color: white;
          font-size: 10px;
          line-height: 16px;
        }
      }
    }
    
    .navbar {
      background: rgba(85, 72, 178, 0.95);
      padding: 30px;
      width: 50%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 37px;
      text-align: center;
      
      p {
        color: white;
        font-size: 9px;
        line-height: 13px;
      }
      
      .OG {
        img {
          width: 70px;
        }
      }
      
      .home {
        margin-left: 25px;
        img {
          width: 40px;
          padding-bottom: 10px;
        }
      }

      .ourGames {
        margin-left: 25px;
        p {
          position: relative;
          bottom: 8px;
        }
        img {
          width: 65px;
          height: 60px;
        }
        }
      }

      .addGame {
        img {
          width: 50px;
        }
      }

      .help {
        img {
          width: 45px;
          padding-bottom: 5px;
        }
      }
      
      .navInput {
        display: flex;
        align-items: center;
        
        .search {
          position: relative;
          left: 42px;
          width: 29px;
        }
        
        .inputIcon {
          position: relative;
          right: 42px;
          width: 24px;
        }
          
        input {
          width: 300px;
          height: 34px;
          border: 2px solid #FFFFFF;
          border-radius: 24px;
          background: rgba(85, 72, 178, 0.95);

          ::placeholder {
            font-family: 'Press Start 2P', cursive;
            font-size: 10px;
            padding-left: 50px;
            color: white;
          }
        }
      } 
    }
  }
`


export interface MainPageProps {
}

const Header: FC<MainPageProps> = () => {
  return (
    <HeaderWrap>
        <div className='header'>
            <div className='nav'>
                <div className='profile'>
                    <div className='imgBox'>
                        <img src={profileImg} alt='profileImg'/>
                    </div>
                    <div className='profileBox'>
                        <div className='name'>
                        </div>
                        <p>PROFILE</p>
                        <p>CHANGE USER</p>
                        <p>LOGOUT</p>
                    </div>
                </div>
                <div className='navbar'>
                    <div className='OG'>
                        <img alt='OG' src={OG}/>
                    </div>
                    <div className='home'>
                        <img alt='home' src={home}/>
                        <p>HOME</p>
                    </div>
                    <div className='ourGames'>
                        <img alt='ourGames' src={ourGames}/>
                        <p>OUR <br/> GAMES</p>
                    </div>
                    <div className='navInput'>
                        <img className='search' alt='search' src={search}/>
                        <input placeholder='SEARCH'/>
                        <img className='inputIcon' alt='inputIcon' src={inputIcon}/>
                    </div>
                    <div className='addGame'>
                        <img alt='addGame' src={addGame}/>
                        <p>ADD <br/> GAME</p>
                    </div>
                    <div className='help'>
                        <img alt='help' src={help}/>
                        <p>HELP</p>
                    </div>
                </div>
            </div>
        </div>

    </HeaderWrap>
  )
}

export default Header
