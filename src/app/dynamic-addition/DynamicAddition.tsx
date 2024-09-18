'use client'

import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by }))
}))

console.log(useBearStore.getState())

const replaceFlag = Math.random() > 0.5 && new Date().getSeconds() % 2 === 0
// trueなら現在の状態全体を置き換え、falseなら差分だけを更新
useBearStore.setState({ bears: Math.floor(Math.random() * 10) }, replaceFlag)

console.log(useBearStore.getState())

export const DynamicAddition = () => {
  return (
    <div>
      <p>DynamicAddition</p>
    </div>
  )
}
