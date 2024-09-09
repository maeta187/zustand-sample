'use client'

import { create } from 'zustand'

type NameState = {
  firstName: string
  lastName: string
}

type NameActions = {
  setFirstName: (firstName: NameState['firstName']) => void
  setLastName: (lastName: NameState['lastName']) => void
  resetName: () => void
}

/**
 * stateとactionsの型を別々に定義することも可能
 * より深いオブジェクトの場合は、各レベルをスプレット構文で展開しながら値を更新する処理が必要
 * 但し、処理が複雑になるのでImmerなどを使用することを検討する
 */
const usePersonStore = create<NameState & NameActions>((set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  resetName: () => set({ firstName: '', lastName: '' })
}))

export const Name = () => {
  //　変数に代入して使用する
  const firstName = usePersonStore((state) => state.firstName)
  const setFirstName = usePersonStore((state) => state.setFirstName)
  const resetName = usePersonStore((state) => state.resetName)
  return (
    <div>
      <div className='flex'>
        <input
          className='text-black'
          type='text'
          value={usePersonStore((state) => state.firstName)}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p className='ml-3'>{firstName}</p>
      </div>
      {/* stateから直接参照するパタ＝ん */}
      <div className='mt-5 flex'>
        <input
          className='text-black'
          type='text'
          value={usePersonStore((state) => state.lastName)}
          onChange={(e) =>
            usePersonStore.setState({ lastName: e.target.value })
          }
        />
        <p className='ml-3'>{usePersonStore.getState().lastName}</p>
      </div>
      <div className='mt-5'>
        <button
          className='rounded-md bg-red-900 p-2.5'
          type='button'
          onClick={() => resetName()}
        >
          Reset Name
        </button>
      </div>
    </div>
  )
}
