import React ,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
        <p>You have Clicked {count} times</p>
        <button onClick={()=>{
            setCount(count+1)
        }}>Click me</button>
    </div>
  )
}

export default Counter
