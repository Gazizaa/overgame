import React, { FC } from 'react'
import styled from '@emotion/styled'

import profileImg from '../../../assets/images/profileImg.png'
import recom1 from '../../../assets/images/recom1.png'
import recom2 from '../../../assets/images/recom2.png'
import recom3 from '../../../assets/images/recom3.png'
import recom4 from '../../../assets/images/recom4.png'
import recom5 from '../../../assets/images/recom5.png'
import recom6 from '../../../assets/images/recom6.png'
import recom7 from '../../../assets/images/recom7.png'
import recom8 from '../../../assets/images/recom8.png'
import recom9 from '../../../assets/images/recom9.png'
import recom10 from '../../../assets/images/recom10.png'
import recom11 from '../../../assets/images/recom11.png'
import recom12 from '../../../assets/images/recom12.png'

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
  .recommendationImgBox1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
    img {
      width: 250px;
    }
  }
`


export interface BodyProps {
}

const Body: FC<BodyProps> = () => {
  return (
    <BodyWrap>
        <div>
            <p>Our game creators</p>
        </div>
        <div className='gameCreators'>
            <div>
                <img src={profileImg} alt={'profileImg'}/>
            </div>
            <div>
                <img src={profileImg} alt={'profileImg'}/>
            </div>
            <div>
                <img src={profileImg} alt={'profileImg'}/>
            </div>
            <div>
                <img src={profileImg} alt={'profileImg'}/>
            </div>
            <div>
                <img src={profileImg} alt={'profileImg'}/>
            </div>
            <div>
                <img src={profileImg} alt={'profileImg'}/>
            </div>
        </div>
        <div className='recommendation'>
            <p>Recomendations for today</p>
        </div>
        <div className='recommendationImgBox1'>
            <div>
                <img src={recom1} alt={'recom1'}/>
            </div>
            <div>
                <img src={recom2} alt={'recom2'}/>
            </div>
            <div>
                <img src={recom3} alt={'recom3'}/>
            </div>
            <div>
                <img src={recom4} alt={'recom4'}/>
            </div>
            <div>
                <img src={recom5} alt={'recom4'}/>
            </div>
            <div>
                <img src={recom6} alt={'recom4'}/>
            </div>
        </div>

        <div className='recommendationImgBox1'>
            <div>
                <img src={recom7} alt={'recom1'}/>
            </div>
            <div>
                <img src={recom8} alt={'recom2'}/>
            </div>
            <div>
                <img src={recom9} alt={'recom3'}/>
            </div>
            <div>
                <img src={recom10} alt={'recom4'}/>
            </div>
            <div>
                <img src={recom11} alt={'recom4'}/>
            </div>
            <div>
                <img src={recom12} alt={'recom4'}/>
            </div>
        </div>


    </BodyWrap>
  )
}

export default Body
