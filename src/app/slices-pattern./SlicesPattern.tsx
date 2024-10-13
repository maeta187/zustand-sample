'use client'

import { useBoundStore } from '@/store/useBoundStore'
import type { MultipleFunc } from '@/store/bear-fish-slice'
import type { BearState } from '@/store/bear-slice'
import type { FishState } from '@/store/fish-slice'

type StoreState = BearState & FishState

export const SlicesPattern = () => {
  const bears = useBoundStore((state: StoreState) => state.bears)
  const fishes = useBoundStore((state: StoreState) => state.fishes)
  const addBear = useBoundStore((state: StoreState) => state.addBear)
  const addFish = useBoundStore((state: StoreState) => state.addFish)
  const addBearAndFish = useBoundStore(
    (state: MultipleFunc) => state.addBearAndFish
  )

  return (
    <div>
      <p>Number of bears: {bears}</p>
      <p>Number of fishes: {fishes}</p>
      <button
        className='rounded-md bg-blue-900 p-2.5'
        type='button'
        onClick={() => addBear()}
      >
        Add a bear
      </button>
      <button
        className='ml-2 rounded-md bg-green-900 p-2.5'
        type='button'
        onClick={() => addFish()}
      >
        Add a fish
      </button>
      <button
        className='ml-2 rounded-md bg-green-900 p-2.5'
        type='button'
        onClick={() => addBearAndFish()}
      >
        Add a fish and a bear
      </button>
    </div>
  )
}
