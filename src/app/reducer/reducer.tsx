'use client'

import { useGrumpyStore, useGrumpy } from './useReducer'

export const GrumpyComponent = () => {
  const grumpiness = useGrumpyStore((state) => state.grumpiness)
  const dispatch = useGrumpyStore((state) => state.dispatch)

  // useGrumpyを呼び出し、初期状態を設定
  useGrumpy()

  return (
    <div>
      <h2>Grumpiness Level: {grumpiness}</h2>
      <button
        className='rounded-md bg-blue-900 p-2.5'
        type='button'
        onClick={() => dispatch({ type: 'INCREASE', by: 1 })}
      >
        INCREASE
      </button>
      <button
        className='ml-2 rounded-md bg-red-900 p-2.5'
        type='button'
        onClick={() => dispatch({ type: 'DECREASE', by: 1 })}
      >
        DECREASE
      </button>
    </div>
  )
}
