import type { Metadata } from 'next'
import { DM_Sans, Poppins } from 'next/font/google'
import './globals.css'
import './classes.css'
import ClientAOS from "@/components/ClientAOS";
import { ToastContainer } from 'react-toastify';
import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';
import CustomCursor from '@/components/Animation/CustomCursor';


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

export const metadata: Metadata = {
  title: 'Bin Hindi',
  description: 'Bin Hindi Law Firm',
  icons: {
    icon: '/images/favIcon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${dmSans.variable} font-dm antialiased`}>
        <ClientAOS />
        <Navbar />
        {children}
        <CustomCursor />
        <Footer />
        <ToastContainer position='bottom-right' />
      </body>
    </html>
  )
}
