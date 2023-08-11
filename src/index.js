import  app  from "./app.js";
import {sequelize} from './database/database.js'


async function main(){
    try{
        await sequelize.sync()
        console.log('Servidor conectado')
        app.listen(1234)
        console.log('Servidor escuchando',1234)
    }catch(error){
        console.log('No es posible conectarse al servidor',error)
    }
}

main()