import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1)

  function increment() {
    setCount(count + 1);
  }

  function remove() {
    if (count > 0) {

      setCount(count - 1);
    } else {
      alert("please Increase The Value");
    }
  }

  return (
    <>
      <h1>Hello Sai</h1>
      <br />
      <span>
        <button onClick={increment}>Add</button>
        <button onClick={remove} style={{ marginLeft: 15 }}>Remove</button>
      </span >
      <br />
      <h1>{count}</h1>
    </>
  )
}

export default App
