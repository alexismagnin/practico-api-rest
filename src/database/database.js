import Sequelize from 'sequelize';
const dbname = "Facturas_TP";
const user = "postgres";
const pass = "0331Maaya";

const database = new Sequelize(
    dbname, user, pass,
    {
        dialect: 'postgres',
        host:'localhost'
    }
);

export default database;