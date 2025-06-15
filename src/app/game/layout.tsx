import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゲームプレイ - AWS カードゲーム',
  description: 'AWSのサービスを使って課題を解決するカードゲーム',
}

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
