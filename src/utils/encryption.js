import CONFIG from "../config"

var CryptoJS = require("crypto-js")

class Encryption {
  constructor(password, key) {
    this.password = password
      ? password
      : CONFIG.development.ENCRYPTION_PASSWORD
    this.key = key ? key : CONFIG.development.ENCRYPTION_KEY
  }
  decryption(message) {
    var Base64CBC = message
    var iv = CryptoJS.enc.Utf8.parse(this.password)
    var key = this.key //This key used in Python
    key = CryptoJS.enc.Utf8.parse(key)
    var decrypted = CryptoJS.AES.decrypt(Base64CBC, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
    })
    decrypted = decrypted.toString(CryptoJS.enc.Utf8)
    return decrypted
  }

  encryption(message) {
    var key = this.key //This key used in Python
    key = CryptoJS.enc.Utf8.parse(key)
    var iv = CryptoJS.enc.Utf8.parse(this.password)
    var encrypted = CryptoJS.AES.encrypt(message, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
    })
    encrypted = encrypted.toString()
    return encrypted
  }
}

export default Encryption
