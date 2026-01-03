import React, { Suspense } from 'react'
import RLazyLoading from './RLazyLoading'

// import {add} from './add';
// console.log(add(2,3))

// import('./add').then((result) => {
//     console.log("Result: " + result.add(4,8))
// })

const LazyLoading = React.lazy(() => import('./RLazyLoading'))

const CodeSplitz = () => {
  return (
    <Suspense fallback={<h2>Wait.......</h2>}>
      {/* <h2>Code Splitting in React JS</h2> */}
      <RLazyLoading/>
    </Suspense>
  )
}

export default CodeSplitz
