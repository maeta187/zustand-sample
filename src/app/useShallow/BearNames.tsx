'use client'

import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

const useMeals = create(() => ({
  papaBear: 'large porridge-pot',
  mamaBear: 'middle-size porridge pot',
  littleBear: 'A little, small, wee pot'
}))

useMeals.setState({
  papaBear: 'a large pizza'
})

export const BearNames = () => {
  // setStateが呼ばれると再レンダリングされる
  // const names = useMeals((state) => Object.keys(state))
  const names = useMeals(useShallow((state) => Object.keys(state)))
  console.log('foo')

  return <div>{names.join(', ')}</div>
}
