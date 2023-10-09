import axios from "axios"
import jwt_decode from "jwt-decode"
import dayjs from "dayjs"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import LocalStorage from "./localStorageDataAccess"
import { AUTH_TOKEN } from "../constants/localStorageConstants"
import CONFIG from "../config"

const baseURL = CONFIG.development.API_BASE_URL

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext)

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  })

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(authTokens.access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

    if (!isExpired) return req

    const response = await axios.post(`${baseURL}/auth/token/refresh/`, {
      refresh: authTokens.refresh,
    })

    LocalStorage.setData(AUTH_TOKEN, JSON.stringify(response.data))

    setAuthTokens(response.data)
    setUser(jwt_decode(response.data.access))

    req.headers.Authorization = `Bearer ${response.data.access}`
    return req
  })

  return axiosInstance
}

export default useAxios
