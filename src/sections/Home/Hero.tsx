import AnimatedTitle from '@/components/Animation/AnimatedTitle'
import Magnetic from '@/components/Animation/Magnetic'
import Button from '@/components/UI/Button'
import HeroSlider from '@/components/UI/HeroSlider'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen bg-primary relative'>
      <HeroSlider />
      <div className='absolute inset-0 max-w-[1240px] ms-12 me-2 md:mx-12 xl:mx-auto flex items-center justify-center z-10'>
        <div className="flex items-center justify-between gap-20">
          {/* Content */}
          <div className='flex-[2]'>
            {/* Title */}
            <AnimatedTitle className='text-[40px] font-bold mb-2'>Lorem Ipsum</AnimatedTitle>
            {/* Description */}
            <p className='text-lg font-medium' data-aos="fade-up">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
            </p>
            {/* Button */}
            <div data-aos="fade-up" data-aos-delay="300">
            <Button label='Read More' className='py-4 px-9 bg-white text-primary mt-4 md:mt-16 hover:bg-primary hover:text-white font-medium' />
            </div>
          </div>
          {/* Image */}
          <Magnetic className='flex-1 !hidden md:!inline-block' strength={.05}>
            <Image src={"/images/lawyer.svg"} alt='Bin Hindi' width={374} height={374} data-aos="zoom-in" />
          </Magnetic>
        </div>
      </div>
    </div>
  )
}

export default Hero