import React, {FC, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {useHistory} from 'react-router-dom'
import moment from 'moment'

import styled from '@emotion/styled'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { moduleName as welcomeModule } from '../../../WelcomePage/moduleName'

import { turnOnOffBtn } from '../../../WelcomePage/slices/welcome'
import {signUp} from '../../slices/auth'

import overGame from '../../../../assets/images/overGame.png'
import textBc from '../../../../assets/images/textBc.png'
import buttons from '../../../../assets/images/buttons.png'
import loginBtnImg from '../../../../assets/images/loginBtn.png'




const SignUpWrap = styled.div`
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
        margin-bottom: 20px;
      }
      
      .auth-form {
          input[type=text], input[type=password], input[type=date], input[type=email] {
            color: white;
            font-size: 18px;
            font-family: 'Press Start 2P', cursive;
          }

        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
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
          }
        
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          
          .form_username {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 85%;
            
            .importFileBox {
              width: 62%;
              text-align: left;
              
              span {
                font-size: 10px;
                margin-left: 10px;
              }
            }
            
            .importFile {
              border: none;
              background: none;
              background: #D0BCFF;
              border-radius: 20px;
              padding: 10px;
              
              p {
                color: #381E72;
              }
            }
        }
          
          .submitBtn {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 90%;
            margin-top: 20px;
             p {
               font-size: 18px;
             }
            
            .login button{
              background: url(${loginBtnImg}) no-repeat;
              height: 86px;
              width: 156px;
              border: none;
              -webkit-background-size: 160px;
              background-size: 155px;
              background-position-y: center;
              
              p {
                position: relative;
                bottom: 4px;
                text-transform: capitalize;
                
              }
              a {
                text-decoration: none;
              }
            }


            .register button {
              background: url(${loginBtnImg}) no-repeat;
              height: 86px;
              width: 161px;
              border: none;
              -webkit-background-size: 160px;
              background-size: 160px;
              background-position-y: center;

              p {
                position: relative;
                bottom: 2px;
                font-size: 16px;
              }
            }
          }

           .errorMessage {
             font-size: 10px;
             text-align: left;
             margin-bottom: 5px;
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

const SignUp: FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const buttonStatus = useAppSelector(
        state => state[welcomeModule].welcome.turnOn,
    )

    const ref = useRef(null)
    const [file, setFile] = useState<any>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const importFile = () => {
        if (ref.current) {
            ref.current.click()
        }
    }

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email!').required('Required!'),
        username: Yup.string().required('Required!'),
        dateOfBirth: Yup.string().required('Required!'),
    });

    return (
    <SignUpWrap>
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
                            <p>REGISTRATION</p>
                        </div>
                        <div className="auth-form">
                            <div>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        email: '',
                                        dateOfBirth: '',
                                    }}
                                    validationSchema={DisplayingErrorMessagesSchema}
                                    onSubmit={values => {
                                        dispatch(signUp({
                                            body: {
                                                ...values,
                                                dateOfBirth: moment(values.dateOfBirth).format('DD.MM.YYYY'),
                                                roleCode: 'OVERGAME_USER_ROLE',
                                            },
                                            file: file
                                        }))
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form className='form' autoComplete='off'>
                                            <div className='form_username'>
                                                <div>
                                                    <label htmlFor="username">Username</label>
                                                </div>
                                              <div>
                                                  <Field autoComplete="nope" type="text" id="username" name="username"
                                                         placeholder="Enter your username"/>
                                                  {touched.username && errors.username &&
                                                      <div className="errorMessage">
                                                          {errors.username}
                                                      </div>
                                                  }
                                              </div>
                                            </div>

                                            <div className='form_username'>
                                                <div>
                                                    <label htmlFor="email">E-mail</label>
                                                </div>
                                               <div>
                                                   <Field type="email" id="email" name="email"
                                                          placeholder="Enter email"/>
                                                   {touched.email && errors.email &&
                                                       <div className="errorMessage">
                                                           {errors.email}
                                                       </div>
                                                   }
                                               </div>
                                            </div>
                                            <div className='form_username'>
                                                <div>
                                                    <label htmlFor="dateOfBirth">Date of birth</label>
                                                </div>
                                                <div>
                                                    <Field type="date" id="dateOfBirth" name="dateOfBirth"
                                                           placeholder="dd/mm/yyyy"
                                                           max="26-05-2222"
                                                    />
                                                    {touched.dateOfBirth && errors.dateOfBirth &&
                                                        <div className="errorMessage">
                                                            {errors.dateOfBirth}
                                                        </div>
                                                    }
                                                </div>
                                            </div>

                                            <div className='form_username'>
                                                <div>
                                                    <label htmlFor="file">Profile Image</label>
                                                </div>
                                                <div className='importFileBox'>
                                                    <button type="button" onClick={importFile} className='importFile'>
                                                        <p>Choose File</p>
                                                    </button>
                                                    <input
                                                        ref={ref}
                                                        type="file"
                                                        id="file"
                                                        name="file"
                                                        accept=".jpg,.jpeg,"
                                                        onChange={onChange}
                                                        style={{ display: 'none' }}
                                                    />
                                                    <span>{file ? file.name : ''}</span>
                                                </div>
                                            </div>

                                            <div className='submitBtn'>
                                                <div className="login">
                                                    <Link to="/auth/sign-in">
                                                        <button type="button">
                                                            <p>Login</p>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <div className="register">
                                                    <button type="submit">
                                                        <p>Register</p>
                                                    </button>
                                                </div>

                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
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
    </SignUpWrap>
  )
}

export default SignUp
