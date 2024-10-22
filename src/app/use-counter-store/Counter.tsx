'use client'

import { useCounterStore } from '@/context/counter-store-provider'

export const Counter = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  )

  return (
    <div>
      Count: {count}
      <hr />
      <button
        className='rounded-md bg-blue-900 p-2.5'
        type='button'
        onClick={() => void incrementCount()}
      >
        Increment Count
      </button>
      <button
        className='ml-2 rounded-md bg-red-900 p-2.5'
        type='button'
        onClick={() => void decrementCount()}
      >
        Decrement Count
      </button>
    </div>
  )
}
