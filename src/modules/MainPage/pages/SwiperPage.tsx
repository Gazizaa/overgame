import React, { FC } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
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
  }
`

const SwiperPage: FC<MainPageProps> = () => {

    const { swiperImg } = useAppSelector(
        state => state.main.main
    )
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
                {swiperImg.map(img => (
                    <SwiperSlide key={img?.id}>
                        <img alt={'swiper1'} src={img?.imgUrl} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </SwiperPageWrap>
  )
}

export default SwiperPage
