import Sequelize from "sequelize";

export const sequelize= new Sequelize(
    'prueba',
    'postgres',
    'Andres1353',{
    host: 'localhost',
    dialect: 'postgres'
});