import { useEffect, useState } from 'react'
import { webview } from '@cmsfe/tools'
import * as Sentry from '@sentry/react'
import CountDown from '../../components/CountDown'
import Explain from '../../components/Explain'
import FocusPicture from '../../components/FocusPicture'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import ModuleOne from '../../components/ModuleOne'
import ModuleThree from '../../components/ModuleThree'
import ModuleTwo from '../../components/ModuleTwo'
import Toast from '../../components/Toast'
import useToken from '../../hooks/useToken'
import useUrlParams from '../../hooks/useUrlParams'
import { i18n } from '../../locales'
import { getActivityInfo } from '../../services/api'
import { ActivityBookItemType, ActivityInfoType } from '../../services/types'
import { isIosApp } from '../../utils'
import {
  initReportActivity,
  reportH5Activity48hPage,
  reportMItemPv,
} from '../../utils/report/index'

import imgJson from './imgData'

const hiddenProperty =
  'hidden' in document
    ? 'hidden'
    : 'webkitHidden' in document
    ? 'webkitHidden'
    : 'mozHidden' in document
    ? 'mozHidden'
    : null

if (!location.hash) {
  /** loading埋点 */
  reportH5Activity48hPage({ _action: 'loading' })
}

function App() {
  const { tokenInfo, initTokenInfo } = useToken()
  const urlParams = useUrlParams()

  const [activityInfo, setActivityInfo] = useState<ActivityInfoType>({
    activity_id: '',
    books: [],
    countdown: 1,
    countdown_seconds: 0,
    product_list: [],
    subtitle: '',
    title: '',
    disable: true,
    version: '',
    country: '',
  })

  useEffect(() => {
    reportH5Activity48hPage({ _action: 'show' })
    Sentry.captureMessage('48小时限时促销页面', {
      contexts: { pageVersion: import.meta.env.VITE_VERSION as any },
    })
    document.addEventListener(
      'visibilitychange',
      handleDocumentVisibilitychange
    )
    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleDocumentVisibilitychange
      )
    }
  }, [])

  useEffect(() => {
    if (tokenInfo) {
      console.log('tokenInfo', tokenInfo)
      Sentry.captureMessage('促销页面Token', { contexts: { tokenInfo } as any })
      initData()
    }
  }, [tokenInfo])

  /** 日韩德注册用户vip商品放上面 */
  const changeSequence = () => ['kr', 'jp', 'de'].includes(activityInfo.country)

  const reportBookPv = (books: ActivityBookItemType[]) => {
    const item_list: string[] = []
    const recommend_list: string[] = []
    books.map((i, index) => {
      const item = `${index + 1}&${i.book_id}&-1#99001&-1&-1#-1&-1#-1`
      // const recommend = `${i.book_id}#-1&-1&-1`
      item_list.push(item)
      // recommend_list.push(recommend)
    })
    reportMItemPv({
      item_list,
      recommend_list,
    })
  }

  const initData = async () => {
    try {
      window.rs_loading?.show?.()
      const result = await getActivityInfo({
        activity_id: urlParams.activity_id,
      })
      Sentry.captureMessage('促销页面Res', { contexts: { result } as any })
      console.log('initData', result)
      if (result.code === 0) {
        initReportActivity(result)
        const currentInfo = result.data
        reportBookPv(currentInfo.books)
        setActivityInfo(currentInfo)
        // 通知客户端活动结束
        if (currentInfo.disable) {
          // @ts-ignore
          webview.exec('refreshIfNeeded', { scene: 1 })
          window?.rs_toast?.show?.(i18n('disabledTip'), 0)
        }
        // 通知客户端更新活动版本
        if (
          currentInfo.version &&
          currentInfo.version !== import.meta.env.VITE_VERSION
        ) {
          webview.exec('checkUpdate')
        }
      } else {
        window?.rs_toast?.show?.(result.msg)
      }
    } catch (error) {
      //
    } finally {
      window.rs_loading?.hidden?.()
    }
  }

  /**
   * 监听H5页面状态
   *  当离开H5 跳转到app原生的页面时,这里会被触发
   *  当从原生页面用户一系列操作后,返回H5的时候,这里会被触发
   */
  const handleDocumentVisibilitychange = () => {
    // @ts-ignore
    if (document[hiddenProperty]) {
      console.log('页面隐藏了')
    } else {
      console.log('页面展示了')
      // 从当前页面的后置页面登录，然后返回当前页面需要刷新token
      initTokenInfo()
    }
  }

  const handleRefresh = () => initData()

  const renderCard = (el: React.ReactNode) => (
    <div className="pb-16rs pl-12rs pr-12rs md:pb-16md md:pl-16md md:pr-16md lg:pb-24lg lg:pl-24lg lg:pr-24lg">
      {el}
    </div>
  )

  console.log('activityInfo', activityInfo)
  return (
    <div className="bg-[#ff3b36] w-full overflow-hidden">
      <Header />
      <FocusPicture imgJson={imgJson} />
      {activityInfo?.countdown !== 0 &&
        renderCard(
          <CountDown
            countdownSeconds={activityInfo.countdown_seconds}
            refreshInfo={handleRefresh}
          />
        )}
      {changeSequence() &&
        renderCard(
          <ModuleOne activityInfo={activityInfo} refreshInfo={handleRefresh} />
        )}
      {renderCard(
        <ModuleTwo activityInfo={activityInfo} refreshInfo={handleRefresh} />
      )}
      {!changeSequence() &&
        renderCard(
          <ModuleOne activityInfo={activityInfo} refreshInfo={handleRefresh} />
        )}
      {renderCard(<ModuleThree bookList={activityInfo.books} />)}
      {renderCard(<Explain activityInfo={activityInfo} />)}
      {isIosApp() && (
        <p className="pb-32rs pl-32rs pr-32rs pt-16rs text-14rs lh-20rs text-[#fff] md:pb-32md md:pl-32md md:pr-32md md:pt-16md md:text-14md lg:pb-30lg lg:pl-48lg lg:pr-48lg lg:pt-16lg lg:text-20lg">
          {i18n('apple说明')}
        </p>
      )}
      <Toast />
      <Loading />
    </div>
  )
}

export default App
