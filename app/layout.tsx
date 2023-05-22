import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '글 한컵',
  description: '글 한컵을 담아보세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = "main w-full h-full ">   
        <main className = "container">
          <Navbar/>
          {children} 
        </main>
      </body>
    </html>
  )
}
