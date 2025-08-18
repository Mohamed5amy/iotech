"use client"

import { useEffect } from "react"
import { X, Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { Facebook, Google, Twitter } from "@/icons/Icons"
import { useRouter } from "next/navigation"

interface SearchBoxProps {
  open: boolean
  onClose: () => void
}

const SearchBox = ({ open, onClose }: SearchBoxProps) => {

    const t = useTranslations("components")
    const router = useRouter()
    // Close on ESC
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleKey)
        return () => document.removeEventListener("keydown", handleKey)
    }, [onClose])

    // Go to service on enter
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                router.push("/service")
                onClose()
            }
        }
        document.addEventListener("keydown", handleKey)
        return () => document.removeEventListener("keydown", handleKey)
    }, [])   

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center animate-fadeIn flex-col gap-20">
        <div className="w-full max-w-2xl px-6 relative">
            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute -top-14 end-0 text-white hover:text-gray-300 transition"
            >
            <X size={28} />
            </button>

            {/* Search Input */}
            <div className="flex items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            <Search className="ms-4 text-primary" size={22} />
            <input
                type="text"
                placeholder={t("search")}
                className="w-full p-4 text-lg focus:outline-none caret-primary text-primary"
                autoFocus
            />
            </div>
        </div>
        {/* Socials */}
        <div className='flex items-center gap-4'>
            <Twitter />
            <Facebook />
            <Google />
        </div>
        </div>
    )
}

export default SearchBox
