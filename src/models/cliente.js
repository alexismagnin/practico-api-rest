import Sequelize from 'sequelize';
import database from '../database/database';

const Cliente = database.define('clientes',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING(120)
    },
    cuit: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
    }
})

export default Cliente;