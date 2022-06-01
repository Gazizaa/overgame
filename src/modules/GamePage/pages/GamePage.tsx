import React, {FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Modal from 'react-modal'
import Header from '../../MainPage/pages/Header'
import Footer from '../../MainPage/pages/Footer'
import loginBtn from '../../../assets/images/loginBtn.png'
import like from '../../../assets/images/like.png'
import emptyHeart from '../../../assets/images/emptyHeart.png'
import fullHeart from '../../../assets/images/fullHeart.png'
import comment from '../../../assets/images/comment.png'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {
    deleteComment,
    favouriteDeveloper,
    favouriteGame,
    getComment,
    getGameDetail,
    ratingGame,
    sendComment
} from '../slices/gameDetails'
import {useHistory} from 'react-router-dom'
import Rating from 'react-rating'
import profileImg from '../../../assets/images/profileImg.png'
import {moduleName as commonModule} from '../../common/moduleName'

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
      min-height: 500px;
      
      .column1 {
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
      
      .imgBox {
        img {
          width: 230px;
          height: 308px;
          object-fit: cover;
        }
      }
      
      .comment {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        .commentImg {
          width: 400px;
        }

        .columnBox {
          display: flex;
          align-items: center;

          .orangeInput2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #FD754A;
            padding: 10px;
            width: 800px;
            input[type=text] {
              color: white;
              font-size: 15px;
              font-family: 'Press Start 2P', cursive;
            }

            input {
              border: none;
              outline: none;
              height: 60px;
              width: 330px;
              background: none;

              ::placeholder {
                color: white;
                font-weight: 400;
                font-family: 'Press Start 2P', cursive;
                font-size: 15px;
                padding-left: 10px;
              }
            }
          }
          
            .sendCommentImg2{
              width: 100px;
              height: 100px;
            }

          .send2 {
            button {
              background: url(${loginBtn}) no-repeat;
              height: 40px;
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
                line-height: 15px;
              }
            }
          }
        }
        
        .sendComment{
          display: flex;
          align-items: center;
          margin-top: 350px;
          height: 100%;

          .imgBox {
            .sendCommentImg{
              width: 100px;
              height: 100px;
            }
          }
          
          .orangeInput {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #FD754A;
            padding: 10px;
            width: 800px;
            input[type=text] {
              color: white;
              font-size: 15px;
              font-family: 'Press Start 2P', cursive;
            }
            
            input {
              border: none;
              outline: none;
              height: 60px;
              width: 330px;
              background: none;
              
              ::placeholder {
                color: white;
                font-weight: 400;
                font-family: 'Press Start 2P', cursive;
                font-size: 15px;
                padding-left: 10px;
              }
            }
          }
          
          .send {
            button {
              background: url(${loginBtn}) no-repeat;
              height: 40px;
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
                line-height: 15px;
              }
            }
          }
          
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
        clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);

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
      .ratingImg2 {
        margin-top: 10px;
        .ratingBox2 {
          img {
            width: 30px;
          }
        }

      }
    }
    
    .column2 {
      display: flex;
      justify-content: space-between;
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
        height: 46px;
        width: 140px;
        border: none;
        -webkit-background-size: 120px;
        background-size: 140px;
        background-position-y: center;

        p {
          position: relative;
          bottom: 2px;
          text-transform: uppercase;
          font-size: 10px;
          line-height: 15px;
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
        width: 100%;
        
      .fullImgBox{
        border: 10px solid #FFFFFF;
        border-radius: 28px;
        width: 600px;
        height: fit-content;
        
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
            line-height: 33px;
          }
          
          .ratingImg {
            .ratingBox{
              img {
                width: 90px;
              }
            }
          }
        }
      }
      
      .recommendationText {
        margin-top: 40px;
        font-size: 20px;
      }

      .recommendationImgBox1 {
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-between;
        margin-top: 30px;
        width: 100%;

        .gameBox {
          background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
          border: 2px solid #F9F871;
          border-radius: 12px;
          width: 190px;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          justify-items: center;

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
    }
    
    
  }
`


const GamePage: FC<MainPageProps> = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const [modalIsOpen, setIsOpen] = useState(false)
    const [valueComment, setValueComment] = useState('')

    const { gameDetails, comments } = useAppSelector(state => state.gameDetails.gameDetails)
    const { recommendedGames } = useAppSelector(
        state => state.main.main
    )
    const { profile } = useAppSelector(state => state[commonModule].profile)



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
                            <div className={'ratingImg2'}>
                                <div className={'ratingBox2'}>
                                    {/*// @ts-ignore */}
                                    <Rating
                                        initialRating={gameDetails?.rating}
                                        readonly
                                        emptySymbol={<img src={emptyHeart} className="icon" alt={'img'}/>}
                                        placeholderSymbol={<img src={fullHeart} className="icon" alt={'img'}/>}
                                        fullSymbol={<img src={fullHeart} className="icon" alt={'img'}/>}
                                    />
                                </div>
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
                            dispatch(favouriteDeveloper(gameDetails?.creator?.id))
                            openModal()
                        }}>
                            <p>add to favourite</p>
                        </button>
                    </div>
                </div>

                <div className='comment'>
                    <img src={comment} alt={'comment'} className={'commentImg'}/>
                    <div className={'allComments'}>
                        {
                            comments?.map(comment => (
                                <div className='columnBox'>
                                    <div className='imgBox'>
                                        <img className={'sendCommentImg2'} src={comment?.userInfo?.id !== null ? comment?.userInfo?.img : profileImg} alt="profileImg"/>
                                    </div>
                                    <div className={'orangeInput2'}>
                                        <div>
                                            <p>{comment?.userInfo?.username}</p>
                                        </div>
                                        <div>
                                            <input
                                                type={'text'}
                                                value={comment?.text}
                                                readOnly
                                            />
                                        </div>
                                        <div className='send2'>
                                            <button onClick={() => {
                                                dispatch(deleteComment({
                                                    gameId: gameDetails?.id,
                                                    commentId: comment.id
                                                }))
                                            }}>
                                                <p>DELETE</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className={'sendComment'}>
                        <div className='imgBox'>
                            <img className={'sendCommentImg'} src={profile?.id !== null ? profile?.imgUrl : profileImg} alt="profileImg"/>
                        </div>
                        <div className={'orangeInput'}>
                            <div>
                                <p>{profile?.username}</p>
                            </div>
                            <div>
                                <input
                                    type={'text'}
                                    placeholder='Write your comment'
                                    value={valueComment}
                                    onChange={e => setValueComment(e.target.value)}
                                />
                            </div>
                            <div className='send'>
                                <button onClick={() => {
                                    dispatch(sendComment({
                                        gameId: gameDetails?.id,
                                        text: valueComment
                                    }))
                                    setValueComment('')
                                }}>
                                    <p>SEND</p>
                                </button>
                            </div>
                        </div>
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
                            <div className={'ratingBox'}>
                                {/*// @ts-ignore */}
                                <Rating
                                    initialRating={gameDetails?.rating}
                                    onChange={e => dispatch(ratingGame({
                                        gameId: gameDetails?.id,
                                        grade: e
                                    }))}
                                    emptySymbol={<img src={emptyHeart} className="icon" alt={'img'}/>}
                                    placeholderSymbol={<img src={fullHeart} className="icon" alt={'img'}/>}
                                    fullSymbol={<img src={fullHeart} className="icon" alt={'img'}/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='recommendation'>
                    <p className='recommendationText'>Recomendations from author:</p>
                    <div className='recommendationImgBox1'>
                        {
                            recommendedGames.map(game => (
                                <div key={game?.id} className='gameBox'>
                                    <p className={'gameName'}>{game?.name}</p>
                                    <img
                                        src={game?.imgLink}
                                        alt={'gameImg'}
                                        onClick={() => {
                                            dispatch(getGameDetail(game?.id))
                                            dispatch(getComment(game?.id))
                                            history.push(`/game/${game?.id}`)
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
                            ))
                        }
                    </div>
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
