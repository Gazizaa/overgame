import React, { FC } from 'react'
import {Link} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {useHistory} from 'react-router-dom'

import styled from '@emotion/styled'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { moduleName as welcomeModule } from '../../../WelcomePage/moduleName'

import { turnOnOffBtn } from '../../../WelcomePage/slices/welcome'
import {signIn} from '../../slices/auth'

import overGame from '../../../../assets/images/overGame.png'
import textBc from '../../../../assets/images/textBc.png'
import buttons from '../../../../assets/images/buttons.png'
import loginBtnImg from '../../../../assets/images/loginBtn.png'




const SignInWrap = styled.div`
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
      color: white;
      font-size: 18px;
      font-family: 'Press Start 2P', cursive;

      p {
        color: white;
        font-weight: 400;
      }
      
      .login p {
        padding-top: 20px;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
      }
      
      .auth-form {
        display: flex;
        justify-content: space-evenly;
        margin-top: 40px;
        color: white;

        .auth-form_text  p {
          font-weight: 400;
          font-size: 20px;
        }
        
        .email-p {
          padding-top: 10px;
        }
        
        .password-p {
          margin-top: 37px;
        }
        form {
          display: flex;
          flex-direction: column;
          
          #password {
            margin-top: 20px;
          }

          input[type=text], input[type=password] {
            color: white;
            font-size: 18px;
            font-family: 'Press Start 2P', cursive;
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          select:-webkit-autofill,
          select:-webkit-autofill:hover,
          select:-webkit-autofill:focus {
            border: none; !important;
            background: none;!important;
            -webkit-text-fill-color: #F25E6B;
          }
          
          input {
            border: none;
            background: none;
            width: 400px;
            height: 35px;
            outline:none;
            
            
            ::placeholder {
              color: #F25E6B;
              font-weight: 400;
              font-family: 'Press Start 2P', cursive;
              font-size: 20px;
              padding-top: 10px;
            }
            
            
            //:focus {
            //  color: white;
            //  font-size: 20px;
            //  font-family: 'Press Start 2P', cursive;
            //}
          }
          
          .submitBtn {
            background: url(${loginBtnImg}) no-repeat;
            height: 100px;
            width: auto;
            background-size: 160px;
            background-position-y: center;
            
            button {
              background: none;
              border: none;
              color: white;
              p {
                position: relative;
                top: 35px;
                right: 123px;
                font-size: 20px;
              }
            }
          }
          
          .errorMessage {
            font-size: 10px;
            text-align: left;
          }
        }
      }

      .register {
        p {
          font-size: 20px;
          line-height: 32px;
        }

        a {
          color: #0CF2DB;
        }
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
`

const SignIn: FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const buttonStatus = useAppSelector(
        state => state[welcomeModule].welcome.turnOn,
    )

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        username: Yup.string().email('Invalid email!').required('Required!'),
        password: Yup.string().required('Required!'),
    });

  return (
    <SignInWrap>
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
                        <div className="login">
                            <p>Login</p>
                        </div>
                        <div className="auth-form">
                            <div className='auth-form_text'>
                                <p className='email-p'>E-mail</p>
                                <p className='password-p'>Password</p>
                            </div>
                            <div>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: '',
                                    }}
                                    validationSchema={DisplayingErrorMessagesSchema}
                                    onSubmit={values => {
                                        dispatch(signIn(values))
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form className='form' autoComplete='off'>
                                            <Field type='text' id='username' name="username" placeholder='Enter e-mail'/>
                                            {touched.username && errors.username &&
                                                <div className='errorMessage'>
                                                    {errors.username}
                                                </div>
                                            }

                                            <Field type='password' id='password' name="password" placeholder='Enter password'/>
                                            {touched.password && errors.password &&
                                                <div className='errorMessage'>
                                                    {errors.password}
                                                </div>
                                            }
                                            <div className='submitBtn'>
                                                <button type="submit">
                                                    <p>Login</p>
                                                </button>
                                            </div>

                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className='register'>
                            <p>
                                If you don???t have an account, please,
                                <Link to="/auth/sign-up">
                                    <span>click here</span>
                                </Link>
                            </p>
                        </div>

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
                                style={{background: buttonStatus ? '#F25E6B' : '#F2B84B'}}
                            >
                                <button
                                    onClick={() => {
                                        dispatch(turnOnOffBtn(!buttonStatus))
                                        if(buttonStatus) {
                                            history.push('/welcome')
                                        }
                                    }}
                                >
                                    <p style={{color: buttonStatus ? '#F2B84B' : '#FFFFFF'}}>
                                        TURN
                                        <br/>
                                        {buttonStatus ? 'OFF' : 'ON'}
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
    </SignInWrap>
  )
}

export default SignIn
