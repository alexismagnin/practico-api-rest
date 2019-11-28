import Sequelize from 'sequelize';
import database from '../database/database';
import Cliente from './cliente';

const Factura = database.define('facturas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING(1),
        allowNull: false,
        unique: 'numeroFactura'
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'numeroFactura'
    },
    puntoVenta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'numeroFactura'
    },
    clienteID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    }
})

Factura.belongsTo(
    Cliente,
    {
        foreignKey: 'clienteID'
    }
);

Cliente.hasMany(
    Factura,
    {
        foreignKey: 'clienteID'
    }
);

export default Factura;