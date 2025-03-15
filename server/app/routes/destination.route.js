module.exports = app => {
    const destination = require('../controllers/destinations.controller.js');
    const router = require('express').Router();
    
    // Define routes
    router.get('/', destination.findAll);     // Get all destinations
    router.post('/', destination.create);     // Create a new destination
    router.get('/:id', destination.findOne);  // Get a destination by ID
    router.put('/:id', destination.update);   // Update a destination by ID
    router.delete('/:id', destination.delete);// Delete a destination by ID

    // Use the router with the '/api/destination' prefix
    app.use('/api/destination', router);
};
