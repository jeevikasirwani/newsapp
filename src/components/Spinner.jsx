import React from 'react'
import loading from './1494.gif'


export default function Spinner() {
  return (
    <div className='text-center'>
        {/* Spinner */}
        <img src={loading} alt="loading" />
    </div>
  )
}
