import React, { FC } from 'react'
import styled from '@emotion/styled'

import profileImg from '../../../assets/images/profileImg.png'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {getGameDetail} from "../../GamePage/slices/gameDetails";
import {useHistory} from "react-router-dom";

const BodyWrap = styled.div`
  margin: 80px 40px;
  p {
    color: white;
    font-size: 18px;
    line-height: 13px;
  }
  
  .gameCreators {
    padding: 20px;
    background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
    border: 1px solid #F9F871;
    border-radius: 20px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    gap: 20px;
    
    img {
      width: 80px;
    }
  }
  
  .recommendation {
    margin-top: 70px;
  }
  //.recommendationImgBox1 {
  //  display: grid;
  //  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  //  gap: 20px;
  //  margin-top: 30px;
  //  img {
  //    width: 250px;
  //  }
  //  .gameBox {
  //    background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
  //    border: 2px solid #F9F871;
  //    border-radius: 12px;
  //  }
  //}
  .recommendationImgBox1 {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;

    .gameBox {
      background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
      border: 2px solid #F9F871;
      border-radius: 12px;
      width: 275px;
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
`


export interface BodyProps {
}

const Body: FC<BodyProps> = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const { allDevelopers, recommendedGames } = useAppSelector(
        state => state.main.main
    )

  return (
    <BodyWrap>
        <div>
            <p>Our game creators</p>
        </div>
        <div className='gameCreators'>
            {
                allDevelopers?.map(developer => (
                    <div key={developer?.id}>
                        <img src={developer?.img} alt={'profileImg'}/>
                    </div>
                ))
            }
        </div>
        <div className='recommendation'>
            <p>Recomendations for today</p>
        </div>
        <div className='recommendationImgBox1'>
            {
                recommendedGames.map(game => (
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
                ))
            }
        </div>
    </BodyWrap>
  )
}

export default Body
