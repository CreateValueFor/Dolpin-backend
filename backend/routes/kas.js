const express = require('express')
const User = require('../model/user')
const wallet = require('../service/kas/wallet')

const node = require('../service/kas/node')
var router = express.Router()

router.post('/', async (req, res) => {
  console.log('test')
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
})
