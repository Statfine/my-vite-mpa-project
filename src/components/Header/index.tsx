import { memo, useEffect, useMemo, useState } from 'react'
import { webview } from '@cmsfe/tools'
import backPng from '../../assets/header_back.png'
import useUrlParams from '../../hooks/useUrlParams'
import { reportH5Activity48hPage } from '../../utils/report'
import styles from './index.module.scss'

/**
 * header头模块
 *  顶部栏固定高度，不做等比变化
 */
const Header = () => {
  const urlParams = useUrlParams()

  const [bgBlur, setBgBlur] = useState<number>(0)
  const [bgOpacity, setBgOpacity] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /** 滚动监听 */
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const maxOpacity = 0.8 // 最大透明度
    const opacityRange = 44 + Number(urlParams.statusBarHeight) // 透明度变化范围（例如：导航栏 + 状态栏）
    const opacityIncrement = maxOpacity / opacityRange // 透明度增加量

    const maxBlur = 24
    const blurIncrement = maxBlur / opacityRange // 透明度增加量

    // 计算透明度
    const bgOpacity =
      scrollTop > opacityRange ? maxOpacity : scrollTop * opacityIncrement
    const bgBlur =
      scrollTop > opacityRange ? maxBlur : scrollTop * blurIncrement
    setBgOpacity(bgOpacity)
    setBgBlur(bgBlur)
  }

  const handleClickBack = () => {
    reportH5Activity48hPage({ _action: 'close' })
    webview.exec('closePage')
  }

  /** 顶部动态样式 */
  const headerStyle = useMemo<any>(
    () => ({
      backdropFilter: `blur(${bgBlur}px)`,
      WebkitBackdropFilter: `blur(${bgBlur}px)`, // 兼容safari动态模糊
      backgroundColor: `rgba(255, 59, 54, ${bgOpacity})`,
      paddingTop: Number(urlParams.statusBarHeight),
    }),
    [bgBlur, bgOpacity, urlParams.statusBarHeight]
  )

  return (
    <div className={styles.container} style={headerStyle}>
      <div className={styles.header}>
        <div className={styles.back_btn} onClick={handleClickBack}>
          <img src={backPng} alt="back" />
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
