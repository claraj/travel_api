let express = require('express')
let facts = require('./data.js')

let router = express.Router()

router.get('/randomfact', function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    let factId = Math.floor(Math.random() * facts.length)
    let fact = facts[factId] || { fact: 'International Falls, MN is the coldest place in the continental US'}
    return res.json(fact)
})


module.exports = router