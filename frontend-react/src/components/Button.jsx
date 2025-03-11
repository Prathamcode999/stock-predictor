import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
        <Link className={`btn ${props.class}`} to={props.url} >{props.text} </Link>
        {/* <a className='btn btn-info' href="">{props.text}</a> */}
    </>
  )
}

export default Button