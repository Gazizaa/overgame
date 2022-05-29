import React, { FC } from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import styled from '@emotion/styled'

import { moduleName as commonModule } from '../../common/moduleName'

import {logout} from '../../Auth/slices/credentials'

import profileImg from '../../../assets/images/profileImg.png'
import OG from '../../../assets/images/OG.png'
import home from '../../../assets/images/Home.png'
import ourGames from '../../../assets/images/ourGames.png'
import addGame from '../../../assets/images/addGame.png'
import help from '../../../assets/images/help.png'
import search from '../../../assets/images/searchIcon.png'
import inputIcon from '../../../assets/images/inputIcon.png'


const HeaderWrap = styled.div`
  .nav {
    display: flex;
    justify-content: space-around;
    
    .profile {
      width: 20%;
      border-radius: 20px;
      display: flex;
      align-items: center;
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
        
        .name {

          .profileName {
            background: #00C6C3;
            width: auto;
            padding: 4px;
            margin-bottom: 3px;
            border-radius: 18px;
            font-size: 14px;
          }
        }

        p {
          color: white;
          font-size: 10px;
          line-height: 16px;
          cursor: pointer;
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
        cursor: pointer;
        img {
          width: 70px;
        }
      }
      
      .home {
        margin-left: 25px;
        cursor: pointer;
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
        cursor: pointer;
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
`


export interface MainPageProps {
}

const Header: FC<MainPageProps> = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    let { pathname } = useLocation()
    const { profile } = useAppSelector(state => state[commonModule].profile)

    const handleClick = () => {
        dispatch(logout())
    }

    return (
    <HeaderWrap>
        <div>
            <div className='nav'>
                {pathname === '/main/profile' ? ''
                    : <div className="profile">
                        <div className="imgBox">
                            <img src={profile?.id !== null ? profile?.imgUrl : profileImg} alt="profileImg"/>
                        </div>
                        <div className="profileBox">
                            <div className="name">
                                <p className="profileName">
                                    {profile?.id !== null
                                        ? profile?.username
                                        : 'GUEST'
                                    }
                                </p>
                            </div>
                            <Link to="/main/profile">
                                <p>PROFILE</p>
                            </Link>
                            <p>CHANGE USER</p>
                            <p onClick={handleClick}>LOGOUT</p>
                        </div>
                    </div>
                }
                <div className='navbar'>
                    <Link to='/main'>
                        <div className='OG'>
                            <img alt='OG' src={OG}/>
                        </div>
                    </Link>

                    <Link to='/main'>
                        <div className='home'>
                            <img alt='home' src={home}/>
                            <p>HOME</p>
                        </div>
                    </Link>


                    <div className='ourGames'>
                        <img alt='ourGames' src={ourGames}/>
                        <p>OUR <br/> GAMES</p>
                    </div>
                    <div className='navInput'>
                        <img className='search' alt='search' src={search}/>
                        <input placeholder='SEARCH' readOnly/>
                        <img className='inputIcon' alt='inputIcon' src={inputIcon}/>
                    </div>
                    <div className='addGame' onClick={() => history.push('/main/add-game')}>
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
