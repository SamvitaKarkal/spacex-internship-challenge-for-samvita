import React from 'react'
import load from './loading-buffering.gif'

const Loader = () =>
{
  return (
  <React.Fragment>
    <div className='flex justify-center items-center text-center h-screen'>
      <img src={load} alt='loading'/>
    </div>
  </React.Fragment>
  )
}

export default Loader