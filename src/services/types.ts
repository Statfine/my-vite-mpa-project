export interface ActivityInfoType {
  /** 活动id */
  activity_id: string
  /** 是否显示倒计时 1=显示 0=不显示 */
  countdown: number
  /** 活动倒计时/秒 */
  countdown_seconds: number
  books: ActivityBookItemType[]
  product_list: ActivityProductItemType[]
  subtitle: string
  title: string
  /** 活动未生效，包括未开始和已结束 */
  disable: boolean
  /** 线上活动版本 */
  version: string
  /** 注册地 */
  country: string
}

export interface ActivityBookItemType {
  book_pic: string
  book_title: string
  /** 作品类型 1=普通作品 2=互动剧 */
  book_type: number
  book_id: string
  /** 显示类型 1=阅读历史推荐 2=算法推荐 */
  show_type: number
  /** 阅读量 */
  read_count: number
  /** 用户播放进度 */
  read_progress: number
  /** 起播数据 */
  start_play: any
}
export interface ActivityProductItemType {
  /** 商品类型 10=VIP 16=金币 */
  type: number
  original_price: string
  original_product_id: string
  price: string
  /** 活动商品已经购买次数，金币商品独有 */
  buy_count: number
  /** 折扣 */
  discount_off: number | string
  bonus: number
  bonus_expire_day: number
  channel_id: string
  original_coins: number
  coins: number
  days: number
  extra: any
  gid: number
  gname: string
  limit_times: number
  product_id: string
  rate_tag: number
  web_product_id: string
}
