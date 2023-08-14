import React from 'react'
import { Provider } from 'react-redux'
import ReduxComp from './ReduxComp'
import { BasicStore } from './ReduxStore'
function Main() {
  return (
    <>
    <Provider store={BasicStore}>
      <ReduxComp/>
    </Provider>
    </>
  )
}

export default Main