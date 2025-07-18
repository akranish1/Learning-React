
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment ,reset,incrementByAmount} from './feature/counter/counterSlice';
import{useState} from 'react'

function App() {
  const [amount, setAmount]=useState(0)
  //to take value out from store we use useSelector
  const count=useSelector((state)=>state.counter.value) // value came from slice name:Counter
  const dispatch=useDispatch();//kind of hook
  function handleIncrementClick(){
    dispatch(increment()) //came from reducer
  }
  function handleDecrementClick(){
    dispatch(decrement())
  }
  function handleResetClick(){
    dispatch(reset())
  }
  function handleIncClick(){
    dispatch(incrementByAmount(amount))//payload
  }


  return (

    <div className='container'>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>
      <br/>
      <br/>
      <input type='Number' value={amount} placeholder="Enter amount"onChange={(e)=>setAmount(e.target.value)}/> 
      <button onClick={handleIncClick}>Inc</button>
    </div>
  );
}

export default App;
