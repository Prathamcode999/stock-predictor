import React,{useContext, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username , setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)

    const userData = {
      username,password
    }
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      // console.log(response.data)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      // we are storing the access and refresh token which we got from response.data in website's local storage
      console.log('logged in succesfully')
      setIsLoggedIn(true)
      navigate('/dashboard')
    }catch(error){
      console.error('Invalid Crediantials')
      setErrors('Invalid Crediantials')
    }finally{
      setLoading(false)
    }
  }

  return (
      <>
          <div className='container'>
              <div className='row justify-content-center'>
                  <div className='col-md-6 bg-light-dark p-5 rounded'>
                      <h3 className='text-light text-center mb-4'>Login to the Portal</h3>
                      <form onSubmit={handleLogin}>
                          <div className='mb-3'>
                              <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                              <small className='text-danger'>{errors.username}</small>
                          </div>
                          <div className='mb-5'>
                              <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                              <small className='text-danger'>{errors.password}</small>
                          </div>

                          {errors && <div className='text-danger'>{errors}</div> }
                          {loading ? (  
                              <button type='submit' className='btn btn-info d-block mx-auto'><FontAwesomeIcon icon={faSpinner} spin />Logging In...</button>
                          ):(
  
                              <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                          )}
                      </form>
                  </div>
              </div>
          </div>
      </>
    )
}

export default Login