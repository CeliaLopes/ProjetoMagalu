const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Lista de compra!')
})

module.exports = router