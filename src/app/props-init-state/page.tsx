'use client'

import { useRef } from 'react'
import { NextPage } from 'next'
import { BearContext, createBearStore } from '@/context/bear-context'
import { BearProvider } from '@/context/common-bear-context'
import { BasicConsumer } from './BasicConsumer'
import { CommonConsumer } from './CommonConsumer'

const bearProps = {
  bears: 5
}

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
    <div>
      <BearContext.Provider value={store}>
        <h1 className='text-3xl'>Props-Init-State</h1>
        <div>
          <h2 className='text-2xl'>Basic</h2>
          <BasicConsumer title={'Basic Consumer'} />
        </div>
      </BearContext.Provider>
      <div>
        <h2 className='text-2xl'>Common</h2>
        <BearProvider {...bearProps}>
          <BasicConsumer title={'Common Consumer'} />
        </BearProvider>
      </div>
      <div>
        <h2 className='text-2xl'>useBearContext</h2>
        <BearProvider {...bearProps}>
          <CommonConsumer />
        </BearProvider>
      </div>
    </div>
  )
}

export default Page
