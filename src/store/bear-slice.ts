import { StateCreator } from 'zustand'

export interface BearState {
  bears: number
  addBear: () => void
}

export const createBearSlice: StateCreator<BearState, [], [], BearState> = (
  set
) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 }))
})
