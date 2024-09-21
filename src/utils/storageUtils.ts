export const TOKEN_INFO = 'tokenInfo'

export const ACTIVITY_URL_PARAMS = 'activityUrlParams'

export interface TokenInfoType {
  apiVersion: string
  channelId: string
  clientVer: string
  devId: string
  devModel: string
  lang: string
  session: string
  sign: string
  time: number
  uid: number
  ver: string
}

/*********************  window rs_cache对象操作  *********************/
/** 设置临时缓存 */
const setWindowStorage = (key: string, value: any) => {
  if (typeof window === 'undefined') return
  const rs_cache = window.rs_activity_cache || {}
  window.rs_activity_cache = { ...rs_cache, [key]: value }
}

/** 获取临时缓存 */
const getWindowStorage = (key: string) => {
  if (typeof window === 'undefined') return null
  const rs_cache = window.rs_activity_cache
  return rs_cache?.[key] || null
}

/** 清除临时缓存 */
const removeWindowStorage = (key: string) => {
  if (typeof window === 'undefined') return null
  const rs_cache = window.rs_activity_cache
  if (rs_cache) delete window.rs_activity_cache[key]
}
/*********************  window rs_cache对象操作  *********************/

/*********************  localStorage操作  *********************/
/** 设置localStorage缓存 */
export const setLocalStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return null
  setWindowStorage(key, value)
  return localStorage.setItem(key, value)
}

/** 获取localStorage缓存 */
export const getLocalStorage = (key: string): string | null => {
  if (typeof window === 'undefined') return null
  try {
    let value = localStorage.getItem(key)
    // 存在则返回
    if (value) return value
    // 不存在取window, 同时重新设置并判断是否上报
    value = getWindowStorage(key)
    if (value) {
      setLocalStorage(key, value)
    }
    return value
  } catch (error) {
    return null
  }
}

/** 清除localStorage缓存 */
export const removeLocalStorage = (key: string) => {
  removeWindowStorage(key)
  localStorage.removeItem(key)
}
/*********************  localStorage操作  *********************/

export const initToken = (i: TokenInfoType) => {
  setLocalStorage(TOKEN_INFO, JSON.stringify(i))
}
export const getTokenInfo = () => {
  return JSON.parse(getLocalStorage(TOKEN_INFO) || '{}')
}

export const getLocalUrlParams = () => {
  const localData = JSON.parse(getLocalStorage(ACTIVITY_URL_PARAMS) || '{}')
  return localData
}
