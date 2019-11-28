import Sequelize from 'sequelize';
import database from '../database/database';

const Producto = database.define('productos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    precioUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        validate: {min: 0.0}
    }
})

export default Producto;