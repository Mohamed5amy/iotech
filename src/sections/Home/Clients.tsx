"use client"

import Magnetic from '@/components/Animation/Magnetic'
import Image from 'next/image'
import {arrowIcon} from "../../Icons"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef } from 'react'
import AnimatedTitle from '@/components/Animation/AnimatedTitle'

const Clients = () => {
  const swiperRef = useRef<{ swiper: SwiperType }>(null)

  // Sample reviews data - you can replace these with your actual reviews
  const reviews = [
    {
      image: "/images/lawyer.svg",
      name: "Mohammed Saif",
      position: "CEO/Company",
      comment: "With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced."
    },
    {
      image: "/images/lawyer.svg",
      name: "Sarah Johnson",
      position: "Marketing Director",
      comment: "The team at Al Safar and Partners exceeded our expectations. Their professional approach and attention to detail made our project successful. Highly recommended for any business needs."
    },
    {
      image: "/images/lawyer.svg",
      name: "Ahmed Hassan",
      position: "Project Manager",
      comment: "Working with Al Safar and Partners has been a game-changer for our company. Their expertise and dedication have helped us achieve remarkable results in record time."
    }
  ]

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <div className='bg-primary py-10 md:py-24 mb-7 overflow-hidden'>
      <div className="container">
        <AnimatedTitle className='text-[32px] leading-9 md:text-[40px] font-bold mb-2 md:mb-6'>What our clients are saying</AnimatedTitle>
        <p data-aos="fade-left" className='max-w-[580px] text-lg opacity-70 mb-8 md:mb-16'>
          Our clients range from individual investors, to local, international as well as fortune 500 companies.Our clients range from individual investors, to local, international as well as fortune 500 companies.
        </p>
        
        {/* Reviews Slider */}
        <div className='relative'>
           <Swiper
              style={{width : "100%"}}
             ref={swiperRef}
             grabCursor
             mousewheel
             modules={[Navigation, Autoplay]}
             direction="vertical"
             spaceBetween={0}
             loop={true}
             slidesPerView={1}
             speed={800}
             breakpoints={{
              320: {
                direction: "horizontal",
                spaceBetween: 20,
                slidesPerView: 1,
                centeredSlides: true, 
              },
              768: {
                direction: "vertical",
                spaceBetween: 0,
                slidesPerView: 1,
              }
            }}
             autoplay={{
               delay: 5000,
               disableOnInteraction: false,
             }}
             className="reviews-swiper h-[650px] md:h-[400px]"
           >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className='flex gap-12 flex-col md:flex-row'>
                  {/* Image */}
                  <Magnetic className='flex-1' strength={.05}>
                    <Image src={review.image} alt={review.name} width={374} height={374} />
                  </Magnetic>
                  {/* Content */}
                  <div className='flex-[2] flex flex-col gap-8 justify-between'>
                    {/* Comment */}
                    <p className='text-2xl opacity-60 line-clamp-4'>
                      &quot;{review.comment}&quot;
                    </p>
                    {/* Name , Position */}
                    <div className='flex flex-col gap-1 md:gap-5'>
                      <h2 className='text-2xl font-semibold font-poppins'>{review.name}</h2>
                      <h3 className='font-poppins'>{review.position}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Arrows */}
        <div className='flex gap-9 justify-end items-center'>
          {/* Left Arrow */}
          <button 
            onClick={goPrev}
            className='w-16 h-16 disabled:bg-white/10 bg-white rounded-full flex items-center justify-center text-primary transition-colors hover:bg-white/60 disabled:hover:bg-white/10'
          > 
            {arrowIcon} 
          </button>
          {/* Right Arrow */}
          <button 
            onClick={goNext}
            className='w-16 h-16 bg-white rounded-full flex items-center justify-center rotate-180 text-primary transition-colors hover:bg-white/60'
          > 
            {arrowIcon} 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Clients