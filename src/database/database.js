import Sequelize from "sequelize";

export const sequelize= new Sequelize(
    'pagila2',
    'postgres',
    'Andres1353',{
    host: 'localhost',
    dialect: 'postgres'
});