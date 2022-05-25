import React, { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from '@emotion/styled'

import plus from '../../../assets/images/plus.png'
import {Field, Form, Formik} from 'formik'
import addGame from '../../../assets/images/addGame.png'
import loginBtn from '../../../assets/images/loginBtn.png'


export interface AddGameProps {
}

const AddGameWrap = styled.div`
    .mainBox {
      background: linear-gradient(90deg, #7E007C 0.85%, #5548B2 100.85%);
      border: 1px solid #F9F871;
      border-radius: 20px;
      padding: 40px 40px 90px;
      width: 80%;
      margin: 50px auto;
      
      p {
        line-height: 20px;
        color: white;
      }
      
      .mainText {
        text-transform: uppercase;
        font-size: 20px;
      }
      
      .mainBox_2 {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-top: 20px;
      }
      
      .column_1 {
        width: 45%;
        padding-top: 40px;
      }
      
      .addImage {
        display: flex;
        justify-content: space-between;
      
        gap: 20px;
        
        .box1 {
          background: rgba(255, 255, 255, 0.65);
          height: 250px;
          width: 200px;
          text-align: center;
          
          img {
            width: 30px;
            margin-top: 90px;
            margin-bottom: 20px;
          }
        }
        
        .form {
          display: flex;
          flex-direction: column;
          
          input {
            background: rgba(255, 255, 255, 0.65);
            border: none;
            width: 350px;
            outline: none;
            height: 30px;
            margin-bottom: 20px;
            margin-top: 5px;
          }
          
          label {
            color: white;
          }
          
          .priceForm {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            input {
              width: 70px;
              margin: 0;
            }
          }
        }
      }
      .description {
        margin-top: 60px;
        
        input {
          background: rgba(255, 255, 255, 0.65);
          border: none;
          width: 100%;
          outline: none;
          height: 180px;
          margin-top: 20px;
        }
      }

      .uploadImage {
        width: 45%;
        text-align: center;

        & > p {
          font-size: 20px;
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
        
        .row_1 {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin-top: 40px;
          margin-bottom: 30px;
          
          
          img {
            width: 60px;
          }
        }
        
        .genre, .genre4 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          
          .genreBox, .genreBox2, .genreBox3, .genreBox4  {
            background: #5548B2;
            border: 2px solid #F9F871;
            border-radius: 25px;
            padding: 10px;
            margin-right: 40px;
            
          }
          
          .genreBox2 {
            margin-right: 35px;
          }

          .genreBox3 {
            margin-right: 25px;
          }

          .genreBox4{
            margin-right: 70px;
          }
          
        }
      }
      
      .gallery {
        padding-top: 30px;
        
       & > p {
          font-size: 20px;
          padding-bottom: 30px;
        }
        
        .galleryBox {
          background: rgba(255, 255, 255, 0.65);
          padding: 20px;
          height: 300px;
          
         & > p {
            color: #5548B2;
            font-size: 15px;
            padding-top: 90px;
           padding-bottom: 40px;
            line-height: 40px;
          }

          .importFile2 {
            border: none;
            background: none;
            background: #D0BCFF;
            border-radius: 20px;
            padding: 10px;

            p {
              color: #381E72;
              font-size: 12px;
            }
          }
        }
      }

      .register button {
        background: url(${loginBtn}) no-repeat;
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
`

const AddGame: FC<AddGameProps> = () => {
  return (
    <AddGameWrap>
        <Header/>
        <div className='mainBox'>
            <p className='mainText'>Add your game</p>
            <div className='mainBox_2'>
                <div className='column_1'>
                    <div className='addImage'>
                        <div className={'box1'}>
                            <img src={plus} alt={'plus'}/>
                            <p style={{color: '#5548B2'}}>Add <br/> Image</p>
                        </div>
                        <div className='formik'>
                            <Formik
                                initialValues={{
                                    title: '',
                                    title2: '',
                                    link: '',
                                    price: '',
                                    free: '',
                                }}
                                onSubmit={values => {
                                    console.log(values)
                                }}
                            >
                                {({errors, touched}) => (
                                    <Form className='form' autoComplete='off'>
                                        <label htmlFor="title">Title RU</label>
                                        <Field type='text' id='title' name="title"  readonly/>
                                        {touched.title && errors.title &&
                                            <div className='errorMessage'>
                                                {errors.title}
                                            </div>
                                        }

                                        <label htmlFor="title2">Title ENG</label>
                                        <Field type='text' id='title2' name="title2"  readonly/>
                                        {touched.title2 && errors.title2 &&
                                            <div className='errorMessage'>
                                                {errors.title2}
                                            </div>
                                        }

                                        <label htmlFor="link">Game Link</label>
                                        <Field type='text' id='link' name="link"  readonly/>
                                        {touched.link && errors.link &&
                                            <div className='errorMessage'>
                                                {errors.link}
                                            </div>
                                        }
                                        <div className='priceForm'>
                                            <label htmlFor="price">Price</label>
                                            <Field type='text' id='price' name="price" readonly/>
                                            {touched.price && errors.price &&
                                                <div className='errorMessage'>
                                                    {errors.price}
                                                </div>
                                            }

                                            <label htmlFor="free">Free</label>
                                            <Field type='text' id='free' name="free"  readonly/>
                                            {touched.free && errors.free &&
                                                <div className='errorMessage'>
                                                    {errors.free}
                                                </div>
                                            }
                                        </div>

                                        {/*<div className='submitBtn'>*/}
                                        {/*    <button type="submit">*/}
                                        {/*        <p>Login</p>*/}
                                        {/*    </button>*/}
                                        {/*</div>*/}

                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Description RU</p>
                        <input readOnly/>
                    </div>
                    <div className='description'>
                        <p>Description ENG</p>
                        <input readOnly/>
                    </div>
                </div>
                <div className='uploadImage'>
                    <p>Upload game file</p>
                    <div className='row_1'>
                        <img alt='addGame' src={addGame}/>
                        <button type="button" className='importFile'>
                            <p>Choose File</p>
                        </button>
                    </div>
                    <p>Choose genre</p>
                    <div>
                        <div className='genre'>
                            <div className='genreBox'>
                                <p>Action</p>
                            </div>
                            <div className='genreBox'>
                                <p>Arcade</p>
                            </div>
                            <div className='genreBox'>
                                <p>Adventure</p>
                            </div>
                            <div className='genreBox'>
                                <p>Race</p>
                            </div>
                        </div>
                        <div className='genre'>
                            <div className='genreBox2'>
                                <p>Clicker</p>
                            </div>
                            <div className='genreBox2'>
                                <p>Fighting</p>
                            </div>
                            <div className='genreBox2'>
                                <p>Logic</p>
                            </div>
                            <div className='genreBox2'>
                                <p>RPG</p>
                            </div>
                        </div>
                        <div className='genre'>
                            <div className='genreBox3'>
                                <p>Sport</p>
                            </div>
                            <div className='genreBox3'>
                                <p>Shooting</p>
                            </div>
                            <div className='genreBox3'>
                                <p>Paid</p>
                            </div>
                            <div className='genreBox3'>
                                <p>Sandbox</p>
                            </div>
                        </div>
                        <div className='genre4'>
                            <div className='genreBox4'>
                                <p>Two player games</p>
                            </div>
                            <div className='genreBox4'>
                                <p className='other'>Others</p>
                            </div>
                        </div>
                    </div>
                    <div className='gallery'>
                        <p>Upload gallery</p>
                        <div className="galleryBox">
                            <p>Drag photo/video here <br/> or</p>
                            <button type="button" className="importFile2">
                                <p>Choose File</p>
                            </button>
                        </div>
                    </div>
                    <div className="register">
                        <button type="submit">
                            <p>OFFER</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </AddGameWrap>
  )
}

export default AddGame
