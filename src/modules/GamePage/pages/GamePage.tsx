import React, {FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Modal from 'react-modal'
import Header from '../../MainPage/pages/Header'
import Footer from '../../MainPage/pages/Footer'
import loginBtn from '../../../assets/images/loginBtn.png'
import like from '../../../assets/images/like.png'
import rating from '../../../assets/images/rating.png'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {favouriteDeveloper, favouriteGame} from "../slices/gameDetails";

export interface MainPageProps {
}

const GamePageWrap = styled.div`
  .flexBox {
   display: flex;
    justify-content: center;
    gap: 20px;
    width: 90%;
    margin-top: 40px;
    padding: 30px;
    
    p {
      color: white;
    }
    
    .box1 {
      background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
      border: 1px solid #F9F871;
      border-radius: 28px;
      padding: 20px;
     
      width: 45%;
      min-height: 1000px;
      
      .column1 {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .imgBox {
        img {
          width: 230px;
          height: 308px;
        }
      }
    }
    
    .descriptionBox {
      .orangeBox {
        background: #FD754A;
        display: flex;
        flex-direction: column;
        height: 50px;
        padding: 20px;

        p {
          color: white;
        }
      }
      
      .description {
        padding: 7px;
        text-align: justify;
        p {
          color: white;
          font-size: 12px;
          line-height: 19px;
        }
      }
    }
    
    .column2 {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 100px;
      margin: 20px 30px;
      color: white;
      text-transform: uppercase;
      margin-top: 30px;
      margin-bottom: 50px;
      
      .genresp, .price {
        margin-bottom: 15px;
      }
      
      .genres {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(2, auto);
      }
      
      
      .genre {
        background: #5548B2;
        border-radius: 30px;
        padding: 7px;
        .genreName {
          font-size: 12px;
          text-align: center;
        }
      }

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
          font-size: 14px;
          line-height: 10px;
        }
      }
    }
    
    .author {
      display: flex;
      margin: 40px 20px 0;
      padding-left: 15px;
    }
    
    .linkPlay {
      margin-left: 30px;
      margin-top: 30px;
      text-transform: uppercase;
      
      a {
        text-decoration: none;
        color: white;
        border-bottom: 1px solid white;
        margin-left: 10px;
      }
    }
    
    .column4 {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      padding: 15px;
      margin: 20px;
      
      .creator {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      img {
        width: 100px;
        
      }

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
    
    .box2 {
      width: 45%;
      .fullImg {
        background: rgba(255, 255, 255, 0.25);
        border-radius: 28px;
        border: 5px solid #7E007C;
        padding: 20px;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
      .fullImgBox{
        border: 10px solid #FFFFFF;
        border-radius: 28px;
        width: 600px;
        height: fit-content;
        //display: flex;
        //justify-content: center;
        
        img {
          width: 600px;
          border-radius: 12px;
        }
      }
        
        .fullImgBox2 {
          display: flex;
          align-items: center;
          margin-top: 20px;
          padding: 0px 20px;
          
          .like {
            img {
              width: 50px;
              margin-right: 20px;
              cursor: pointer;
            }
          }
          
          .likeText {
            font-size: 14px;
            line-height: 20px;
          }

          button {
            background: url(${loginBtn}) no-repeat;
            height: 70px;
            width: 170px;
            border: none;
            -webkit-background-size: 120px;
            background-size: 170px;
            background-position-y: center;

            p {
              position: relative;
              bottom: 2px;
              text-transform: uppercase;
              font-size: 16px;
              line-height: 10px;
            }
          }
        }
        
        .fullImgBox3 {
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: space-between;
          margin-top: 20px;
          
          .ratingText {
            font-size: 24px;
            text-align: center;
          }
          
          .ratingImg {
            img {
              width: 300px;
            }
          }
        }
      }
    }
    
    
  }
`


const GamePage: FC<MainPageProps> = () => {
    const dispatch = useAppDispatch()

    const [modalIsOpen, setIsOpen] = useState(false);

    const { gameDetails } = useAppSelector(state => state.gameDetails.gameDetails)

    useEffect(() => {

    }, [])

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            background: 'linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%)',
            border: '1px solid #F9F871',
            borderRadius: '28px',
            width: '350px',
            height: '250px',
            textAlign: 'center',
            margin: 'auto',
        },

        overlay: {
            color: '#F9F871',
            lineHeight: '25px',
        }
    }


  return (
    <GamePageWrap>
        <Header/>
        <div className='flexBox'>
            <div className='box1'>
                <div className='column1'>
                    <div className='imgBox'>
                        <img src={gameDetails?.imgLink} alt={'image'}/>
                    </div>
                    <div className='descriptionBox'>
                        <div className='orangeBox'>
                            <div>
                                <p>{gameDetails?.name}</p>
                            </div>
                            <div>
                                <p>{gameDetails?.rating}</p>
                            </div>
                        </div>

                        <div className='description'>
                            <p>{gameDetails?.description}</p>
                        </div>
                    </div>
                </div>

                <div className='column2'>
                    <div>
                        <p className='genresp'>Genres</p>
                        <div className='genres'>
                            {
                                gameDetails?.genres?.map(genre => (
                                    <div className='genre'>
                                        <p className='genreName'>{genre?.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='price'>
                        <p className='price'>Price</p>
                        <p>{gameDetails?.price} $</p>
                    </div>
                    <div>
                        <button>
                            <p>BUY</p>
                        </button>
                    </div>
                </div>

                <div className='column3'>
                    <p className='linkPlay'>where to play:
                        <a href={gameDetails?.gameLink} target='_blank'>link</a>
                    </p>
                </div>

                <div className='author'>
                    <p>AUTHOR</p>
                </div>

                <div className='column4'>
                    <div className={'creator'}>
                        <img src={gameDetails?.creator?.img} />
                        <p>{gameDetails?.creator?.username}</p>
                    </div>
                    <div className='addToFav'>
                        <button onClick={() => {
                            dispatch(favouriteDeveloper(gameDetails.id))
                            openModal()
                        }}>
                            <p>add to favourite</p>
                        </button>
                    </div>
                </div>

            </div>

            <div className='box2'>
                <div className='fullImg'>
                    <div className={'fullImgBox'}>
                        <img src={gameDetails?.imgLink}/>
                    </div>

                    <div className={'fullImgBox2'}>
                        <div className='like' >
                            <img src={like} alt={'photo'} onClick={() => {
                                dispatch(favouriteGame(gameDetails?.id))
                                openModal()
                            }}/>
                        </div>
                        <div className='likeText'>
                            <p>Like to add for your favourite games</p>
                        </div>
                        <div>
                            <a href={gameDetails?.gameLink} target="_blank">
                                <button>
                                    <p>PLAY</p>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className={'fullImgBox3'}>
                        <div className={'ratingText'}>
                            <p>Rate <br/> the game</p>
                        </div>
                        <div className={'ratingImg'}>
                            <img src={rating} alt={'rating'}/>
                        </div>
                    </div>
                </div>

                <div className='recommendation'>
                    <p>Recomendations from author:</p>
                </div>

            </div>

        </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className='modal'>
                <p style={{paddingTop: '80px'}}>You successfully added to favourite!</p>
            </div>
        </Modal>
        <Footer/>
    </GamePageWrap>
  )
}

export default GamePage
