import React from 'react'

export const Footer = () => {
    let style={
        width:"100%",
        top:"10vh",
        position:"relative"
    }
  return (
    <div className='bg-dark text-light py-3' style={style}>
        <p className='text-center'>
            Thank you for visiting our website
        </p>
    </div>
  )
}
