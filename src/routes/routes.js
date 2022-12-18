const express = require('express')
const route = express.Router()
// const { addTopics, findTopic } = require('../controller/feynmanController');

const controller = require('../controller/controllers')

route.post('/create',controller.createOrder )


module.exports = route