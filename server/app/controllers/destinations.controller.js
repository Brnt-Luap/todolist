const db = require('../models')
const Destination  = db.destinations

exports.findAll = (req, res) => {
    Destination.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error occured'
        })
    })
}
exports.create = (req, res) => {
    // console.log(req.body)
    if(!req.body.name){
        res.status(400).send({
            message: 'The name is mandatory'
        })
        return;
    }
    Destination.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not insert the data'
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Destination.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    Destination.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Destination Update'
            })
        }else{
            res.send({
                message: 'Destination not found'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Destination.destroy({
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Destination Delete'
            })
        }else{
            res.send({
                message: 'Destination not found'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not find the data'
        })
    })
}