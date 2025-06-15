import React from 'react';
import Link from 'next/link';

export default function Rules() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-aws-orange">ゲームルール</h1>
      
      <div className="bg-white/10 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-3 text-aws-orange">ゲームの目的</h2>
        <p className="mb-4">
          ゲームマスターが提示したシステム構成に関する課題に対し、プレイヤーは自分の手札から解決策になるカードを提出することで、
          課題を解決することを目指すゲームです。
        </p>
      </div>
      
      <div className="bg-white/10 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-3 text-aws-orange">ゲームの流れ</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>一人用のゲームです。</li>
          <li>プレイヤーは最初に5枚のサービスカードが手札として配られます。</li>
          <li>また、プレイヤーはサポートカードを3枚持っています。</li>
          <li>ゲームマスターはシステム構成に関する課題を最初に1つ提示します。</li>
          <li>プレイヤーは手札から1枚のカード(サービスカード)を選び、課題に対する解決策として提出します。提出したカードは手札から除外されます。</li>
          <li>プレイヤーは直接課題を解決するサービスカードの他に、サポートカードを有効化することがで来ます。有効化したサポートカードは消費されません。</li>
          <li>ゲームマスターはプレイヤーが提出したカードをターン毎に評価し、課題の状況の変化をプレイヤーにフィードバックします。</li>
          <li>カードにはコストが設定されています。最初に課題と共に提示されたコスト内で解決策を提出する必要があります。</li>
          <li>ゲームマスターが最初に提示したコストを超えたカードを提出することもできますが、評価は低くなります。</li>
          <li>プレイヤーは自分のターンでサービスカードを任意の枚数選んで捨てることができます。捨てたカードの枚数に応じて、次のターンで引くカードの枚数が増えます。</li>
          <li>プレイヤーは自分のターンをスキップすることがでます。スキップした場合、課題の状況が若干悪化します。</li>
          <li>捨てることができるカードはサービスカードのみで、サポートカードは捨てることができません。</li>
          <li>これを5回繰り返し、最後に評価を行います。</li>
        </ul>
      </div>
      
      <div className="bg-white/10 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-3 text-aws-orange">カードの種類</h2>
        
        <h3 className="text-lg font-semibold mb-2 text-aws-orange">サービスカード</h3>
        <p className="mb-4">
          AWSのサービスを表すカードです。課題を直接解決するために使用します。
          各カードにはコストと効果が設定されています。
        </p>
        
        <h3 className="text-lg font-semibold mb-2 text-aws-orange">サポートカード</h3>
        <p className="mb-4">
          サービスカードの効果を強化したり、コストを下げたりするカードです。
          サービスカードと組み合わせて使用します。
        </p>
      </div>
      
      <div className="text-center mt-8">
        <Link href="/game" className="btn btn-primary">
          ゲームを始める
        </Link>
        <Link href="/" className="btn btn-secondary ml-4">
          トップに戻る
        </Link>
      </div>
    </div>
  )
}
