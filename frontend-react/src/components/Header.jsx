import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className="navbar-brand text-light" to="/">stock prediction portal</Link>
            
            <div>
                <Button text='Login'class="btn-outline-info" url='/login'/>
                &nbsp; {/* for space between the buttons */}
                <Button text='Register' class='btn-info' url='/register'/>
            </div>
        </nav>

    </>
  )
}

export default Header