import {useState, useContext, createContext} from 'react'
// provider for authentication

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken') // !! makes the line boolean value, if there is accestoken then true else false
      );

  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}

// we have passed all the other components as children over here. if the can get 'access' from local storage then we are logged else not
// now we can export this to other components for validation
