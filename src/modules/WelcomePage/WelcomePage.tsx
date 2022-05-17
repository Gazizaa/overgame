import React, {useState} from 'react'
import styled from '@emotion/styled'
import overGame from '../../assets/images/overGame.png'
import textBc from '../../assets/images/textBc.png'
import buttons from '../../assets/images/buttons.png'
import GuestUser from './GuestUser'

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .__machine__header {
    background: #0D0259;
    padding: 0 20px 0 20px;
    width: 60%;
    margin-top: 30px;
    border-top: none;

    .__machine__header__box_1 {
      background: #320396;
      padding: 0 20px 20px 20px;
    }

    .__machine__header__box_2 {
      background: #0A014A;
      padding: 15px 25px;
    }

    .__overGame {
      background-color: #00ADD7;
      padding: 10px;
      text-align: center;
      border: 8px solid #007F9D;

      img {
        width: 70%;
      }
    }
  }
  
  .__overGame__box_1 {
    background-color: #0D0259;
    padding: 0 20px 0 20px;
    width: 60%;
    clip-path: polygon(0 0, 100% 0, 93% 100%, 7% 100%);

    .__overGame__box_2 {
      background: #320396;
      padding: 0 20px 20px 20px;
      clip-path: polygon(0 0, 100% 0, 92.5% 100%, 7.5% 100%);
    }

    .__overGame__box_3 {
      background: #0A014A;
      padding: 30px;
      clip-path: polygon(0 0, 100% 0, 94% 100%, 6% 100%);
    }
  }


  .__overGame__text__box_1 {
    background-color: #0D0259;
    padding: 0 20px 0 20px;
    width: 51.3%;

    .__overGame__text__box_2 {
      background: #320396;
      padding: 0 20px 20px 20px;
      margin: 0 3px 0 3px;
    }

    .__overGame__text__box_3 {
      background: #0A014A;
      padding: 20px;
      text-align: center;
    }

    .__overGame__text__box_4_text {
      background-image: url(${textBc});
      height: 370px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        color: white;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
      }

      .welcome-text_1 {
        padding: 25px 20px 90px 20px;
        line-height: 40px;
        margin-top: -49px;

        p {
          //margin: 0 auto;
          //animation: typing 3.5s steps(30, end), blink-caret .5s step-end infinite;
          //white-space: nowrap;
          //overflow: hidden;
          //border-right: 3px solid white;
        }
      }

      .welcome-text_2 {
        padding: 0 20px 0 20px;
        line-height: 40px;
      }
    }
  }

  .footer_buttons_box_1 {
    background-color: #0D0259;
    padding: 0 20px 0 20px;
    width: 61.5%;
    clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);

    .footer_buttons_box_2 {
      background: #320396;
      padding: 0 20px 0 20px;
      margin: 0 8px;
      clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);
    }

    .footer_buttons_box_3 {
      background: #0A014A;
      clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom: 1px solid #0D0259;

      .gameOnBtn__box_1 {
        background-color: black;
        padding: 0 12px 10px 12px;
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        
        
        .gameOnBtn__box_2 {
          background-color: #D4A142;
          padding: 3px 4px 3px 4px;
          clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
          
          .gameOnBtn {
            padding: 10px 10px 12px 10px;
            cursor: pointer;
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);

            button {
              background: none;
              border: none;
              margin-bottom: 9px;
              padding-bottom: 7px;
              border-bottom: 2px solid #D4A142;
              width: 83px;

              p {
                font-size: 15px;
                text-transform: uppercase;
                line-height: 24px;
              }
            }
          }
        }
      }
      
      .buttons img {
        width: 600px;
      }
    }
  }

  .footer {
    background-color: #0D0259;
    padding: 0 20px 0 20px;
    width: 61.5%;
    height: 100px;

    .footer__box_1 {
      background: #320396;
      padding: 0 20px 0 20px;
      margin: 0 8px;
    }

    .footer__box_2 {
      background: #0A014A;
      padding: 20px;
      height: 60px
    }
  }

  //@keyframes typing {
  //  from { width: 0 }
  //  to { width: 100% }
  //}
  //
  //@keyframes blink-caret {
  //  from, to { border-color: transparent }
  //  50% { border-color: white }
  //}
  
`

const WelcomePage = () => {

    const [turnOnBtn, setTurnOnBtn] = useState(false)


  return (
      <MainWrap>
          <div className="__machine__header">
              <div className="__machine__header__box_1">
                  <div className="__machine__header__box_2">
                      <div className="__overGame">
                          <img src={overGame} alt={'overGame'}/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="__overGame__box_1">
              <div className="__overGame__box_2">
                  <div className="__overGame__box_3">

                  </div>
              </div>
          </div>

          <div className="__overGame__text__box_1">
              <div className="__overGame__text__box_2">
                  <div className="__overGame__text__box_3">
                      <div className="__overGame__text__box_4_text">
                          {!turnOnBtn && (
                              <>
                                  <div className="welcome-text_1">
                                      <p>Welcome, dear gamer!</p>
                                  </div>
                                  <div className="welcome-text_2">
                                      <p>You are on the best website with the best flash games that you've never played before!!!</p>
                                  </div>
                              </>
                          )}
                          {turnOnBtn && <GuestUser/> }
                      </div>
                  </div>
              </div>
          </div>

          <div className='footer_buttons_box_1'>
              <div className='footer_buttons_box_2'>
                  <div className="footer_buttons_box_3">
                      <div className="gameOnBtn__box_1">
                          <div className="gameOnBtn__box_2">
                              <div
                                  className="gameOnBtn"
                                  style={{background: turnOnBtn ? '#F25E6B' : '#F2B84B'}}
                              >
                                  <button
                                      onClick={() => setTurnOnBtn(!turnOnBtn)}
                                  >
                                      <p
                                          style={{color: turnOnBtn ? '#F2B84B' : '#FFFFFF'}}
                                      >
                                          TURN
                                          <br/>
                                          {turnOnBtn ? 'OFF' : 'ON'}
                                      </p>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="buttons">
                          <img src={buttons} alt={'buttons'}/>
                      </div>
                  </div>
              </div>
          </div>

          <div className='footer'>
              <div className='footer__box_1'>
                  <div className='footer__box_2'>
                  </div>
              </div>
          </div>
      </MainWrap>
  );
}

export default WelcomePage;
