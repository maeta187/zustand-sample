'use client'

import { useRef } from 'react'
import { NextPage } from 'next'
import { createBearStore, BearContext } from '@/context/bear-context'
import { BasicConsumer } from './BasicConsumer'

/**
 * Contextを使用することでコンポーネント特定のコンポーネントから状態を参照できるようになる。
 * グローバルStoreとの違い
 * - Contextは.Providerでラップされたコンポーネントツリー内でのみ有効
 * - コンポーネントがどの状態に依存しているかが明確になる
 * - 同じアプリケーション内で異なるProviderを使用して異なる状態を持つことができる
 */
const Page: NextPage = () => {
  const store = useRef(createBearStore()).current
  return (
    <BearContext.Provider value={store}>
      <div>
        <h1>Props-Init-State</h1>
        <BasicConsumer />
      </div>
    </BearContext.Provider>
  )
}

export default Page
