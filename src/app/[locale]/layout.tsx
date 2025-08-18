import type { Metadata } from 'next'
import { DM_Sans, Noto_Sans_Arabic, Poppins } from 'next/font/google'
import './globals.css'
import './classes.css'
import ClientAOS from "@/components/ClientAOS";
import { ToastContainer } from 'react-toastify';
import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';
import CustomCursor from '@/components/Animation/CustomCursor';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Adjust weights as needed
})

const dmSans = DM_Sans({
  variable: '--font-dm',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Adjust weights as needed
})

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-sans-arabic',
  weight: ['400', '500', '600' , '700'], // Add any weights you use
  display: 'swap',
  subsets : ['arabic']
})

export const metadata: Metadata = {
  title: 'Bin Hindi',
  description: 'Bin Hindi Law Firm',
  icons: {
    icon: '/images/favIcon.png',
  },
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  const messages = await getMessages();
  
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${locale === "ar" ? notoSansArabic.variable + " font-noto-sans-arabic" : dmSans.variable + " " + poppins.variable + " font-public-sans"} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ClientAOS />
          <Navbar />
          {children}
          <CustomCursor />
          <Footer />
          <ToastContainer position='bottom-right' />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
