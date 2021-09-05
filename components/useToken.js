import { useState } from 'react'

const useToken = () => {
    function isBrowser(){
        return typeof window !== 'undefined'
    }

    const getToken = () => {
        if(isBrowser()){
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
        }
    }

    const [token, setToken] = useState(getToken())

    const saveToken = userToken => {
        if(!token) {
            localStorage.setItem('token', JSON.stringify(userToken))
            setToken(userToken)
        }
        else {
            localStorage.removeItem('token')
            setToken('')
        }
      }

    return {
        setToken: saveToken,
        token
    }

}

export default useToken