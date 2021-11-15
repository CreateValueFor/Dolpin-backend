var express = require('express')
var router = express.Router()

const User = require('../model/user')
const wallet = require('../service/wallet')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* GET users listing. */
router.post('/', function (req, res, next) {
  // 회원가입을 진행한다.
  onsole.log('test')
  // TODO: create an account API
  //const account = await wallet.createAccount()
  console.log(account)

  // TODO: save address, userid, password
  const user = new User({
    name: req.body.username,
    password: req.body.password,
    address: account.address,
    publickey: account.publicKey,
  })

  // 받은 값을 mongoDB에 저장하게 된다.
  /*user.save((err, doc) => {
    if (err) console.error(err)
    console.log(doc)
  })
  res.json({
    address: account.address,
  })*/

  res.send('respond with a resource')
})
module.exports = router
