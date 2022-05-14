import React from 'react';
import styled from '@emotion/styled'
import overGame from '../../assets/images/overGame.png'
import textBc from '../../assets/images/textBc.png'
import buttons from '../../assets/images/buttons.png'


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

      img {
        width: 100%;
      }
    }

    .__overGame__text__box_4_text {
      background-image: url(${textBc});
      min-height: 370px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 30px;

      p {
        color: white;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
      }

      .welcome-text_1 {
        padding: 60px 20px 100px 20px;
      }

      .welcome-text_2 {
        padding: 0 20px 20px 20px;
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
            background-color: #F2B84B;
            padding: 10px 10px 12px 10px;
            cursor: pointer;
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);

            button {
              background: none;
              border: none;
              cursor: pointer;
              margin-bottom: 9px;
              padding-bottom: 7px;
              border-bottom: 2px solid #D4A142;
              width: 83px;

              p {
                color: white;
                font-size: 15px;
                text-transform: uppercase;
                font-family: 'Press Start 2P', cursive;
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
`

const WelcomePage = () => {
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
                          <p className='welcome-text_1'>Welcome, dear gamer!</p>
                          <p className='welcome-text_2'>
                              You are on the best website with the best flash games that you've never played before!!!
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className='footer_buttons_box_1'>
              <div className='footer_buttons_box_2'>
                  <div className="footer_buttons_box_3">
                      <div className="gameOnBtn__box_1">
                          <div className="gameOnBtn__box_2">
                              <div className="gameOnBtn">
                                  <button>
                                      <p>
                                          TURN <br/> ON
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
