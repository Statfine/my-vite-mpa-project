import { webview } from '@cmsfe/tools'
import { parseQueryString } from '..'
import type { H5Activity48hPageType } from './types'

let activityInfo = {}

const toAppReport = (params: any) => {
  const paramsObj = {
    eventName: params._event_name,
    childEventName: params._sub_event_name,
    properties: params.properties,
  }
  console.log('reportEvent', paramsObj)
  webview.exec('reportEvent', paramsObj)
}

/**
 * 初始化活动信息，用于组装方法中的参数
 */
export const initReportActivity = (defaultInfo: any) => {
  activityInfo = defaultInfo
}

/**
 * 5 - 活动悬浮窗展现、点击、关闭
 */
export const reportActivitySuspendedWindowClick = (defaultProperties?: {
  _action: 'show' | 'click' | 'close'
}) => {
  const params = {
    _event_name: 'm_custom_event',
    _sub_event_name: 'activity_suspended_window_click',
    properties: {
      _action: 'show',
      _scene_name: 'main_scene', // 浮窗只会在大厅展示
      _page_name: 'discover',
      activity_info: JSON.stringify(activityInfo), // ?
      _story_id: '',
      _chap_id: '',
      _chap_order_id: null,
      ...defaultProperties,
    },
  }
  toAppReport(params)
}

/**
 * 6 - 48h活动-H5活动页面上报
 */
export const reportH5Activity48hPage = (
  defaultProperties?: H5Activity48hPageType
) => {
  const urlParams = parseQueryString()
  const params = {
    _event_name: 'm_custom_event',
    _sub_event_name: 'h5_activity_48h_page',
    properties: {
      _action: '',
      appEntry: urlParams?.appEntry,
      _app_sku: '',
      _channel_sku: '',
      price: '',
      _story_id: '',
      rec_rank: '',
      _url: location.href,
      lang: urlParams?.lang,
      ...defaultProperties,
    },
  }
  toAppReport(params)
}

/**
 * 7 - 支付事件
 */

/**
 * 8 - 48h活动主页推荐书架展现
 */
export const reportMItemPv = (defaultProperties?: {
  item_list: string[]
  recommend_list: string[]
}) => {
  const params = {
    _event_name: 'm_item_pv',
    properties: {
      _scene_name: 'main_scene',
      _page_name: 'h5_activity_page',
      _item_type: 'cover',
      item_list: [],
      recommend_list: [],
      ...defaultProperties,
    },
  }
  toAppReport(params)
}
