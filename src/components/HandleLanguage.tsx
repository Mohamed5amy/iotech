"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

const HandleLanguage = () => {

    const router = useRouter()
    const locale = useLocale()
    const pathname = usePathname()

    const handleLanguage = (lang: string) => {
        // Handle both cases: when locale is the only path and when it's part of a longer path
        const pathWithoutLocale = pathname === `/${locale}` ? '' : pathname.replace(`/${locale}/`, '/')
        // Construct new path with new locale
        router.push(`/${lang}${pathWithoutLocale}`)
    }
    
  return (
    <div className={`text-xl font-bold capitalize text-secondaryText px-2 relative cursor-pointer`} onClick={() => handleLanguage(locale === "ar" ? "en" : "ar")}>
        {locale === "ar" ? "en" : "ar"}
    </div>
  )
}

export default HandleLanguage