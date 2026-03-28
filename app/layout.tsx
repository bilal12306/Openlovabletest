import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'FOOD BREW | Where Gourmet Food Meets Signature Brew',
  description: 'A premium fusion of rich flavors, handcrafted dishes, and unforgettable coffee moments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream-light text-coffee-dark">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
  
