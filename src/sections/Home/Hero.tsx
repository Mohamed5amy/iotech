import AnimatedTitle from '@/components/Animation/AnimatedTitle'
import Magnetic from '@/components/Animation/Magnetic'
import Button from '@/components/UI/Button'
import HeroSlider from '@/components/UI/HeroSlider'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

const Hero = async () => {

  const t = await getTranslations('home.hero')
  
  return (
    <div className='h-screen bg-primary relative'>
      <HeroSlider />
      <div className='absolute inset-0 max-w-[1240px] ms-12 me-2 md:mx-12 xl:mx-auto flex items-center justify-center z-10'>
        <div className="flex items-center justify-between gap-20 w-full">
          {/* Content */}
          <div className='flex-[2] text-start'>
            {/* Title */}
            <AnimatedTitle className='text-[28px] md:text-[40px] font-bold mb-4 leading-8'>{t('title')}</AnimatedTitle>
            {/* Description */}
            <p className='text-lg font-medium' data-aos="fade-up">
              {t('desc')}
            </p>
            {/* Button */}
            <div data-aos="fade-up" data-aos-delay="300">
            <Button label={t('cta')} className='py-4 px-9 bg-white text-primary mt-4 md:mt-16 hover:bg-primary hover:text-white font-medium' />
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