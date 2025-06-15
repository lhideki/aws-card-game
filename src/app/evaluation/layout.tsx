import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '最終評価 - AWS カードゲーム',
  description: 'AWSのサービスを使って課題を解決するカードゲーム',
}

export default function EvaluationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
