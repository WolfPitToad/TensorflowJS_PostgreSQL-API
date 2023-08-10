import  app  from "./app.js";
import {sequelize} from './database/database.js'
import filmDefinition from "./models/film.js";

async function main(){
    try{
        await sequelize.sync()
        console.log('Servidor conectado')
        app.listen(1234)
        console.log('Servidor escuchando',1234)
        filmDefinition(sequelize).findOne({
            where:{film_id:1}
        }).then(peliculas => {
            console.log('Peliculas:', peliculas.title);
          });
    }catch(error){
        console.log('No es posible conectarse al servidor',error)
    }
}

main()