const caver = require('caver-js')
const ApiCaller = require('./api.caller')

class Node extends ApiCaller {
  constructor() {
    super('http://node-api.klaytnapi.com')
  }

  async getBalance(address) {
    const options = {
      method: 'POST',
      url: '/v1/klaytn',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: 1,
        jsonrpc: '2.0',
        method: 'klay_getBalance',
        params: [address, 'latest'],
      },
      json: true,
    }

    const ret = await this.call(options)
    let klay = '0'
    if (ret.result) {
      // hex를 10진수의 문자열로 바꾼다.
      const peb = caver.utils.hexToNumberString(ret.result)
      // 컨버트를 해주어 klay 단위로 바꾼다.
      klay = caver.utils.convertFromPeb(peb, 'KLAY')
    }
    return klay
  }
}

const node = new Node()
module.exports = node
