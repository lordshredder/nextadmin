import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Priconne',
  description: 'Priconne CB Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>      <Toaster richColors theme="dark"  />{children}</body>
    </html>
  )
}
