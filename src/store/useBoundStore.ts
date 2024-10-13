import { create } from 'zustand'
import { createBearFishSlice } from './bear-fish-slice'
import { createBearSlice } from './bear-slice'
import { createFishSlice } from './fish-slice'
import type { BearState } from './bear-slice'
import type { FishState } from './fish-slice'
import type { MultipleFunc } from '@/store/bear-fish-slice'

/**
 * Sliceは状態管理のロジックを分割してモジュール化するための手法
 * 複数のSliceを1つのStoreに結合することもできる
 */
export const useBoundStore = create<BearState & FishState & MultipleFunc>(
  (...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
    ...createBearFishSlice(...a)
  })
)
