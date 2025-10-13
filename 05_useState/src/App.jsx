import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(20)
 
  return (
   <div className='w-50 mx-auto my-40 text-center flex flex-col items-center'>
    <h1 className='text-center font-bold bg-gray-400 p-10 m-10 w-50'> Value of a is {a}</h1>
    <button onClick={() => {
      setA(a+1)
    }} className='bg bg-red-400 p-3 '>Increase</button>
    <button onClick={() => {
      setA(a-1)
    }} className='bg-blue-400 p-3 '>Decrease</button>
   </div>
  )
}

export default App
