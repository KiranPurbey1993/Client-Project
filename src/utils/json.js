class FormatJson {
  isJson(obj) {
    return (
      obj &&
      obj.constructor &&
      (obj.constructor === Array || obj.constructor === Object)
    )
  }
  toString(data) {
    try {
      if (this.isJson(data)) {
        return JSON.stringify(data)
      }
    } catch (error) {
      throw "Invalid Json Given"
    }
  }
  toJson(string) {
    try {
      return JSON.parse(string)
    } catch (error) {
      throw "Invalid Json String Given"
    }
  }
}

const Json = new FormatJson()

export default Json
