import * as dfd from 'danfojs'
import defineFilm from '../models/film.js'
import {sequelize} from '../database/database.js'
import {Op} from 'sequelize'
const dropAttributes = ['title','description','film_id','language_id','replacement_cost','last_update','special_features', 'fulltext']
const films = await defineFilm(sequelize).findAll({
        where:{rating:{[Op.or]:['PG','PG-13','R']}}
    })
const Jsonfilm=JSON.parse(JSON.stringify(films,',',2)) //Generar formato para Dataset
const df = new dfd.DataFrame(Jsonfilm)
df.drop({columns:dropAttributes,inplace:true})
//df.print()       // console.log(pelicula);

export default df
