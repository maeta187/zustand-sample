'use client'

import { useEffect } from 'react'
import { create } from 'zustand'
import { redux } from 'zustand/middleware'

const types = { increase: 'INCREASE', decrease: 'DECREASE' }

type ActionType = (typeof types)[keyof typeof types]

interface GrumpyState {
  grumpiness: number
  dispatch: (args: { type: ActionType; by?: number }) => void
}

/**
 * Reduxのreducerのような処理
 * Reduxから移行した際に、有効だが新規で導入するにはややハードルが高い
 * Redux以外にもFluxなどのアーキテクチャにも対応可能
 * Reactの状態管理ライブラリの中では、最も柔軟性が高い
 */
const reducer = (
  state: GrumpyState,
  action: { type: ActionType; by: number }
): GrumpyState => {
  switch (action.type) {
    case types.increase:
      return { ...state, grumpiness: state.grumpiness + action.by }
    case types.decrease:
      return { ...state, grumpiness: state.grumpiness - action.by }
    default:
      return state
  }
}

export const useGrumpyStore = create<GrumpyState>((set) => ({
  grumpiness: 0,
  dispatch: (args: { type: ActionType; by?: number }) =>
    set((state) =>
      reducer(
        { ...state, dispatch: state.dispatch },
        { ...args, by: args.by ?? 1 }
      )
    )
}))

export const useGrumpy = () => {
  const dispatch = useGrumpyStore((state) => state.dispatch)

  useEffect(() => {
    dispatch({ type: types.increase, by: 0 })
  }, [dispatch])
}

const initialState: GrumpyState = {
  grumpiness: 0,
  dispatch: () => {}
}

/**
 * Zustandが提供するreduxミドルウェアを使用して、Reduxのreducerを使用する
 */
export const useReduxStore = create(redux(reducer, initialState))
