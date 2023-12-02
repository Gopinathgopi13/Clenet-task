"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import HighContrastContext from './createContext';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Front-End Task</title>
      </head>
      <body className={inter.className}>
        
      <HighContrastContext.Provider value={{ isHighContrast: false, toggleHighContrast: () => {} }}>
          <Header></Header>
        <Navbar></Navbar>
          {children}
      </HighContrastContext.Provider>
      </body>
    </html>
  )
}
