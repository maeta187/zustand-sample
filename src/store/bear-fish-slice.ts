import { StateCreator } from 'zustand'
import type { BearState } from './bear-slice'
import type { FishState } from './fish-slice'

export interface MultipleFunc {
  addBearAndFish: () => void
}

/**
 * 1つの関数で複数のSliceを同時に更新する
 */
export const createBearFishSlice: StateCreator<
  BearState & FishState,
  [],
  [],
  MultipleFunc
> = (_, get) => ({
  addBearAndFish: () => {
    get().addBear()
    get().addFish()
  }
})
