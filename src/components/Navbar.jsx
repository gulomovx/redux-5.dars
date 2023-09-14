import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const amount = useSelector((state)=> state.basket.amount)
    
  return (
      <div className='flex justify-between mt-6 mb-4 '>
          <p className='font-medium'>Home</p>
          <p className='font-medium'>Basket
              <span  className='bg-red-600 rounded-full p-2 mx-2 text-white  '>{amount}</span></p>
          {/* <hr /> */}
          
    </div>
  )
}

export default Navbar