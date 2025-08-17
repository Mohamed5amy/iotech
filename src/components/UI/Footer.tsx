import Image from 'next/image'
import SubscribeBtn from './Subscribe'
import { Facebook, Google, Twitter } from '@/icons/Icons'
import Copyrights from './Copyrights'

const Footer = () => {
  return (
    <div className='bg-primary py-4 md:py-12'>
      <div className="container flex items-center justify-between pb-4 md:pb-10 border-b-2 border-opacity-30 border-white flex-col gap-4 md:flex-row">
        {/* logo */}
        <Image src={"/images/logo.svg"} alt="Logo" width={180} height={100} />
        {/* Subscribe & Socials */}
        <div className='flex items-center flex-col md:flex-row gap-4 md:gap-10'>
          {/* Email */}
          <SubscribeBtn />
          {/* Socials */}
          <div className='flex items-center gap-4'>
            <Twitter />
            <Facebook />
            <Google />
          </div>
        </div>
      </div>
      <Copyrights />
    </div>
  )
}

export default Footer