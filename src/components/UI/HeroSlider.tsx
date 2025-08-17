"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const HeroSlider = () => {
  // Sample slider data - you can replace these with your actual images
  const sliderImages = [
    {
        src: "/images/slider1.svg",
        alt: "Slider Image 1"
    },
    {
      src: "https://picsum.photos/2000",
      alt: "Slider Image 1"
    },
    {
      src: "/images/slider1.svg", 
      alt: "Slider Image 2"
    },
    {
      src: "https://picsum.photos/2000",
      alt: "Slider Image 3"
    }
  ]

  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        style={{height : "100vh" , width : "100vw"}}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1500}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 7000,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet"></span>`
          }
        }}
        className="hero-swiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-full slider-grad'>
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={1500} 
                height={800} 
                className='w-full h-full object-cover' 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider