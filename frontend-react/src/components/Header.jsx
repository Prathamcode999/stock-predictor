import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className="navbar-brand text-light" href="">stock prediction portal</a>
            
            <div>
                <Button text='Login'class="btn-outline-info"/>
                &nbsp; {/* for space between the buttons */}
                <Button text='Register' class='btn-info'/>
            </div>
        </nav>

    </>
  )
}

export default Header