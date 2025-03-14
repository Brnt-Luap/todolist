module.exports = (connex, Sequelize) => {
    const Destination = connex.define('destination', {
        id: {
            type: Sequelize.INTEGER,  // IDs should be INTEGER (or UUID if needed)
            autoIncrement: true,  
            primaryKey: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false  // Ensures city is mandatory
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT  // Kept TEXT version, removed duplicate STRING version
        },
        dateStart: {
            type: Sequelize.DATEONLY,  // Changed from STRING to DATEONLY
            allowNull: false
        },
        dateEnd: {
            type: Sequelize.DATEONLY,  // Changed from STRING to DATEONLY
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'pending'  // Optional: Default status
        },
        rate: {
            type: Sequelize.INTEGER,  // Changed from REAL to INTEGER (ratings are usually whole numbers)
            validate: { min: 1, max: 5 }  // Optional: Ensure rating is between 1-5
        },
        place: {
            type: Sequelize.STRING
        },
        user: {
            type: Sequelize.STRING
        }
    }, 
    {
        timestamps: true  // Ensures createdAt and updatedAt are included
    });

    return Destination;
};
