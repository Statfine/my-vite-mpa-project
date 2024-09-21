import { memo } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

/**
 * 焦点图
 */
function FocusPicture({ imgJson }: any) {
  return (
    <div className={classNames(styles.content)}>
      <picture>
        <source
          media="(min-width: 604px) and (max-width: 1023px)"
          srcSet={imgJson.focusPicture[604].bg}
        />
        <source
          media="(min-width: 1023px)"
          srcSet={imgJson.focusPicture[1024].bg}
        />
        <img
          src={imgJson.focusPicture[375].bg}
          style={{ width: '100%', height: '100%' }}
        />
      </picture>
    </div>
  )
}

export default memo(FocusPicture)
