import request from '../utils/request'

const API_DOMAIN = import.meta.env.VITE_API
console.log('API_DOMAIN env', import.meta.env)

/** 获取悬浮框数据 */
export const apiPostFloatInfo = (params: {
  activity_id: string
}): Promise<any> =>
  request(`${API_DOMAIN}/api/video/activity/floatData`, {
    method: 'post',
    data: params,
  })

/** 获取活动页面数据 */
export const getActivityInfo = (params: {
  activity_id: string
}): Promise<any> =>
  request(`${API_DOMAIN}/api/video/activity/page`, {
    method: 'post',
    data: params,
  })
