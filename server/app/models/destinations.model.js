module.exports = (connex, Sequelize) => {
    const Destination = connex.define('destination', {
        id: {
            type: Sequelize.REAL,
            primaryKey: true
        },
        city: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        dateStart: {
            type: Sequelize.STRING
        },
        dateEnd: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        rate: {
            type: Sequelize.REAL
        },
        place: {
            type: Sequelize.STRING
        },
    })
    return Destination
}