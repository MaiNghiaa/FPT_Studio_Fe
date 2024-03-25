import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Banner() {
  return (
    <div className='flex justify-between items-center'>
        <Swiper className='flex justify-between items-center'
slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><a href="\">
        <img src={require('../../Slider/banner1.png')} alt="" className='w-[100%]' />
        </a></SwiperSlide>
      <SwiperSlide><a href="\">
        <img src={require('../../Slider/banner2.png')} alt="" className='w-[100%]' />
        </a></SwiperSlide>
      <SwiperSlide><a href="\">
        <img src={require('../../Slider/banner3.jpg')} alt="" className='w-[100%]' />
        </a></SwiperSlide>
      
    </Swiper>
    </div>
  )
}
