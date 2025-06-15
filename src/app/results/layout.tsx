import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゲーム結果 - AWS カードゲーム',
  description: 'AWSのサービスを使って課題を解決するカードゲーム',
}

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
