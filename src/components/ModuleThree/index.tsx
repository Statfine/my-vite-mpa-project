import { memo } from 'react'
import { webview } from '@cmsfe/tools'
import { i18n } from '../../locales'
import { ActivityBookItemType } from '../../services/types'
import { getCountNumber } from '../../utils'
import { reportH5Activity48hPage } from '../../utils/report'
import IconPlayCount from '../../assets/play_count.svg'
import styles from './index.module.scss'

/**
 * 模块3
 */
interface ModuleThreeParams {
  bookList: ActivityBookItemType[]
}

const ModuleThree = ({ bookList }: ModuleThreeParams) => {
  const handlePlay = (i: ActivityBookItemType, index: number) => {
    reportH5Activity48hPage({
      _action: 'book_click',
      rec_rank: index + 1,
      _story_id: i.book_id,
    })
    webview.exec('navigateToPlayer', {
      chapterId: '',
      bookId: i.book_id,
      bookType: i.book_type,
      // @ts-ignore
      start_play: i.start_play,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.top_content}>
        <div className={styles.top_cover} />
        <div className={styles.title}>{i18n('推荐视频')}</div>
      </div>
      <div className={styles.list_content}>
        {bookList?.slice(0, 6).map((i: ActivityBookItemType, index: number) => (
          <div
            className={styles.item}
            onClick={() => handlePlay(i, index)}
            key={i.book_id}
          >
            <div className={styles.wrap}>
              <img className={styles.cover} src={i.book_pic} />
              {i.show_type === 1 && (
                <div
                  className={styles.progress}
                  style={{ width: `${i.read_progress}%` }}
                />
              )}
              {i.show_type === 2 && (
                <div className={styles.play_count}>
                  <img src={IconPlayCount} className={styles.icon_count} />
                  {getCountNumber(i.read_count || 0)}
                </div>
              )}
              <div className={styles.bottom_shade}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(ModuleThree)
