export interface H5Activity48hPageType {
  /** loading"/"show"/"sku_click"/"close"/"book_click", # 分别对应：页面开始加载、页面展现、点击商品、页面关闭
、推荐书籍点击 */
  _action: 'loading' | 'show' | 'sku_click' | 'close' | 'book_click'
  /** "activityPopup"(大厅活动弹窗)/"activitySuspendedWindow"（大厅活动浮窗）/"fcm"（fcm推送）/"iadBanner"（福利页banner） */
  appEntry?:
    | 'activityPopup'
    | 'activitySuspendedWindow'
    | 'fcm'
    | 'iadBanner'
    | string
  /** 商品号gid，action=sku_click时上报 */
  _app_sku?: string
  /** product_id，action=sku_click时上报 */
  _channel_sku?: string
  /** 价格(美分)，action=sku_click时上报 */
  price?: string
  lang?: string

  /** 书籍id, action= "book_click" 时上报 */
  _story_id?: string
  /** 1~N, 书籍所处推荐列表顺序, action= "book_click" 时上报 */
  rec_rank?: number
  /** 1(是在线包)/0（是离线包）  */
  is_online?: 1 | 0
}
