import { useBearContext } from '@/hooks/useBearContext'

export const CommonConsumer = () => {
  const bears = useBearContext((s) => s.bears)
  const addBear = useBearContext((s) => s.addBear)
  return (
    <div>
      <p>Bears: {bears}</p>
      <button onClick={addBear}>Add Bear</button>
    </div>
  )
}
