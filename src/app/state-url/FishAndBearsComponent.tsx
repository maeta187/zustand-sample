'use client'

import { useState } from 'react'
import useLocalAndUrlStore from './HashUrl'

export const FishAndBearsComponent = () => {
  const { typesOfFish, addTypeOfFish, numberOfBears, setNumberOfBears } =
    useLocalAndUrlStore()
  const [newFish, setNewFish] = useState('')
  const [newBears, setNewBears] = useState(0)

  const handleAddFish = () => {
    addTypeOfFish(newFish)
    setNewFish('')
  }

  const handleSetBears = () => {
    setNumberOfBears(newBears)
  }

  return (
    <div>
      <h1>Fish and Bears Store</h1>
      <div>
        <h2>Types of Fish</h2>
        <ul>
          {typesOfFish.map((fish, index) => (
            <li key={index}>{fish}</li>
          ))}
        </ul>
        <input
          type='text'
          value={newFish}
          onChange={(e) => setNewFish(e.target.value)}
          placeholder='Add a type of fish'
          className='text-black'
        />
        <button onClick={handleAddFish}>Add Fish</button>
      </div>
      <div>
        <h2>Number of Bears</h2>
        <p>{numberOfBears}</p>
        <input
          type='number'
          value={newBears}
          onChange={(e) => setNewBears(Number(e.target.value))}
          placeholder='Set number of bears'
          className='text-black'
        />
        <button onClick={handleSetBears}>Set Bears</button>
      </div>
    </div>
  )
}
