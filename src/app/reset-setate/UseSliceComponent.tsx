'use client'

import { useSlice } from './useSlice'

export const UseSliceComponent = () => {
  const { salmon, tuna, addSalmon, addTuna, reset } = useSlice()

  return (
    <div>
      <h2>useReset</h2>
      <p>Salmon: {salmon}</p>
      <p>Tuna: {tuna}</p>
      <div>
        <button
          className='rounded-md bg-blue-900 p-2.5'
          type='button'
          onClick={() => addSalmon(1)}
        >
          Add Salmon
        </button>
        <button
          className='ml-2 rounded-md bg-green-900 p-2.5'
          type='button'
          onClick={() => addTuna(1)}
        >
          Add Tuna
        </button>
        <button
          className='ml-2 rounded-md bg-red-900 p-2.5'
          type='button'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
