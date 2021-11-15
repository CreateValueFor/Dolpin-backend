const request = require('request')

class ApiCaller {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  async call(options) {
    // 기본적인 endpoint와 세부적으로 달라지는 url
    options.url = this.endpoint + options.url
    options.json = true

    if (!options.headers) options.headers = {}

    options.headers['x-chain-id'] = '1001'
    options.headers['content-type'] = 'application/json'
    options.headers.Authorization =
      'Basic S0FTS1lXSk9XMUdDT0xIRFZTWjM4RVBaOnVqRnlKckgtVXloQjIyeHphM3d6Umt4QzlGZVRXUnJtMDJPQ2RnT0Q='

    return new Promise((resolve, reject) => {
      request(options, function (error, _response, body) {
        if (error) reject(error)
        else resolve(body)
      })
    })
  }
}

module.exports = ApiCaller
