import React from 'react'
import plane from '../images/plane.png'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-40px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          
          <img src={plane} alt="plane"/>
          <p className='text-4xl font-bold '>TRAVEL{' '}
          TO{' '}
        <span style={{color: 'yellow'}}>FUTURE</span></p>
      </div>
    </div>
  )
}

export default Hero