import React from 'react'
import "../assets/css/style.css"
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>stock prediction portal leveraging AI and data analytics to forecast market trends, helping investors make informed decisions with real-time insights, historical analysis, and predictive modeling for smarter trading strategies.</p>
        <Button text='login' class='btn-outline-warning'/>
      </div>
    </div>
    </>
  )
}

export default Main