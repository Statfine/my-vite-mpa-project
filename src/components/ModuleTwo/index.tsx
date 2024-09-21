import { memo, useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import { webview } from '@cmsfe/tools'
import * as Sentry from '@sentry/react'
import { i18n } from '../../locales'
import { ActivityInfoType } from '../../services/types'
import { isIosApp, parseQueryString } from '../../utils'
import { reportH5Activity48hPage } from '../../utils/report'
import styles from './index.module.scss'

interface ModuleTwoParams {
  /** 活动数据 */
  activityInfo: ActivityInfoType
  /** 通知刷新回调 */
  refreshInfo?: () => void
}

const lang = parseQueryString()?.lang
/**
 * 模块2 - 计费点
 */
const ModuleTwo = ({ activityInfo, refreshInfo }: ModuleTwoParams) => {
  const [originalPrice, setOriginalPrice] = useState<string>('')
  const [price, setPrice] = useState<string>('')

  /** 商品信息 */
  const productInfo = useMemo(
    () => activityInfo?.product_list?.find((i) => i.type === 16),
    [activityInfo?.product_list]
  )

  /** 非日韩德注册用户计费点商品放上面 或者  没有订阅商品 */
  const isFirstPosition = useMemo(() => {
    return (
      !['kr', 'jp', 'de'].includes(activityInfo.country) ||
      activityInfo?.product_list?.findIndex((i) => i.type === 10) < 0
    )
  }, [activityInfo])

  /** 是否可以点击 */
  const btnDisabled = useMemo(() => {
    return !productInfo || activityInfo.disable || productInfo.buy_count > 2
  }, [activityInfo, productInfo])

  // 价格转换
  useEffect(() => {
    if (productInfo?.product_id) {
      // @ts-ignore
      webview.exec('getBillingPrice', {
        list: [productInfo?.product_id, productInfo?.original_product_id],
        callback: (res: any) => {
          console.log('getBillingPrice', res)
          setPrice(
            res?.data?.list?.find(
              (i: any) => i.productId === productInfo?.product_id
            )?.price || `$${productInfo.price}`
          )
          setOriginalPrice(
            res?.data?.list?.find(
              (i: any) => i.productId === productInfo?.original_product_id
            )?.price || `$${productInfo.original_price}`
          )
        },
      })
    }
  }, [productInfo])

  /** 购买 */
  const handleBuy = () => {
    if (btnDisabled) return

    reportH5Activity48hPage({
      _action: 'sku_click',
      _app_sku: productInfo?.gid.toString(),
      _channel_sku: productInfo?.product_id,
      price: productInfo?.price,
    })

    const payParams = {
      productId: productInfo?.product_id,
      gid: productInfo?.gid.toString(),
      price: productInfo?.price,

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
        Sentry.captureMessage('计费点支付Res', { contexts: { res } as any })
        refreshInfo?.()
        // @ts-ignore  通知前置页面刷新
        webview.exec('refreshIfNeeded', { scene: 1 })
      },
    })
  }

  const getDiscountNumber = () => {
    if (productInfo?.discount_off === undefined) return ''
    const dis = (100 - Number(productInfo?.discount_off)) / 10
    if (dis % 1 !== 0) {
      return dis.toFixed(1)
    }
    return dis
  }

  const renderDiscount = () => {
    if (['th', 'in', 'ru'].includes(lang))
      return `${i18n('折扣')} ${productInfo?.discount_off}%`
    if ('tr' === lang) return `%${productInfo?.discount_off} ${i18n('折扣')}`
    if (['ja', 'zh-TW'].includes(lang))
      return `${getDiscountNumber()} ${i18n('折扣')}`
    return `${productInfo?.discount_off}% ${i18n('折扣')}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.top_content}>
        <div className={styles.label_text}>
          {i18n(isFirstPosition ? '选项1' : '选项二')}
        </div>
      </div>
      <div className={styles.discount_mark}>
        <div className={styles.discount_text}>{renderDiscount()}</div>
      </div>
      <div className={styles.list_content}>
        <div className={styles.item}>
          <p className={styles.item_title}>
            {productInfo?.coins}
            {i18n('金币')}
          </p>
          <div className={styles.icon} />
        </div>
        {productInfo?.bonus !== 0 && (
          <div className={styles.item}>
            <p className={styles.item_title}>
              {productInfo?.bonus}
              {i18n('奖励金币')}
            </p>
            <div className={styles.icon} />
          </div>
        )}
      </div>
      <div className={styles.price_wrap}>
        <div className={styles.original_price_wrap}>
          <p className={styles.original_price}>{originalPrice}</p>
          <div className={styles.cover} />
        </div>
        <div className={styles.sell_price}>{price}</div>
      </div>
      <div
        className={classNames(
          styles.bug_btn,
          btnDisabled && styles.btn_disabled
        )}
        onClick={handleBuy}
      >
        {i18n('充值', productInfo?.buy_count || 0)}
      </div>
    </div>
  )
}

/**
 * 模块2 - 计费点
 */
export default memo(ModuleTwo)
