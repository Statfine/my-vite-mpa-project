import { useEffect, useState } from 'react'
import loadingGif from '../../assets/loading.gif'
import styles from '../Toast/index.module.scss'

const Loading = () => {
  const [open, setOpen] = useState<boolean>(false)

  /**
   * 将方法挂载到window对象
   * 组件卸载时移除该方法
   */
  useEffect(() => {
    window.rs_loading = { show, hidden }
    return () => {
      delete window.rs_loading?.show
      delete window.rs_loading?.hidden
    }
  }, [])

  const show = () => setOpen(true)
  const hidden = () => setOpen(false)

  if (!open) return null

  return (
    <div className={styles.toast}>
      <img className={styles.loading} src={loadingGif} />
    </div>
  )
}

/**
 * loading方法，挂载到window对象上
 * window.rs_loading.show()
 * window.rs_loading.hidden()
 */
export default Loading
