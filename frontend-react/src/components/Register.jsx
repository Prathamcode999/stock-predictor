import React,{use, useState} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [username, setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('') // all these fields should match there name from django models fields
    const [errors,setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRegistration = async (e) => {
        e.preventDefault() // prevents from refreshing the page
        console.log('test')
        setLoading(true)
        
        const userData = {
            username, email, password
        };

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log('registration successful')
            setErrors({})
            setSuccess(true)
        }catch(error){
            setErrors(error.response.data)
            console.error("Registration error: ",error.response.data)
        }finally{
            setLoading(false)
        }
        
        
    }
  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light text-center mb-4'>Create an Account </h3>
                    <form onSubmit={handleRegistration}>
                        <div className='mb-3'>
                            <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                            <small className='text-danger'>{errors.username}</small>
                        </div>
                        <div className='mb-3'>
                            <input type="email" className='form-control' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <small className='text-danger'>{errors.email}</small>
                        </div>
                        <div className='mb-5'>
                            <input type="password" className='form-control' placeholder='Set Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <small className='text-danger'>{errors.password}</small>
                        </div>
                        {success && <div className='alert alert-success text-center '> Registration Successful</div>}
                        {loading ? (  
                            <button type='submit' className='btn btn-info d-block mx-auto'><FontAwesomeIcon icon={faSpinner} spin />Please wait...</button>
                        ):(

                            <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register