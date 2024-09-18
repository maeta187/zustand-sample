'use client'

import { create } from 'zustand'

interface BoundStore {
  count: number
  text: string
  inc: () => void
  setText: (text: string) => void
}

type NoActionsBoundStore = Omit<BoundStore, 'inc' | 'setText'>

/**
 * 推奨される使用方法は、ストア内にアクションとstateをまとめること
 * データとアクションの自己完結型のストア
 */
export const useBoundStore = create<BoundStore>((set) => ({
  count: 0,
  text: 'hello',
  inc: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => set({ text })
}))

/**
 * stateのみを持つストア
 * アクションは外部で定義する
 * アクションを呼び出すためにフックは必要ない
 * コードの分離が容易になる
 */
export const useNoActionsBoundStore = create<NoActionsBoundStore>(() => ({
  count: 0,
  text: 'foo'
}))

const inc = () =>
  useNoActionsBoundStore.setState((state) => ({ count: state.count + 1 }))

const setText = (text: string) => useNoActionsBoundStore.setState({ text })

export const NoStoreActions = () => {
  const { count, text } = useNoActionsBoundStore()
  return (
    <div>
      <div>
        <p>{count}</p>
        <button
          className='rounded-md bg-blue-900 p-2.5'
          type='button'
          onClick={() => inc()}
        >
          increment
        </button>
      </div>
      <div>
        <p>{text}</p>
        <button
          className='mt-3 rounded-md bg-green-900 p-2.5'
          type='button'
          onClick={() => setText('bar')}
        >
          setText
        </button>
      </div>
    </div>
  )
}
