var express = require('express')
var router = express.Router()

const User = require('../model/user')
const wallet = require('../service/wallet')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* GET users listing. */
router.post('/', async (req, res, next) => {
  // 회원가입을 진행한다.
  console.log('test')
  console.log(req.body)
  // TODO: create an account API
  //const account = await wallet.createAccount()
  // console.log(req.body)

  // // TODO: save address, userid, password
  const user = new User({
    // 도큐먼트 생성
    email: req.body.email,
    password: req.body.password,
    nickname: req.body.nickname,
    //   //address: account.address,
    //   //publickey: account.publicKey,
  })
  console.log(user)
  // 받은 값을 mongoDB에 저장하게 된다.
  user.save((err, doc) => {
    if (err) console.error(err)
    console.log(doc)
  })
  res.json({
    //address: account.address,
    address: '123123',
  })

  //res.send('respond with a resource')
})
module.exports = router
