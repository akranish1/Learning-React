import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';
const UserC=createContext();

function App() {
  const [user]=useState({name:"anish"})

  return (
    <>
    <UserC.Provider value={user}>
    <ChildA/>
    </UserC.Provider>
   
    </>
    
  )
}

export default App;
export {UserC};
