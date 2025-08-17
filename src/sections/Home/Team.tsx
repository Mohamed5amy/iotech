"use client"

import { Email, Phone, Whatsapp } from '@/icons/Icons'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const Team = () => {
  return (
    <div className="py-10 md:py-28 bg-[#F3F3F3]">
      <div className="container">
        <h3 className='mx-auto text-primary text-[36px] md:text-[42px] font-bold mb-2 md:mb-5'> Our Team </h3>
        <p className='mx-auto max-w-[770px] text-center font-medium text-[#1E1E1E] mb-8 md:mb-20'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
        </p>
        {/* Team Swiper */}
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          spaceBetween={12}
          slidesPerView={1.2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="team-swiper"
        >
          <SwiperSlide>
            <TeamMember />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember />
          </SwiperSlide>
          <SwiperSlide>
            <TeamMember />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

const TeamMember = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Image */}
      <div className='h-[250px] mb-4 w-full overflow-hidden'> <Image src={"/images/lawyer.svg"} width={500} height={185} alt='Lawyer Image' className='w-full h-full object-cover transition-all hover:scale-105 grayscale-[.8] hover:grayscale-0' /> </div>
      {/* Content */}
      <h2 className='text-primary text-2xl font-medium mb-2.5'> Name Here </h2>
      <p className='text-sm font-bold text-[rgba(21,20,57,0.40)] uppercase tracking-widest mb-2.5'>Position Here</p>
      <div className='flex items-center gap-3 justify-center'>
        <Whatsapp />
        <Phone />
        <Email />
      </div>
    </div>
  )
}

export default Team