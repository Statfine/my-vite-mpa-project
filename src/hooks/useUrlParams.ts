import { useState } from 'react'
import { parseQueryString } from '../utils'
import {
  ACTIVITY_URL_PARAMS,
  getLocalUrlParams,
  setLocalStorage,
} from '../utils/storageUtils'

export interface UrlParamsType {
  /** 状态栏高度 */
  lang: string
  /** 是否在app内 1 - app内 */
  rsApp: string
  /** 是否隐藏系统导航 1 - 隐藏系统导航 */
  isHiddenNavBar: string
  /** 静态资源Id，活动id */
  resourceId: string
  /** 页面来源 */
  appEntry: string
  /** 状态栏高度 */
  statusBarHeight: string
  activity_id: string
}

/**
 * 解析URL查询字符串
 * 读取本地存储中的活动URL参数。
 * 根据locationUrl和本地数据设置默认参数值
 * 返回处理后的默认URL参数对象。
 */
const setLocalUrlParams = () => {
  const locationUrl = parseQueryString()

  const localData = getLocalUrlParams()

  const defaultParams: UrlParamsType = {
    lang: locationUrl.lang || localData.lang || 'en',
    rsApp: locationUrl.rsApp || localData.rsApp || '1',
    isHiddenNavBar:
      locationUrl.isHiddenNavBar || localData.isHiddenNavBar || '1',
    resourceId: locationUrl.resourceId || localData.resourceId || '',
    appEntry: locationUrl.appEntry || localData.appEntry || '',
    statusBarHeight:
      locationUrl.statusBarHeight || localData.statusBarHeight || '20',
    activity_id: locationUrl.activity_id || '',
  }

  setLocalStorage(ACTIVITY_URL_PARAMS, JSON.stringify(defaultParams))
  console.log('urlParams', defaultParams, window.location.search)
  return defaultParams
}

/**
 * 获取url参数
 */
const useUrlParams = () => {
  const [params] = useState<UrlParamsType>(setLocalUrlParams)

  return { ...params }
}

export default useUrlParams
