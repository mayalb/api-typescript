import { Router } from "express";
import {getAnnotations, addAnnotation,addUser} from '../controllers/index.controllers' 

const routes= Router();



routes.get('/annotations', getAnnotations)
routes.post('/annotations', addAnnotation)
routes.post('/users', addUser)
routes.get('/test', (req, res)=> res.send('working..'))



module.exports= routes;