import { useRef } from 'react'
import { createBearStore, BearContext } from '@/context/bear-context'
import type { BearProps, BearStore } from '@/context/bear-context'

type BearProviderProps = React.PropsWithChildren<BearProps>

/**
 * BearContextをより一般的に使用するためのProvider
 */
export const BearProvider = ({ children, ...props }: BearProviderProps) => {
  const storeRef = useRef<BearStore>()
  if (!storeRef.current) {
    storeRef.current = createBearStore(props)
  }
  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  )
}
