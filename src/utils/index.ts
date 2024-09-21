import CryptoJS from 'crypto-js'

/**
 * 获取链接参数
 * hash二级路由获取方式不同
 */
export function parseQueryString(isHash: boolean = false) {
  const params: any = {}
  let queryString = window.location.search
  if (isHash)
    queryString = window.location.hash.slice(window.location.hash.indexOf('?'))
  if (queryString) {
    const keyValues = queryString.slice(1).split('&')
    keyValues.forEach(function (keyValue) {
      const pair = keyValue.split('=')
      const key = decodeURIComponent(pair[0])
      const value = decodeURIComponent(pair[1] || '')
      if (key.length > 0 && params[key] === undefined) {
        params[key] = value
      }
    })
  }
  return params
}

/**
 * string追加参数
 */
export function appendQueryParam(url: string, key: string, value: string) {
  // 创建一个URL对象
  const urlObj = new URL(url)

  // 使用URL对象的searchParams属性追加参数
  urlObj.searchParams.append(key, value)

  // 返回更新后的URL字符串
  return urlObj.href
}

export const isIosApp = () => {
  if (window?.webkit) return true
  return false
}

const SHA256Key = 'zj8N6zKEdrK8d1MxwHSvExdgQ868q1yT'
/**
 * @description: 生成数据签名 SHA256
 * @步骤:
 *      1. 去除值为空串的参数
 *      2. 将参数们已首字母顺序排序
 *      3. 拼接成param1=a&param2=b
 *      4. hash_hmac('hash256')加密并传为小写字符串
 *      5. REA再加密一层
 * @param {params}
 * @return {sign}
 */
export const createSign = (
  params: { [key: string]: any; did: string },
  baseKey: string = SHA256Key
): string | false => {
  const paramsArr = [
    ...Object.keys(params)
      .map((k) => {
        const value =
          typeof params[k] === 'object' ? JSON.stringify(params[k]) : params[k]
        return {
          key: k,
          value,
        }
      })
      .filter(({ value }) => {
        return !(
          value === '' ||
          value === null ||
          value === undefined ||
          value === 'null'
        )
      }),
  ].sort((a, b) => {
    const x1 = a.key.toUpperCase()
    const x2 = b.key.toUpperCase()
    if (x1 < x2) {
      return -1
    }
    if (x1 > x2) {
      return 1
    }
    return 0
  })

  const paramsString = paramsArr
    .map(({ key, value }) => `${key}=${value}`)
    .join('&')

  const encryptedString = CryptoJS.HmacSHA256(paramsString, baseKey).toString()

  return encryptedString
}

/**
 * 阅读数计算
 */
export const getCountNumber = (count: any): string => {
  if (count > 1000) {
    if (count < 1000000) {
      if (count % 1000 === 0) {
        return `${Math.floor(count / 1000)}k`
      } else {
        return `${(count / 1000).toFixed(1)}k`
      }
    }
    if (count < 1000000000) {
      if (count % 1000000 === 0) {
        return `${Math.floor(count / 1000000)}m`
      } else {
        return `${(count / 1000000).toFixed(1)}m`
      }
    }
    return `999m+`
  }
  return `${count}`
}
