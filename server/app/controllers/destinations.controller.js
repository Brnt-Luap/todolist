const db = require('../models');
const Destination = db.destinations;

// Récupérer toutes les destinations
exports.findAll = (req, res) => {
    Destination.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Some error occurred' }));
};

exports.create = (req, res) => {
    const { city, country, description, dateStart, dateEnd, status, rate, place, user } = req.body;

    // Check for required fields (modify based on what is mandatory)
    if (!city || !country || !dateStart || !dateEnd) {
        return res.status(400).send({ message: 'City, Country, dateStart, and dateEnd are required.' });
    }

    // Create a new destination
    Destination.create({ city, country, description, dateStart, dateEnd, status, rate, place, user })
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Could not insert the data' }));
};


// Récupérer une destination par ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Destination.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: `Destination with id ${id} not found` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || 'Some error occurred' }));
};

exports.update = (req, res) => {
    const id = req.params.id;
    const { city, country, description, dateStart, dateEnd, status, rate, place, user } = req.body;

    Destination.update(
        { city, country, description, dateStart, dateEnd, status, rate, place, user }, 
        { where: { id: id } }
    )
    .then(num => {
        if (num[0] === 1) {
            res.send({ message: 'Destination updated' });
        } else {
            res.status(404).send({ message: `Destination with id ${id} not found` });
        }
    })
    .catch(err => res.status(500).send({ message: err.message || 'Some error occurred' }));
};

// Supprimer une destination par ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Destination.destroy({ where: { id: id } })
        .then(num => {
            if (num === 1) {
                res.send({ message: 'Destination deleted' });
            } else {
                res.status(404).send({ message: `Destination with id ${id} not found` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message || 'Some error occurred' }));
};