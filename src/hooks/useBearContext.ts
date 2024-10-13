import { useContext } from 'react'
import { useStore } from 'zustand'
import { BearContext } from '@/context/bear-context'
import type { BearState } from '@/context/bear-context'

/**
 * コンテキストロジックをカスタムフックとして抽出
 * ただしProviderでラップされたコンポーネントツリー内でのみ有効
 */
export const useBearContext = <T>(selector: (state: BearState) => T): T => {
  const store = useContext(BearContext)
  if (!store) throw new Error('Missing BearContext.Provider in the tree')
  return useStore(store, selector)
}
