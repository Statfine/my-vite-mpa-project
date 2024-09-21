/**
 * request 网络请求工具
 */

import axios from 'axios'
import dayjs from 'dayjs'
import { createSign } from './'
import { getTokenInfo } from './storageUtils'

const errorHandler = (error: any) => {
  const { response } = error
  console.log(response, 'response', error)
  if (
    (error?.data !== undefined && error?.response !== null) ||
    error.toString().indexOf('timeout')
  ) {
    window.rs_toast?.show?.(
      'Network connection error. Please check your network settings and try again.'
    )
  }
  throw error
}

const axiosInstance = axios.create({
  baseURL: '', // 你的基础 URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    const tokenInfo = getTokenInfo()
    const commonHeader = {
      uid: tokenInfo.uid,
      channelId: tokenInfo.channelId,
      ts: dayjs().unix(),
      apiVersion: tokenInfo.apiVersion,
      lang: tokenInfo.lang,
      devId: tokenInfo.devId,
      clientVer: tokenInfo.clientVer,
      session: tokenInfo.session,
    }

    console.log('config', config)
    const headers = {
      ...commonHeader,
      ...config.headers,
      sign: createSign({
        ...config.data,
        ...commonHeader,
        ...{},
      }),
    }

    return {
      ...config,
      headers,
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    errorHandler(error)
    return Promise.reject(error)
  }
)

export default axiosInstance
