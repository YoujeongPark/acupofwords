import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A cup of words',
  description: 'Get a cup of words,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = "main w-full h-full subhead">   
        <main className = "container">
          <Navbar/>
          {children} 
        </main>
      </body>
    </html>
  )
}
