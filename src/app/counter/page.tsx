import { NextPage } from 'next'
import { Counter } from './counter'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
    </div>
  )
}

export default Page