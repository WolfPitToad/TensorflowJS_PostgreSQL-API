
import { Router } from "express";
import {getFilm} from '../controllers/film.controllers.js'

const router= Router()
router.get('/films',getFilm)

export default router