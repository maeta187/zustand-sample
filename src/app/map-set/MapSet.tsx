'use client'

import { create } from 'zustand'

type FooBar = {
  foo: { [key: string]: string }
  bar: string[]
}

const useFooBar = create<FooBar>(() => ({ foo: {}, bar: [] }))

export const MapSet = () => {
  const foo = useFooBar((state) => state.foo)
  const bar = useFooBar((state) => state.bar)
  const updateFooBar = (fooKey: string, barValue: string) => {
    useFooBar.setState((prev) => {
      const newFoo = { ...prev.foo, [fooKey]: barValue }
      const newBar = prev.bar.includes(barValue)
        ? prev.bar
        : [...prev.bar, barValue]
      console.log('Updating state:', { foo: newFoo, bar: newBar })
      return {
        foo: newFoo,
        bar: newBar
      }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget) return
    const form = new FormData(e.currentTarget)
    const foo = form.get('foo') || ''
    const bar = form.get('bar') || ''
    updateFooBar(foo.toString(), bar.toString())
  }

  console.log('Rendering component with state:', { foo, bar })

  return (
    <div>
      <div>
        <h2>Foo</h2>
        <ul>
          {Object.entries(foo).map(([key, value], i) => (
            <li key={i}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Bar</h2>
        <ul>
          {bar.map((key, i) => (
            <li key={i}>{key}</li>
          ))}
        </ul>
      </div>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='foo'
            id='foo'
            className='text-black'
            defaultValue=''
          />
        </div>
        <div>
          <input
            type='text'
            name='bar'
            id='bar'
            className='mt-3 text-black'
            defaultValue=''
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
