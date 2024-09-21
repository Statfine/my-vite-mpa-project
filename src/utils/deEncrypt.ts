import CryptoJS from 'crypto-js'

const AES_KEY = 'jlcVUHH9XgmYlfsK'
const AES_IV = 'fOEZ9V4a3VaniWAa'
export function aesDeEncrypt(textStr = '') {
  const key = CryptoJS.enc.Utf8.parse(AES_KEY)
  const iv = CryptoJS.enc.Utf8.parse(AES_IV)
  const decrypted = CryptoJS.AES.decrypt(textStr, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}
