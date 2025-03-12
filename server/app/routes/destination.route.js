module.exports = app => {
    const destination = require('../controllers/destinations.controller.js')
    const router = require('express').Router()
    router.get('/', destination.findAll)
    router.post('/', destination.create)
    router.get('/:id', destination.findOne)
    router.delete('/:id', destination.delete)
    router.put('/:id', destination.update)
    app.use('/api/destination', router)
}