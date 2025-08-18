import BackBtn from '@/components/UI/BackBtn'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'


const ServiceDetails = async () => {
  const t = await getTranslations('service.details')
  return (
    <div className='pt-10 md:pt-20 pb-10 md:pb-28 min-h-screen relative bg-[#f1f1f1] z-10'>
        {/* bg */}
        <Image src={"/images/curves.svg"} alt='Curves Image' width={1500} height={1000} className='w-full h-auto absolute left-0 right-0 top-0 z-10 object-cover min-h-96' />
        <div className='container'> </div>
        {/* Content */}
        <div className="container scroll-mt-32 z-20 relative" id="details">
            {/* Back */}
            <BackBtn />
            {/* title */}
            <h2 className='mt-4 md:mt-14 text-[28px] leading-9 md:text-[42px] font-medium text-primary mb-4 md:mb-16' data-aos="fade-up">{t('title')}</h2>
            {/* Description */}
            <p className='text-[#1E1E1E] mb-9 opacity-70' data-aos="fade-up">{t('intro')}</p>
            {/* Paragraphs */}
            <div className='flex flex-col gap-6 md:gap-12 max-w-[900px] mb-8 md:mb-16'>
                {/* P 1 */}
                <div data-aos="fade-up">
                    {/* Title */}
                    <h3 className='text-primary font-bold mb-5'>{t('sections.general.title')}</h3>
                    {/* Description */}
                    <div className='relative'>
                        <p className='font-bold text-[#1E1E1E] opacity-70 ps-4 md:ps-14 ltr:border-l-4 rtl:border-r-4 border-[#D9D9D99C]'>
                            {t('sections.general.body')}
                        </p>
                        <span className='absolute top-1 rounded-sm hidden md:block start-9 w-2.5 h-2.5 bg-primary'></span>
                    </div>
                </div>
                {/* P 2 */}
                <div data-aos="fade-up">
                    {/* Title */}
                    <h3 className='text-primary font-bold mb-5'>{t('sections.corporate.title')}</h3>
                    {/* Description */}
                    <div className='relative ps-4 md:ps-14 ltr:border-l-4 rtl:border-r-4 border-[#D9D9D99C]'>
                        <p className='font-bold text-[#1E1E1E] opacity-70 mb-4'>
                          {t('sections.corporate.intro')}
                        </p>
                        <ul className='text-[#1E1E1E] opacity-70'>
                            <li> - {t('sections.corporate.list.0')}</li>
                            <li> - {t('sections.corporate.list.1')}</li>
                            <li> - {t('sections.corporate.list.2')}</li>
                            <li> - {t('sections.corporate.list.3')}</li>
                        </ul>
                        <span className='absolute top-1 rounded-sm hidden md:block start-9 w-2.5 h-2.5 bg-primary'></span>
                    </div>
                </div>
                {/* P 3 */}
                <div data-aos="fade-up">
                    {/* Title */}
                    <h3 className='text-primary font-bold mb-5'>{t('sections.individual.title')}</h3>
                    {/* Description */}
                    <div className='relative ps-4 md:ps-14 ltr:border-l-4 rtl:border-r-4 border-[#D9D9D99C]'>
                        <p className='font-bold text-[#1E1E1E] opacity-70 mb-4'>
                          {t('sections.individual.intro')}
                        </p>
                        <ul className='text-[#1E1E1E] opacity-70'>
                            <li> - {t('sections.individual.list.0')}</li>
                            <li> - {t('sections.individual.list.1')}</li>
                            <li> - {t('sections.individual.list.2')}</li>
                            <li> - {t('sections.individual.list.3')}</li>
                        </ul>
                        <span className='absolute top-1 rounded-sm hidden md:block start-9 w-2.5 h-2.5 bg-primary'></span>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <p className='text-[#1E1E1E] opacity-70' data-aos="fade-up">
              {t('footer')}
            </p>
        </div>
    </div>
  )
}

export default ServiceDetails