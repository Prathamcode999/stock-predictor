import React,{useContext} from 'react'
import Button from './Button'
import { Link,useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggenIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout= ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('logged out')
    navigate('/login')    
  }
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className="navbar-brand text-light" to="/">stock prediction portal</Link>
            
            <div>
              {isLoggenIn ? (
                  <button className='btn btn-danger' onClick={handleLogout}>logout</button>
              ):(
                <>
                <Button text='Login'class="btn-outline-info" url='/login'/>
                &nbsp; {/* for space between the buttons */}
                <Button text='Register' class='btn-info' url='/register'/>
                </>
              )}
            </div>
        </nav>

    </>
  )
}

export default Header