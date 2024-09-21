import { useEffect, useRef, useState } from 'react'
import { webview } from '@cmsfe/tools'
import * as Sentry from '@sentry/react'
import useToken from '../../hooks/useToken'
import { apiPostFloatInfo } from '../../services/api'
import { appendQueryParam, parseQueryString } from '../../utils'
import {
  initReportActivity,
  reportActivitySuspendedWindowClick,
} from '../../utils/report/index'

/**
 * 接口下发悬浮图，宽度充满，高度自适应
 */
function App() {
  const { tokenInfo } = useToken()

  const [img, setImg] = useState<string>()
  const activityInfoRef = useRef()

  /**
   * initData 获取接口数据
   * Sentry埋点
   * webview.init监听悬浮框的关闭&点击
   */
  useEffect(() => {
    Sentry.captureMessage('48小时限时促销悬框')
    webview.init({
      floatingBoxAction: handleFloatingBoxAction,
    })
  }, [])

  /** 悬浮框点击&关闭事件监听回调 */
  const handleFloatingBoxAction = (res: any) => {
    const activityInfo: any = activityInfoRef.current
    const action = res?.data?.action
    if (action === 'close') {
      handleReport('close')
      webview.exec('floatingBoxAction', { action: 'close' })
    }
    if (action === 'click') {
      handleReport('click')
      webview.exec('openInBrowser', {
        url:
          import.meta.env.MODE === 'development'
            ? 'http://172.20.0.246:3000/?isHiddenNavBar=1&appEntry=activity_popup&activity_id=6'
            : appendQueryParam(
                activityInfo.activity_url,
                'appEntry',
                'activitySuspendedWindow'
              ),
        resourceId: activityInfo.resource_id,
        isInApp: activityInfo.is_in_app,
        title: activityInfo.title,
        version: activityInfo.version,
      } as any)
    }
  }

  useEffect(() => {
    if (tokenInfo) {
      console.log('tokenInfo', tokenInfo)
      Sentry.captureMessage('促销悬框Token', { contexts: { tokenInfo } as any })
      initData()
    }
  }, [tokenInfo])

  /**
   * 获取接口数据
   * handleReport上报show
   */
  const initData = async () => {
    try {
      const result = await apiPostFloatInfo({
        activity_id: parseQueryString().activity_id,
      })
      Sentry.captureMessage('促销悬框Res', { contexts: { result } as any })
      if (result.code === 0) {
        activityInfoRef.current = result.data
        initReportActivity(result)
        console.log('float data', result)
        setImg(result.data.image_url)
      } else {
        window?.rs_toast?.show?.(result.msg)
      }
    } catch (error) {
      // error
    }
  }

  const handleOnLoad = () => {
    // // 监听图片加载完成
    handleReport('show')
    webview.exec('floatingBoxAction', { action: 'show' })
  }

  const handleReport = (_action: 'show' | 'click' | 'close') => {
    reportActivitySuspendedWindowClick({
      _action,
    })
  }

  if (!img) return null
  return (
    <img
      style={{ width: '100%', height: 'auto' }}
      src={img}
      // src={images.float_bg}
      onLoad={handleOnLoad}
    />
  )
}

export default App
