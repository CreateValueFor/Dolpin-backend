const ApiCaller = require('./api.caller')

class Wallet extends ApiCaller {
  constructor() {
    super('https://wallet-api.klaytnapi.com')
  }
  async createAccount() {
    // api 에 필요한 최소의 값을 설정한다.
    const options = {
      method: 'POST',
      url: '/v2/account',
      json: true,
    }
    return await this.call(options)
  }
}

const wallet = new Wallet()
module.exports = wallet
