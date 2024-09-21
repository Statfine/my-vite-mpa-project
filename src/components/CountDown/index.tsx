import { memo } from 'react'
import useCountDown from '../../hooks/useCountDown'
import { i18n } from '../../locales'
import IconWatch from '../../assets/watch.svg'
import styles from './index.module.scss'

const padWithZero = (number: number) => {
  return number.toString().padStart(2, '0')
}

interface CountDownProps {
  countdownSeconds: number
  /** 通知刷新回调 */
  refreshInfo?: () => void
}

/**
 * 焦点图
 */
const CountDown = ({ countdownSeconds, refreshInfo }: CountDownProps) => {
  const countDown = useCountDown({
    leftTime: countdownSeconds * 1000,
    onEnd: () => handleEnd(),
  })
  const { days, hours, minutes, seconds } = countDown[1]

  // 活动结束延迟刷新页面（避免服务器状态未改变）
  const handleEnd = () => {
    setTimeout(() => {
      refreshInfo?.()
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <img className={styles.icon} src={IconWatch} />
        <p className={styles.text}>{i18n('限时')}</p>
      </div>
      <div className={styles.right_content}>
        <p className={styles.time_text}>{padWithZero(days * 24 + hours)}</p>
        <p className={styles.semicolon}>:</p>
        <p className={styles.time_text}>{padWithZero(minutes)}</p>
        <p className={styles.semicolon}>:</p>
        <p className={styles.time_text}>{padWithZero(seconds)}</p>
      </div>
    </div>
  )
}

export default memo(CountDown)
