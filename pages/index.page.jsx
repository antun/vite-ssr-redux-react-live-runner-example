import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live-runner';

export { Page }

function Page() {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const increment = () => dispatch({ type: 'counter/incremented' })
  const decrement = () => dispatch({ type: 'counter/decremented' })


  return (
    <>
      <h1>Redux-Controlled Counter</h1>
      Count: {count}. <button onClick={increment}>++</button> <button onClick={decrement}>--</button>
      <hr />

      <LiveProvider code={'<h1>Hello, World!</h1>'}>
        <LiveEditor />
        {/*
        <LivePreview />
        <LiveError />
        */}
      </LiveProvider>
    </>
  )
}
