'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
  type CounterStore,
  createCounterStore,
  initCounterStore
} from '@/store/counter-store'

export type CounterStoreApi = ReturnType<typeof createCounterStore>

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
)

export interface CounterStoreProviderProps {
  children: ReactNode
}

/**
 * 子コンポーネントにCounterStoreを提供します。
 *
 * @param {CounterStoreProviderProps} props - CounterStoreProviderコンポーネントのプロパティ。
 * @returns {JSX.Element} CounterStoreProviderコンポーネント。
 */
export const CounterStoreProvider = ({
  children
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createCounterStore(initCounterStore())
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

/**
 * カウンターストアへのアクセスを提供するカスタムフックです。
 *
 * @template T - カウンターストアから選択される値の型。
 * @param {function} selector - カウンターストアから値を選択する関数。
 * @returns {T} - カウンターストアから選択された値。
 * @throws {Error} - CounterStoreProviderの外部でフックが使用された場合にエラーがスローされます。
 */
export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T
): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (!counterStoreContext) {
    throw new Error(
      `useCounterStoreはCounterStoreProvider内で使用する必要があります`
    )
  }

  return useStore(counterStoreContext, selector)
}
