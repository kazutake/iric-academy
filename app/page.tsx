import { supabase } from '@/lib/supabase/client'

export default async function Home() {
  const { error } = await supabase.from('_test_connection').select('*').limit(1)

  // テーブルが存在しないエラー = 接続自体は成功している
  const isConnected = error?.message?.includes('Could not find') || !error

  return (
    <main style={{ padding: '2rem' }}>
      <h1>iRIC Website</h1>
      <p>Next.js + Supabase 接続テスト</p>
      <p>
        Supabase接続:{' '}
        {isConnected
          ? '✅ 成功（テーブルが未作成なのは正常です）'
          : `❌ エラー: ${error?.message}`}
      </p>
    </main>
  )
}