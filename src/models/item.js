import Sequelize from 'sequelize';
import database from '../database/database';
import Producto from './producto';
import Factura from './factura';

const Item = database.define('items',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    facturaID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    iva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {min: 0}
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {min: 1}
    },
    codigo: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    precioUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        validate: {min: 0.0}
    },
    subtotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
        validate: {min: 0.0}
    }
})

Item.belongsTo(
    Producto,
    {
        foreignKey: 'productoId'
    }
);

Factura.hasMany(
    Item,
    {
        foreignKey: 'facturaID'
    }
);

Item.belongsTo(
    Factura,
    {
        foreignKey: 'facturaID'
    }
);

export default Item;