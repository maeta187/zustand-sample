import { NextPage } from 'next'
import { UseResetMultipleStoresComponent } from './UseResetMultipleStoresComponent'
import { UseSliceComponent } from './UseSliceComponent'

const Page: NextPage = () => {
  return (
    <div>
      <h1>Reset State</h1>
      <UseSliceComponent />
      <UseResetMultipleStoresComponent />
    </div>
  )
}

export default Page
