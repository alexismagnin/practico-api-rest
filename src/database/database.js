import Sequelize from 'sequelize';
const dbname = "Facturas_TP";
const user = "postgres";
const pass = "admin";

const database = new Sequelize(
    dbname, user, pass,
    {
        dialect: 'postgres',
        host:'localhost'
    }
);

export default database;
