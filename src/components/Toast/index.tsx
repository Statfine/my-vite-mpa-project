import { useEffect, useRef, useState } from 'react'

const Toast = () => {
  const timerRef = useRef<any>()
  const residentRef = useRef<boolean>(false) // 是否常驻
  const [toastInfo, setToastInfo] = useState<{ show: boolean; text: string }>({
    show: false,
    text: '',
  })

  /**
   * 将方法挂载到window对象
   * 组件卸载时移除该方法
   */
  useEffect(() => {
    window.rs_toast = { show, hidden }
    return () => {
      delete window.rs_toast?.show
    }
  }, [])

  const hidden = () => {
    setToastInfo({ show: false, text: '' })
    residentRef.current = false
  }

  /**
   * 存在常驻则不显示其它
   */
  const show = (text: string, duration = 3000) => {
    setToastInfo({ show: true, text })
    if (residentRef.current) return
    if (duration === 0) residentRef.current = true
    if (duration !== 0) handleShowToast(duration)
  }

  const handleShowToast = (duration: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(
      () => setToastInfo({ show: false, text: '' }),
      duration
    )
  }

  if (!toastInfo.show) return null

  return <div>Toast</div>
}

/**
 * toast方法，挂载到window对象上
 * window.rs_toast.show('')
 */
export default Toast
