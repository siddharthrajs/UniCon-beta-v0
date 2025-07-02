import React from 'react'
import { Badge } from './ui/badge'

const Hero = () => {
  return (


      <div className="flex flex-col justify-center items-center mt-[85vh]">
        <h1 className="text-bold text-5xl">UniCon</h1>
        <p className=''>Meet minds before faces. </p>
        <Badge variant={'outline'} className='p-2 rounded-full mt-4 border-2'>
          <span className='text-2xl'></span> Live in Thapar
        </Badge>
        <div className="flex justify-center items-center mt-8 mb-28">
          <img className="rounded-3xl w-5xl h-auto" src="/user-dashboard.png" alt="dashboard-unicon" />
        </div>
      </div>
  )
}

export default Hero
