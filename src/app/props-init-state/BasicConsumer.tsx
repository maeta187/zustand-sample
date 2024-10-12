import { useContext } from 'react'
import { useStore } from 'zustand'
import { BearContext } from '@/context/bear-context'

export const BasicConsumer = (props: { title: string }) => {
  const { title } = props
  const store = useContext(BearContext)
  // BearContext.Providerが存在しない場合はエラーをスローする
  if (!store) throw new Error('Missing BearContext.Provider in the tree')
  const bears = useStore(store, (s) => s.bears)
  const addBear = useStore(store, (s) => s.addBear)
  return (
    <div>
      <h3>{title}</h3>
      <p>Bears: {bears}</p>
      <button onClick={addBear}>Add Bear</button>
    </div>
  )
}
