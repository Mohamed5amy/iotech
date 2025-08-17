"use client"

import { useState } from "react"

const Subscribe = () => {

  const [email, setEmail] = useState("")
  const handleEmailChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (email.length > 7) {
      if (e.key === 'Backspace') {
        setWidth(width - 9)
      } else {
        setWidth(width + 9)
      }
    }
    if (email.length == 0) {
      setWidth(250)
    }
  }
  const [width, setWidth] = useState(250)
  
  return (
    <div className='relative'>
        <input type="email" placeholder='Email' className='bg-white text-primary caret-primary placeholder:text-black p-3 rounded-md focus:placeholder:opacity-0 transition-all placeholder:transition-opacity placeholder:opacity-100 !max-w-[350px]' style={{width : width}} value={email} onKeyDown={e => handleEmailChange(e)} onChange={(e) => setEmail(e.target.value)} />
        {/* Button */}
        <button className='py-2 px-6 bg-primary text-xd font-medium absolute right-1 top-1/2 -translate-y-1/2 rounded-lg transition-all hover:px-8'> Subscribe </button>
    </div>
  )
}

export default Subscribe