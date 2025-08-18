"use client"

import { chevronLeft } from '@/Icons'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackBtn = () => {
    const router = useRouter()
    const t = useTranslations("components")
  return (
    <div onClick={() => router.back()} className='flex items-center gap-3 hover:gap-4 transition-all text-primary cursor-pointer w-fit'>
        <span className='rtl:rotate-180 ltr:rotate-0'>{chevronLeft}</span>
        <h4 className='opacity-70 font-bold'>{t("Back")}</h4>
    </div>
  )
}

export default BackBtn