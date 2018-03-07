module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photoString: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anotherPhoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Contact.associate = (models) => {
        // Contact.hasMany(models.TodoItem, {
        //     foreignKey: 'todoId',
        //     as: 'todoItems',
        // });
    };
    return Contact;
};