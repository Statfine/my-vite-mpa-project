import { memo, useMemo, useState } from 'react'
import classNames from 'classnames'
import { i18n } from '../../locales'
import { ActivityInfoType } from '../../services/types'
import { isIosApp } from '../../utils'
import IconClose from '../../assets/icon_close.svg'
import IconOpen from '../../assets/icon_open.svg'
import styles from './index.module.scss'

interface ExplainParams {
  /** 活动数据 */
  activityInfo: ActivityInfoType
}

/**
 * 规则说明模块
 */
const Explain = ({ activityInfo }: ExplainParams) => {
  const { product_list } = activityInfo

  const [open, setOpen] = useState<boolean>(false)

  const subRule = () => i18n('订阅规则').split('\n')
  const chargeRule = () => i18n('积分点规则').split('\n')

  /**
   * 活动规则：
   *  对于IOS不处于订阅有效期的用户，将订阅文案全部拼接到计费点文案第2点之后。
   *  对于Android不处于订阅有效期的用户，将订阅文案第1点-第2点拼接到计费点文案第2点之后
   * */
  const ruleList = useMemo(() => {
    // 已经订阅了
    const alreadySubscribe = !product_list.some((i) => i.type === 10)
    const subList = subRule()
    const list = chargeRule()
    if (alreadySubscribe) return list
    if (isIosApp()) {
      list.splice(1, 0, ...subList)
      return list
    } else {
      list.splice(1, 0, ...[subList[0], subList[1]])
      return list
    }
  }, [product_list])

  const handleAction = () => setOpen(!open)

  return (
    <div className={styles.container}>
      <div className={styles.label_text}>{i18n('规则')}</div>
      <div
        className={classNames(
          styles.desc_text,
          !open && styles.multiline_ellipsis
        )}
      >
        {ruleList.map((item, index) => `${index + 1}.${item}`).join('\n')}
      </div>
      <div className={styles.action} onClick={handleAction}>
        <img src={open ? IconClose : IconOpen} className={styles.svgIcon} />
      </div>
    </div>
  )
}

export default memo(Explain)
