import React, { useContext } from 'react'
import { UserC } from '../App'
const ChildC = () => {
    const user=useContext(UserC);
  return (
    <div>
      data:{user.name} 
    </div>
  )
}

export default ChildC
