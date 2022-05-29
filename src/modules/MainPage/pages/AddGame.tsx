import React, {FC, useEffect, useRef, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from '@emotion/styled'
import Modal from 'react-modal'

import plus from '../../../assets/images/plus.png'
import {Field, Form, Formik} from 'formik'
import loginBtn from '../../../assets/images/loginBtn.png'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {createGame, getGenres} from '../slices/main'


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
      width: 95%;
      margin-top: 20px;
    }

    .column_1 {
      width: 50%;
      padding-top: 40px;
    }

    .addImage {
      display: flex;
      justify-content: flex-start;
      gap: 15px;
      width: 100%;

      .box1 {
        background: rgba(255, 255, 255, 0.65);
        height: 250px;
        width: 200px;
        text-align: center;
        width: 30%;
        cursor: pointer;

        img {
          width: 30px;
          margin-top: 90px;
          margin-bottom: 20px;
        }
      }
      
      .imgBox {
        img {
          height: 250px;
          width: 200px;
        }
      
      }

      .formik {
        width: 70%;
      }

      .form {
        display: flex;
        flex-direction: column;

        input {
          background: rgba(255, 255, 255, 0.65);
          border: none;
          width: 100%;
          outline: none;
          height: 30px;
          margin-bottom: 20px;
          margin-top: 5px;
        }

        label {
          color: white;
        }

        .priceForm {
          .price {
            margin-right: 10px;
          }

          input {
            width: 30%;
            margin: 0;
          }
        }

        .submitBtn {
          display: none;
        }


        input[type=text], input[type=number] {
          color: white;
          font-size: 14px;
          font-family: 'Press Start 2P', cursive;
        }
      }
    }

    .description {
      margin-top: 40px;

      textarea {
        background: rgba(255, 255, 255, 0.65);
        border: none;
        width: 100%;
        outline: none;
        height: 180px;
        margin-top: 20px;
        color: white;
        font-size: 14px;
        font-family: 'Press Start 2P', cursive;
        padding-top: 10px;
        padding-left: 10px;
        line-height: 20px;
      }
    }

    .uploadImage {
      width: 45%;
      text-align: center;
      padding-top: 80px;
      margin-bottom: 40px;

      & > p {
        font-size: 22px;
      }

      .genres {
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(4, 150px);
        align-items: center;
        grid-template-rows: repeat(4, 54px);
        margin-top: 60px;


        .genreBox {
          background: #5548B2;
          border: 2px solid #F9F871;
          border-radius: 25px;
          padding: 8px;

          :hover {
            background: #4335a6;
          }

          p {
            font-size: 12px;
          }

        }

        #selected {
          background: #3b2ba1;
        }


        .lastBox {
          background: #5548B2;
          border: 2px solid #F9F871;
          border-radius: 25px;
          padding: 8px;
          position: relative;
          left: 230px;
        }
      }
    }

    .register {
      width: 115%;
      display: flex;
      justify-content: center;
      margin-top: 80px;

      button {
        background: url(${loginBtn}) no-repeat;
        height: 86px;
        width: 200px;
        border: none;
        -webkit-background-size: 160px;
        background-size: 200px;
        background-position-y: center;

        p {
          position: relative;
          bottom: 2px;
          font-size: 20px;
        }
      }

    }
  }

  .ReactModal__Overlay .modal {
    p {
      color: #F9F871; !important;
    }
  }
`

const AddGame: FC<AddGameProps> = () => {
    const dispatch = useAppDispatch()
    const ref = useRef(null)
    const imageRef = useRef(null)
    const [descriptionRu, setDescriptionRu] = useState('')
    const [descriptionEn, setDescriptionEn] = useState('')
    const [genreIds, setGenreIds] = useState([])
    const [fileUrl, setFileUrl] = useState<any>(null)
    const [file, setFile] = useState<any>(null)
    const [modalIsOpen, setIsOpen] = useState(false);

    const {genres, error} = useAppSelector(
        state => state.main.main
    )

    useEffect(() => {
        dispatch(getGenres())
    }, [])


    const offer = () => {
        if (ref.current) {
            ref.current.click()
        }
    }

    const saveGenres = checkedId => {
        setGenreIds(prevState => {
            const arr = [...prevState]
            return arr.some(item => item === checkedId)
                ? arr.filter(item => item !== checkedId)
                : [...arr, checkedId]
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFileUrl(URL.createObjectURL(e.target.files[0]))
            setFile(e.target.files[0])
        }
    }

    const importFile = () => {
        if (imageRef.current) {
            imageRef.current.click()
        }
    }

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


    console.log(error)

    return (
    <AddGameWrap>
        <Header/>
        <div className='mainBox'>
            <p className='mainText'>Add your game</p>
            <div className='mainBox_2'>
                <div className='column_1'>
                    <div className='addImage'>
                        {!fileUrl ? (
                                <div className={'box1'} onClick={importFile}>
                                    <img src={plus} alt={'plus'}/>
                                    <p style={{color: '#5548B2'}}>Add <br/> Image</p>
                                    <input
                                        ref={imageRef}
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg,.jpeg,"
                                        onChange={onChange}
                                        style={{display: 'none'}}
                                    />
                                </div>
                            )
                            : (
                                <div className='imgBox'>
                                    <img src={fileUrl} alt="img"/>
                                </div>
                            )
                        }
                        <div className="formik">
                            <Formik
                                initialValues={{
                                    title: '',
                                    title2: '',
                                    link: '',
                                    price: '',
                                }}
                                onSubmit={(values, { resetForm }) => {
                                    dispatch(createGame({
                                        game: {
                                            name: {
                                                ru: values.title,
                                                en: values.title2
                                            },
                                            gameLink: values.link,
                                            price: Number(values.price),
                                            genreIds,
                                            description: {
                                                ru: descriptionRu,
                                                en: descriptionEn
                                            }
                                        },
                                        imgFile: file
                                    }))
                                    {error.error !== 'Bad Request' && openModal()}
                                    resetForm()
                                    setFile(null)
                                    setFileUrl(null)
                                    setGenreIds([])
                                    setDescriptionEn('')
                                    setDescriptionRu('')

                                }}
                            >
                                {({errors, touched}) => (
                                    <Form className="form" autoComplete="off">
                                        <label htmlFor="title">Title RU</label>
                                        <Field type="text" id="title" name="title"/>
                                        {touched.title && errors.title &&
                                            <div className="errorMessage">
                                                {errors.title}
                                            </div>
                                        }

                                        <label htmlFor="title2">Title ENG</label>
                                        <Field type="text" id="title2" name="title2"/>
                                        {touched.title2 && errors.title2 &&
                                            <div className="errorMessage">
                                                {errors.title2}
                                            </div>
                                        }

                                        <label htmlFor="link">Game Link</label>
                                        <Field type="text" id="link" name="link"/>
                                        {touched.link && errors.link &&
                                            <div className="errorMessage">
                                                {errors.link}
                                            </div>
                                        }
                                        <div className="priceForm">
                                            <label htmlFor="price" className='price'>Price</label>
                                            <Field type="number" id="price" name="price"/>
                                            {touched.price && errors.price &&
                                                <div className="errorMessage">
                                                    {errors.price}
                                                </div>
                                            }
                                        </div>

                                        <div className="submitBtn">
                                            <button type="submit" ref={ref}>
                                                <p>Login</p>
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className='description'>
                        <p>Description RU</p>
                        <textarea
                            name="text"
                            value={descriptionRu}
                            onChange={e => setDescriptionRu(e.target.value)}
                        />
                    </div>
                    <div className='description'>
                        <p>Description ENG</p>
                        <textarea
                            name="text"
                            value={descriptionEn}
                            onChange={e => setDescriptionEn(e.target.value)}
                        />
                    </div>
                </div>
                <div className='uploadImage'>
                    <p>Choose genre</p>
                    <div className='genres'>
                        {genres?.map(genre => (
                            <button
                                className={
                                    genre.id === 25 ?
                                        'lastBox'
                                        : 'genreBox'
                                }
                                id={genreIds.some(item => item === genre.id) ? 'selected' : ''}
                                key={genre.id}
                                onClick={() => saveGenres(genre.id)}
                            >
                                <p>{genre.name}</p>
                            </button>
                        ))}
                    </div>
                    <div className="register">
                        <button onClick={offer}>
                            <p>OFFER</p>
                        </button>
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
                <p style={{paddingBottom: '40px', paddingTop: '20px'}}>You successfully offered your own game!</p>
                <p>Please wait till moderators will check your game for further upload.</p>
            </div>
        </Modal>
        <Footer/>
    </AddGameWrap>
  )
}

export default AddGame
