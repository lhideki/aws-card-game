import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AWS カードゲーム',
  description: 'AWSのサービスを使って課題を解決するカードゲーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gradient-to-b from-aws-gray to-white text-aws-blue`}>{children}</body>
    </html>
  )
}
