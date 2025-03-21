import React,{useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
    
    //const accessToken = localStorage.getItem('access_token') //if you 401 error means access token time is completed and time is reset and you can no longer access data, so we use refresh token

    useEffect (() =>{
        const fetchProtectedData = async () =>{
            try{
                const response = await axiosInstance.get('/protected_view/');
                    
                console.log('Success: ',response.data)
            }catch(error){
                console.error('error fetching the data',error)
            }
        }
        
        fetchProtectedData()
    },[])

  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard