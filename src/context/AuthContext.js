import { createContext, useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import LocalStorage from "../utils/localStorageDataAccess"
import { AUTH_TOKEN } from "../constants/localStorageConstants"
import CONFIG from "../config"
import { useRouter } from 'next/router'


const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    LocalStorage.getData(AUTH_TOKEN)
      ? LocalStorage.getData(AUTH_TOKEN)
      : null
  )
  const [user, setUser] = useState(() =>
    LocalStorage.getData(AUTH_TOKEN)
      ? jwt_decode(LocalStorage.getData(AUTH_TOKEN)?.access)
      : null
  )
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const loginUser = async (username, password) => {
    const response = await fetch(`${CONFIG.development.API_BASE_URL}/auth/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:username,
        password:password,
      }),
    })
    const data = await response.json()

    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      LocalStorage.setData(AUTH_TOKEN,  data)
      router.push("/dashboard")
    } else {
      alert("Something went wrong!")
    }
  }

  const registerUser = async (username, password, password2) => {
    const response = await fetch(`${CONFIG.development.API_BASE_URL}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password2,
      }),
    })
    if (response.status === 201) {
      history.push("/login")
    } else {
      alert("Something went wrong!")
    }
  }

  const logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    LocalStorage.removeData(AUTH_TOKEN)
    history.push("/")
  }

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  }

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access))
    }
    setLoading(false)
  }, [authTokens, loading])

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
