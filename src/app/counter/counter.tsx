'use client'

import { useCounterStore } from '@/store/store'

export const Counter = () => {
  // clientコンポーネントで使用する
  const { count, increment, decrement, reset } = useCounterStore()
  // 特定の関数だけを使用する場合
  const counterIncrement = useCounterStore((state) => state.increment)
  return (
    <div>
      <p>{count}</p>
      <div>
        <button
          className='rounded-md bg-blue-900 p-2.5'
          type='button'
          onClick={() => increment()}
        >
          increment
        </button>
        <button
          className='ml-2 rounded-md bg-blue-900 p-2.5'
          type='button'
          onClick={() => counterIncrement()}
        >
          counterIncrement
        </button>
        <button
          className='ml-2 rounded-md bg-green-900 p-2.5'
          type='button'
          onClick={() => decrement()}
        >
          decrement
        </button>
        <button
          className='ml-2 rounded-md bg-red-900 p-2.5'
          type='button'
          onClick={() => reset()}
        >
          reset
        </button>
      </div>
    </div>
  )
}
