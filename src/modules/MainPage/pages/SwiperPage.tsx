import React, { FC } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import swiper2 from '../../../assets/images/swiper2.png'
import swiper1 from '../../../assets/images/swiper1.png'
import swiper3 from '../../../assets/images/swiper3.png'
import styled from '@emotion/styled'


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
  }
`

const SwiperPage: FC<MainPageProps> = () => {
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
            >
                <SwiperSlide>
                    <img alt={'swiper1'} src={swiper2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'swiper2'} src={swiper1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt={'swiper3'} src={swiper3} />
                </SwiperSlide>
            </Swiper>
        </div>
    </SwiperPageWrap>
  )
}

export default SwiperPage
