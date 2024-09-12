'use client'

import { create, StoreApi, UseBoundStore } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
  increment: () => void
}

interface TextState {
  text: string
  setText: (newText: string) => void
  appendText: (additionalText: string) => void
  clearText: () => void
}

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

/**
 * Nameコンポーネントでは、作成したstoreを直接かつ全て参照している
 * そうすると、パフォーマンスが低下する可能性がある
 * 特定の状態を参照することで、不用意な再レンダリングを防ぐことができる
 * また、オブジェクトの参照のように書けるので、コードが簡潔になる
 */
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  // 既存のストアをWithSelectorsタイプにキャスト
  const store = _store as WithSelectors<typeof _store>
  // useオブジェクトを初期化
  store.use = {}
  // ストアの各状態に対してセレクタを作成
  for (const k of Object.keys(store.getState())) {
    ;(store.use as Record<string, () => unknown>)[k] = () =>
      store((s) => s[k as keyof typeof s])
  }

  // 拡張されたストアを返す
  return store
}

const useBearStoreBase = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears + 1 }))
}))

const useTextStoreBase = create<TextState>()((set) => ({
  text: 'Bears',
  setText: (newText) => set({ text: newText }),
  appendText: (additionalText) =>
    set((state) => ({ text: state.text + additionalText })),
  clearText: () => set({ text: '' })
}))

const useBearStore = createSelectors(useBearStoreBase)

const useTextStore = createSelectors(useTextStoreBase)

export const Selector = () => {
  const bears = useBearStore.use.bears()
  const increment = useBearStore.use.increment()
  const text = useTextStore.use.text()

  return (
    <div>
      <h2>
        {text}: {bears}
      </h2>
      <button
        className='rounded-md bg-blue-900 p-2.5'
        type='button'
        onClick={() => increment()}
      >
        INCREMENT
      </button>
    </div>
  )
}
