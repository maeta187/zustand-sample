import { StateCreator } from 'zustand'

export interface FishState {
  fishes: number
  addFish: () => void
}

export const createFishSlice: StateCreator<FishState, [], [], FishState> = (
  set
) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 }))
})
