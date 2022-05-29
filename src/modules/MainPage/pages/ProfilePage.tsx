import React, {FC, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from '@emotion/styled'

import profileImg from '../../../assets/images/profileImg.png'
import loginBtn from '../../../assets/images/loginBtn.png'
import bril from '../../../assets/images/bril.png'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {moduleName as commonModule} from '../../common/moduleName'
import {getFavouriteDeveloper, getFavouriteGame, getGenres} from '../slices/main'
import {useHistory} from 'react-router-dom'
import {getGameDetail} from '../../GamePage/slices/gameDetails'


export interface MainPageProps {
}

const ProfilePagerWrap = styled.div`
    .mainBox {
      width: 90%;
      display: flex;
      justify-content: center;
      gap: 10px;
      padding: 30px;
      
      p {
        color: white;
      }
    }
  
  .profileAndListGames {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 45%;
    
    .profile {
      background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
      border: 1px solid #F9F871;
      border-radius: 28px;
      padding: 10px 15px;
      width: 75%;
      
      .profile_box_1 {
        display: flex;
        align-items: center;
        gap: 10px;
        
        .row1 {
          img {
            width: 100px;
          }
        }

        .row2 {
         p {
           font-size: 12px;
           line-height: 20px;
         }
        }
      }

      .profile_box_2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-top: 10px;

        button {
          background: url(${loginBtn}) no-repeat;
          height: 36px;
          width: 120px;
          border: none;
          -webkit-background-size: 120px;
          background-size: 120px;
          background-position-y: center;

          p {
            position: relative;
            bottom: 2px;
            text-transform: uppercase;
            font-size: 10px;
            line-height: 10px;
          }
        }
      }
    }
    
    .listGames {
      background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
      border: 1px solid #F9F871;
      border-radius: 28px;
      padding: 20px;
      min-height: 1000px;
      width: 75%;
      
      .listGameName{
        font-size: 20px;
      }
      
      .listGameText2 {
        padding-top: 300px;
        text-align: center;
      }
    }
  }
  
  .favouriteGames {
    width: 45%;
    background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
    border: 1px solid #F9F871;
    border-radius: 28px;
    padding: 30px;
    min-height: 1000px;
    
    
    .favouriteGamesText {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      img {
        width: 30px;
        padding-right: 10px;
      }
    }
  }
  
  .gamesBoxGrid {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 150px);
    justify-content: space-between;
    margin-top: 30px;
    width: 90%;
    
    .gameBox {
      background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
      border: 2px solid #F9F871;
      border-radius: 12px;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .gameName {
        font-size: 11px;
        padding: 8px;
        line-height: 15px;
        text-align: center;
      }
      img {
        width: 100%;
        min-height: 120px;
        cursor: pointer;
      }
      
      .btn {
       display: flex;
        justify-content: center;
        align-items: flex-end;
      }
      
      button {
        background: #D0BCFF;
        border-radius: 100px;
        outline: none;
        border: none;
        width: 95px;
        margin: 10px 3px;
        text-align: center;
        .btnText {
          color: #381E72;
          font-size: 10px;
          padding: 6px;
          text-align: center;
        }
      }
    }
  }
  
  .favouriteGameCreators {
    margin-top: 30px;

  }
  
  .favouriteGamesText {
    margin-bottom: 20px;
  }

  .developers {
    display: flex;
    gap: 10px;
    
    .developerName {
      font-size: 12px;
      text-align: center;
    }

    img {
      width: 80px;
      margin-bottom: 20px;
    }
  }
  
  .recommendation {
    margin: 20px;
  }
`


const ProfilePage: FC<MainPageProps> = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const { profile } = useAppSelector(state => state[commonModule].profile)
    const { games, developer } = useAppSelector(state => state.main.main)

    useEffect(() => {
        dispatch(getFavouriteGame())
        dispatch(getFavouriteDeveloper())
    }, [])

  return (
    <ProfilePagerWrap>
        <Header/>

        <div className='mainBox'>
            <div className='profileAndListGames'>
                <div className='profile'>
                    <div className='profile_box_1'>
                        <div className='row1'>
                            <img src={profile?.id !== null ? profile?.imgUrl : profileImg} alt="profileImg"/>
                        </div>
                        <div className='row2'>
                            <p>{profile?.id !== null
                                ? profile?.username
                                : 'GUEST'
                            }
                            </p>
                            <p>Date of birth: {profile?.dateOfBirth}</p>
                            <p>Status:Gamer</p>
                            <p>E-mail: {profile?.email}</p>
                        </div>
                    </div>
                    <div className='profile_box_2'>
                        <div>
                            <button>
                                <p>Edit profile</p>
                            </button>
                        </div>
                        <div>
                            <button>
                                <p>add to favourite</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='listGames'>
                    <p className={'listGameName'}>List of My Games</p>
                    <p className='listGameText2'>You haven’t uploade any game yet</p>
                </div>
            </div>

            <div className='favouriteGames'>
                <div className='favouriteGamesText'>
                    <img src={bril} alt='bril'/>
                    <p>Favourite games</p>
                </div>

                <div className='gamesBoxGrid'>
                    {games?.map(game => (
                        <div key={game?.id} className='gameBox'>
                            <p className={'gameName'}>{game?.name}</p>
                            <img
                                src={game?.imgLink}
                                alt={'gameImg'}
                                onClick={() => {
                                    history.push(`/game/${game?.id}`)
                                    dispatch(getGameDetail(game?.id))
                                }}
                            />
                            <div className='btn'>
                                <a href={game?.gameLink} target="_blank">
                                    <button>
                                        <p className='btnText'>Play</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='favouriteGameCreators'>
                    <div className='favouriteGamesText'>
                        <img src={bril} alt='bril'/>
                        <p>Favourite game creators</p>
                    </div>
                    <div className="developers">
                        {
                            developer.map(developer => (
                                <div key={developer?.id}>
                                    <img src={developer?.img} alt={'profileImg'}/>
                                    <p className={'developerName'}>{developer?.username}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </ProfilePagerWrap>
  )
}

export default ProfilePage
