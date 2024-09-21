import { useEffect, useState } from 'react'
import { webview } from '@cmsfe/tools'
import { aesDeEncrypt } from '../utils/deEncrypt'
import { initToken, TokenInfoType } from '../utils/storageUtils'

/**
 * 通信获取token，用于接口鉴权
 */
const useToken = () => {
  const [tokenInfo, setValue] = useState<TokenInfoType>()

  useEffect(() => {
    // 本地开发测试使用
    // if (import.meta.env.MODE === 'development') {
    const token = {
      apiVersion: '1.2.3',
      channelId: 'AVG10003',
      clientVer: '2.1.00',
      devId: '4fbccb5c9fe43320',
      devModel: 'FOA-AL00',
      lang: 'en',
      session: '4845a9c3b131fc5a62b36057ca0def20',
      sign: 'b7a273720b0b35bce1880b1b7711e6fc',
      time: 1725454371,
      uid: 99947531,
      ver: 'v1',
    }
    setValue(token)
    initToken(token)
    // }

    initTokenInfo()
  }, [])

  const initTokenInfo = () => {
    webview.exec('fetchNativeToken', {
      callback: (res: any) => {
        if (res.code === 1) {
          try {
            const result = aesDeEncrypt(res.data.token)
            const token: any = JSON.parse(result)
            setValue(token)
            initToken(token)
          } catch (error) {
            console.log('error', error)
          }
        }
      },
    })
  }

  return { initTokenInfo, tokenInfo }
}

export default useToken
