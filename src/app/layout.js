import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'AT Fitness',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={roboto.className}>
        <main className='bg-black text-white'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
