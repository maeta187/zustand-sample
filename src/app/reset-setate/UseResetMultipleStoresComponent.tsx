'use client'

import { useRef } from 'react'
import { create, resetAllStores } from './resetMultipleStores'

interface StoreState {
  count: number
  name: string
  increment: () => void
  decrement: () => void
  setName: (newName: string) => void
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  name: '',
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setName: (newName: string) => set({ name: newName })
}))

export const UseResetMultipleStoresComponent = () => {
  const { count, name, increment, decrement, setName } = useStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleReset = () => {
    resetAllStores()
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <h2>useResetMultipleStores</h2>
      <p>count: {count}</p>
      <p>name: {name}</p>
      <div>
        <button
          className='rounded-md bg-blue-900 p-2.5'
          type='button'
          onClick={increment}
        >
          increment
        </button>
        <button
          className='ml-2 rounded-md bg-red-900 p-2.5'
          type='button'
          onClick={decrement}
        >
          decrement
        </button>
      </div>
      <div className='my-2'>
        <input
          className='text-black'
          type='text'
          ref={inputRef}
          defaultValue={name}
          onBlur={handleBlur}
        />
      </div>
      <button
        className='rounded-md bg-red-900 p-2.5'
        type='button'
        onClick={handleReset}
      >
        AllReset
      </button>
    </div>
  )
}
