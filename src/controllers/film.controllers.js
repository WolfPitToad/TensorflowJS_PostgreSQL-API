import defineFilm from '../models/film.js'
import {sequelize} from '../database/database.js'

export const getFilm = async(req,res)=>{
    try{
        defineFilm(sequelize).findOne({
            where:{film_id:345}
        }).then(film => {
            res.send(film).json()
          });
    }catch(error){
        res.status(404).json({message:'film no encontrado'})

    }

}