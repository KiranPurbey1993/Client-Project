import Encryption from "./encryption"
import Json from "./json"

var encryption = new Encryption()

class LocalStorageAccess {
  getData(key) {
    try {
      let encrypted_key = encryption.encryption(key.toString())
      let localstorage_item = localStorage.getItem(encrypted_key)
      // In case with encrypted key no value is present checking value with same key.
      if (!localstorage_item) {
        localstorage_item = localStorage.getItem(key)
      } else {
        // If value with encrypted key is avaialble then decrypting it.
        try {
          localstorage_item = encryption.decryption(localstorage_item)
        } catch (error) {
          // pass
        }
      }
      try {
        return Json.toJson(localstorage_item)
      } catch (error) {
        return localstorage_item
      }
    } catch (error) {
      console.log({
        message: `Invalid Input Given In LocalStorage Access`,
        code: 403,
      })
    }
  }

  setData(key, data) {
    try {
      let encrypted_key = encryption.encryption(key.toString())
      try {
        let stringyFiedData = null
        try {
          stringyFiedData = Json.toString(data)
        } catch (error) {}
        let encrypted_data = encryption.encryption(
          stringyFiedData ? stringyFiedData : data.toString()
        )
        localStorage.setItem(encrypted_key, encrypted_data)
      } catch (error) {
        console.log({
          message: `Error while setting up Localstorage value for key : ${encrypted_key}, data : ${data}`,
          code: 403,
        })
      }
    } catch (error) {
      console.log({
        message: `Invalid Input Given In LocalStorage Access`,
        code: 403,
      })
    }
  }

  removeData(key) {
    try {
      let encrypted_key = encryption.encryption(key.toString())
      let localstorage_item = localStorage.getItem(encrypted_key)
      // In case with encrypted key no value is present checking value with same key.
      if (!localstorage_item) {
        localStorage.removeItem(key)
      } else {
        // If value with encrypted key is avaialble then decrypting it.
        try {
          localStorage.removeItem(encrypted_key)
        } catch (error) {
          // pass
        }
      }
    } catch (error) {
      console.log({
        message: `Invalid Input Given In LocalStorage Access`,
        code: 403,
      })
    }
  }
}

const LocalStorage = new LocalStorageAccess()

export default LocalStorage
