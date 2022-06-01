import React, {FC, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Modal from 'react-modal'
import {Navigation} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import styled from '@emotion/styled'
import {useAppSelector} from "../../../store/hooks";


export interface MainPageProps {
}

const SwiperPageWrap = styled.div`
  .mySwiper {
    width: 94%;
    margin-top: 220px;
    img {
      width: 500px;
      height: 300px;
    }
    .active {
      border: 7px solid #00C6C3;
    }
  }
`

const SwiperPage: FC<MainPageProps> = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const { swiperImg } = useAppSelector(
        state => state.main.main
    )

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
            borderRadius: '40px',
            width: '450px',
            height: '350px',
            textAlign: 'center',
            margin: 'auto',
        },

        overlay: {
            color: '#F9F871',
            lineHeight: '25px',
            position: 'absolute',
            zIndex: 100,
            backgroundColor: 'transparent',
        }
    }

    return (
    <SwiperPageWrap>
        <div className='swiper'>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                className="mySwiper"
                pagination={{
                    type: "fraction"
                }}
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                grabCursor={true}
                onClick={openModal}
            >
                {swiperImg.map(img => (
                    <SwiperSlide key={img?.id}>
                        {({ isActive }) => (
                            <>
                                <img className={isActive ? 'active' : ''} alt={'swiper1'} src={img?.imgUrl} />
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                >
                                    <div className='modal'>
                                        <p style={{paddingTop: '80px'}}>{String(img?.description)}</p>
                                    </div>
                                </Modal>
                            </>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </SwiperPageWrap>
  )
}

export default SwiperPage
