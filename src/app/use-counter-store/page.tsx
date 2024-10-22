import { NextPage } from 'next'

import { CounterStoreProvider } from '@/context/counter-store-provider'
import { Counter } from './Counter'

const Page: NextPage = () => {
  return (
    <CounterStoreProvider>
      <h1>Counter Store</h1>
      <Counter />
    </CounterStoreProvider>
  )
}

export default Page
