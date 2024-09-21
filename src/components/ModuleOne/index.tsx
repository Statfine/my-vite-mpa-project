import { memo, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { webview } from '@cmsfe/tools'
import * as Sentry from '@sentry/react'
import { i18n } from '../../locales'
import { ActivityInfoType } from '../../services/types'
import { isIosApp, parseQueryString } from '../../utils'
import { reportH5Activity48hPage } from '../../utils/report'
import IconCrown from '../../assets/moduleOne_desc_crown.svg'
import IconDiamond from '../../assets/moduleOne_desc_diamond.svg'
import IconFavorite from '../../assets/moduleOne_desc_favorite.svg'
import styles from './index.module.scss'

interface ModuleOneParams {
  /** 活动数据 */
  activityInfo: ActivityInfoType
  /** 通知刷新回调 */
  refreshInfo?: () => void
}

const lang = parseQueryString()?.lang
/**
 * 模块1 - Vip
 */
const ModuleOne = ({ activityInfo, refreshInfo }: ModuleOneParams) => {
  const [price, setPrice] = useState<string>('')
  /** 商品信息 */
  const vipInfo = useMemo(
    () => activityInfo?.product_list?.find((i) => i.type === 10),
    [activityInfo?.product_list]
  )

  /** 日韩德注册用户vip商品放上面 */
  const isFirstPosition = useMemo(() => {
    return ['kr', 'jp', 'de'].includes(activityInfo.country)
  }, [activityInfo])

  // 价格转换
  useEffect(() => {
    if (vipInfo?.product_id) {
      // @ts-ignore
      webview.exec('getBillingPrice', {
        list: [vipInfo?.product_id],
        callback: (res: any) => {
          setPrice(res?.data?.list?.[0].price || `$${vipInfo.price}`)
        },
      })
    }
  }, [vipInfo])

  /** 是否可以点击 */
  const btnDisabled = useMemo(() => {
    return !vipInfo || activityInfo.disable || vipInfo.buy_count > 0
  }, [activityInfo, vipInfo])
  /** 购买 */
  const handleBuy = () => {
    if (btnDisabled) return

    reportH5Activity48hPage({
      _action: 'sku_click',
      _app_sku: vipInfo?.gid.toString(),
      _channel_sku: vipInfo?.product_id,
      price: vipInfo?.price,
    })

    const payParams = {
      productId: vipInfo?.product_id,
      gid: vipInfo?.gid.toString(),
      price: vipInfo?.price,
      isSubscribe: true,

      orderSrc: 'activity_48h',
      source: JSON.stringify({ activity_id: activityInfo.activity_id }),
    }
    const params = {
      payType: isIosApp() ? '1' : '2',
      payParams,
    }

    webview.exec('purchase', {
      ...params,
      callback: (res: any) => {
        Sentry.captureMessage('订阅支付Res', { contexts: { res } as any })
        refreshInfo?.()
        // @ts-ignore 通知前置页面刷新
        webview.exec('refreshIfNeeded', { scene: 1 })
      },
    })
  }

  if (activityInfo.activity_id && !vipInfo) return null

  const renderDiscount = () => {
    const unit = i18n('折扣')
    const discountCount = 30
    if (['th', 'in', 'ru'].includes(lang))
      return (
        <div className={styles.price_content}>
          <p className={styles.unit}>{unit}</p>
          <p className={styles.price}>{discountCount}%</p>
        </div>
      )
    if ('tr' === lang)
      return (
        <div className={styles.price_content}>
          <p className={styles.price}>%{discountCount}</p>
          <p className={styles.unit}>{unit}</p>
        </div>
      )
    if (['ja', 'zh-TW'].includes(lang))
      return (
        <div className={styles.price_content}>
          <p className={styles.price}>7</p>
          <p className={styles.unit}>{unit}</p>
        </div>
      )
    return (
      <div className={styles.price_content}>
        <p className={styles.price}>{discountCount}%</p>
        <p className={styles.unit}>{unit}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.label_text}>
        {i18n(isFirstPosition ? '选项1' : '选项二')}
      </div>
      <div className={styles.desc_content}>
        <div className={styles.left_icon}>
          <img src={IconFavorite} className={styles.svgIcon} />
          <img src={IconCrown} className={styles.svgIcon} />
          <img src={IconDiamond} className={styles.svgIcon} />
        </div>
        <div className={styles.right_text}>{price}</div>
      </div>
      <div className={styles.title_content}>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: `${i18n('七天vip')},&nbsp;` }}
        />
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: i18n('三日赠送') }}
        />
      </div>
      <div className={styles.cover} />
      <div className={styles.desc_text}>{i18n('选项1描述')}</div>
      {renderDiscount()}
      <div
        className={classNames(
          styles.bug_btn,
          btnDisabled && styles.btn_disabled
        )}
        onClick={handleBuy}
      >
        {i18n('订阅')}
      </div>
    </div>
  )
}

/**
 * 模块1 - Vip
 */
export default memo(ModuleOne)
