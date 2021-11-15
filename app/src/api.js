import Axios from './utils/CommonAxios'

export default {
  signup(email, password, nickname) {
    return Axios({
      url: '/users',
      method: 'post',
      data: {
        email: email,
        password: password,
        nickname: nickname,
      },
    })
  },

  getLastDeviceList() {
    return Axios({
      url: '/json/LastDeviceData.json',
      method: 'GET',
    })
  },
}
